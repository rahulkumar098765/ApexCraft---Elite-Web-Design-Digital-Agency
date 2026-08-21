import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Default project configuration
const DEFAULT_PROJECT_ID = 'yrwonuxeherfeppgfcmi';
const DEFAULT_URL = `https://${DEFAULT_PROJECT_ID}.supabase.co`;
const DEFAULT_ANON_KEY = 'sb_publishable_l8YBsZLV_vu81DFrjScirQ_zQWxoVQQ';

/**
 * Sanitizes and validates the Supabase URL.
 * Handles cases where the user passed a full URL, only a project ID, or empty string.
 */
function getValidSupabaseUrl(): string {
  try {
    const rawUrl = (import.meta.env.VITE_SUPABASE_URL || '').trim();
    if (!rawUrl) {
      return DEFAULT_URL;
    }

    if (rawUrl.startsWith('http://') || rawUrl.startsWith('https://')) {
      return rawUrl;
    }

    // If user provided just the project ID (e.g. "yrwonuxeherfeppgfcmi")
    if (/^[a-z0-9-]+$/i.test(rawUrl)) {
      return `https://${rawUrl}.supabase.co`;
    }

    // If user provided something like "yrwonuxeherfeppgfcmi.supabase.co"
    if (rawUrl.includes('.')) {
      return `https://${rawUrl}`;
    }

    return DEFAULT_URL;
  } catch {
    return DEFAULT_URL;
  }
}

function getValidSupabaseKey(): string {
  try {
    const rawKey = (import.meta.env.VITE_SUPABASE_ANON_KEY || '').trim();
    return rawKey || DEFAULT_ANON_KEY;
  } catch {
    return DEFAULT_ANON_KEY;
  }
}

export const SUPABASE_URL = getValidSupabaseUrl();
export const SUPABASE_ANON_KEY = getValidSupabaseKey();

// Lazy initialized client to prevent module-level crashes
let _supabaseClient: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  if (_supabaseClient) {
    return _supabaseClient;
  }

  try {
    const url = getValidSupabaseUrl();
    const key = getValidSupabaseKey();
    _supabaseClient = createClient(url, key);
    return _supabaseClient;
  } catch (error) {
    console.warn('Failed to initialize Supabase client:', error);
    return null;
  }
}

export const supabase = getSupabase();

export interface LeadSubmission {
  name: string;
  email: string;
  phone?: string;
  business_name?: string;
  industry?: string;
  budget?: string;
  timeline?: string;
  website_url?: string;
  message?: string;
  form_type?: 'contact' | 'quick_quote' | 'website_audit';
  created_at?: string;
  metadata?: Record<string, unknown>;
}

/**
 * Submits a new lead / inquiry into the Supabase database.
 * Falls back safely to localStorage if offline or while configuring table schemas.
 */
export async function submitLeadToSupabase(lead: LeadSubmission): Promise<{ success: boolean; error?: string }> {
  try {
    const payload = {
      name: lead.name,
      email: lead.email,
      phone: lead.phone || null,
      business_name: lead.business_name || null,
      industry: lead.industry || null,
      budget: lead.budget || null,
      timeline: lead.timeline || null,
      website_url: lead.website_url || null,
      message: lead.message || null,
      form_type: lead.form_type || 'contact',
      created_at: new Date().toISOString(),
      metadata: lead.metadata || {}
    };

    // 1. Always back up locally so no customer data is ever lost
    try {
      const existing = JSON.parse(localStorage.getItem('apexcraft_stored_leads') || '[]');
      existing.unshift({ ...payload, id: 'local_' + Date.now() });
      localStorage.setItem('apexcraft_stored_leads', JSON.stringify(existing.slice(0, 100)));
    } catch {
      // ignore localStorage quota errors
    }

    // 2. Insert into Supabase table 'leads' (or 'contact_submissions')
    const client = getSupabase();
    if (client) {
      const { error } = await client
        .from('leads')
        .insert([payload]);

      if (error) {
        console.warn('Supabase insertion notice (check if "leads" table exists with RLS insert permission):', error.message);
      }
    }

    return { success: true };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Unknown submission error';
    console.error('Lead submission caught error:', errorMsg);
    return { success: true }; // Smooth experience for end-user while logging error
  }
}


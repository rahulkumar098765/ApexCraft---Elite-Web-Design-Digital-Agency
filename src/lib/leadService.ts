export const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzkftxHx3okF_X2LhN_BAfnUj8jro7dO91yXeYC3xBOKAwJ2LeAKa8LlS7CqTuW9kI/exec';

export interface LeadPayload {
  name?: string;
  email?: string;
  phone?: string;
  businessName?: string;
  industry?: string;
  budget?: string;
  timeline?: string;
  currentWebsite?: string;
  website_url?: string;
  message?: string;
  form_type?: 'contact' | 'quick_quote' | 'website_audit';
  metadata?: Record<string, any>;
  timestamp?: string;
  [key: string]: any;
}

/**
 * Submits lead data via fetch POST to Google Apps Script Web App.
 */
export async function submitLeadToAppsScript(data: LeadPayload): Promise<{ success: boolean; data?: any; error?: string }> {
  try {
    const payload = {
      ...data,
      timestamp: data.timestamp || new Date().toISOString(),
    };

    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8', // Avoids CORS preflight issues with Google Apps Script
      },
      body: JSON.stringify(payload),
    });

    // Also persist backup locally for offline resilience
    try {
      const existingLeads = JSON.parse(localStorage.getItem('apexcraft_leads') || '[]');
      existingLeads.unshift(payload);
      localStorage.setItem('apexcraft_leads', JSON.stringify(existingLeads.slice(0, 100)));
    } catch {
      // Non-critical local storage fallback
    }

    return { success: true, data: response };
  } catch (error) {
    console.error('Error submitting lead to Google Apps Script:', error);
    
    // Save to local backup in case of network issue
    try {
      const payload = { ...data, timestamp: new Date().toISOString(), offlineBackup: true };
      const existingLeads = JSON.parse(localStorage.getItem('apexcraft_leads') || '[]');
      existingLeads.unshift(payload);
      localStorage.setItem('apexcraft_leads', JSON.stringify(existingLeads.slice(0, 100)));
    } catch {
      // ignore
    }

    return { success: false, error: error instanceof Error ? error.message : 'Network error' };
  }
}

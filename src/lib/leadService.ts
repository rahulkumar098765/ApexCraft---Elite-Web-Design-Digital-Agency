export const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbwOEgkfdX4QMJINRhOsMaqKdrlvFiadSn8VZ91fa9N1e6PI84OZnYQNOiuuIW6_2PY/exec';

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
  const payload = {
    ...data,
    timestamp: data.timestamp || new Date().toISOString(),
    date: new Date().toLocaleString(),
  };

  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    try {
      const existingLeads = JSON.parse(localStorage.getItem('apexcraft_leads') || '[]');
      existingLeads.unshift(payload);
      localStorage.setItem('apexcraft_leads', JSON.stringify(existingLeads.slice(0, 100)));
    } catch {
      // Non-critical local storage fallback
    }

    return { success: true, data: response };
  } catch (error) {
    console.warn('Standard fetch to Google Apps Script failed, attempting fallback:', error);

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      return { success: true };
    } catch (fallbackError) {
      console.error('Error submitting lead to Google Apps Script:', fallbackError);
      return { success: false, error: error instanceof Error ? error.message : 'Network error' };
    }
  }
}

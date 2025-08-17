// API abstraction layer - easily swap out backend implementations

export interface HelpRequest {
  name: string;
  email: string;
  phone: string;
  help_type: string;
  description: string;
  preferred_date: string;
  preferred_time: string;
  meeting_type: string;
}

export interface VolunteerApplication {
  name: string;
  email: string;
  age: string;
  skills: string[];
  experience: string;
  availability: string[];
  meeting_types: string[];
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

// Abstract API interface
export interface TechConnectAPI {
  submitHelpRequest(request: HelpRequest): Promise<ApiResponse>;
  submitVolunteerApplication(application: VolunteerApplication): Promise<ApiResponse>;
}

// Configuration for API endpoint
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

// REST API implementation for your Python backend
export class RestAPI implements TechConnectAPI {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  async submitHelpRequest(request: HelpRequest): Promise<ApiResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/help-requests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      console.error('Error submitting help request:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      };
    }
  }

  async submitVolunteerApplication(application: VolunteerApplication): Promise<ApiResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/volunteer-applications`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(application),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      console.error('Error submitting volunteer application:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      };
    }
  }
}

// Supabase implementation (current backend)
export class SupabaseAPI implements TechConnectAPI {
  private supabase: any;

  constructor(supabaseClient: any) {
    this.supabase = supabaseClient;
  }

  async submitHelpRequest(request: HelpRequest): Promise<ApiResponse> {
    try {
      const { error } = await this.supabase
        .from('help_requests')
        .insert([request]);

      if (error) {
        throw error;
      }

      return { success: true };
    } catch (error) {
      console.error('Error submitting help request:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      };
    }
  }

  async submitVolunteerApplication(application: VolunteerApplication): Promise<ApiResponse> {
    try {
      const { error } = await this.supabase
        .from('volunteer_applications')
        .insert([application]);

      if (error) {
        throw error;
      }

      return { success: true };
    } catch (error) {
      console.error('Error submitting volunteer application:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      };
    }
  }
}

// API factory - choose your backend implementation
export function createAPI(): TechConnectAPI {
  const apiType = import.meta.env.VITE_API_TYPE || 'rest';
  
  switch (apiType) {
    case 'supabase':
      // Lazy import to avoid bundling Supabase when not needed
      return import('@/integrations/supabase/client').then(({ supabase }) => 
        new SupabaseAPI(supabase)
      ) as any;
    case 'rest':
    default:
      return new RestAPI();
  }
}

// Singleton API instance
export const api = createAPI();
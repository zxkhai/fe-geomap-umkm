import { API_BASE_URL, createHeaders, handleResponse } from './client';

export interface LoginData {
  username: string;
  password: string;
}

export interface UserProfile {
  id: number;
  name: string;
  email: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ChangePasswordData {
  oldPassword: string;
  newPassword: string;
}

export interface ForgotPasswordData {
  email: string;
}

export interface ResetPasswordData {
  password: string;
  confirmPassword: string;
}

export interface AuthResponse {
  message: string;
  token: string;
  user: UserProfile;
}

export interface MessageResponse {
  message: string;
}

export const authApi = {

  // User login
  login: async (data: LoginData): Promise<AuthResponse> => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: createHeaders(false),
      body: JSON.stringify(data),
    });
    const result = await handleResponse<{ message: string; data: { user: UserProfile; token: string } }>(response);
    
    return {
      message: result.message,
      token: result.data.token,
      user: result.data.user,
    };
  },

  // Get user profile
  getProfile: async (): Promise<UserProfile> => {
    const response = await fetch(`${API_BASE_URL}/auth/`, {
      method: 'GET',
      headers: createHeaders(true),
    });
    return handleResponse(response);
  },

  // Update user profile
  updateProfile: async (data: Partial<UserProfile>): Promise<{ message: string; user: UserProfile }> => {
    const response = await fetch(`${API_BASE_URL}/auth/`, {
      method: 'PUT',
      headers: createHeaders(true),
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  // Change password
  changePassword: async (data: ChangePasswordData): Promise<MessageResponse> => {
    const response = await fetch(`${API_BASE_URL}/auth/change-password`, {
      method: 'POST',
      headers: createHeaders(true),
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  // Forgot password
  forgotPassword: async (data: ForgotPasswordData): Promise<MessageResponse> => {
    const response = await fetch(`${API_BASE_URL}/auth/forgot-password`, {
      method: 'POST',
      headers: createHeaders(false),
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  // Reset password
  resetPassword: async (
    id: string,
    token: string,
    data: ResetPasswordData
  ): Promise<MessageResponse> => {
    const response = await fetch(`${API_BASE_URL}/auth/reset-password/${id}/${token}`, {
      method: 'POST',
      headers: createHeaders(false),
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },
};
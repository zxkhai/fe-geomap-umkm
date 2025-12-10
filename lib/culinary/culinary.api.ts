import { apiClient } from "../api";
import { CreateCulinaryData, CulinaryListResponse, CulinaryResponse, UpdateCulinaryData } from "./culinary.type";

export const culinaryApi = {
  // Get all Culinary
  getAll: async (): Promise<CulinaryListResponse> => {
    const response = await apiClient.get<CulinaryListResponse>('/umkm/');
    return response.data;
  },

  // Get Culinary by ID
  getById: async (id: number | string): Promise<CulinaryResponse> => {
    const response = await apiClient.get<CulinaryResponse>(`/umkm/${id}`);
    return response.data;
  },

  // Create new Culinary
  create: async (data: CreateCulinaryData): Promise<CulinaryResponse> => {
    const hasFiles = data.place_pict instanceof File || data.product_pict instanceof File;
    
    if (hasFiles) {
      const formData = new FormData();
      
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          if (value instanceof File) {
            formData.append(key, value);
          } else {
            formData.append(key, String(value));
          }
        }
      });
      
      const response = await apiClient.post<CulinaryResponse>('/umkm/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } else {
      const response = await apiClient.post<CulinaryResponse>('/umkm/', data);
      return response.data;
    }
  },

  // Update Culinary
  update: async (id: number | string, data: UpdateCulinaryData): Promise<CulinaryResponse> => {
    const hasFiles = data.place_pict instanceof File || data.product_pict instanceof File;
    
    if (hasFiles) {
      const formData = new FormData();
      
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          if (value instanceof File) {
            formData.append(key, value);
          } else {
            formData.append(key, String(value));
          }
        }
      });
      
      const response = await apiClient.put<CulinaryResponse>(`/umkm/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } else {
      const response = await apiClient.put<CulinaryResponse>(`/umkm/${id}`, data);
      return response.data;
    }
  },

  // Delete Culinary
  delete: async (id: number | string): Promise<CulinaryResponse> => {
    const response = await apiClient.delete<CulinaryResponse>(`/umkm/${id}`);
    return response.data;
  },
};
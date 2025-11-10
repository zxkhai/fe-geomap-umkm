import { API_BASE_URL, createHeaders, createFormDataHeaders, handleResponse } from './client';

export interface UMKM {
  id: number;
  name: string;
  owner: string;
  phone: string;
  address: string;
  regency: string;
  story?: string;
  year?: number;
  classification?: string;
  longitude: number;
  latitude: number;
  type?: string;
  order?: string;
  payment?: string;
  place_pict?: string;
  product_pict?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateUMKMData {
  name: string;
  owner: string;
  phone: string;
  address: string;
  regency: string;
  story?: string;
  year?: number;
  classification?: string;
  longitude: number;
  latitude: number;
  type?: string;
  order?: string;
  payment?: string;
  place_pict?: File | string;
  product_pict?: File | string;
}

export interface UpdateUMKMData extends Partial<CreateUMKMData> {}

export interface UMKMListResponse {
  message: string;
  data: UMKM[];
}

export interface UMKMResponse {
  message: string;
  data: UMKM;
}

export interface MessageResponse {
  message: string;
}

export const umkmApi = {
  // Get all UMKM
  getAll: async (): Promise<UMKMListResponse> => {
    const response = await fetch(`${API_BASE_URL}/umkm/`, {
      method: 'GET',
      headers: createHeaders(false),
    });
    return handleResponse(response);
  },

  // Get UMKM by ID
  getById: async (id: number | string): Promise<UMKMResponse> => {
    const response = await fetch(`${API_BASE_URL}/umkm/${id}`, {
      method: 'GET',
      headers: createHeaders(false),
    });
    return handleResponse(response);
  },

  // Create new UMKM
  create: async (data: CreateUMKMData): Promise<UMKMResponse> => {
    const hasFiles = data.place_pict instanceof File || data.product_pict instanceof File;
    
    let body: FormData | string;
    let headers: HeadersInit;

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
      
      body = formData;
      headers = createFormDataHeaders(true);
    } else {
      headers = createHeaders(true);
      body = JSON.stringify(data);
    }

    const response = await fetch(`${API_BASE_URL}/umkm/`, {
      method: 'POST',
      headers,
      body,
    });
    return handleResponse(response);
  },

  // Update UMKM
  update: async (id: number | string, data: UpdateUMKMData): Promise<UMKMResponse> => {
    const hasFiles = data.place_pict instanceof File || data.product_pict instanceof File;
    
    let body: FormData | string;
    let headers: HeadersInit;

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
      
      body = formData;
      headers = createFormDataHeaders(true);
    } else {
      headers = createHeaders(true);
      body = JSON.stringify(data);
    }

    const response = await fetch(`${API_BASE_URL}/umkm/${id}`, {
      method: 'PUT',
      headers,
      body,
    });
    return handleResponse(response);
  },

  // Delete UMKM
  delete: async (id: number | string): Promise<MessageResponse> => {
    const response = await fetch(`${API_BASE_URL}/umkm/${id}`, {
      method: 'DELETE',
      headers: createHeaders(true),
    });
    return handleResponse(response);
  },
};
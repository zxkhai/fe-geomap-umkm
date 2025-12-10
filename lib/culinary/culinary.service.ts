import { culinaryApi } from "./culinary.api";
import { CreateCulinaryData, Culinary, UpdateCulinaryData } from "./culinary.type";

export const culinaryService = {
  
  // Get all Culinary
  async getAll() {
    try {
      const response = await culinaryApi.getAll();
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to fetch Culinary list' 
      };
    }
  },

  // Get Culinary by ID
  async getById(id: number | string) {
    try {
      const response = await culinaryApi.getById(id);
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to fetch Culinary details' 
      };
    }
  },

  // Get Culinary by slug (fetches all Culinary and finds matching slug)
  async getBySlug(slug: string) {
    try {
      const allCulinaryResponse = await culinaryApi.getAll();
      const culinary = allCulinaryResponse.data.find(c => c.slug === slug);
      
      if (culinary) {
        return { success: true, data: culinary };
      } else {
        return { 
          success: false, 
          error: 'Kuliner tidak ditemukan' 
        };
      }
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to fetch Culinary details' 
      };
    }
  },

  // Create new Culinary
  async create(data: CreateCulinaryData) {
    try {
      const response = await culinaryApi.create(data);
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to create Culinary' 
      };
    }
  },

  // Update Culinary
  async update(id: number | string, data: UpdateCulinaryData) {
    try {
      const response = await culinaryApi.update(id, data);
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to update Culinary' 
      };
    }
  },

  // Delete Culinary
  async delete(id: number | string) {
    try {
      const response = await culinaryApi.delete(id);
      return { success: true, message: response.message };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to delete Culinary' 
      };
    }
  },

  // Filter Culinary by regency
  filterByRegency(culinaryList: Culinary[], regency: string): Culinary[] {
    if (regency === 'Semua' || !regency) {
      return culinaryList;
    }
    return culinaryList.filter(culinary => culinary.regency === regency);
  },

  // Filter Culinary by classification
  filterByClassification(culinaryList: Culinary[], classification: string): Culinary[] {
    if (!classification) {
      return culinaryList;
    }
    return culinaryList.filter(culinary => culinary.classification === classification);
  },

  // Search Culinary by name or owner
  search(culinaryList: Culinary[], query: string): Culinary[] {
    if (!query) {
      return culinaryList;
    }
    const lowercaseQuery = query.toLowerCase();
    return culinaryList.filter(culinary => 
      culinary.name.toLowerCase().includes(lowercaseQuery) ||
      culinary.owner.toLowerCase().includes(lowercaseQuery)
    );
  },

  // Validate Culinary data before submission
  validateCulinaryData(data: Partial<CreateCulinaryData>): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!data.name) errors.push('Nama UMKM harus diisi');
    if (!data.owner) errors.push('Nama pemilik harus diisi');
    if (!data.phone) errors.push('Nomor telepon harus diisi');
    if (!data.address) errors.push('Alamat harus diisi');
    if (!data.regency) errors.push('Kabupaten harus dipilih');
    if (data.longitude === undefined) errors.push('Longitude harus diisi');
    if (data.latitude === undefined) errors.push('Latitude harus diisi');

    // Validate phone number format (Indonesian)
    if (data.phone && !/^(\+62|62|0)[0-9]{9,12}$/.test(data.phone.replace(/\s/g, ''))) {
      errors.push('Format nomor telepon tidak valid');
    }

    // Validate coordinates
    if (data.longitude && (data.longitude < -180 || data.longitude > 180)) {
      errors.push('Longitude harus antara -180 dan 180');
    }
    if (data.latitude && (data.latitude < -90 || data.latitude > 90)) {
      errors.push('Latitude harus antara -90 dan 90');
    }

    return {
      valid: errors.length === 0,
      errors,
    };
  },
};

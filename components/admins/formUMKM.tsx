import Link from "next/link";
import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaPlus, FaTrash } from "react-icons/fa";

interface SocialMedia {
  id: number;
  platform: string;
  username: string;
  url: string;
}

export default function FormUMKM() {
  const [activeSection, setActiveSection] = useState<string[]>(["informasi-utama"]);
  const [socialMedias, setSocialMedias] = useState<SocialMedia[]>([
    { id: 1, platform: "", username: "", url: "" },
  ]);

  const toggleSection = (section: string) => {
    setActiveSection((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const addSocialMedia = () => {
    setSocialMedias([
      ...socialMedias,
      { id: Date.now(), platform: "", username: "", url: "" },
    ]);
  };

  const removeSocialMedia = (id: number) => {
    setSocialMedias(socialMedias.filter((sm) => sm.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Informasi Utama */}
      <div className="border border-gray-200 rounded-t-lg overflow-hidden">
        <button
          type="button"
          onClick={() => toggleSection("informasi-utama")}
          className="w-full flex items-center justify-between bg-black hover:bg-gray-800 px-6 py-3 transition-colors hover:cursor-pointer"
        >
          <h3 className="font-semibold text-white">Informasi Utama</h3>
          {activeSection.includes("informasi-utama") ? (
            <FaChevronUp className="text-white" />
          ) : (
            <FaChevronDown className="text-white" />
          )}
        </button>
        {activeSection.includes("informasi-utama") && (
          <div className="p-6 space-y-4 bg-white">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nama UMKM <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Contoh: Warung Makan Pak Slamet"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nama Pemilik <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="owner"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Contoh: Slamet Riyadi"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nomor Telepon <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Contoh: 081234567890"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Alamat Lengkap <span className="text-red-500">*</span>
              </label>
              <textarea
                name="address"
                required
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Contoh: Jl. Raya Pamekasan No. 123, Desa Larangan Tokol"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kabupaten <span className="text-red-500">*</span>
              </label>
              <select
                name="regency"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="">Pilih Kabupaten</option>
                <option value="Pamekasan">Pamekasan</option>
                <option value="Sumenep">Sumenep</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Deskripsi & Klasifikasi */}
      <div className="border border-gray-200 overflow-hidden">
        <button
          type="button"
          onClick={() => toggleSection("deskripsi-klasifikasi")}
          className="w-full flex items-center justify-between bg-black hover:bg-gray-800 px-6 py-3 transition-colors hover:cursor-pointer"
        >
          <h3 className="font-semibold text-white">Deskripsi & Klasifikasi</h3>
          {activeSection.includes("deskripsi-klasifikasi") ? (
            <FaChevronUp className="text-white" />
          ) : (
            <FaChevronDown className="text-white" />
          )}
        </button>
        {activeSection.includes("deskripsi-klasifikasi") && (
          <div className="p-6 space-y-4 bg-white">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cerita / Deskripsi <span className="text-red-500">*</span>
              </label>
              <textarea
                name="story"
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Ceritakan tentang UMKM Anda, sejarah, keunikan produk, dll."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tahun Berdiri <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="year"
                required
                min="1900"
                max={new Date().getFullYear()}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Contoh: 2015"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Klasifikasi Produk <span className="text-red-500">*</span>
              </label>
              <select
                name="classification"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="">Pilih Klasifikasi</option>
                <option value="Makanan">Makanan</option>
                <option value="Minuman">Minuman</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Lokasi Geospasial */}
      <div className="border border-gray-200 overflow-hidden">
        <button
          type="button"
          onClick={() => toggleSection("lokasi-geospasial")}
          className="w-full flex items-center justify-between bg-black hover:bg-gray-800 px-6 py-3 transition-colors hover:cursor-pointer"
        >
          <h3 className="font-semibold text-white">Lokasi Geospasial</h3>
          {activeSection.includes("lokasi-geospasial") ? (
            <FaChevronUp className="text-white" />
          ) : (
            <FaChevronDown className="text-white" />
          )}
        </button>
        {activeSection.includes("lokasi-geospasial") && (
          <div className="p-6 space-y-4 bg-white">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Longitude <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="longitude"
                  required
                  step="any"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="113.4857"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Latitude <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="latitude"
                  required
                  step="any"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="-7.1575"
                />
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Tip: Anda dapat menggunakan Google Maps untuk mendapatkan koordinat yang akurat
            </p>
          </div>
        )}
      </div>

      {/* Media / Dokumentasi */}
      <div className="border border-gray-200 overflow-hidden">
        <button
          type="button"
          onClick={() => toggleSection("media-dokumentasi")}
          className="w-full flex items-center justify-between bg-black hover:bg-gray-800 px-6 py-3 transition-colors hover:cursor-pointer"
        >
          <h3 className="font-semibold text-white">Media / Dokumentasi</h3>
          {activeSection.includes("media-dokumentasi") ? (
            <FaChevronUp className="text-white" />
          ) : (
            <FaChevronDown className="text-white" />
          )}
        </button>
        {activeSection.includes("media-dokumentasi") && (
          <div className="p-6 space-y-4 bg-white">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Foto Tempat <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="place_pict"
                required
                accept="image/*"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
              />
              <p className="text-sm text-gray-500 mt-1">
                Upload foto tempat usaha (max 2MB)
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Foto Produk <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="product_pict"
                required
                accept="image/*"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
              />
              <p className="text-sm text-gray-500 mt-1">
                Upload foto produk unggulan (max 2MB)
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Informasi Operasional */}
      <div className="border border-gray-200 overflow-hidden">
        <button
          type="button"
          onClick={() => toggleSection("informasi-operasional")}
          className="w-full flex items-center justify-between bg-black hover:bg-gray-800 px-6 py-3 transition-colors hover:cursor-pointer"
        >
          <h3 className="font-semibold text-white">Informasi Operasional</h3>
          {activeSection.includes("informasi-operasional") ? (
            <FaChevronUp className="text-white" />
          ) : (
            <FaChevronDown className="text-white" />
          )}
        </button>
        {activeSection.includes("informasi-operasional") && (
          <div className="p-6 space-y-4 bg-white">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipe Usaha <span className="text-red-500">*</span>
              </label>
              <select
                name="type"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="">Pilih Tipe Usaha</option>
                <option value="Offline">Offline</option>
                <option value="Online">Online</option>
                <option value="Keduanya">Keduanya</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cara Pemesanan <span className="text-red-500">*</span>
              </label>
              <select
                name="order"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="">Pilih Cara Pemesanan</option>
                <option value="COD">COD (Cash on Delivery)</option>
                <option value="Online Store">Online Store</option>
                <option value="Pre-Order">Pre-Order</option>
                <option value="Walk-in">Walk-in (Datang Langsung)</option>
                <option value="WhatsApp">WhatsApp</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Metode Pembayaran <span className="text-red-500">*</span>
              </label>
              <select
                name="payment"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="">Pilih Metode Pembayaran</option>
                <option value="Tunai">Tunai</option>
                <option value="Transfer">Transfer Bank</option>
                <option value="QRIS">QRIS</option>
                <option value="E-Wallet">E-Wallet</option>
                <option value="Semua">Semua Metode</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Media Sosial */}
      <div className="border border-gray-200 rounded-b-lg overflow-hidden">
        <button
          type="button"
          onClick={() => toggleSection("media-sosial")}
          className="w-full flex items-center justify-between bg-black hover:bg-gray-800 px-6 py-3 transition-colors hover:cursor-pointer"
        >
          <h3 className="font-semibold text-white">Media Sosial</h3>
          {activeSection.includes("media-sosial") ? (
            <FaChevronUp className="text-white" />
          ) : (
            <FaChevronDown className="text-white" />
          )}
        </button>
        {activeSection.includes("media-sosial") && (
          <div className="p-6 space-y-4 bg-white">
            {socialMedias.map((social, index) => (
              <div
                key={social.id}
                className="p-4 border border-gray-200 rounded-lg bg-gray-50"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-700">
                    Media Sosial #{index + 1}
                  </h4>
                  {socialMedias.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeSocialMedia(social.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <FaTrash className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Platform
                    </label>
                    <select
                      name={`social_platform_${social.id}`}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Pilih Platform</option>
                      <option value="Instagram">Instagram</option>
                      <option value="Facebook">Facebook</option>
                      <option value="YouTube">YouTube</option>
                      <option value="TikTok">TikTok</option>
                      <option value="Twitter">Twitter</option>
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Website">Website</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Username / Nama Akun
                    </label>
                    <input
                      type="text"
                      name={`social_username_${social.id}`}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Contoh: @warungpakslamet"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      URL / Link
                    </label>
                    <input
                      type="url"
                      name={`social_url_${social.id}`}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="https://instagram.com/warungpakslamet"
                    />
                  </div>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={addSocialMedia}
              className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium transition-colors"
            >
              <FaPlus className="w-4 h-4" />
              Tambah Media Sosial
            </button>
          </div>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex items-center justify-end gap-4 mt-8">
        <Link
          href="/admin/umkm"
          className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium transition-colors"
        >
          Kembali
        </Link>
        <button
          type="submit"
          className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 font-medium transition-colors"
        >
          Simpan Data UMKM
        </button>
      </div>
    </form>
  );
}
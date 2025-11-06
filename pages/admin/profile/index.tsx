import React from "react";

interface ProfileField {
  label: string;
  value: string;
}

const ProfilePage: React.FC = () => {
  const fields: ProfileField[] = [
    { label: "Nama Admin", value: "Admin Geomaps UMKM Pamekasan dan Sumenep" },
    { label: "Username", value: "Admin" },
    { label: "Email", value: "geomp@gmail.com" },
    { label: "Akun dibuat", value: "12/02/2025" },
    { label: "Terakhir Login", value: "25/09/2025, 11:30" },
  ];

  return (
    <div className="px-6 md:px-10 py-8 max-w-4xl">
      <h1 className="text-2xl font-semibold mb-12 text-black">Profil</h1>

      <div className="space-y-6 text-black">
        {fields.map((f, i) => (
          <div
            key={i}
            className="grid grid-cols-[160px_16px_minmax(220px,1fr)] items-baseline gap-2"
          >
            <div>{f.label}</div>
            <div className="text-gray-500">:</div>
            <div className="font-medium">{f.value}</div>
          </div>
        ))}
      </div>

      <button className="mt-10 inline-flex items-center rounded-full bg-[var(--yellow-umkm)] px-5 py-2.5 text-white font-medium hover:brightness-95 transition">
        Ubah Password
      </button>
    </div>
  );
};

export default ProfilePage;

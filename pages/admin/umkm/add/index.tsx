import FormUMKM from "@/components/admins/formUMKM";

export default function AddUmkmPage() {
  return (
    <div className="max-w-full mx-auto text-black">
      <div className="flex gap-4 items-center mb-5">
        <h1 className="text-xl font-semibold">Data UMKM</h1>
        <p className="text-[var(--yellow-umkm)] text-sm">Tambah</p>
      </div>

      <FormUMKM />
    </div>
  );
}
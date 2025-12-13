import FormCulinary from "@/components/admins/formCulinary";
import Protected from "@/components/auth/Protected";

export default function AddCulinaryPage() {
  return (
    <Protected>
    <div className="max-w-full mx-auto text-black">
      <div className="flex gap-4 items-center mb-5">
        <h1 className="text-xl font-semibold">Data Kuliner</h1>
        <p className="text-(--yellow-umkm) text-sm">Tambah</p>
      </div>

      <FormCulinary mode="add" />
    </div>
    </Protected>
  );
}
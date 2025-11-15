import { useRouter } from "next/router";
import FormUMKM from "@/components/admins/formUMKM";
import Protected from "@/components/auth/Protected";

export default function EditUmkmPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Protected>
    <div className="max-w-full mx-auto text-black">
      <div className="flex gap-4 items-center mb-5">
        <h1 className="text-xl font-semibold">Data UMKM</h1>
        <p className="text-[var(--yellow-umkm)] text-sm">Edit</p>
      </div>

      {id && <FormUMKM mode="edit" umkmId={id as string} />}
    </div>
    </Protected>
  );
}
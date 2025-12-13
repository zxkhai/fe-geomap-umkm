import { useRouter } from "next/router";
import FormCulinary from "@/components/admins/formCulinary";
import Protected from "@/components/auth/Protected";

export default function EditCulinaryPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Protected>
    <div className="max-w-full mx-auto text-black">
      <div className="flex gap-4 items-center mb-5">
        <h1 className="text-xl font-semibold">Data Culinary</h1>
        <p className="text-(--yellow-umkm) text-sm">Edit</p>
      </div>

      {id && <FormCulinary mode="edit" culinaryId={id as string} />}
    </div>
    </Protected>
  );
}
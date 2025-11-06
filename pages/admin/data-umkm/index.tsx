import PageHeader from "@/components/admins/pageHeader";
import DataTable from "@/components/admins/dataTable";
import { umkmDataType } from "@/components/admins/types";

const mock: umkmDataType[] = Array.from({ length: 8 }).map((_, i) => ({
  no: 1,
  pemilik: "Ibu Hj. Aisya",
  kontak: "'085331324639",
  alamat: "JL Pintu Gerban..",
  lokasi: "-7.15432, 113.48291",
  sejarah: "Nasi Rames atau...",
  jenis: "Makanan Berat",
}));

export default function DataUmkmPage() {
  return (
    <div className="max-w-[1100px] mx-auto">
      <PageHeader title="Data UMKM" />
      <DataTable rows={mock} />
    </div>
  );
}

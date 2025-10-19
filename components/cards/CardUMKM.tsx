import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function FoodCardUMKM({
  props,
}: {
  props: {
    image: any;
    name: string;
    slug: string;
  };
}) {
  return (
    <div
      className="bg-white rounded-2xl flex flex-col items-center p-4 w-[220px]"
      style={{ boxShadow: "-5px 5px 15px rgba(0,0,0,0.12)" }}
    >
      <p className="font-semibold text-[16px] text-center mb-3 leading-snug h-[40px]">
        {props.name}
      </p>

      <div className="w-full overflow-hidden rounded-2xl">
        <Image
          src={props.image}
          alt={props.name}
          width={300}
          height={300}
          className="object-cover rounded-2xl w-full h-[180px]"
        />
      </div>

      <Link
        href={`/umkm/${props.slug}`}
        className="group flex items-center justify-between bg-black text-white w-full px-5 py-2 rounded-full hover:bg-[var(--yellow-umkm)] transition-colors mt-5"
      >
        <p className="group-hover:text-black font-medium transition-colors">
          Lihat UMKM
        </p>
        <div className="ml-2 bg-white p-1 rounded-full group-hover:bg-black transition-colors">
          <FaArrowRight className="w-2 h-auto text-black group-hover:text-[var(--yellow-umkm)] transition-colors" />
        </div>
      </Link>
    </div>
  );
}

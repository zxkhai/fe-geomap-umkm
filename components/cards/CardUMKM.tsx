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
      className="bg-white rounded-2xl flex flex-col items-center p-3 md:p-4 w-full h-full"
      style={{ boxShadow: "-5px 5px 15px rgba(0,0,0,0.12)" }}
    >
      <p className="font-semibold text-xs md:text-sm lg:text-base text-center mb-2 md:mb-3 leading-snug line-clamp-2 min-h-[2.5rem] md:min-h-[3rem]">
        {props.name}
      </p>

      <div className="w-full overflow-hidden rounded-2xl aspect-square mb-3 md:mb-4">
        <Image
          src={props.image}
          alt={props.name}
          width={300}
          height={300}
          className="object-cover rounded-2xl w-full h-full"
        />
      </div>

      <Link
        href={`/umkm/${props.slug}`}
        className="group flex items-center justify-between bg-black text-white w-full px-3 md:px-5 py-1.5 md:py-2 rounded-full hover:bg-[var(--yellow-umkm)] transition-colors mt-auto"
      >
        <p className="group-hover:text-black font-medium transition-colors text-xs md:text-sm whitespace-nowrap">
          Lihat Kuliner
        </p>
        <div className="ml-2 bg-white p-1 rounded-full group-hover:bg-black transition-colors flex-shrink-0">
          <FaArrowRight className="w-2 h-auto text-black group-hover:text-[var(--yellow-umkm)] transition-colors" />
        </div>
      </Link>
    </div>
  );
}

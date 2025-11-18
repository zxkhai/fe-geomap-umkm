import { IoMdNotificationsOutline } from "react-icons/io";

export default function Topbar() {
  const currentDate = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="bg-gray-100 sticky top-0 z-20">
      <div className="h-20 flex items-center justify-between px-6 md:px-10">
        <div>
          <p className="font-bold tracking-wide text-black">
            GEO <span className="text-[var(--yellow-umkm)]">KULINER</span>
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* <button
            aria-label="Notifications"
            className="relative p-2 rounded-full hover:cursor-pointer"
          >
            <IoMdNotificationsOutline size={20} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 w-4 h-4 text-[10px] rounded-full bg-[var(--yellow-umkm)] text-white grid place-items-center">5</span>
          </button> */}
          
          <div className="rounded-full border px-4 py-2 text-sm text-gray-700">
            {currentDate}
          </div>
        </div>
      </div>
    </div>
  );
}

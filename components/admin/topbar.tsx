export default function Topbar() {
  return (
    <div className="bg-white border-b">
  <div className="h-16 flex items-center justify-end px-6 md:px-10">
        {/* Left notif*/}
        <div className="flex items-center gap-4">
          <button className="relative">
            <span className="inline-block w-5 h-5 rounded-full border border-gray-400" />
            <span className="absolute -top-1 -right-1 w-4 h-4 text-[10px] rounded-full bg-orange-500 text-white grid place-items-center">5</span>
          </button>
          {/* Static dd/mm/yy */}
          <div className="rounded-full border px-4 py-2 text-sm text-gray-700">
            23 September 2025
          </div>
        </div>
      </div>
    </div>
  );
}

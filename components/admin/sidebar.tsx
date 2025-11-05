import Link from "next/link";
import { useRouter } from "next/router";

const NavItem = ({ href, label }: { href: string; label: string }) => {
const { pathname } = useRouter();
const active = pathname === href;

  return (
    <Link
    href={href}
    className={`flex items-center gap-3 px-5 py-3 rounded-xl transition 
        ${active ?"bg-black text-white":"text-gray-600 hover:bg-gray-200"}`}
        >
        <span className={`w-4 h-4 rounded ${active ? "bg-white" : "bg-gray-400"}`}/>
        <span className="text-sm font-medium">{label}</span>
        </Link>
    );
};

export default function Sidebar() {
    return (
    <aside className="hidden md:block w-[220px] bg-white border-r sticky top-0 h-screen">
        <div className="px-5 py-5">
            <p className="font-semibolld tracking-wide">
                GEO <span className="text-[var(--yellow-umkm)]">UMKM</span>
            </p>
        </div>
        <nav className="px-3 space-y-2">
            <NavItem href="/admin/dashboard" label="Dashboard" />
            <NavItem href="/admin/data-umkm" label="Data UMKM" />
            <NavItem href="/admin/profil" label="Profil" />
        </nav>

        <div className="absolute left-0 bottom-0 w-full p-4">
         <button className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded-xl">
            Log out <span>↗</span>
         </button>
        </div>
    </aside>
    );
}
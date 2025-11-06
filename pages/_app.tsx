import Footer from "@/components/navigations/footer";
import Navbar from "@/components/navigations/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Raleway } from "next/font/google";
import Sidebar from '@/components/admins/sidebar';
import Topbar from '@/components/admins/topbar';

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  const adminAuthPathsShowMainLayout = [
    '/admin/login',
    '/admin/forgot-password',
    '/admin/reset-password', 
  ];

  const isAdminPage =
    router.pathname.startsWith('/admin') &&
    !adminAuthPathsShowMainLayout.some((p) => router.pathname.startsWith(p));

  if (isAdminPage) {
    return (
      <main className={`${raleway.variable}`}>
        <div className="flex h-screen bg-gray-100">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Topbar />
            <main className="flex-1 overflow-y-auto p-6">
              <Component {...pageProps} />
            </main>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className={`${raleway.variable}`}>
      <Navbar />
        <div className="bg-white mx-auto text-black">
          <Component {...pageProps} />
        </div>
      <Footer />
    </main> 
  )
}

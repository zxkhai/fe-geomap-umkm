import "@/styles/globals.css";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { Raleway } from "next/font/google";
import Topbar from '@/components/admins/topbar';
import Sidebar from '@/components/admins/sidebar';
import Footer from "@/components/navigations/footer";
import Navbar from "@/components/navigations/navbar";

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
    '/admin/status-password',
  ];

  const isAdminPage =
    router.pathname.startsWith('/admin') &&
    !adminAuthPathsShowMainLayout.some((p) => router.pathname.startsWith(p));

  if (isAdminPage) {
    return (
      <main className={`${raleway.variable}`}>
        <div className="flex flex-col h-screen">
          <Topbar />
          <div className="flex flex-1 bg-white">
            <Sidebar />

            <div className="flex-1 overflow-y-auto p-6">
              <Component {...pageProps} />
            </div>
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

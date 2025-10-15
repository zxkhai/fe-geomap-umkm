import Footer from "@/components/navigations/footer";
import Navbar from "@/components/navigations/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});

export default function App({ Component, pageProps }: AppProps) {
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

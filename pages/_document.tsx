import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/icon/geokuliner.png" />
        <link rel="apple-touch-icon" href="/icon/geokuliner.png" />
        
        {/* Meta Tags */}
        <meta name="description" content="Peta Kuliner Pamekasan & Sumenep - Satu peta, ribuan rasa untuk dijelajahi. Temukan kuliner lokal terbaik di Madura." />
        <meta name="keywords" content="kuliner, pamekasan, sumenep, madura, peta kuliner, UMKM, makanan tradisional, geokuliner, geomap, geo kuliner, gastronomi" />
        <meta name="author" content="GeoKuliner" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="GeoKuliner - Peta Kuliner Pamekasan & Sumenep" />
        <meta property="og:description" content="Satu peta, ribuan rasa untuk dijelajahi. Temukan kuliner lokal terbaik di Madura." />
        <meta property="og:image" content="/icon/geokuliner.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GeoKuliner - Peta Kuliner Pamekasan & Sumenep" />
        <meta name="twitter:description" content="Satu peta, ribuan rasa untuk dijelajahi. Temukan kuliner lokal terbaik di Madura." />
        <meta name="twitter:image" content="/icon/geokuliner.png" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#F59E0B" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

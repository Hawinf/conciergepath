import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "./homepage";
import Head from 'next/head';
import "./globals.css"; // your own global styles
import Script from 'next/script';




export default function Home() {
  return (
    <>
       <Head>
        {/* Primary Meta Tags */}
        <title>Notepaths – Plan Your Trips with Ease</title>
        <meta name="description" content="Plan your travels and explore top destinations with Notepaths." />
        <meta name="keywords" content="travel blog, trip planning, concierge service, destination guide, travel tips" />
        <meta name="author" content="Notepaths Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://notepaths.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Notepaths – Your Travel Partner" />
        <meta property="og:description" content="Discover and plan amazing trips across the globe with our expert travel concierge." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://notepaths.com/" />
        <meta property="og:site_name" content="Notepaths" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Notepaths – Your Travel Partner" />
        <meta name="twitter:description" content="Plan your next travel adventure with ease and discover new destinations." />
        <meta name="twitter:image" content="/og-image.jpg" />
        <meta name="twitter:creator" content="@yourTwitterHandle" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Favicon & Theme */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
      </Head>    
    <main>
      <HomePage />
    </main>
    </>
  );
}

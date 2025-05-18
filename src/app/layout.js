import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ ONLY metadata that belongs in metadata
export const metadata = {
  title: 'ConciergePath – Plan Your Trips with Ease',
  description:
    'Plan your travels and explore top destinations with ConciergePath. Your personal travel concierge.',
  keywords: [
    'travel blog',
    'trip planning',
    'concierge service',
    'destination guide',
    'travel tips',
  ],
  authors: [{ name: 'ConciergePath Team' }],
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    title: 'ConciergePath – Your Travel Partner',
    description:
      'Discover and plan amazing trips across the globe with our expert travel concierge.',
    url: 'https://yourdomain.com',
    siteName: 'ConciergePath',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ConciergePath Travel Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ConciergePath – Your Travel Partner',
    description:
      'Plan your next travel adventure with ease and discover new destinations.',
    creator: '@yourTwitterHandle',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://yourdomain.com',
  },
};

// ✅ MOVE viewport config here
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}


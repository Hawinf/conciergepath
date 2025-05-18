// /app/discover-world/[continent]/[country]/[city]/page.js
import { blogData } from '../../../../../app/data/blogsData';
import Navbar from '@/app/components/navbar/navbar';
import './city.css';

export async function generateMetadata({ params }) {
  const { continent, country, city } = params;
  const cityData = blogData[continent]?.countries[country]?.cities[city];
  if (!cityData) return { title: "Not Found" };

  return {
    title: `${capitalize(city)} – ConciergePath`,
    description: cityData.description,
    alternates: {
      canonical: `https://yourdomain.com/discover-world/${continent}/${country}/${city}`, // ← update this with real domain
    },
    openGraph: {
      title: `${capitalize(city)} – ConciergePath`,
      description: cityData.description,
      url: `https://yourdomain.com/discover-world/${continent}/${country}/${city}`,
      siteName: 'ConciergePath',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${capitalize(city)} – ConciergePath`,
      description: cityData.description,
    },
  };
}

export default function CityPage({ params }) {
  const { continent, country, city } = params;
  const cityData = blogData[continent]?.countries[country]?.cities[city];
  if (!cityData) return <p>City not found.</p>;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: `${capitalize(city)} – ConciergePath`,
    description: cityData.description,
    author: {
      "@type": "Organization",
      name: "ConciergePath",
    },
    publisher: {
      "@type": "Organization",
      name: "ConciergePath",
      logo: {
        "@type": "ImageObject",
        url: "https://yourdomain.com/favicon.ico",
      },
    },
    datePublished: "2025-05-17", // optionally make this dynamic
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://yourdomain.com/discover-world/${continent}/${country}/${city}`,
    },
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="city-page">
        <h1>{capitalize(city)}</h1>
        <p>{cityData.description}</p>
        {/* Optional: Add more city-specific content here */}
      </main>
    </>
  );
}

// Utility function to capitalize first letter
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

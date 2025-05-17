import {blogData} from '../../../../data/blogsData';
import Navbar from '@/app/components/navbar/navbar';
import './city.css';


// /app/discover-world/[continent]/[country]/[city]/page.js
// import { blogData } from "../../../../../blogData";

export async function generateMetadata({ params }) {
  const { continent, country, city } = params;
  const cityData = blogData[continent]?.countries[country]?.cities[city];
  if (!cityData) return { title: "Not Found" };

  return {
    title: `${city.charAt(0).toUpperCase() + city.slice(1)} – ConciergePath`,
    description: cityData.description,
  };
}

export default function CityPage({ params }) {
  const { continent, country, city } = params;
  const cityData = blogData[continent]?.countries[country]?.cities[city];
  if (!cityData) return <p>City not found.</p>;

  // JSON-LD BlogPosting schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: city.charAt(0).toUpperCase() + city.slice(1),
    description: cityData.description,
    author: {
      "@type": "Person",
      name: "ConciergePath Team",
    },
    publisher: {
      "@type": "Organization",
      name: "ConciergePath",
      logo: {
        "@type": "ImageObject",
        url: "https://yourdomain.com/favicon.ico",
      },
    },
    datePublished: "2025-05-17",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://yourdomain.com/discover-world/${continent}/${country}/${city}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className='city-page'>
        <h1>{city.charAt(0).toUpperCase() + city.slice(1)}</h1>
        <p>{cityData.description}</p>
        {/* Add more city content here */}
      </main>
    </>
  );
}

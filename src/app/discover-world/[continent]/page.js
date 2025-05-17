// /app/discover-world/[continent]/page.js
import {blogData} from '../../data/blogsData';
import Navbar from '@/app/components/navbar/navbar';
import Link from 'next/link';
import './continent.css';

export async function generateMetadata({ params }) {
  const continent = params.continent;
  const data = blogData[continent];
  if (!data) {
    return { title: "Not Found" };
  }

  return {
    title: `Discover ${continent.charAt(0).toUpperCase() + continent.slice(1)} – ConciergePath`,
    description: data.description,
  };
}

export default function ContinentPage({ params }) {
  const continent = params.continent;
  const data = blogData[continent];
  if (!data) return <p>Continent not found.</p>;

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Discover ${continent.charAt(0).toUpperCase() + continent.slice(1)}`,
    description: data.description,
    url: `https://yourdomain.com/discover-world/${continent}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className='continent-sample'>
        <h1>Discover {continent.charAt(0).toUpperCase() + continent.slice(1)}</h1>
        <p>{data.description}</p>
        <h2>Countries:</h2>
        <ul>
          {Object.keys(data.countries).map((country) => (
            <li key={country}>
              <Link href={`/discover-world/${continent}/${country}`}>
                {country.charAt(0).toUpperCase() + country.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}


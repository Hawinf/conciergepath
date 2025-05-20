import './continent.css';
import Head from 'next/head';
import Link from 'next/link';
import { countryData } from '@/app/data/countryData.js';

export default function ContinentPage({ params }) {
  const { continentId } = params;
  const baseUrl = 'https://yourdomain.com';

  const countries = countryData?.[continentId.toLowerCase()] || [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Countries in ${continentId}`,
    "description": `Explore countries in ${continentId} for travel insights.`,
    "url": `${baseUrl}/continent/${continentId}`,
    "itemListElement": countries.map((country, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": country.name,
      "url": `${baseUrl}/country/${country.id}`,
    })),
  };

  return (
    <>
      <Head>
        <title>{`Explore ${continentId}`}</title>
        <meta name="description" content={`Browse countries in ${continentId}.`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main>
        <h1>Explore {continentId}</h1>
        {countries.length === 0 ? (
          <p>No countries found for this continent.</p>
        ) : (
          <ul style={{ padding: 0, listStyle: 'none' }}>
            {countries.map((country) => (
              <li key={country.id} style={{ marginBottom: '10px' }}>
                <Link
                  href={`/country/${country.id}`}
                  style={{
                    color: '#0070f3',
                    textDecoration: 'underline',
                    fontWeight: 'bold',
                  }}
                >
                  {country.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}



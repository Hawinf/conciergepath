import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { cityData } from '@/app/data/cityData';
import { countryData } from '@/app/data/countryData'; // ✅ import countryData
import Navbar from '@/app/components/navbar/navbar';
import Footer from '@/app/components/footer/footer';
import './country.css';

export default function CountryPage({ params }) {
  const { countryId } = params;
  const baseUrl = 'https://yourdomain.com'; // replace with your actual domain

  const cities = cityData?.[countryId.toLowerCase()] || [];

  // ✅ Find the country details from countryData
  let currentCountry = null;
  for (const continent of Object.values(countryData)) {
    const match = continent.find((country) => country.id === countryId);
    if (match) {
      currentCountry = match;
      break;
    }
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Cities in ${countryId}`,
    "description": `Explore cities in ${countryId} and their travel blogs.`,
    "url": `${baseUrl}/country/${countryId}`,
    "itemListElement": cities.map((city, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": city.name,
      "url": `${baseUrl}/city/${city.id}`,
    })),
  };

  return (
    <>
      <Head>
        <title>{`Explore ${countryId}`}</title>
        <meta name="description" content={`Browse cities in ${countryId}.`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <Navbar/>
      <main className='countpage-wrapper'>
        {currentCountry?.image && (
          <Image 
            className='countpage-img'
            src={currentCountry.image}
            alt={currentCountry.name}
            width={600}
            height={400}
            style={{ borderRadius: '12px', marginBottom: '20px' }}
          />
        )}
        <nav className='countpage-descsection'>
          <main className='countpage-tittlesection'>
            <h1>{currentCountry?.name || countryId}</h1>
            {currentCountry?.description && (
              <p className='countpage-headdesc'>
                {currentCountry.description}
              </p>
            )}
            <h2 className='countpage-citymenu'>Popular Cities:</h2>
            {cities.length === 0 ? (
              <p>No cities found for this country.</p>
            ) : (
              <ul style={{listStyle: 'none' }}>
                {cities.map((city) => (
                  <li key={city.id} className='countpage-eachcities'>
                    <Link
                      href={`/city/${city.id}`}
                      style={{
                        color: '#0070f3',
                        textDecoration: 'underline',
                        fontWeight: 'bold',
                      }}
                    >
                      {city.name}
                    </Link>
                  </li>
                ))}
            </ul>
            )}
          </main>
        </nav>

        
      </main>
      <Footer/>
    </>
  );
}

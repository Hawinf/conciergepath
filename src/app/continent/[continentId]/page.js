import './continent.css';
import Head from 'next/head';
import Link from 'next/link';
import { countryData } from '@/app/data/countryData.js';
import { continents } from '@/app/data/continents';
import Navbar from '@/app/components/navbar/navbar';
import Footer from '@/app/components/footer/footer';
import Image from 'next/image';

export default function ContinentPage({ params }) {
  const { continentId } = params;
  const baseUrl = 'https://yourdomain.com';

  const countries = countryData?.[continentId.toLowerCase()] || [];
  const currentContinent = continents.find(
    (c) => c.id.toLowerCase() === continentId.toLowerCase()
  );
  

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
      <Navbar />
      <main className='continentpage-wrapper'>
      {currentContinent && (
          <section style={{ textAlign: 'center', marginBottom: '30px' }}>
          
          <Image
            className='continentpage-head'
            src={currentContinent.image}
            alt={currentContinent.name}
            width={100} height={100}
          />
          <main className='continentpage-nav'>
            <h1 className='continentpage-tittle'>{currentContinent.name}</h1>
            <p className='continentpage-desc'>{currentContinent.description}</p>
            <h4>Choose a country</h4>
            {countries.length === 0 ? (
            <p>No countries found for this continent.</p>
              ) : (
              <ul>
                {countries.map((country) => (
                  <li key={country.id} className='cp-eachcountry'>
                    <Link
                      href={`/country/${country.id}`}
                    >
                      {country.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </main>
        </section>
        )}


        {/* <h1>Explore {continentId}</h1> */}
        
      </main>
      <Footer />
    </>
  );
}



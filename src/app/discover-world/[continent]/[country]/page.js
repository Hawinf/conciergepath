import {blogData}from '../../../data/blogsData';
import Link from 'next/link';
import Navbar from '@/app/components/navbar/navbar';
import Head from 'next/head';
import './country.css';

export async function generateMetadata({ params }) {
  const { continent, country } = params;
  const continentData = blogData[continent];
  const countryData = continentData?.countries[country];
  if (!countryData) return { title: "Not Found" };

  return {
    title: `Discover ${country.charAt(0).toUpperCase() + country.slice(1)} – ConciergePath`,
    description: countryData.description,
  };
}

export default function CountryPage({ params }) {
  const { continent, country } = params;
  const continentData = blogData[continent];
  if (!continentData) return <p>Continent not found.</p>;
  const countryData = continentData.countries[country];
  if (!countryData) return <p>Country not found.</p>;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Discover ${country.charAt(0).toUpperCase() + country.slice(1)}`,
    description: countryData.description,
    url: `https://yourdomain.com/discover-world/${continent}/${country}`,
    hasPart: Object.keys(countryData.cities).map((city) => ({
      "@type": "WebPage",
      name: `${city.charAt(0).toUpperCase() + city.slice(1)}`,
      url: `https://yourdomain.com/discover-world/${continent}/${country}/${city}`,
    })),
  };
  

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Head>
        <title>Discover {country.charAt(0).toUpperCase() + country.slice(1)} – ConciergePath</title>
        <meta name="description" content={countryData.description} />
      </Head>

      <main className='country-page'>
        <h1>{country.charAt(0).toUpperCase() + country.slice(1)}</h1>
        <p>{countryData.description}</p>
        <h2>Cities:</h2>
        <ul>
          {Object.keys(countryData.cities).map((city) => (
            <li key={city}>
              <Link href={`/discover-world/${continent}/${country}/${city}`}>
                {city.charAt(0).toUpperCase() + city.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

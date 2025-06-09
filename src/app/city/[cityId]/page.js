
import Head from 'next/head';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { cityData } from '@/app/data/cityData';
import './city.css';
import Navbar from '@/app/components/navbar/navbar';

export default function CityPage({ params }) {
  const { cityId } = params;
  const baseUrl = 'https://yourdomain.com'; // Update to your domain

  // Flatten all city entries
  const allCities = Object.values(cityData).flat();
  const city = allCities.find((c) => c.id === cityId);

  if (!city) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": city.name,
    "url": `${baseUrl}/city/${cityId}`,
    "description": `Discover travel blogs, tips, and insights about ${city.name}.`,
  };

  return (
    <>
      <Head>
        <title>{`Explore ${city.name}`}</title>
        <meta
          name="description"
          content={`Travel guide, tips, and stories from ${city.name}`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <Navbar />
      <main className='citypage-wrapper'>
        {/* <h1>{city.name}</h1> */}

        {city.image && (
          <Image
            className='cityhead-image'
            src={city.image}
            alt={city.name}
            width={600}
            height={400}
            
          />
        )}
        <nav className='cityhead-navbar'>
          <p className='citypage-tittle'>
            Travel Guide For The First Timer In {city.name}
          </p>
          {city.description && (
            <p className='citypage-desc'>
              {city.description}
            </p>
          )}
        </nav>
        
      </main>
    </>
  );
}

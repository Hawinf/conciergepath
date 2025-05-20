import Head from 'next/head';
import { notFound } from 'next/navigation';
import { cityData } from '@/app/data/cityData';

export default function CityPage({ params }) {
  const { cityId } = params;
  const baseUrl = 'https://yourdomain.com'; // update with your actual domain

  // Find the city in any country
  const allCities = Object.values(cityData).flat();
  const city = allCities.find(c => c.id === cityId);

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
          content={`Travel guide, tips, and stories from ${city.name}.`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main>
        <h1>{city.name}</h1>
        <p>
          Welcome to {city.name}! Here you can write a travel blog, share tips,
          photos, maps, and more.
        </p>
        {/* You can replace this with real content or a CMS-based blog later */}
      </main>
    </>
  );
}

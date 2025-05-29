// import Head from 'next/head';
// import Link from 'next/link';
// import { cityData } from '@/app/data/cityData';

// export default function CountryPage({ params }) {
//   const { countryId } = params;
//   const baseUrl = 'https://yourdomain.com'; // replace with your domain

//   const cities = cityData?.[countryId.toLowerCase()] || [];

//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@type": "ItemList",
//     "name": `Cities in ${countryId}`,
//     "description": `Explore cities in ${countryId} and their travel blogs.`,
//     "url": `${baseUrl}/country/${countryId}`,
//     "itemListElement": cities.map((city, index) => ({
//       "@type": "ListItem",
//       "position": index + 1,
//       "name": city.name,
//       "url": `${baseUrl}/city/${city.id}`,
//     })),
//   };

//   return (
//     <>
//       <Head>
//         <title>{`Explore ${countryId}`}</title>
//         <meta name="description" content={`Browse cities in ${countryId}.`} />
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//         />
//       </Head>

//       <main>
//         <h1>Explore {countryId}</h1>
//         {cities.length === 0 ? (
//           <p>No cities found for this country.</p>
//         ) : (
//           <ul style={{ padding: 0, listStyle: 'none' }}>
//             {cities.map((city) => (
//               <li key={city.id} style={{ marginBottom: '10px' }}>
//                 <Link
//                   href={`/city/${city.id}`}
//                   style={{
//                     color: '#0070f3',
//                     textDecoration: 'underline',
//                     fontWeight: 'bold',
//                   }}
//                 >
//                   {city.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         )}
//       </main>
//     </>
//   );
// }
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { cityData } from '@/app/data/cityData';
import { countryData } from '@/app/data/countryData'; // ✅ import countryData

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

      <main style={{ padding: '20px' }}>
        <h1>Explore {currentCountry?.name || countryId}</h1>

        {currentCountry?.image && (
          <Image
            src={currentCountry.image}
            alt={currentCountry.name}
            width={600}
            height={400}
            style={{ borderRadius: '12px', marginBottom: '20px' }}
          />
        )}

        {currentCountry?.description && (
          <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
            {currentCountry.description}
          </p>
        )}

        <h2>Popular Cities</h2>
        {cities.length === 0 ? (
          <p>No cities found for this country.</p>
        ) : (
          <ul style={{ padding: 0, listStyle: 'none' }}>
            {cities.map((city) => (
              <li key={city.id} style={{ marginBottom: '10px' }}>
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
    </>
  );
}

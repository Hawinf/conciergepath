
import './discover.css';
  import Head from 'next/head';
  import Link from 'next/link';
  import { continents } from '../data/continents';

  export default function DiscoverWorld() {
    const baseUrl = 'https://yourdomain.com'; // ✅ Update this to your actual domain

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Discover Continents",
      "description": "Browse continents and start planning your trip.",
      "url": `${baseUrl}/discover-world`,
      "itemListElement": continents.map((continent, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `${baseUrl}/continent/${continent.id}`,
        "name": continent.name,
      })),
    };

    // console.log("continentId:", continentId);


    return (
      <main className='main-discovery-world'>
        <Head>
          <title>Discover the World – Travel by Continent</title>
          <meta name="description" content="Browse continents and start planning your trip." />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </Head>

        <h1>Discover the World</h1>
        <ul>
          {continents.map(continent => (
            <li key={continent.id}>
              <Link href={`/continent/${continent.id}`}>
                {continent.name}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    );
  }

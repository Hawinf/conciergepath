
import './discover.css';
  import Head from 'next/head';
  import Link from 'next/link';
  import Image from 'next/image';
  import { continents } from '../data/continents';
  import { countryData } from '@/app/data/countryData.js';
  import Navbar from '../components/navbar/navbar';
  import Footer from '../components/footer/footer';

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

    return (
      
      <>
  <Head>
    <title>Discover the World – Travel by Continent</title>
    <meta name="description" content="Browse continents and start planning your trip." />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  </Head>

  <Navbar />

  <main className='main-discovery-world'>
    <nav className='discover-world-wrapper'>
      <h1 className='dg-tittle'>DISCOVER WORLD</h1>
      <h5 className='dg-desc'>
      Looking for a detailed travel <Link href='/plan'><span className='dg-internal'>guide</span></Link> to plan your next adventure? You're in the right place! On this page, you'll find comprehensive travel guides, backpacking itineraries, and destination tips—all organized by continent, country, and city. Whether you're dreaming of a trip to Europe, Asia, the Middle East, or beyond, we've grouped all our guides to help you easily discover where to go, what to do, and how to plan the perfect journey. From local food spots to must-see attractions and budget-friendly itineraries, your next trip starts here.
      </h5>
      <ul className='dg-results'>
        {continents.map(continent => (
          <li key={continent.id}>
            <Link href={`/continent/${continent.id}`} className='continent-list'>
              {continent.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>

    <section className='dg-country-section'>
      <ul className='country-list'>
        {Object.entries(countryData).map(([continentKey, countries]) =>
          countries.map((country) => (
            <li key={country.id} className='country-item'>
              <Link href={`/country/${country.id}`}>
                {country.image && (
                  <Image
                    className='dg-eachcountry'
                    src={country.image}
                    alt={country.name}
                    width={300}
                    height={200}
                  />
                )}
                <h6 className='dg-countries-name'>{country.name}</h6>
                <p className='dg-countries-desc'>{country.description.slice(0, 40)}</p>
              </Link>
            </li>
          ))
        )}
      </ul>
    </section>
  </main>

  <Footer />
  </>

    );
  }


import Head from 'next/head';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { cityData } from '@/app/data/cityData';
import Link from 'next/link';
import './city.css';
import Navbar from '@/app/components/navbar/navbar';
import Footer from '@/app/components/footer/footer';

export default function CityPage({ params }) {
  const { cityId } = params;
  const baseUrl = 'https://notepaths.com'; // Update to your domain

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
            data-aos="fade-up"
          />
        )}
        <nav className='cityhead-navbar'>
          <p className='citypage-tittle' data-aos="slide-right">
            Travel Guide For The First Timer In {city.name}
          </p>
          {city.description && (
            <p className='citypage-desc' data-aos="slide-left">
              {city.description}
            </p>
          )}
        </nav>
        <nav className='continentpage-aff'>
          <h1 className='cp-afftittle' data-aos="fade-up">ITINERARIES</h1>
          <main className='affiliate-section'>
            {['flight', 'bus', 'car-rent', 'jogging', 'ticket', 'guide', 'food', 'simcard'].map((type) => {
              const links = {
                flight: "https://your-flight-link.com",
                bus: "https://your-bus-link.com",
                'car-rent': "https://your-car-rental-link.com",
                jogging: "https://your-jogging-link.com",
                ticket: "https://your-ticket-link.com",
                guide: "https://your-guide-link.com",
                food: "https://your-food-link.com",
                simcard: "https://your-simcard-link.com"
              };

              return (
                <nav key={type} className='cp-affbox' data-aos="slide-left">
                  <Link href={links[type]} target="_blank">
                    <Image 
                      src={`/${type}.png`} 
                      width={30} 
                      height={30} 
                      alt={`Find cheap ${type} for ${city?.name}`} 
                    />
                    <h6>
                      Find {type} to{" "}
                      {city?.name?.charAt(0).toUpperCase() + city?.name?.slice(1).toLowerCase()}
                    </h6>
                  </Link>
                </nav>
              );
            })}
          </main>
        </nav>


        
      </main>
      <Footer/>
    </>
  );
}

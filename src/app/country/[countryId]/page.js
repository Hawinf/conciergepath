import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/app/components/navbar/navbar';
import Footer from '@/app/components/footer/footer';

import { cityData } from '@/app/data/cityData';
import { countryData } from '@/app/data/countryData';
import './country.css';

export default function CountryPage({ params }) {
  const { countryId } = params;
  const baseUrl = 'https://yourdomain.com'; // Replace with your actual domain

  // Find current country object in countryData by countryId
  let currentCountry = null;
  for (const continent of Object.values(countryData)) {
    const match = continent.find((country) => country.id === countryId);
    if (match) {
      currentCountry = match;
      break;
    }
  }

  // Get cities for this country (lowercase key)
  const cities = cityData?.[countryId.toLowerCase()] || [];

  // JSON-LD structured data for cities list
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
        <title>{`Explore ${currentCountry?.name || countryId}`}</title>
        <meta name="description" content={`Browse cities and itineraries in ${countryId}.`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <Navbar />

      <main className="countpage-wrapper" >
        {/* Country Banner Image */}
        {currentCountry?.image && (
          <Image
            className="countpage-img"
            src={currentCountry.image}
            alt={currentCountry.name}
            width={600}
            height={400}
            style={{ borderRadius: '12px', marginBottom: '20px' }}
            data-aos="fade-up"
          />
        )}

        {/* Country Basic Description */}
        <section className="countpage-descsection">
          <div className="countpage-tittlesection">
            <h1 data-aos="slide-right">{currentCountry?.name || countryId.toUpperCase()}</h1>
            {currentCountry?.description && (
              <p className="countpage-headdesc" data-aos="slide-left">{currentCountry.description}</p>
            )}

            <h2 className="countpage-citymenu">Popular Cities:</h2>
            {cities.length === 0 ? (
              <p>No cities found for this country.</p>
            ) : (
              <ul style={{ listStyle: 'none' }}>
                {cities.map((city) => (
                  <li key={city.id} className="countpage-eachcities">
                    <Link href={`/city/${city.id}`}>{city.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* === Affiliate / Itineraries Section === */}
        <nav className='continentpage-aff'>
          <h1 className='cp-afftittle' data-aos="fade-up">ITINERARIES</h1>
          <main className='affiliate-section'>
            {['flight', 'bus', 'car-rent', 'jogging', 'ticket', 'guide', 'food', 'simcard'].map((type) => (
              <nav key={type} className='cp-affbox' data-aos="slide-left">
                <Link href=''>
                  <Image  src={`/${type}.png`} width={30} height={30} alt={`Find cheap ${type} for ${currentCountry?.name}`} />
                  <h6>Find cheap {type} to {currentCountry?.name.charAt(0).toUpperCase() + currentCountry?.name.slice(1).toLowerCase()}</h6>
                </Link>
              </nav>
            ))}
          </main>
        </nav>

        {/* === Qatar Detailed Guide Section === */}
        {countryId.toLowerCase() === 'qatar' && currentCountry?.guide && (
          <section className="qatar-guide-section">
            <h2 className='qatar-tittle'>{currentCountry.guide.title}</h2>
            <p className='qatarguide-intro'>{currentCountry.guide.intro}</p>

            <h3 className='qatar-detail-tittle'>Dress Code in Qatar</h3>
            <p className='dress-desc'>{currentCountry.guide.dressCode}</p>

            <h3 className='qatar-detail-tittle'>Must-See Attractions in Doha</h3>
            <ul>
              {currentCountry.guide.mustSeeAttractions.map((attraction, idx) => (
                <li key={idx} className='attractions-list'>
                  <strong>{attraction.name}</strong>: {attraction.description}
                </li>
              ))}
            </ul>

            <h3 className='qatar-detail-tittle'>Where to Try Local Food in Doha</h3>
            <p className='qatarfood-tittle'>{currentCountry.guide.localFood.description}</p>
            <ul>
              {currentCountry.guide.localFood.recommendations.map((foodPlace, idx) => (
                <li key={idx}>{foodPlace}</li>
              ))}
            </ul>

            <h3 className='qatar-detail-tittle'>Best Shopping Malls in Qatar</h3>
            <ul>
              {currentCountry.guide.shoppingMalls.map((mall, idx) => (
                <li key={idx} className='mall-list'>
                  <strong>{mall.name}</strong>: {mall.description}
                </li>
              ))}
            </ul>
          </section>
        )}
        

        {/* === Itinerary Section === */}
        {currentCountry?.itinerary && (
          <section className="itinerary-section">
            <h2 className='itinerary-section-tittle'>{currentCountry.itinerary.title}</h2>
            <p className='itinerary-sectiondesc'>{currentCountry.itinerary.subtitle}</p>  

            {(() => {
              // Extract days excluding metadata keys
              const days = currentCountry.itinerary.days
                ? Object.entries(currentCountry.itinerary.days)
                : Object.entries(currentCountry.itinerary).filter(
                    ([key]) =>
                      key !== 'title' &&
                      key !== 'subtitle' &&
                      key !== 'accommodation'
                  );

              return days.map(([key, section]) => (
                <div key={key} className="itinerary-day">
                  <h3 className='day-tittle'>{section.title}</h3>

                  {section.intro && <p className='section-intro'>{section.intro}</p>}
                  {section.description && <p className='section-descriptionday'>{section.description}</p>}
                  
                  <nav className='get-there-section'>
                    {section.gettingThere && <p className='getting-there'>Getting there: {section.gettingThere}</p>}
                    {section.howToGetThere && <p className='getting-there'>How to get there: {section.howToGetThere}</p>}
                  </nav>

                  <nav className='section-tips'>
                    {section.culturalTip && <p className='section-tip'>Tip: {section.culturalTip}</p>}
                    {section.tip && <p className='section-tip'>Tip: {section.tip}</p>}
                    {section.transport && <p className='section-tip'>Transport: {section.transport}</p>}
                  </nav>

                  {section.highlights && (
                    <ul >
                      {section.highlights.map((item, idx) => (
                        <li key={idx} className='itinerary-list'>{item}</li>
                      ))}
                    </ul>
                  )}

                  {section.thingsToDo?.title && (
                    <>
                      <p><strong>{section.thingsToDo.title}</strong></p>
                      <p>{section.thingsToDo.description}</p>
                      <ul>
                        {section.thingsToDo.list.map((item, idx) => (
                          <li key={idx} className='itinerary-list'>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {section.whatToSee && (
                    <ul>
                      {section.whatToSee.map((item, idx) => (
                        <li key={idx} className='itinerary-list'>{item}</li>
                      ))}
                    </ul>
                  )}

                  {section.dayTrip?.title && (
                    <>
                      <h4>{section.dayTrip.title}</h4>
                      <p>{section.dayTrip.description}</p>
                    </>
                  )}
                </div>
              ));
            })()}

            {currentCountry.itinerary.accommodation && (
              <div className="itinerary-accommodation">
                <h3 className='accommodation-tittle'>Accommodation</h3>
                <p className='accommodation-desc'>{currentCountry.itinerary.accommodation.general}</p>
                <ul>
                  {currentCountry.itinerary.accommodation.recommendations?.map((rec, idx) => (
                    <li key={idx} className='itinerary-list'>
                      <strong>{rec.city}</strong>: {rec.hotel}
                      {rec.food && <p className='food-tittle'><strong>Food:</strong> {rec.food}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}

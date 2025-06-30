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

  // ✅ Get country data
  let currentCountry = null;
  for (const continent of Object.values(countryData)) {
    const match = continent.find((country) => country.id === countryId);
    if (match) {
      currentCountry = match;
      break;
    }
  }

  const cities = cityData?.[countryId.toLowerCase()] || [];

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

      <main className="countpage-wrapper">
        {/* Country Banner */}
        {currentCountry?.image && (
          <Image
            className="countpage-img"
            src={currentCountry.image}
            alt={currentCountry.name}
            width={600}
            height={400}
            style={{ borderRadius: '12px', marginBottom: '20px' }}
          />
        )}

        {/* Country Description */}
        <section className="countpage-descsection">
          <div className="countpage-tittlesection">
            <h1>{currentCountry?.name || countryId.toUpperCase()}</h1>
            {currentCountry?.description && (
              <p className="countpage-headdesc">{currentCountry.description}</p>
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

        <nav className='continentpage-aff'>
            <h1 className='cp-afftittle'>ITINERARIES</h1>
            <main className='affiliate-section'>
                <nav className='cp-affbox'>
                  <Link href=''>
                    <Image src='/flight.png' width={30} height={30} alt='Find cheap flights with top airline partners - book now'/>
                    <h6>Find cheap flight to {currentCountry?.name.charAt(0).toUpperCase() + currentCountry?.name.slice(1).toLowerCase()}</h6>
                  </Link>
                </nav>
                <nav className='cp-affbox'>
                  <Link href=''>
                    <Image src='/bus.png' width={30} height={30} alt='Find cheap flights with top airline partners - book now'/>
                    <h6>Find cheap flight to {currentCountry?.name.charAt(0).toUpperCase() + currentCountry?.name.slice(1).toLowerCase()}</h6>
                  </Link>
                </nav>
                <nav className='cp-affbox'>
                  <Link href=''>
                    <Image src='/car-rent.png' width={30} height={30} alt='Find cheap flights with top airline partners - book now'/>
                    <h6>Find cheap flight to {currentCountry?.name.charAt(0).toUpperCase() + currentCountry?.name.slice(1).toLowerCase()}</h6>
                  </Link>
                </nav>
                <nav className='cp-affbox'>
                  <Link href=''>
                    <Image src='/jogging.png' width={30} height={30} alt='Find cheap flights with top airline partners - book now'/>
                    <h6>Find cheap flight to {currentCountry?.name.charAt(0).toUpperCase() + currentCountry?.name.slice(1).toLowerCase()}</h6>
                  </Link>
                </nav>
                <nav className='cp-affbox'>
                  <Link href=''>
                    <Image src='/ticket.png' width={30} height={30} alt='Find cheap flights with top airline partners - book now'/>
                    <h6>Find cheap flight to {currentCountry?.name.charAt(0).toUpperCase() + currentCountry?.name.slice(1).toLowerCase()}</h6>
                  </Link>
                </nav>
                <nav className='cp-affbox'>
                  <Link href=''>
                    <Image src='/guide.png' width={30} height={30} alt='Find cheap flights with top airline partners - book now'/>
                    <h6>Find cheap flight to {currentCountry?.name.charAt(0).toUpperCase() + currentCountry?.name.slice(1).toLowerCase()}</h6>
                  </Link>
                </nav>
                <nav className='cp-affbox'>
                  <Link href=''>
                    <Image src='/food.png' width={30} height={30} alt='Find cheap flights with top airline partners - book now'/>
                    <h6>Find cheap flight to {currentCountry?.name.charAt(0).toUpperCase() + currentCountry?.name.slice(1).toLowerCase()}</h6>
                  </Link>
                </nav>
                <nav className='cp-affbox'>
                  <Link href=''>
                    <Image src='/simcard.png' width={30} height={30} alt='Find cheap flights with top airline partners - book now'/>
                    <h6>Find cheap flight to {currentCountry?.name.charAt(0).toUpperCase() + currentCountry?.name.slice(1).toLowerCase()}</h6>
                  </Link>
                </nav>
            </main>
          </nav>

{/*         
        {currentCountry?.itinerary && (
          <section className="itinerary-section">
            <h2>{currentCountry.itinerary.title}</h2>
            <p>{currentCountry.itinerary.subtitle}</p>  
`
            
            {currentCountry.itinerary.days &&
              Object.entries(currentCountry.itinerary.days).map(([key, section]) => (
                <main key={key} className="itinerary-day">
                  <h3>{section.title}</h3>

                  {section.intro && <p>{section.intro}</p>}
                  {section.gettingThere && <p><strong>Getting there:</strong> {section.gettingThere}</p>}
                  {section.transport && <p><strong>Transport:</strong> {section.transport}</p>}
                  {section.tip && <p><strong>Tip:</strong> {section.tip}</p>}

                  {section.highlights && Array.isArray(section.highlights) && (
                    <ul>
                      {section.highlights.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </main>
              ))}

            
            {!currentCountry.itinerary.days &&
              Object.entries(currentCountry.itinerary)
                .filter(([key]) => key !== 'title' && key !== 'subtitle' && key !== 'accommodation')
                .map(([key, section]) => (
                  <div key={key} className="itinerary-day">
                    <h3>{section.title}</h3>

                    {section.intro && <p>{section.intro}</p>}
                    {section.description && <p>{section.description}</p>}
                    {section.gettingThere && <p><strong>Getting there:</strong> {section.gettingThere}</p>}
                    {section.howToGetThere && <p><strong>How to get there:</strong> {section.howToGetThere}</p>}
                    {section.culturalTip && <p><strong>Tip:</strong> {section.culturalTip}</p>}
                    {section.tip && <p><strong>Tip:</strong> {section.tip}</p>}
                    {section.transport && <p><strong>Transport:</strong> {section.transport}</p>}

                    
                    {section.highlights && (
                      <ul>
                        {section.highlights.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    )}

                    
                    {section.thingsToDo?.title && (
                      <>
                        <p><strong>{section.thingsToDo.title}</strong></p>
                        <p>{section.thingsToDo.description}</p>
                        <ul>
                          {section.thingsToDo.list.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </>
                    )}

                    
                    {section.whatToSee && Array.isArray(section.whatToSee) && (
                      <ul>
                        {section.whatToSee.map((item, idx) => (
                          <li key={idx}>{item}</li>
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
                ))}

            
            {currentCountry.itinerary.accommodation && (
              <div className="itinerary-accommodation">
                <h3>Accommodation</h3>
                <p>{currentCountry.itinerary.accommodation.general}</p>
                <ul>
                  {currentCountry.itinerary.accommodation.recommendations?.map((rec, idx) => (
                    <li key={idx}>
                      <strong>{rec.city}</strong>: {rec.hotel}
                      {rec.food && <p><strong>Food:</strong> {rec.food}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )} */}
        
        {currentCountry?.itinerary && (
          <section className="itinerary-section">
            <h2 className='itinerary-section-tittle'>{currentCountry.itinerary.title}</h2>
            <p>{currentCountry.itinerary.subtitle}</p>  

    
          {(() => {
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
            <h3>{section.title}</h3>

            {section.intro && <p>{section.intro}</p>}
            {section.description && <p>{section.description}</p>}
            {section.gettingThere && <p><strong>Getting there:</strong> {section.gettingThere}</p>}
            {section.howToGetThere && <p><strong>How to get there:</strong> {section.howToGetThere}</p>}
            {section.culturalTip && <p><strong>Tip:</strong> {section.culturalTip}</p>}
            {section.tip && <p><strong>Tip:</strong> {section.tip}</p>}
            {section.transport && <p><strong>Transport:</strong> {section.transport}</p>}

            {section.highlights && (
              <ul>
                {section.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}

            {section.thingsToDo?.title && (
              <>
                <p><strong>{section.thingsToDo.title}</strong></p>
                <p>{section.thingsToDo.description}</p>
                <ul>
                  {section.thingsToDo.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {section.whatToSee && (
              <ul>
                {section.whatToSee.map((item, idx) => (
                  <li key={idx}>{item}</li>
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
        <h3>Accommodation</h3>
        <p>{currentCountry.itinerary.accommodation.general}</p>
        <ul>
          {currentCountry.itinerary.accommodation.recommendations?.map((rec, idx) => (
            <li key={idx}>
              <strong>{rec.city}</strong>: {rec.hotel}
              {rec.food && <p><strong>Food:</strong> {rec.food}</p>}
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


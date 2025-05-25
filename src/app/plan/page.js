
'use client';
import Head from 'next/head';
import '../shop/shop.css';
import Navbar from '../components/navbar/navbar';
import Link from 'next/link';
import Footer from '../components/footer/footer';
import { useState } from 'react';


export default function Plan() {
    const faqs = [
        {
          question: 'What does your trip planning service include?',
          answer: 'We provide personalized travel itineraries based on your destination, budget, and preferences. This includes suggestions for flights, accommodations, attractions, and activities.',
        },
        {
          question: 'Do you charge extra for making reservations?',
          answer: 'Our service includes trip planning and reservation coordination as part of the package. Any third-party booking costs (like hotel or tour fees) are separate and paid directly to the provider.',
        },
        {
          question: 'How do I receive my travel itinerary?',
          answer: 'You will receive a detailed PDF itinerary by email, and optionally through WhatsApp, including booking links, maps, and personalized tips.',
        },
        {
            question: 'Is your trip planning service available worldwide?',
            answer: 'Our planning trip is currently available only in Dubai. However, our travel planning services extend to multiple countries we have personally explored, ensuring expert insights and tailored itineraries.',
          },
      ];

      function FaqItem({ question, answer }) {
        const [open, setOpen] = useState(false);
      
        return (
          <>
            <button
              onClick={() => setOpen(!open)}
              style={{
                background: '#f1f1f1',
                padding: '10px',
                width: '100%',
                border: 'none',
                textAlign: 'left',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              {question}
            </button>
            {open && (
              <div style={{ padding: '10px', border: '1px solid #ddd', background: '#fafafa' }}>
                {answer}
              </div>
            )}
          </>
        );
      }
    

    return (
        <>
          <Head>
              <title>Let Us Plan Your Perfect Trip – From Itinerary to Reservation</title>
              <meta name="description" content="Professional website development services. Get a custom website or subscribe for monthly updates and content management." />
              <meta name="keywords" content="website design, landing page, ecommerce, company profile, monthly web maintenance" />
              <meta property="og:title" content="Website Design Services – Build Your Online Presence" />
              <meta property="og:description" content="Professional website design and monthly maintenance. Landing pages, company profiles, and ecommerce." />
              <meta property="og:image" content="https://yourdomain.com/images/website-banner.jpg" />
              <meta property="og:url" content="https://yourdomain.com/shop" />
              <meta property="og:type" content="website" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Website Design Services – Build Your Online Presence" />
              <meta name="twitter:description" content="Get a custom website designed for your business. Fast delivery, SEO-friendly, and monthly support." />
              <meta name="twitter:image" content="https://yourdomain.com/images/website-banner.jpg" />
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "Website Design & Management Service",
                    "image": "https://yourdomain.com/images/web-design.jpg", // Replace with your actual image
                    "description": "We build and manage professional websites including landing pages, company profiles, and ecommerce stores with SEO and mobile-first design.",
                    "brand": {
                      "@type": "Brand",
                      "name": "Your Brand Name"
                    },
                    "offers": {
                      "@type": "Offer",
                      "priceCurrency": "USD",
                      "price": "199",  
                      "availability": "https://schema.org/InStock",
                      "url": "https://yourdomain.com/shop"
                    },
                    "provider": {
                      "@type": "Organization",
                      "name": "Your Brand Name",
                      "url": "https://yourdomain.com"
                    }
                  }),
                }}
              />
          </Head>


            <Navbar />
            <main className='shop-wrapper'>
                <nav className='shop-nav'>
                    <h1>"Let Us Plan Your Perfect Trip – From Itinerary to Reservation                    "</h1>
                    <Link href='/web-guide.pdf' download="" target='blank' className='nav-orderbtn'>Details</Link>
                </nav>
                <main className='shop-section'>
                    <nav className='shop-branch'>
                        <h1>From daily itineraries to bookings, so you can just enjoy the journey.</h1>
                        <Link href='https://wa.me/971506841998?text=Hi%20I%20am%20interested%20in%20your%20services' target='blank' className='shop-btn'>Shop</Link>
                    </nav>
                    <nav className='shop-branch2'>
                        <main className='section-branch-top'>
                            <h1>Tailored to your style and budget.</h1>
                        </main>
                        <main className='section-branch-down'>
                            <h1>we organize it all for a hassle-free adventure.</h1>
                        </main>
                    </nav>
                </main>
                <main className='shop-desc'>
                    <h1>Complete Travel Planning Service – Itinerary & Reservation Experts</h1>
                    <h6>Discover a seamless way to travel. Our expert travel planning service covers everything from crafting personalized itineraries to securing your reservations. Whether you're visiting Dubai or exploring other global destinations we've experienced, we handle the details so you can focus on enjoying the journey. Ideal for travelers who value time, convenience, and unique experiences.</h6>
                </main>
                <main className='shop-content'>
                    <nav className='content-left'>
                        <h5>We craft personalized, hassle-free travel experiences designed around your needs :</h5>
                        <ul>
                            <li><b>Itinerary Planning</b> – Custom travel plans based on your interests, schedule, and budget.</li>
                            <li><b>Reservation Management</b> – Hotel bookings, tours, and experiences secured for you in advance.</li>
                            <li><b>Local Expertise</b> – Dubai-based services with curated travel options for countries we’ve personally explored.</li>
                        </ul>
                    </nav>
                    <nav className='content-right'>
                        <h5>Plan Smarter, Travel Better :</h5>
                        <ul>
                            <li><b>Travel Blueprint</b> - Perfect for independent travelers who just need a plan.
                            We create a personalized vacation itinerary based on your interests, preferences, and budget. Includes suggested destinations, activities, and timeline – you handle the bookings.</li>
                            <li><b>Plan & Assist</b> - Ideal for travelers who want a stress-free planning and reservation process. We craft your travel plan and assist you with booking flights, hotels, activities, and restaurant reservations. You make the final payment decisions — we handle the research and coordination.</li>
                        </ul>
                    </nav>
                </main>
                <nav className='faq-question'>
                    <h1>Frequently Asked Questions</h1>
                        {faqs.map((faq, index) => (
                    <nav key={index} style={{ marginBottom: '1rem' }}>
                        <FaqItem question={faq.question} answer={faq.answer} />
                    </nav>
                    ))};
                </nav>
            </main>
            <Footer />
        </>
    );
};
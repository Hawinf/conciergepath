'use client';
import './shop.css';
import Navbar from '../components/navbar/navbar';
import Link from 'next/link';
import Footer from '../components/footer/footer';
import { useState } from 'react';


export default function Shop() {
    const faqs = [
        {
          question: 'What services do you offer?',
          answer: 'We build landing pages, company profiles, and ecommerce websites tailored to your needs.',
        },
        {
          question: 'Do you offer monthly maintenance?',
          answer: 'Yes, with our monthly subscription, we manage content updates, new articles, and website edits.',
        },
        {
          question: 'How long does it take to build a website?',
          answer: 'Most websites are completed in 4`–7 days depending on complexity.',
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
            <Navbar />
            <main className='shop-wrapper'>
                <nav className='shop-nav'>
                    <h1>"Get a Stunning Website – Custom Design Services"</h1>
                    <Link href='/web-guide.pdf' download="My-Guide.pdf" target='blank' className='nav-orderbtn'>Details</Link>
                </nav>
                <main className='shop-section'>
                    <nav className='shop-branch'>
                        <h1>Empowering Your Business Online – One Pixel at a Time.</h1>
                        <Link href='https://wa.me/971506841998?text=Hi%20I%20am%20interested%20in%20your%20services' target='blank' className='shop-btn'>Shop</Link>
                    </nav>
                    <nav className='shop-branch2'>
                        <main className='section-branch-top'>
                            <h1>More Than a Website – It's Your Bridge to the World.</h1>
                        </main>
                        <main className='section-branch-down'>
                            <h1>Engage. Inspire. Convert. Websites `That Speak to Your Audience.</h1>
                        </main>
                    </nav>
                </main>
                <main className='shop-desc'>
                    <h1>Build a Stunning Website — We Do the Work, You Focus on Your Business</h1>
                    <h6>We specialize in creating professional websites for businesses, startups, and entrepreneurs across the globe. Whether you need a landing page, a corporate company profile, or a fully functional ecommerce store, we design and deliver websites that reflect your brand and convert visitors into customers.</h6>
                </main>
                <main className='shop-content'>
                    <nav className='content-left'>
                        <h5>We build responsive, SEO-friendly websites tailored to your business:</h5>
                        <ul>
                            <li><b>Landing Pages</b> – Optimized for lead generation and conversion.</li>
                            <li><b>Company Profile Websites</b> – Highlight your team, services, and achievements.</li>
                            <li><b>Ecommerce Websites</b> – Sell products with secure payment integration, product pages, and inventory management.</li>
                        </ul>
                    </nav>
                    <nav className='content-right'>
                        <h5>Want to keep your website fresh without lifting a finger? Choose our monthly management plan, and we’ll:</h5>
                        <ul>
                            <li>Update content, images, and text as needed.</li>
                            <li>Publish blog posts or articles provided by you.</li>
                            <li>Add new pages or promotions.</li>
                            <li>Ensure site security, backups, and performance.</li>
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
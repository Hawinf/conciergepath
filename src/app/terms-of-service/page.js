import Head from 'next/head';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import '../privacy-policy/pp.css';

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service | YourWebsiteName</title>
        <meta
          name="description"
          content="Read the Terms of Service for using our website, digital travel planning services, and custom website development."
        />
        <meta name="keywords" content="terms of service, website usage terms, travel service terms, web design terms" />
        <meta name="author" content="YourWebsiteName" />
        <meta property="og:title" content="Terms of Service | YourWebsiteName" />
        <meta property="og:description" content="Terms and conditions for using our web and travel planning services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://notepaths.com/terms-of-service" />
        <meta property="og:image" content="https://notepaths.com/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms of Service | YourWebsiteName" />
        <meta name="twitter:description" content="Terms and conditions for using our web and travel planning services." />
        <meta name="twitter:image" content="https://notepaths.com/images/og-image.jpg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Terms of Service",
              "description": "Read the Terms of Service for using our website, digital travel planning services, and custom website development.",
              "url": "https://notepaths.com/terms-of-service",
              "author": {
                "@type": "Organization",
                "name": "notepaths"
              },
              "datePublished": "2025-05-23"
            }),
          }}
        />
      </Head>
          <Navbar />
      <main className='pp-wrapper'>
        <h1>Terms of Service</h1><br></br>
        <p><strong>Effective Date:</strong> May 23, 2025</p>
        <br></br>
        <p>
          Welcome to Notepaths By accessing and using our services, you agree to the following terms. Please read them carefully.
        </p>
        <br></br>
        <h2>1. Acceptance of Terms</h2><br></br>
        <p>
          By using our website or purchasing our services (travel planning, reservation assistance, or website development), you agree to these Terms of Service. If you do not agree, please refrain from using our website.
        </p>
        <br></br>
        <h2>2. Services Provided</h2><br></br>
        <p><strong>Website Services:</strong> We build and manage websites (landing pages, company profiles, ecommerce sites) with optional monthly maintenance.</p>
        <p><strong>Travel Services:</strong> We offer personalized travel planning, reservation assistance, and trip support.</p>
        <br></br>
        <h2>3. User Responsibilities</h2><br></br>
        <ul>
          <li>You agree to provide accurate information when using our services.</li>
          <li>You are responsible for maintaining the confidentiality of any login credentials provided.</li>
        </ul>
        <br></br>
        <h2>4. Payment & Refunds</h2><br></br>
        <ul>
          <li>All payments must be made in full before work begins.</li>
          <li>Monthly subscriptions can be canceled with a 7-day notice before the next billing cycle.</li>
          <li>Refunds are only issued for unstarted services.</li>
        </ul>
        <br></br>
        <h2>5. Intellectual Property</h2><br></br>
        <p>
          All content on this site including text, images, and branding belongs to YourWebsiteName unless otherwise stated. You may not copy or reuse any materials without permission.
        </p>
        <br></br>
        <h2>6. Limitation of Liability</h2><br></br>
        <p>
          We do our best to provide accurate and timely services, but we are not responsible for external booking errors, third-party provider issues, or website downtime caused by factors beyond our control.
        </p>
        <br></br>
        <h2>7. Changes to the Terms</h2><br></br>
        <p>
          We reserve the right to update these terms at any time. Changes will be reflected on this page.
        </p>
        <br></br>
        <h2>8. Contact Us</h2><br></br>
        <p>
          For questions about these Terms, contact us at: <a href="mailto:hello@notepaths.com">hello@notepaths.com</a>
        </p>
      </main>
      <Footer/>
    </>
  );
}

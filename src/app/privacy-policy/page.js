import Head from 'next/head';
import './pp.css';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

export default function PrivacyPolicy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "url": "https://notepaths.com//privacy-policy",
    "description": "Learn how we collect, use, and protect your information at TravelBlog.",
  };

  return (
    <>
      <Head>
        <title>Privacy Policy | TravelBlog</title>
        <meta
          name="description"
          content="Learn how we collect, use, and protect your personal information on TravelBlog."
        />
        <meta property="og:title" content="Privacy Policy | TravelBlog" />
        <meta property="og:description" content="Our privacy practices and how we protect your data." />
        <meta property="og:url" content="https://notepaths.com//privacy-policy" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Privacy Policy | TravelBlog" />
        <meta name="twitter:description" content="How we collect, use, and protect your information." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>
      <Navbar />
      <main className='pp-wrapper'>
        <h1>Privacy Policy</h1>
        <br></br>
        <p>Last updated: [Monday, 26 May 2025]</p>
        <br></br>
        <p>
          At Notepaths, your privacy is important to us. This Privacy Policy outlines the types of personal
          information we collect and how we use, disclose, and protect that information.
        </p>
        <br></br>
        <h2>1. Information We Collect</h2>
        <br></br>
        <p>We may collect personal information such as your name, email address, and usage data when you:</p>
        <br></br>
        <ul>
          <li>Subscribe to our newsletter</li>
          <li>Make a booking request</li>
          <li>Interact with our website</li>
        </ul>
        <br></br>
        <h2>2. How We Use Your Information</h2>
        <br></br>
        <p>We use your information to:</p>
        <br></br>
        <ul>
          <li>Provide and improve our services</li>
          <li>Send updates and promotional emails</li>
          <li>Respond to inquiries and support requests</li>
        </ul>
        <br></br>
        <h2>3. Sharing Your Information</h2>
        <br></br>
        <p>We do not sell your personal data. We may share information with trusted partners to operate our services.</p>
        <br></br>
        <h2>4. Your Rights</h2>
        <br></br>
        <p>
          You have the right to access, correct, or delete your personal data. Contact us at [email address] for
          requests.
        </p>
        <br></br>
        <h2>5. Cookies</h2>
        <br></br>
        <p>
          We use cookies to enhance your browsing experience. You can disable cookies in your browser settings.
        </p>
        <br></br>
        <h2>6. Third-Party Links</h2>
        <br></br>
        <p>Our site may contain links to other websites. We are not responsible for their privacy practices.</p>
        <br></br>
        <h2>7. Changes to This Policy</h2>
        <br></br>
        <p>We may update this policy. Changes will be posted on this page.</p>
        <br></br>
        <h2>8. Contact Us</h2> 
        <br></br>
        <p>If you have any questions about this policy, contact us at: hello@notepaths.com</p>
      </main>
      <Footer />
    </>
  );
}

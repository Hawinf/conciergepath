import Head from 'next/head';
import '../privacy-policy/pp.css';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

export default function CookiePolicy() {
  return (
    <>
      <Head>
        <title>Cookie Policy | Your Travel & Web Service</title>
        <meta name="description" content="Learn how we use cookies to enhance your browsing experience on our travel blog and website services platform." />
        <meta property="og:title" content="Cookie Policy | Your Travel & Web Service" />
        <meta property="og:description" content="Understand how we use cookies for analytics and personalization on our site." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/cookie-policy" />
        <meta property="og:image" content="https://yourdomain.com/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cookie Policy | Your Travel & Web Service" />
        <meta name="twitter:description" content="Understand how we use cookies for analytics and personalization on our site." />
        <meta name="twitter:image" content="https://yourdomain.com/images/og-image.jpg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Cookie Policy",
              "description": "Our Cookie Policy explains how and why cookies are used on our travel blog and website services.",
              "url": "https://yourdomain.com/cookie-policy"
            }),
          }}
        />
      </Head>
    <Navbar />
      <main className='pp-wrapper'>
        <h1>Cookie Policy</h1><br></br>
        <p>Last updated: May 26, 2025</p>
        <br></br>
        <h2>What Are Cookies?</h2>
        <br></br>
        <p>
          Cookies are small text files stored on your device to help websites remember your preferences, analyze site usage, and enhance your user experience.
        </p>
        <br></br>
        <h2>How We Use Cookies</h2><br></br>
        <p>We use cookies to:</p><br></br>
        <ul>
          <li>Ensure the website functions properly</li>
          <li>Analyze traffic and user interaction via analytics tools</li>
          <li>Remember your preferences for future visits</li>
          <li>Deliver personalized content and ads (including affiliate tracking)</li>
        </ul>
        <br></br>
        <h2>Types of Cookies We Use</h2><br></br>
        <ul>
          <li><strong>Essential Cookies:</strong> Required for site functionality</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with the site</li>
          <li><strong>Marketing Cookies:</strong> Used to show personalized offers or ads</li>
        </ul>
        <br></br>
        <h2>Your Choices</h2><br></br>
        <p>
          You can choose to disable cookies through your browser settings. However, doing so may affect certain site functionalities.
        </p>
        <br></br>
        <h2>Third-Party Cookies</h2><br></br>
        <p>
          We may use third-party services like Google Analytics or affiliate tracking tools. These services may set their own cookies in accordance with their privacy policies.
        </p>
        <br></br>
        <h2>Changes to This Policy</h2><br></br>
        <p>
          We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
        </p>
        <br></br>
        <h2>Contact Us</h2><br></br>
        <p>
          If you have any questions about our cookie practices, please contact us at <a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a>.
        </p>
      </main>
      <Footer />
    </>
  );
}

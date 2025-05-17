/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://yourdomain.com', // ✅ CHANGE this to your actual domain, e.g. https://conciergepath.com
    generateRobotsTxt: true,           // ✅ Yes, generate robots.txt (important for SEO)
    sitemapSize: 5000,                 // ✅ Fine unless you have more than 5000 URLs
    changefreq: 'weekly',              // ✅ Reasonable for a travel blog
    priority: 0.7,                     // ✅ Tells crawlers that your pages have medium-high priority
    trailingSlash: false,             // ✅ Matches Next.js default — no slash at end
  };
  
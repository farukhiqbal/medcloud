const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

// Define your URLs
const links = [
  { url: '/', changefreq: 'daily', priority: 0.9 },
  { url: '/home', changefreq: 'daily', priority: 0.9 },
  { url: '/featured', changefreq: 'weekly', priority: 0.7 },
  { url: '/hrpay', changefreq: 'weekly', priority: 0.7 },
  { url: '/manufacturing', changefreq: 'weekly', priority: 0.7 },
  { url: '/project', changefreq: 'weekly', priority: 0.7 },
  { url: '/texttile', changefreq: 'weekly', priority: 0.7 },
  { url: '/pointofsale', changefreq: 'weekly', priority: 0.7 },
  { url: '/industries', changefreq: 'weekly', priority: 0.7 },
  { url: '/textilepage', changefreq: 'weekly', priority: 0.7 },
  { url: '/trading', changefreq: 'weekly', priority: 0.7 },
  { url: '/business', changefreq: 'weekly', priority: 0.7 },
  { url: '/cashms', changefreq: 'weekly', priority: 0.7 },
  { url: '/inventry', changefreq: 'weekly', priority: 0.7 },
  { url: '/purchase', changefreq: 'weekly', priority: 0.7 },
  { url: '/account', changefreq: 'weekly', priority: 0.7 },
  { url: '/payableaccount', changefreq: 'weekly', priority: 0.7 },
  { url: '/contactus', changefreq: 'weekly', priority: 0.7 },
  { url: '/labtory', changefreq: 'weekly', priority: 0.7 },
  // Add other routes here
];

// Create a stream to write to
const stream = new SitemapStream({ hostname: 'https://medcloud-seven.vercel.app' });

// Generate the sitemap
streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
  fs.writeFileSync('./public/sitemap.xml', data.toString());
  console.log('Sitemap written to ./public/sitemap.xml');
}).catch((err) => {
  console.error('Error generating sitemap:', err);
});

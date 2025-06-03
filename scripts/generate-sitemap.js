import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

const BASE_URL = 'https://jobkityaari.com';

async function generateSitemap() {
  const [jobRes, blogRes] = await Promise.all([
    fetch('https://api.jobkityaari.com/api/job/getAllJob'),
    fetch('https://api.jobkityaari.com/api/blog/getAllBlog'),
  ]);

  const jobs = await jobRes.json();
  const blogs = await blogRes.json();

  // 1. Static URLs
  const staticUrls = [
    { loc: `${BASE_URL}/`, lastmod: '2025-03-26T09:37:03+00:00', priority: '1.00' },
    { loc: `${BASE_URL}/career-guide`, lastmod: '2025-03-26T09:37:02+00:00', priority: '0.80' },
    { loc: `${BASE_URL}/government-jobs`, lastmod: '2025-03-26T09:37:03+00:00', priority: '0.80' },
    { loc: `${BASE_URL}/technology-jobs`, lastmod: '2025-03-26T09:37:04+00:00', priority: '0.80' },
    { loc: `${BASE_URL}/management-jobs`, lastmod: '2025-03-26T09:37:03+00:00', priority: '0.80' },
    { loc: `${BASE_URL}/teaching-jobs`, lastmod: '2025-03-26T09:37:04+00:00', priority: '0.80' },
    { loc: `${BASE_URL}/banking-jobs`, lastmod: '2025-03-26T09:37:02+00:00', priority: '0.80' },
    { loc: `${BASE_URL}/psu-jobs`, lastmod: '2025-03-26T09:37:04+00:00', priority: '0.80' },
  ];

  const staticXml = staticUrls.map(
    (page) => `
  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <priority>${page.priority}</priority>
  </url>`
  );

  // 2. Dynamic Job URLs
  const jobXml = jobs .map(job => {
      const categorySlug = job.category?.slug || 'uncategorized';
      const jobSlug = job.slug;
      const jobUrl = `${BASE_URL}/${categorySlug}/${jobSlug}`;
      const lastmod = new Date(job.updatedAt).toISOString();

      return `
  <url>
    <loc>${jobUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>0.64</priority>
  </url>`;
    });

  // 3. Dynamic Blog URLs
  const blogXml = blogs.map(blog => {
    const categorySlug = blog.category?.slug || 'uncategorized';
    const blogSlug = blog.slug;
    const blogUrl = `${BASE_URL}/${categorySlug}/articles/${blogSlug}`;
    const lastmod = blog.updatedAt ? new Date(blog.updatedAt).toISOString() : new Date().toISOString();

    return `
  <url>
    <loc>${blogUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>0.60</priority>
  </url>`;
  });

  // 4. Final Sitemap XML
  const fullSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
                      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
  data-tag-assistant-prod-present="pending:1742982235388">
  <!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->
  ${staticXml.join('')}
  ${jobXml.join('')}
  ${blogXml.join('')}
</urlset>`;

  fs.writeFileSync(path.join('public', 'sitemap.xml'), fullSitemap, 'utf8');
}

generateSitemap();

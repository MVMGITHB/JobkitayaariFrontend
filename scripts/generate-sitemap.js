const fs = require("fs");
const path = require("path");

const BASE_URL = "https://jobkityaari.com";

async function generateSitemap() {
  const [jobRes, blogRes] = await Promise.all([
    fetch("https://api.jobkityaari.com/api/job/getAllJob"),
    fetch("https://api.jobkityaari.com/api/blog/getAllBlog"),
  ]);

  const jobs = await jobRes.json();
  const blogs = await blogRes.json();

  const now = new Date().toISOString();

  // 1. Static URLs
  const staticUrls = [
    { loc: `${BASE_URL}/`, priority: "1.00" },
    { loc: `${BASE_URL}/career-guide`, priority: "0.80" },
    { loc: `${BASE_URL}/government-jobs`, priority: "0.80" },
    { loc: `${BASE_URL}/technology-jobs`, priority: "0.80" },
    { loc: `${BASE_URL}/management-jobs`, priority: "0.80" },
    { loc: `${BASE_URL}/teaching-jobs`, priority: "0.80" },
    { loc: `${BASE_URL}/banking-jobs`, priority: "0.80" },
    { loc: `${BASE_URL}/psu-jobs`, priority: "0.80" },
  ];

  const staticXml = staticUrls.map(
    (page) => `
  <url>
    <loc>${page.loc}</loc>
    <lastmod>${now}</lastmod>
    <priority>${page.priority}</priority>
  </url>`
  );

  // 2. Job URLs
  const jobXml = jobs.map((job) => {
    const categorySlug = job.category?.slug || "uncategorized";
    const jobUrl = `${BASE_URL}/${categorySlug}/${job.slug}`;
    const lastmod = new Date(job.updatedAt).toISOString();

    return `
  <url>
    <loc>${jobUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>0.64</priority>
  </url>`;
  });

  // 3. Blog URLs
  const blogXml = blogs.map((blog) => {
    const categorySlug = blog.category?.slug || "uncategorized";
    const blogUrl = `${BASE_URL}/${categorySlug}/articles/${blog.slug}`;
    const lastmod = blog.updatedAt
      ? new Date(blog.updatedAt).toISOString()
      : now;

    return `
  <url>
    <loc>${blogUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>0.60</priority>
  </url>`;
  });

  // 4. Final XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticXml.join("")}
${jobXml.join("")}
${blogXml.join("")}
</urlset>`;

  fs.writeFileSync(path.join("public", "sitemap.xml"), sitemap, "utf8");
  console.log("✅ Sitemap generated successfully");
}

generateSitemap();

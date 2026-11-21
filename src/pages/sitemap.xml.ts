import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Hand-rolled instead of @astrojs/sitemap so it lives at /sitemap.xml with no
// extra dependency. Leaves out /for/* (noindex) and stub-* placeholder projects.
export const GET: APIRoute = async ({ site }) => {
  const projects = await getCollection('projects', (p) => !p.id.startsWith('stub-'));
  // Trailing slashes match the canonical URLs; Cloudflare 308s the slashless form.
  const paths = ['/', '/about/', '/work/', ...projects.map((p) => `/work/${p.id}/`)];
  const urls = paths.map((p) => `  <url><loc>${new URL(p, site).href}</loc></url>`).join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
};

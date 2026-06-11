import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

/**
 * Generates /sitemap.xml automatically.
 * Add your static and dynamic routes here.
 *
 * Docs: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // ── Static routes ──────────────────────────────────────────────────────
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  // ── Dynamic routes (uncomment and adapt) ──────────────────────────────
  // const posts = await fetchPosts(); // your data fetching
  // const dynamicRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: post.updatedAt,
  //   changeFrequency: "monthly",
  //   priority: 0.8,
  // }));

  return [...staticRoutes /* ...dynamicRoutes */];
}

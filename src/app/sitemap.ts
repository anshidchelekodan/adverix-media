import { MetadataRoute } from "next";
import { SITE, SERVICES } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/case-studies",
    "/blog",
    "/contact",
    "/faq",
    "/privacy-policy",
    "/terms-of-service",
  ];

  const staticRoutes = routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const serviceRoutes = SERVICES.map((service) => ({
    url: `${SITE.url}/services/${service.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Dummy blog slugs for sitemap
  const blogSlugs = [
    "seo-guide-small-business",
    "video-marketing-importance",
    "google-vs-facebook-ads",
  ];

  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${SITE.url}/blog/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}

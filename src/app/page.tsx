import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import ProcessSection from "@/components/sections/ProcessSection";
import LogoMarquee from "@/components/sections/LogoMarquee";
import FeaturedCaseStudies from "@/components/sections/FeaturedCaseStudies";
import FeaturedBlogSection from "@/components/sections/FeaturedBlogSection";
import PackagesSection from "@/components/sections/PackagesSection";

export const metadata: Metadata = {
  title: `${SITE.name} — Premium Digital Marketing Agency`,
  description:
    "Adverix Media is a premium digital marketing agency delivering SEO, Google Ads, branding, video production, and social media marketing with measurable results.",
  alternates: { canonical: SITE.url },
  openGraph: {
    title: `${SITE.name} — Transforming Brands Through Strategy & Creativity`,
    description:
      "We help businesses grow faster through SEO, Performance Marketing, Branding, and Cinematic Video Production that generates measurable business results.",
    url: SITE.url,
  },
};

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.url}/#business`,
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Malappuram",
    addressRegion: "KL",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 11.2748, longitude: 76.2238 },
  openingHours: "Mo-Sa 10:00-18:00",
  priceRange: "₹₹₹",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <HeroSection />
      <LogoMarquee />
      <ServicesSection />
      <ProcessSection />
      <PackagesSection />
      <FeaturedCaseStudies />
      <TestimonialsSection />
      <FeaturedBlogSection />
      <CTASection />
    </>
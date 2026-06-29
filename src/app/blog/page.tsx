import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { SITE, BLOG_CATEGORIES } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Digital Marketing Blog & Insights — Adverix Media",
  description:
    "Read the latest digital marketing strategies, SEO guides, and advertising tips from the experts at Adverix Media.",
  alternates: { canonical: `${SITE.url}/blog` },
  openGraph: { url: `${SITE.url}/blog` },
};

const BLOG_POSTS = [
  {
    slug: "seo-guide-small-business",
    title: "Complete SEO Guide for Small Businesses in 2026",
    excerpt: "Learn how to outrank your competitors and dominate local search results with this comprehensive SEO checklist for small businesses.",
    category: "SEO",
    date: "June 25, 2026",
    author: "Adverix Team",
    readTime: "8 min read",
    image: "/blog/seo-guide.jpg",
  },
  {
    slug: "video-marketing-importance",
    title: "Why Every Business Needs Video Marketing",
    excerpt: "Video isn't just the future; it's the present. Discover how cinematic video production can drastically improve your conversion rates.",
    category: "Video Marketing",
    date: "June 18, 2026",
    author: "Adverix Team",
    readTime: "6 min read",
    image: "/blog/video-marketing.jpg",
  },
  {
    slug: "google-vs-facebook-ads",
    title: "Google Ads vs Facebook Ads: Which is Better?",
    excerpt: "Search intent vs disruptive advertising. We break down when to use Google Ads and when Meta Ads are the better choice for your budget.",
    category: "Google Ads",
    date: "June 10, 2026",
    author: "Adverix Team",
    readTime: "10 min read",
    image: "/blog/google-facebook-ads.jpg",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="pt-36 pb-16 hero-bg relative overflow-hidden">
        <div className="container-custom">
          <Reveal direction="up">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#666] mb-8 font-bold">
              <Link href="/" className="hover:text-[#E63946] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#E63946]">Blog</span>
            </nav>
            <div className="line-deco mb-4">Insights & Strategy</div>
            <h1 className="text-5xl sm:text-6xl font-heading font-extrabold mb-5 max-w-3xl text-[#111]">
              Digital Marketing <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-lg text-[#666] max-w-2xl leading-relaxed mb-10 font-medium">
              Expert strategies, case studies, and actionable tips to help you scale your business in the digital age.
            </p>

            <div className="flex flex-wrap gap-3">
              {BLOG_CATEGORIES.map((cat, i) => (
                <button
                  key={cat}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
                    i === 0 ? "bg-[#E63946] text-white" : "bg-white border border-black/5 text-[#555] hover:border-[#E63946]/30 hover:text-[#E63946]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-[#F8F8F8]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {BLOG_POSTS.map((post, i) => (
              <Reveal key={post.slug} direction="up" delay={i * 80}>
                <Link href={`/blog/${post.slug}`} className="group block h-full flex flex-col bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-soft-hover transition-all duration-500 border border-black/5">
                  <div className="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-6 bg-black/5">
                    {/* Placeholder for image */}
                    <div className="absolute inset-0 flex items-center justify-center text-[#999] font-medium tracking-widest uppercase text-xs group-hover:scale-110 transition-transform duration-700 ease-out">
                       [ Image: {post.image} ]
                    </div>
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/90 backdrop-blur-md text-[#111] shadow-sm">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-0" />
                  </div>
                  
                  <div className="flex-1 flex flex-col px-2">
                    <div className="flex items-center gap-4 text-xs text-[#888] mb-4 font-semibold uppercase tracking-wider">
                      <span className="flex items-center gap-1.5"><Calendar size={14} className="text-[#E63946]" /> {post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-black/10" />
                      <span className="flex items-center gap-1.5"><Clock size={14} className="text-[#E63946]" /> {post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-heading font-extrabold mb-3 text-[#111] group-hover:text-[#E63946] transition-colors duration-300 leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-[#666] leading-relaxed mb-6 line-clamp-3 flex-1 font-medium">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto pt-5 border-t border-black/5 flex items-center justify-between">
                      <span className="flex items-center gap-2 text-xs font-bold text-[#111]"><User size={14} className="text-[#E63946]" /> {post.author}</span>
                      <div className="flex items-center gap-2 text-xs font-bold text-[#E63946] group-hover:gap-3 transition-all duration-300">
                        Read <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

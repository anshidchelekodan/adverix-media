"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const BLOG_POSTS = [
  {
    slug: "seo-guide-small-business",
    title: "Complete SEO Guide for Small Businesses",
    excerpt: "Learn how to rank higher and get more customers.",
    date: "May 25, 2026",
    image: "/blog/seo-guide.jpg",
  },
  {
    slug: "video-marketing-importance",
    title: "Why Every Business Needs Video Marketing",
    excerpt: "Video marketing can boost your brand and increase conversions.",
    date: "May 23, 2026",
    image: "/blog/video-marketing.jpg",
  },
  {
    slug: "google-vs-facebook-ads",
    title: "Google Ads vs Facebook Ads: Which is Better?",
    excerpt: "A complete comparison to help you choose the right platform.",
    date: "May 22, 2026",
    image: "/blog/google-facebook-ads.jpg",
  },
  {
    slug: "digital-marketing-trends",
    title: "Top Digital Marketing Trends to Watch in 2026",
    excerpt: "Stay ahead with the latest digital marketing trends.",
    date: "May 20, 2026",
    image: "/portfolio/technova.jpg", // Placeholder
  },
];

export default function FeaturedBlogSection() {
  return (
    <section className="section-pad-lg bg-[#f5f5f7]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[#E63946] text-xs lg:text-sm font-bold tracking-[0.2em] uppercase mb-4">
              From Our Blog
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#111]">
              Latest Insights & Trends
            </h2>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Link href="/blog" className="flex items-center gap-3 text-sm lg:text-base font-bold text-[#111] bg-white border border-gray-200 px-8 py-4 rounded-full hover:border-[#E63946] hover:text-[#E63946] transition-all shadow-sm hover:shadow-md">
              View All Blogs <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS.slice(0,3).map((post, i) => (
            <motion.div 
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, ease: "easeOut" }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`} className="block flex flex-col h-full bg-white rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-[#E63946]/10">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 bg-gray-100">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                </div>
                <div className="flex-1 flex flex-col">
                  <p className="text-xs font-bold text-[#E63946] mb-3 uppercase tracking-wider">{post.date}</p>
                  <h3 className="font-heading font-extrabold text-[#111] text-xl lg:text-2xl mb-4 group-hover:text-[#E63946] transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#666] mb-6 line-clamp-3 leading-relaxed font-medium flex-1">
                    {post.excerpt}
                  </p>
                  <p className="text-xs font-bold text-[#111] group-hover:text-[#E63946] group-hover:gap-3 flex items-center gap-2 transition-all uppercase tracking-wider mt-auto">
                    Read More <ArrowRight size={14} />
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

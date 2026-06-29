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
    <section className="section-pad bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[#E63946] text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
              From Our Blog
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#111]">
              Latest Insights & Trends
            </h2>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Link href="/blog" className="flex items-center gap-2 text-xs font-bold text-[#E63946] border border-gray-200 px-5 py-2.5 rounded-full hover:border-[#E63946] transition-colors">
              View All Blogs <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOG_POSTS.map((post, i) => (
            <motion.div 
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gray-100">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-[10px] font-bold text-[#888] mb-2">{post.date}</p>
                <h3 className="font-heading font-bold text-[#111] text-sm mb-2 group-hover:text-[#E63946] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs text-[#666] mb-3 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
                <p className="text-[10px] font-bold text-[#E63946] flex items-center gap-1">
                  Read More <ArrowRight size={10} />
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

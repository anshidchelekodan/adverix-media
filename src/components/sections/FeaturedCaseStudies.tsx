"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const PORTFOLIO_ITEMS = [
  { id: 1, title: "FH General Equipment", desc: "Increased organic traffic by 240% in 6 months with advanced SEO strategies.", category: "SEO", image: "/portfolio/technova.jpg" },
  { id: 2, title: "Sigma Home Appliances", desc: "Created high-converting ad videos that increased sales by 180%.", category: "Video Production", image: "/portfolio/technova.jpg" },
  { id: 3, title: "Kalpaka Electronics", desc: "Generated 3x more leads with Google Ads and Meta Ads.", category: "Performance Marketing", image: "/portfolio/technova.jpg" },
];

export default function FeaturedCaseStudies() {
  return (
    <section className="section-pad bg-white pt-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[#E63946] text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
              Our Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#111]">
              Work That Drives Results
            </h2>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Link href="/portfolio" className="flex items-center gap-2 text-xs font-bold text-[#E63946] border border-gray-200 px-5 py-2.5 rounded-full hover:border-[#E63946] transition-colors">
              View All Projects <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={`/case-studies`} className="block">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-gray-100 border border-gray-100">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10 bg-[#E63946] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
                    {item.category}
                  </div>
                </div>

                <h3 className="text-lg font-heading font-extrabold text-[#111] mb-2 group-hover:text-[#E63946] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#666] mb-4 font-medium leading-relaxed h-10">
                  {item.desc}
                </p>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#111] group-hover:text-[#E63946] transition-colors">
                  View Case Study <ArrowRight size={10} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

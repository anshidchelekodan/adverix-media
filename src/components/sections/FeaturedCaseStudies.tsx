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
    <section className="section-pad-lg bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[#E63946] text-xs lg:text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Our Work
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#111]">
              Work That Drives Results
            </h2>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Link href="/portfolio" className="flex items-center gap-3 text-sm lg:text-base font-bold text-[#111] bg-white border border-gray-200 px-8 py-4 rounded-full hover:border-[#E63946] hover:text-[#E63946] transition-all shadow-sm hover:shadow-md">
              View All Projects <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {PORTFOLIO_ITEMS.slice(0,2).map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, ease: "easeOut" }}
              className="group cursor-pointer"
            >
              <Link href={`/case-studies`} className="block">
                <div className="relative aspect-[4/3] xl:aspect-[16/10] rounded-3xl overflow-hidden mb-8 bg-gray-100 border border-gray-100 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                  
                  {/* Badge */}
                  <div className="absolute top-6 left-6 z-10 bg-[#E63946] text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full shadow-lg">
                    {item.category}
                  </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-heading font-extrabold text-[#111] mb-4 group-hover:text-[#E63946] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm lg:text-base text-[#666] mb-6 font-medium leading-relaxed max-w-xl">
                  {item.desc}
                </p>
                <div className="flex items-center gap-2 text-xs font-bold text-[#111] group-hover:text-[#E63946] group-hover:gap-3 transition-all uppercase tracking-wider">
                  View Case Study <ArrowRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

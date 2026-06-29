"use client";

import Link from "next/link";
import { Search, TrendingUp, Share2, Layers, Monitor, Video, FileText, BarChart3, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ElementType> = {
  Search, TrendingUp, Share2, Layers, Monitor, Video, FileText, BarChart3,
};

export default function ServicesSection() {
  return (
    <section id="services" className="section-pad-lg bg-[#f5f5f7]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[#E63946] text-xs lg:text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Our Services
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#111] max-w-2xl leading-tight">
              Complete Digital Solutions To <span className="text-[#E63946]">Grow Your Business</span>
            </h2>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Link href="/services" className="flex items-center gap-3 text-sm lg:text-base font-bold text-[#111] bg-white border border-gray-200 px-8 py-4 rounded-full hover:border-[#E63946] hover:text-[#E63946] transition-all shadow-sm hover:shadow-md">
              View All Services <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((svc, i) => {
            const Icon = iconMap[svc.icon];
            return (
              <motion.div
                key={svc.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ease: "easeOut" }}
              >
                <Link
                  href={`/services/${svc.slug}`}
                  className="group flex flex-col justify-between bg-white rounded-2xl p-10 min-h-[340px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-transparent hover:border-[#E63946]/20"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-8 transition-transform group-hover:scale-110 group-hover:bg-[#E63946]">
                      {Icon && <Icon size={24} className="text-[#E63946] group-hover:text-white transition-colors" />}
                    </div>
                    <h3 className="font-heading font-extrabold text-xl mb-4 text-[#111] group-hover:text-[#E63946] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-[#666] leading-relaxed font-medium">
                      {svc.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs font-bold text-[#E63946] mt-8 opacity-80 group-hover:opacity-100 group-hover:gap-3 transition-all uppercase tracking-wider">
                    Explore <ArrowRight size={14} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

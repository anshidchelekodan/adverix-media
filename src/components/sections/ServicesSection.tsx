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
    <section id="services" className="section-pad bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[#E63946] text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
              Our Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#111] max-w-xl">
              Complete Digital Solutions To <span className="text-[#E63946]">Grow Your Business</span>
            </h2>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Link href="/services" className="flex items-center gap-2 text-xs font-bold text-[#E63946] border border-gray-200 px-5 py-2.5 rounded-full hover:border-[#E63946] transition-colors">
              View All Services <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((svc, i) => {
            const Icon = iconMap[svc.icon];
            return (
              <motion.div
                key={svc.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={`/services/${svc.slug}`}
                  className="group block relative bg-white rounded-xl p-8 h-full transition-all duration-300 hover:shadow-xl border border-gray-100"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-6">
                    {Icon && <Icon size={20} className="text-[#E63946]" />}
                  </div>
                  <h3 className="font-heading font-bold text-sm mb-3 text-[#111]">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-[#666] leading-relaxed mb-6 font-medium">
                    {svc.description}
                  </p>
                  
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#E63946] mt-auto">
                    Explore <ArrowRight size={10} />
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

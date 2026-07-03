"use client";

import Link from "next/link";
import { Search, TrendingUp, Share2, Layers, Monitor, Video, FileText, BarChart3, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const iconMap: Record<string, React.ElementType> = {
  Search, TrendingUp, Share2, Layers, Monitor, Video, FileText, BarChart3,
};

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section id="services" ref={containerRef} className="relative section-pad-lg overflow-hidden bg-[#FAFAFA]">
      {/* Dynamic Ambient Background */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
      >
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle,rgba(230,57,70,0.04)_0%,transparent_70%)] blur-[100px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.03)_0%,transparent_70%)] blur-[120px]" />
      </motion.div>
      
      <div className="absolute inset-0 noise opacity-50 z-0 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm mb-6">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#111]">
                Our Expertise
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-heading font-extrabold text-[#0D0D0D] max-w-3xl leading-[1.05] tracking-tight">
              Enterprise Solutions Designed For <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E63946] to-[#c1121f]">Rapid Growth</span>
            </h2>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
            <Link href="/services" className="group relative inline-flex items-center justify-center gap-3 bg-white border border-black/10 text-[#0D0D0D] px-8 py-5 rounded-full font-bold text-sm lg:text-base overflow-hidden transition-all hover:border-[#E63946]/30 hover:shadow-[0_20px_40px_-10px_rgba(230,57,70,0.1)]">
              <span className="relative z-10 flex items-center gap-3 group-hover:text-[#E63946] transition-colors">
                View All Capabilities <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {SERVICES.slice(0, 8).map((svc, i) => {
            const Icon = iconMap[svc.icon] || Search;
            return (
              <motion.div
                key={svc.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <Link
                  href={`/services/${svc.slug}`}
                  className="group relative flex flex-col justify-between h-full bg-white/50 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 lg:p-10 transition-all duration-700 ease-[0.16,1,0.3,1] hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover:bg-white"
                >
                  {/* Subtle Hover Gradient Inside Card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E63946]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem] pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-[1.25rem] bg-gradient-to-br from-white to-gray-50 border border-black/5 shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-[0_12px_24px_-4px_rgba(230,57,70,0.15)] group-hover:border-white transition-all duration-500 ease-[0.16,1,0.3,1]">
                      <Icon size={26} className="text-[#0D0D0D] group-hover:text-[#E63946] transition-colors duration-500" />
                    </div>
                    <h3 className="font-heading font-extrabold text-2xl mb-4 text-[#0D0D0D] tracking-tight group-hover:text-[#E63946] transition-colors duration-500">
                      {svc.shortTitle}
                    </h3>
                    <p className="text-sm text-[#666] leading-relaxed font-medium line-clamp-3">
                      {svc.description}
                    </p>
                  </div>
                  
                  <div className="relative z-10 mt-10 inline-flex items-center justify-between w-full">
                    <span className="text-[11px] font-bold text-[#0D0D0D] uppercase tracking-widest group-hover:text-[#E63946] transition-colors">
                      Discover
                    </span>
                    <span className="w-10 h-10 rounded-full bg-white shadow-sm border border-black/5 flex items-center justify-center group-hover:bg-[#E63946] group-hover:border-[#E63946] transition-colors duration-500">
                      <ArrowRight size={16} className="text-[#0D0D0D] group-hover:text-white transition-colors" />
                    </span>
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

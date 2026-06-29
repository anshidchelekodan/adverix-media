"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-white overflow-hidden">
      {/* Full width gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-50 via-white to-red-50 opacity-90" />
      <div className="absolute inset-0 bg-[#E63946]/5" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#E63946]/10 rounded-full blur-[120px] pointer-events-none transform translate-x-1/2 -translate-y-1/2" aria-hidden />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E63946]/10 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/2 translate-y-1/2" aria-hidden />

      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="max-w-2xl">
            <p className="text-[#E63946] text-sm font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-[#E63946]" /> Ready to Grow?
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-extrabold text-[#111] leading-tight mb-4">
              Let's Build Something <br />
              <span className="text-[#E63946]">Extraordinary</span> Together
            </h2>
          </div>
          
          <div className="shrink-0 text-left md:text-right flex flex-col items-start md:items-end w-full md:w-auto border-t md:border-t-0 md:border-l border-gray-200/50 pt-8 md:pt-0 md:pl-12">
            <p className="text-base text-[#666] font-medium mb-8 max-w-sm">
              Get a <span className="font-bold text-[#111]">free strategy call</span> and discover how we can help your business grow faster.
            </p>
            <Link href="/contact" className="bg-[#E63946] hover:bg-[#c1121f] text-white px-10 py-5 rounded-full font-bold text-base flex items-center justify-center gap-3 transition-transform hover:scale-105 shadow-xl shadow-red-500/20 whitespace-nowrap w-full sm:w-auto">
              Book Free Strategy Call <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

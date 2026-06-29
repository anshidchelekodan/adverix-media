"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-red-50 border border-red-100 p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10"
        >
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 100% 0%, #E63946 0%, transparent 50%)" }} />
          
          <div className="relative z-10 max-w-xl">
            <p className="text-[#E63946] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
              Ready to Grow Your Business?
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#111] leading-tight mb-2">
              Let's Build Something <br />
              <span className="text-[#E63946]">Extraordinary</span> Together
            </h2>
          </div>
          
          <div className="relative z-10 shrink-0 text-center md:text-right flex flex-col items-center md:items-end">
            <p className="text-xs text-[#666] font-medium mb-4 max-w-[250px]">
              Get a <span className="font-bold text-[#111]">free strategy call</span> and discover how we can help your business grow faster.
            </p>
            <Link href="/contact" className="bg-[#E63946] hover:bg-[#c1121f] text-white px-8 py-4 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-red-500/20 whitespace-nowrap">
              Book Free Strategy Call <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

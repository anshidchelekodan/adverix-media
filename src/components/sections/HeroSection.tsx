"use client";

import Link from "next/link";
import { ArrowRight, Play, Star, ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section ref={containerRef} className="relative min-h-[100svh] flex items-center pt-28 pb-20 overflow-hidden bg-[#FAFAFA]">
      
      {/* Awwwards Style Ambient Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[radial-gradient(circle,rgba(230,57,70,0.06)_0%,transparent_70%)] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.04)_0%,transparent_70%)] blur-[120px] pointer-events-none" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 noise z-0" />

      <div className="container-custom relative z-10 w-full">
        <motion.div 
          style={{ y, opacity, scale }}
          className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-center justify-between"
        >
          
          {/* Left Content */}
          <div className="w-full lg:w-[50%] xl:w-[45%] flex flex-col items-start z-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#E63946] animate-pulse" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#111]">
                Premium Digital Agency
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[3.5rem] sm:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] font-heading font-extrabold text-[#0D0D0D] leading-[1.02] tracking-[-0.03em] mb-8"
            >
              Scale Your Brand With <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#E63946] to-[#c1121f]">Precision.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#666] text-lg lg:text-xl xl:text-2xl mb-12 leading-relaxed font-medium max-w-2xl"
            >
              We engineer predictable revenue growth through elite SEO, data-driven performance marketing, and cinematic visual storytelling.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-6 w-full sm:w-auto"
            >
              <Link href="/contact" className="group relative inline-flex items-center justify-center gap-3 bg-[#0D0D0D] text-white px-8 py-5 rounded-full font-bold text-sm lg:text-base overflow-hidden transition-transform hover:scale-[1.02] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] w-full sm:w-auto">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#E63946] to-[#c1121f] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                <span className="relative z-10 flex items-center gap-3">
                  Book Strategy Call <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link href="/portfolio" className="group inline-flex items-center gap-3 text-[#0D0D0D] font-bold text-sm lg:text-base px-2 py-4 hover:text-[#E63946] transition-colors w-full sm:w-auto justify-center sm:justify-start">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center border border-black/5 group-hover:border-[#E63946]/20 transition-colors">
                  <Play size={14} className="text-[#E63946] fill-[#E63946]" />
                </div>
                View Showreel
              </Link>
            </motion.div>

            {/* Premium Trust Elements */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-16 pt-8 border-t border-black/5 flex items-center gap-8 w-full"
            >
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#FAFAFA] bg-gray-200 overflow-hidden relative shadow-sm">
                    <Image src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="Client" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} className="text-[#0D0D0D] fill-[#0D0D0D]" />
                  ))}
                </div>
                <p className="text-xs font-bold text-[#666] tracking-wide">
                  Trusted by <span className="text-[#0D0D0D]">200+</span> Enterprise Brands
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Abstract Device/Visuals */}
          <div className="relative w-full lg:w-[50%] xl:w-[55%] h-[500px] lg:h-[700px] z-10 perspective-1000">
            <motion.div 
              initial={{ opacity: 0, rotateY: 15, scale: 0.9 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Main Visual Container - Apple/Linear Style */}
              <div className="relative w-full max-w-[600px] aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-white/50 backdrop-blur-3xl group">
                <video 
                  src="/home.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover scale-[1.02] group-hover:scale-105 transition-transform duration-1000 ease-[0.16,1,0.3,1]"
                />
                
                {/* Internal gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 mix-blend-overlay" />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-500">
                    <Play size={24} className="text-white fill-white ml-2" />
                  </div>
                </div>
              </div>

              {/* Floating Glass Metrics - Stripe/Awwwards style */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] left-[-5%] z-30 bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] border border-white flex flex-col gap-3 min-w-[160px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E63946] to-[#c1121f] flex items-center justify-center shadow-inner">
                    <span className="text-white font-bold text-sm">SEO</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-[#666] font-bold tracking-widest uppercase">Organic</p>
                    <p className="text-sm font-extrabold text-[#0D0D0D]">+340%</p>
                  </div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-[#E63946] h-full w-[85%] rounded-full" />
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [15, -15, 15] }} 
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[20%] right-[-10%] z-30 bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] border border-white flex flex-col gap-3 min-w-[180px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0D0D0D] flex items-center justify-center shadow-inner">
                    <span className="text-white font-bold text-sm">ROAS</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-[#666] font-bold tracking-widest uppercase">Performance</p>
                    <p className="text-sm font-extrabold text-[#0D0D0D]">5.2x Return</p>
                  </div>
                </div>
                <div className="flex items-end gap-1 h-8 mt-2">
                  {[40, 60, 50, 80, 100].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: 1.5 + (i * 0.1) }}
                      className="flex-1 bg-[#0D0D0D] rounded-t-sm"
                      style={{ opacity: 0.4 + (i * 0.15) }}
                    />
                  ))}
                </div>
              </motion.div>

            </motion.div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}

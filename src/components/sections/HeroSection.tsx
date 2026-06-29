"use client";

import Link from "next/link";
import { ArrowRight, Play, Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white">
      {/* Decorative background dot pattern */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#E63946 2px, transparent 2px)', backgroundSize: '40px 40px' }} />
           
      <div className="container-custom relative z-10 w-full py-12 lg:py-0">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-between">
          
          {/* Left Content (45%) */}
          <div className="w-full lg:w-[45%] lg:flex-shrink-0">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
              <p className="text-[#E63946] text-xs lg:text-sm font-bold tracking-widest uppercase mb-6">
                Premium Digital Marketing & Video Production Agency
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl 2xl:text-[5rem] font-heading font-extrabold text-[#111] leading-[1.05] mb-8">
                Transforming Brands Through <span className="text-[#E63946]">Strategy</span>, Creativity & Visual Storytelling
              </h1>
              <p className="text-[#666] text-lg lg:text-xl mb-10 leading-relaxed font-medium max-w-2xl">
                We help businesses grow faster with data-driven digital marketing and cinematic video production that generates measurable results.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 mb-12">
                <Link href="/contact" className="bg-[#E63946] hover:bg-[#c1121f] text-white px-8 py-4 lg:py-5 rounded-full font-bold text-sm lg:text-base flex items-center gap-3 transition-transform hover:scale-105 shadow-xl shadow-red-500/20">
                  Book Free Strategy Call <ArrowRight size={18} />
                </Link>
                <Link href="/portfolio" className="bg-white hover:bg-gray-50 text-[#111] border border-gray-200 px-8 py-4 lg:py-5 rounded-full font-bold text-sm lg:text-base flex items-center gap-3 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <Play size={18} className="text-[#E63946] fill-[#E63946]" /> Explore Our Work
                </Link>
              </div>

              {/* Happy Clients */}
              <div className="flex items-center gap-5">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-[3px] border-white bg-gray-200 overflow-hidden relative shadow-sm">
                       <Image src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="Client" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-[#111] font-bold text-base lg:text-lg mb-1">200+ Happy Clients</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-[#666] font-bold">4.9</span>
                    <span className="text-xs text-[#888] font-medium">(120+ Reviews)</span>
                    <div className="flex ml-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} size={12} className="text-[#f59e0b] fill-[#f59e0b]" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content (50%) - Image/Video with floating cards */}
          <div className="relative w-full lg:w-[50%] h-[500px] sm:h-[600px] lg:h-[700px] mt-16 lg:mt-0 lg:flex-shrink-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Main Video/Image Container */}
              <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-100 z-10">
                <video 
                  src="/home.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-black/5" />
              </div>

              {/* Floating Cards - Replicating the design exactly */}
              {/* SEO Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] left-[0%] z-20 bg-white rounded-xl p-3 shadow-xl border border-gray-100 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold">SEO</div>
                <div>
                  <p className="text-[10px] text-[#666] font-medium leading-tight">Traffic</p>
                  <p className="text-xs font-bold text-[#111] leading-tight">+180% <span className="text-green-500">↗</span></p>
                </div>
              </motion.div>

              {/* Meta Ads Card */}
              <motion.div 
                animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[15%] right-[5%] z-20 bg-white rounded-xl p-3 shadow-xl border border-gray-100 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xs">M</div>
                <div>
                  <p className="text-[10px] text-[#666] font-medium leading-tight">Meta Ads</p>
                  <p className="text-xs font-bold text-[#111] leading-tight">Leads <span className="text-green-500">+250%</span></p>
                </div>
              </motion.div>

              {/* Google Ads Card */}
              <motion.div 
                animate={{ y: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[25%] left-[-5%] z-20 bg-white rounded-xl p-3 shadow-xl border border-gray-100 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600 font-bold text-xs">G</div>
                <div>
                  <p className="text-[10px] text-[#666] font-medium leading-tight">Google Ads</p>
                  <p className="text-xs font-bold text-[#111] leading-tight">Conversions <span className="text-green-500">+220%</span></p>
                </div>
              </motion.div>

              {/* Branding Card */}
              <motion.div 
                animate={{ y: [0, 8, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-[30%] right-[-5%] z-20 bg-white rounded-xl p-3 shadow-xl border border-gray-100 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white font-bold text-xs">B</div>
                <div>
                  <p className="text-[10px] text-[#666] font-medium leading-tight">Branding</p>
                  <p className="text-xs font-bold text-[#111] leading-tight">Growth <span className="text-green-500">+200%</span></p>
                </div>
              </motion.div>
              
              {/* Video Production Card */}
              <motion.div 
                animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-[5%] left-[50%] -translate-x-1/2 z-20 bg-white rounded-xl p-3 shadow-xl border border-gray-100 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-[#E63946] font-bold text-xs">▶</div>
                <div>
                  <p className="text-[10px] text-[#666] font-medium leading-tight">Video Production</p>
                  <p className="text-xs font-bold text-[#111] leading-tight">Views <span className="text-green-500">+300k</span></p>
                </div>
              </motion.div>

            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { ArrowRight, Play, Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-white">
      {/* Decorative background dot pattern */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#E63946 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
           
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="text-[#E63946] text-xs font-bold tracking-wider uppercase mb-4">
                Premium Digital Marketing & Video Production Agency
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#111] leading-[1.1] mb-6">
                Transforming Brands Through <span className="text-[#E63946]">Strategy</span>, Creativity & Visual Storytelling
              </h1>
              <p className="text-[#666] text-base sm:text-lg mb-8 leading-relaxed font-medium">
                We help businesses grow faster with data-driven digital marketing and cinematic video production that generates measurable results.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Link href="/contact" className="bg-[#E63946] hover:bg-[#c1121f] text-white px-6 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 transition-colors shadow-lg shadow-red-500/20">
                  Book Free Strategy Call <ArrowRight size={16} />
                </Link>
                <Link href="/portfolio" className="bg-white hover:bg-gray-50 text-[#111] border border-gray-200 px-6 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 transition-colors shadow-sm">
                  <Play size={16} className="text-[#E63946] fill-[#E63946]" /> Explore Our Work
                </Link>
              </div>

              {/* Happy Clients */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative">
                       <Image src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="Client" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-[#111] font-bold text-sm">200+ Happy Clients</p>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-[#666] font-bold">4.9</span>
                    <span className="text-[10px] text-[#888]">(120+ Reviews)</span>
                    <div className="flex ml-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} size={10} className="text-[#f59e0b] fill-[#f59e0b]" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Image/Video with floating cards */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full mt-10 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Main Video/Image Container */}
              <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-100 z-10">
                <Image src="/portfolio/technova.jpg" alt="Video thumbnail" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                   <div className="w-16 h-16 bg-[#E63946] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg shadow-red-500/30">
                     <Play size={24} className="text-white fill-white ml-1" />
                   </div>
                </div>
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

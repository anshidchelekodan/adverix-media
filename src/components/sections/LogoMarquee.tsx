"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Client names provided by user
const CLIENTS = [
  "Kalpaka Electronics & Home Bazaar",
  "Sigma Electronics & Home Appliances",
  "Huelex Kids Wear",
];

export default function LogoMarquee() {
  const doubled = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section className="bg-white py-16 lg:py-24 border-b border-gray-100">
      <div className="container-custom">
        <p className="text-center text-xs lg:text-sm font-bold text-[#888] tracking-[0.2em] uppercase mb-12">
          Trusted By Growing Businesses
        </p>
        
        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden flex items-center h-16 lg:h-20 mb-24 lg:mb-32">
          {/* Left/Right Fade Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-40 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-40 bg-gradient-to-l from-white to-transparent z-10" />
          
          <motion.div 
            className="flex gap-16 lg:gap-24 items-center whitespace-nowrap px-10"
            animate={{ x: [0, -1500] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {doubled.map((name, i) => (
              <div key={i} className="text-[#111] font-heading font-extrabold text-xl lg:text-2xl uppercase tracking-widest whitespace-nowrap opacity-40 transition-opacity duration-300 hover:opacity-100 cursor-default">
                {name}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 max-w-5xl mx-auto border-t border-gray-100 pt-16 lg:pt-20">
          {[
            { label: "Projects Completed", value: "200+", icon: "🚀" },
            { label: "Happy Clients", value: "100+", icon: "👩‍💼" },
            { label: "Client Satisfaction", value: "95%", icon: "🤍" },
            { label: "Years of Experience", value: "5+", icon: "🏆" },
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="text-3xl lg:text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300 inline-block">{stat.icon}</div>
              <p className="font-heading font-extrabold text-[#111] text-4xl lg:text-5xl mb-2">{stat.value}</p>
              <p className="text-[#666] text-sm lg:text-base font-bold uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const clients = [
  "Kalpaka", "SIGMA", "FH", "FUTURIX", "DOTIN", "Rainmaker",
];

export default function LogoMarquee() {
  const doubled = [...clients, ...clients, ...clients];

  return (
    <div className="py-16 bg-white border-b border-gray-100 overflow-hidden">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <p className="text-center text-[10px] font-bold tracking-[0.2em] text-[#999] uppercase mb-12">
          Trusted By Growing Businesses
        </p>
      </motion.div>
      <div className="marquee-container relative mb-16">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        
        <div className="flex animate-marquee w-max gap-24 items-center px-10">
          {doubled.map((name, i) => (
            <div key={i} className="text-[#666] font-heading font-extrabold text-2xl uppercase tracking-widest whitespace-nowrap opacity-50 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100 cursor-default">
              {name}
            </div>
          ))}
        </div>
      </div>
      
      {/* Stats Row */}
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
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
              className="flex items-center gap-3"
            >
              <div className="text-2xl">{stat.icon}</div>
              <div>
                <div className="font-heading font-extrabold text-xl text-[#111]">{stat.value}</div>
                <div className="text-[10px] font-bold text-[#666]">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

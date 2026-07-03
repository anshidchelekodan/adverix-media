"use client";

import { motion } from "framer-motion";

const CLIENTS = [
  "FH General Equipment",
  "Sigma Home Appliances",
  "Kalpaka Electronics",
  "TechNova Solutions",
  "FitLife Wellness",
  "LuxeHome Interiors",
  "GreenEarth Organics",
  "CloudStack Tech",
  "EduReach Online",
  "RetailBridge",
];

export default function LogoMarquee() {
  return (
    <section className="py-10 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container-custom mb-6">
        <p className="text-center text-xs font-bold tracking-[0.25em] uppercase text-[#999]">
          Trusted by 200+ ambitious brands
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Gradient fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white to-transparent" />

        {/* Scrolling track */}
        <motion.div
          className="flex gap-16 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...CLIENTS, ...CLIENTS].map((name, i) => (
            <span
              key={i}
              className="text-sm font-bold text-[#bbb] hover:text-[#E63946] transition-colors duration-300 tracking-wider uppercase select-none px-4"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    desc: "We understand your brand, audience, and business goals.",
  },
  {
    number: "02",
    title: "Strategize",
    desc: "We create a data-driven strategy tailored for you.",
  },
  {
    number: "03",
    title: "Execute",
    desc: "We implement campaigns and create high-quality content.",
  },
  {
    number: "04",
    title: "Optimize",
    desc: "We continually analyze and optimize for better results.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="section-pad bg-white pt-10">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[#E63946] text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
            Our Approach
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#111]">
            Our Proven <span className="text-[#E63946]">4-Step Process</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-8 left-0 right-0 h-[2px] bg-gray-100 hidden md:block" aria-hidden />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={step.number} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Number Circle & Connecting Dash */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-white border border-[#E63946] flex items-center justify-center shrink-0 shadow-sm relative">
                    <span className="font-heading font-extrabold text-[#E63946] text-xl">{step.number}</span>
                  </div>
                  <div className="h-[2px] w-8 bg-[#E63946] hidden md:block shrink-0" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-heading font-bold text-lg mb-3 text-[#111]">{step.title}</h3>
                  <p className="text-[#666] text-xs leading-relaxed font-medium">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

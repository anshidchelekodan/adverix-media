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
    <section id="process" className="section-pad-lg bg-white">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          <p className="text-[#E63946] text-sm font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-[#E63946]" /> Our Approach <span className="w-8 h-[2px] bg-[#E63946]" />
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#111]">
            Our Proven <span className="text-[#E63946]">4-Step Process</span>
          </h2>
        </motion.div>

        <div className="relative mt-24">
          {/* Connecting Line */}
          <div className="absolute top-10 left-0 right-0 h-[2px] bg-gray-100 hidden md:block" aria-hidden />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={step.number} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, ease: "easeOut" }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Number Circle */}
                <div className="w-20 h-20 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center shrink-0 mb-8 transition-all duration-500 group-hover:border-[#E63946] group-hover:shadow-[0_0_30px_rgba(230,57,70,0.2)] bg-clip-padding relative z-10">
                  <span className="font-heading font-extrabold text-[#E63946] text-2xl group-hover:scale-110 transition-transform">{step.number}</span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-heading font-extrabold text-2xl mb-4 text-[#111] group-hover:text-[#E63946] transition-colors">{step.title}</h3>
                  <p className="text-[#666] text-sm lg:text-base leading-relaxed font-medium">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

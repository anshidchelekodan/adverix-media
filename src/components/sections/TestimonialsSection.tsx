"use client";

import { Star, ArrowRight, ArrowLeft } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-pad-lg bg-[#f5f5f7]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[#E63946] text-xs lg:text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Clients Love Us
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#111]">
              What Our Clients Say
            </h2>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex gap-4">
            <button className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-[#666] hover:text-[#E63946] hover:border-[#E63946] transition-all bg-white shadow-sm hover:shadow-md">
              <ArrowLeft size={20} />
            </button>
            <button className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-[#666] hover:text-[#E63946] hover:border-[#E63946] transition-all bg-white shadow-sm hover:shadow-md">
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.slice(0, 3).map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, ease: "easeOut" }}
              className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col justify-between group"
            >
              <div>
                <span className="text-[#E63946] font-heading font-extrabold text-7xl leading-none opacity-20 group-hover:opacity-100 transition-opacity">“</span>
                <p className="text-[#111] text-base lg:text-lg font-medium leading-relaxed mb-10 -mt-4">
                  {testimonial.content}
                </p>
              </div>

              <div className="flex items-center gap-5 pt-6 border-t border-gray-100">
                <div className="w-14 h-14 rounded-full bg-[#E63946]/10 flex items-center justify-center font-bold text-[#E63946] text-xl shrink-0 border border-[#E63946]/20">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-bold text-[#111] text-sm lg:text-base">{testimonial.name}</p>
                  <p className="text-xs text-[#666] font-medium mb-1.5">{testimonial.company}</p>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={12} className="text-[#f59e0b] fill-[#f59e0b]" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

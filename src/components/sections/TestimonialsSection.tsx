"use client";

import { Star, ArrowRight, ArrowLeft } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-pad bg-[#F8F8F8] pt-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[#E63946] text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
              Clients Love Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#111]">
              What Our Clients Say
            </h2>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#666] hover:text-[#E63946] hover:border-[#E63946] transition-colors bg-white shadow-sm">
              <ArrowLeft size={16} />
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#666] hover:text-[#E63946] hover:border-[#E63946] transition-colors bg-white shadow-sm">
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[#E63946] font-heading font-extrabold text-5xl leading-none">“</span>
                <p className="text-[#111] text-sm font-medium leading-relaxed mb-8 -mt-2">
                  {testimonial.content}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E63946]/10 flex items-center justify-center font-bold text-[#E63946] shrink-0 border border-[#E63946]/20">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-bold text-[#111] text-xs">{testimonial.name}</p>
                  <p className="text-[10px] text-[#666] font-medium">{testimonial.company}</p>
                  <div className="flex gap-0.5 mt-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={10} className="text-[#f59e0b] fill-[#f59e0b]" />
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

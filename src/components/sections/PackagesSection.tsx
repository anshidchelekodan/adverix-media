"use client";

import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const PACKAGES = [
  {
    name: "Starter Growth",
    description: "Perfect for local businesses starting their digital journey.",
    price: "Custom",
    popular: false,
    features: [
      "Local SEO Optimization",
      "Google My Business Setup",
      "Social Media Management (2 Platforms)",
      "Basic Meta Ads Setup",
      "Monthly Performance Report",
    ],
  },
  {
    name: "Professional Scale",
    description: "For growing brands needing comprehensive digital marketing.",
    price: "Custom",
    popular: true,
    features: [
      "Advanced National SEO",
      "Google Ads & Meta Ads Management",
      "Social Media Management (4 Platforms)",
      "High-Quality Content Creation",
      "Basic Video Production (1/mo)",
      "CRO & Landing Page Optimization",
      "Bi-Weekly Strategy Calls",
    ],
  },
  {
    name: "Enterprise Dominance",
    description: "The ultimate marketing package for established brands.",
    price: "Custom",
    popular: false,
    features: [
      "Complete Enterprise SEO Strategy",
      "Omnichannel Ad Campaigns (Google, Meta, YT)",
      "Premium Cinematic Video Production",
      "Full Brand Identity & Strategy",
      "Custom Website Design & Development",
      "Marketing Automation Setup",
      "Dedicated Account Manager",
    ],
  },
];

export default function PackagesSection() {
  return (
    <section id="packages" className="section-pad-lg bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E63946]/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E63946]/5 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/3 translate-y-1/3" />

      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          <p className="text-[#E63946] text-sm font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-[#E63946]" /> Pricing Plans <span className="w-8 h-[2px] bg-[#E63946]" />
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#111] mb-6 leading-tight">
            Comprehensive Digital <br /> <span className="text-[#E63946]">Marketing Packages</span>
          </h2>
          <p className="text-[#666] text-lg max-w-2xl font-medium">
            Transparent, results-driven marketing packages designed to scale your business. Choose the right plan for your current growth stage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, ease: "easeOut" }}
              className={`relative bg-white rounded-[2rem] p-10 xl:p-12 transition-all duration-500 hover:-translate-y-2 group ${
                pkg.popular 
                  ? "border-2 border-[#E63946] shadow-2xl shadow-red-500/10 lg:scale-105 z-10" 
                  : "border border-gray-200 shadow-lg hover:shadow-xl hover:border-[#E63946]/50"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E63946] text-white text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-heading font-extrabold text-[#111] mb-3">{pkg.name}</h3>
                <p className="text-sm text-[#666] font-medium leading-relaxed h-10">{pkg.description}</p>
              </div>

              <div className="mb-10 pb-8 border-b border-gray-100">
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-heading font-extrabold text-[#111] tracking-tight">{pkg.price}</span>
                  {pkg.price !== "Custom" && <span className="text-[#666] font-medium mb-1">/mo</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-[#E63946]" strokeWidth={3} />
                    </div>
                    <span className="text-[#444] text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href="/contact" 
                className={`w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                  pkg.popular 
                    ? "bg-[#E63946] text-white hover:bg-[#c1121f] shadow-lg shadow-red-500/20" 
                    : "bg-gray-50 text-[#111] hover:bg-gray-100 group-hover:bg-red-50 group-hover:text-[#E63946]"
                }`}
              >
                Get Started <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

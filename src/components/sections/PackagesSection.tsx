"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const PACKAGES = [
  {
    name: "Starter",
    price: "₹25,000",
    period: "/month",
    tag: null,
    description: "Perfect for small businesses ready to establish a strong digital presence.",
    features: [
      "SEO Audit & On-Page Optimisation",
      "2x Social Media Posts / Week",
      "Google My Business Management",
      "Monthly Analytics Report",
      "Email Support",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Growth",
    price: "₹55,000",
    period: "/month",
    tag: "Most Popular",
    description: "Ideal for growing businesses looking to scale with multi-channel marketing.",
    features: [
      "Everything in Starter",
      "Google Ads Management (up to ₹1L budget)",
      "Meta Ads Management",
      "5x Social Media Posts / Week",
      "SEO Content (2 articles/month)",
      "Bi-Weekly Strategy Calls",
      "Real-Time Dashboard Access",
    ],
    cta: "Start Growing",
    highlight: true,
  },
  {
    name: "Premium",
    price: "₹1,20,000",
    period: "/month",
    tag: null,
    description: "Comprehensive full-stack marketing for established brands demanding results.",
    features: [
      "Everything in Growth",
      "Video Production (2 reels/month)",
      "Brand Strategy & Creative Direction",
      "Full Funnel CRO",
      "Dedicated Account Manager",
      "Weekly Strategy Calls",
      "Priority 24hr Support",
    ],
    cta: "Go Premium",
    highlight: false,
  },
];

export default function PackagesSection() {
  return (
    <section id="packages" className="section-pad-lg bg-[#f5f5f7]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-[#E63946] text-xs lg:text-sm font-bold tracking-[0.2em] uppercase mb-4">
            Transparent Pricing
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#111] mb-6">
            Simple, Honest Packages
          </h2>
          <p className="text-[#666] text-lg max-w-2xl mx-auto leading-relaxed">
            No hidden fees. No surprise invoices. Choose the package that fits your ambition — or contact us for a custom proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, ease: "easeOut" }}
              className={`relative flex flex-col rounded-3xl p-10 border transition-all duration-500 hover:-translate-y-2 ${
                pkg.highlight
                  ? "bg-[#111] text-white border-[#E63946] shadow-2xl shadow-red-500/20"
                  : "bg-white text-[#111] border-gray-100 shadow-sm hover:shadow-xl hover:border-[#E63946]/20"
              }`}
            >
              {pkg.tag && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E63946] text-white text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full shadow-lg">
                  {pkg.tag}
                </div>
              )}

              <div className="mb-8">
                <h3 className={`font-heading font-extrabold text-2xl mb-2 ${pkg.highlight ? "text-white" : "text-[#111]"}`}>
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className={`text-4xl font-heading font-extrabold ${pkg.highlight ? "text-white" : "text-[#111]"}`}>
                    {pkg.price}
                  </span>
                  <span className={`text-sm font-medium ${pkg.highlight ? "text-white/60" : "text-[#999]"}`}>
                    {pkg.period}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${pkg.highlight ? "text-white/70" : "text-[#666]"}`}>
                  {pkg.description}
                </p>
              </div>

              <ul className="space-y-4 flex-1 mb-10">
                {pkg.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${pkg.highlight ? "text-[#E63946]" : "text-[#E63946]"}`}
                    />
                    <span className={`text-sm font-medium leading-relaxed ${pkg.highlight ? "text-white/80" : "text-[#444]"}`}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`flex items-center justify-center gap-3 py-4 px-8 rounded-xl font-bold text-sm transition-all ${
                  pkg.highlight
                    ? "bg-[#E63946] hover:bg-[#c1121f] text-white shadow-lg shadow-red-500/30"
                    : "bg-[#111] hover:bg-[#E63946] text-white"
                }`}
              >
                {pkg.cta} <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-[#999] mt-10">
          Need a custom plan?{" "}
          <Link href="/contact" className="text-[#E63946] font-bold hover:underline">
            Contact us
          </Link>{" "}
          for a tailored proposal.
        </p>
      </div>
    </section>
  );
}

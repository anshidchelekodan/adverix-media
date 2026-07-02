"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { SITE, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#fcfcfc] pt-24 pb-12 border-t border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">

          {/* Brand Col */}
          <div className="lg:col-span-2">
            <Link href="/" className="relative flex items-center gap-3 mb-8">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0L40 40H26L20 28L14 40H0L20 0Z" fill="#E63946" />
                <path d="M20 18L25 28H15L20 18Z" fill="white" />
              </svg>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-2xl leading-none text-[#111] tracking-tight">
                  ADVERIX
                </span>
                <span className="text-[9px] font-bold tracking-[0.3em] text-[#666]">
                  MEDIA
                </span>
              </div>
            </Link>
            <p className="text-[#666] text-sm leading-relaxed mb-10 max-w-sm font-medium">
              Digital Marketing & Video Production Agency helping brands grow through strategy, creativity and storytelling.
            </p>

            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center text-white hover:bg-[#E63946] transition-transform hover:-translate-y-1 shadow-sm">
                  {link.icon === "Instagram" && <FaInstagram size={14} />}
                  {link.icon === "Facebook" && <FaFacebookF size={14} />}
                  {link.icon === "Linkedin" && <FaLinkedinIn size={14} />}
                  {link.icon === "Youtube" && <FaYoutube size={14} />}
                  {link.icon === "Twitter" && <span className="font-bold text-xs">X</span>}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[#111] mb-8 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-[#666] hover:text-[#E63946] transition-colors font-medium">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-[#111] mb-8 text-sm uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-4">
              {["SEO", "Performance Marketing", "Social Media", "Content Marketing", "Video Production", "Branding", "Web Design"].map((s) => (
                <li key={s}>
                  <Link href={`/services`} className="text-sm text-[#666] hover:text-[#E63946] transition-colors font-medium">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-bold text-[#111] mb-8 text-sm uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-4 mb-10">
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-3 text-sm text-[#666] hover:text-[#E63946] font-medium transition-colors">
                <span className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-[#E63946]">📞</span> {SITE.phone}
              </a>
              <a href={`https://wa.me/${SITE.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-[#666] hover:text-[#E63946] font-medium transition-colors">
                <span className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-[#E63946]">💬</span> WhatsApp Us
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-sm text-[#666] hover:text-[#E63946] font-medium transition-colors">
                <span className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-[#E63946]">✉️</span> {SITE.email}
              </a>
              <p className="flex items-start gap-3 text-sm text-[#666] font-medium">
                <span className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-[#E63946] shrink-0">📍</span>
                <span className="pt-1">{SITE.address}</span>
              </p>
              <p className="flex items-start gap-3 text-sm text-[#666] font-medium">
                <span className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-[#E63946] shrink-0">🕒</span>
                <span className="pt-1">{SITE.workingHours}</span>
              </p>
            </div>

            <h4 className="font-bold text-[#111] mb-4 text-sm uppercase tracking-wider">Newsletter</h4>
            <p className="text-xs text-[#666] mb-5 font-medium leading-relaxed">Get the latest updates, tips & strategies delivered to your inbox.</p>
            <form className="relative group">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white border border-gray-200 rounded-xl py-3.5 pl-5 pr-12 text-sm focus:outline-none focus:border-[#E63946] focus:ring-1 focus:ring-[#E63946] shadow-sm transition-all"
              />
              <button type="submit" className="absolute right-2 top-2 bottom-2 bg-[#E63946] hover:bg-[#c1121f] text-white px-4 rounded-lg flex items-center justify-center transition-colors">
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-[#888] font-medium">
            © 2026 Adverix Media. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8 text-xs text-[#888] font-medium">
            <Link href="/privacy-policy" className="hover:text-[#E63946] transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-[#E63946] transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { SITE, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <Link href="/" className="relative flex items-center gap-2 mb-6">
              <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0L40 40H26L20 28L14 40H0L20 0Z" fill="#E63946"/>
                <path d="M20 18L25 28H15L20 18Z" fill="white"/>
              </svg>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg leading-none text-[#111] tracking-tight">
                  ADVERIX
                </span>
                <span className="text-[7px] font-bold tracking-[0.3em] text-[#666]">
                  MEDIA
                </span>
              </div>
            </Link>
            <p className="text-[#666] text-xs leading-relaxed mb-8 max-w-xs font-medium">
              Digital Marketing & Video Production Agency helping brands grow through strategy, creativity and storytelling.
            </p>
            
            <div className="flex gap-3">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full bg-[#111] flex items-center justify-center text-white hover:bg-[#E63946] transition-colors">
                  <Icon size={12} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[#111] mb-6 text-xs">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[11px] text-[#666] hover:text-[#E63946] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-[#111] mb-6 text-xs">Our Services</h4>
            <ul className="space-y-3">
              {["SEO", "Performance Marketing", "Social Media Marketing", "Content Marketing", "Video Production", "Branding", "Website Design"].map((s) => (
                <li key={s}>
                  <Link href={`/services`} className="text-[11px] text-[#666] hover:text-[#E63946] transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-bold text-[#111] mb-6 text-xs">Contact Us</h4>
            <div className="space-y-3 mb-8">
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 text-[11px] text-[#666] hover:text-[#E63946]">
                <span className="text-[#E63946]">📞</span> {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 text-[11px] text-[#666] hover:text-[#E63946]">
                <span className="text-[#E63946]">✉️</span> {SITE.email}
              </a>
              <p className="flex items-start gap-2 text-[11px] text-[#666]">
                <span className="text-[#E63946]">📍</span> Manjeri, Malappuram,<br/>Kerala, India
              </p>
            </div>

            <h4 className="font-bold text-[#111] mb-4 text-xs">Newsletter</h4>
            <p className="text-[10px] text-[#666] mb-4">Get the latest updates, tips & strategies delivered to your inbox.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-gray-50 border border-gray-100 rounded-lg py-2.5 pl-4 pr-10 text-[11px] focus:outline-none focus:border-[#E63946]"
              />
              <button type="submit" className="w-full mt-2 bg-[#E63946] hover:bg-[#c1121f] text-white py-2.5 rounded-lg text-[11px] font-bold transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-[#888]">
            © 2026 Adverix Media. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-[10px] text-[#888]">
            <Link href="/privacy-policy" className="hover:text-[#E63946]">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-[#E63946]">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

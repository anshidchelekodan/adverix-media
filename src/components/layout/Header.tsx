"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setIsMobileMenuOpen(false), 0);
    return () => clearTimeout(t);
  }, [pathname]);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
  };

  const mobileMenuVariants = {
    closed: { x: "100%", opacity: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
    open: { x: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
  };

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white border-b border-gray-100 ${
        isScrolled ? "py-4 shadow-sm" : "py-6"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        
        {/* Logo - Matching Figma Design */}
        <Link href="/" className="relative z-50 flex items-center gap-2 group">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0L40 40H26L20 28L14 40H0L20 0Z" fill="#E63946"/>
            <path d="M20 18L25 28H15L20 18Z" fill="white"/>
          </svg>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-xl leading-none text-[#111] tracking-tight">
              ADVERIX
            </span>
            <span className="text-[8px] font-bold tracking-[0.3em] text-[#666]">
              MEDIA
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative px-4 py-2 text-[13px] font-bold transition-colors ${
                  isActive ? "text-[#E63946]" : "text-[#555] hover:text-[#111]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA & Phone */}
        <div className="hidden md:flex items-center gap-6">
          <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 text-sm font-bold text-[#111] hover:text-[#E63946] transition-colors">
            <Phone size={14} className="text-[#E63946]" />
            {SITE.phone}
          </a>
          <Link href="/contact" className="bg-[#E63946] hover:bg-[#c1121f] text-white text-[13px] font-bold py-2.5 px-6 rounded-full transition-colors flex items-center gap-2">
            Book Free Call <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative z-50 p-2 text-[#111]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-white z-40 lg:hidden flex flex-col justify-center items-center pt-20"
          >
            <nav className="flex flex-col items-center gap-6 w-full px-6">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-2xl font-heading font-extrabold ${isActive ? "text-[#E63946]" : "text-[#111]"}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              
              <div className="mt-8 w-full max-w-xs flex flex-col gap-4">
                <a href={`tel:${SITE.phone}`} className="w-full py-4 bg-gray-50 flex items-center justify-center gap-2 rounded-xl text-[#111] font-bold">
                  <Phone size={16} className="text-[#E63946]" /> Call Us
                </a>
                <Link href="/contact" className="w-full py-4 bg-[#E63946] text-white flex items-center justify-center gap-2 rounded-xl font-bold">
                  Book Free Call <ArrowRight size={16} />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

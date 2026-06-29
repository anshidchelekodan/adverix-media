import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Play, Eye } from "lucide-react";
import { SITE, PORTFOLIO_CATEGORIES } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Our Portfolio — Adverix Media",
  description: "Browse the Adverix Media portfolio. View our best work across branding, website design, video production, and social media campaigns.",
  alternates: { canonical: `${SITE.url}/portfolio` },
};

const portfolioItems = [
  { id: 1, title: "LuxeHome Brand Identity", client: "LuxeHome", industry: "Real Estate", result: "60% More Inquiries", category: "Branding", image: "/portfolio/luxehome.jpg" },
  { id: 2, title: "TechNova SaaS Platform", client: "TechNova", industry: "SaaS", result: "340% Traffic Growth", category: "Website", image: "/portfolio/technova.jpg" },
  { id: 3, title: "FitLife Google Ads Campaign", client: "FitLife", industry: "Health", result: "9.4x ROAS", category: "Ads", image: "/portfolio/fitlife.jpg" },
  { id: 4, title: "CloudStack Product Video", client: "CloudStack", industry: "Tech", result: "2M+ Views", category: "Video", image: "/portfolio/cloudstack.jpg" },
  { id: 5, title: "GreenEarth Instagram Strategy", client: "GreenEarth", industry: "Eco", result: "50K New Followers", category: "Social Media", image: "/portfolio/greenearth.jpg" },
  { id: 6, title: "EduReach Web Portal", client: "EduReach", industry: "Education", result: "8.3% Conv. Rate", category: "Website", image: "/portfolio/edureach.jpg" },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="pt-36 pb-16 hero-bg relative overflow-hidden">
        <div className="container-custom">
          <Reveal direction="up">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#666] mb-8">
              <Link href="/" className="hover:text-[#E63946] transition-colors font-bold">Home</Link>
              <span>/</span>
              <span className="text-[#E63946] font-bold">Portfolio</span>
            </nav>
            <div className="line-deco mb-4">Our Work</div>
            <h1 className="text-5xl sm:text-6xl font-heading font-extrabold mb-5 max-w-3xl text-[#111]">
              Creative <span className="text-gradient">Excellence</span>
            </h1>
            <p className="text-lg text-[#666] max-w-2xl leading-relaxed mb-10 font-medium">
              A curated selection of our finest work. We blend strategic thinking with award-worthy creative execution.
            </p>

            <div className="flex flex-wrap gap-3">
              {PORTFOLIO_CATEGORIES.map((cat, i) => (
                <button
                  key={cat}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
                    i === 0 ? "bg-[#E63946] text-white" : "bg-white border border-black/5 text-[#555] hover:border-[#E63946]/30 hover:text-[#E63946]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-[#F8F8F8]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10">
            {portfolioItems.map((item, i) => (
              <Reveal key={item.id} direction="up" delay={i * 80}>
                <Link href={`/case-studies`} className="group relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-black/5 border border-black/5 cursor-pointer block shadow-sm">
                  {/* Placeholder for actual high-res image */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-[#999] group-hover:scale-105 transition-transform duration-700 ease-out">
                    {item.category === "Video" ? <Play size={48} className="mb-2 opacity-50" /> : <Eye size={48} className="mb-2 opacity-50" />}
                    <span className="text-sm font-medium tracking-widest uppercase">Placeholder Image</span>
                  </div>
                  
                  {/* Premium Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10 z-10">
                    
                    <div className="flex items-center gap-3 mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-[10px] font-bold uppercase tracking-widest border border-white/20">
                        {item.industry}
                      </span>
                      <span className="px-3 py-1 bg-[#E63946]/90 rounded-full text-white text-[10px] font-bold uppercase tracking-widest">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="text-3xl font-heading font-extrabold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-white/80 font-medium text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 mb-6">
                      Client: <span className="text-white font-bold">{item.client}</span> | Result: <span className="text-[#E63946] font-bold">{item.result}</span>
                    </p>

                    <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-4 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-150">
                      View Case Study <ArrowRight size={14} className="text-[#E63946]" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          
          <Reveal direction="up" delay={200}>
            <div className="text-center mt-20">
              <Link href="/contact" className="btn-outline">
                Start Your Project <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}

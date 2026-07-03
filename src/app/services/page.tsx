import type { Metadata } from "next";
import Link from "next/link";
import { Search, TrendingUp, Share2, Layers, Monitor, Video, FileText, BarChart3, ArrowRight } from "lucide-react";
import { SITE, SERVICES } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Digital Marketing Services — SEO, Ads, Branding & More",
  description:
    "Explore Adverix Media's full suite of digital marketing services: SEO, Google Ads, Meta Ads, Brand Strategy, Website Design, Video Production, and Conversion Rate Optimisation.",
  alternates: { canonical: `${SITE.url}/services` },
  openGraph: { url: `${SITE.url}/services` },
};

const iconMap: Record<string, React.ElementType> = {
  Search, TrendingUp, Share2, Layers, Monitor, Video, FileText, BarChart3,
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Digital Marketing Services",
  itemListElement: SERVICES.map((s, i) => ({
    "@type": "Service",
    position: i + 1,
    name: s.title,
    description: s.description,
    provider: { "@type": "Organization", name: SITE.name },
    url: `${SITE.url}/services/${s.slug}`,
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="pt-36 pb-20 relative overflow-hidden bg-[#FAFAFA]">
        <div className="absolute inset-0 noise z-0" />
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,rgba(230,57,70,0.05)_0%,transparent_70%)] blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.03)_0%,transparent_70%)] blur-[120px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <Reveal direction="up">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#666] mb-8 font-bold tracking-wider">
              <Link href="/" className="hover:text-[#E63946] transition-colors">HOME</Link>
              <span className="text-black/20">/</span>
              <span className="text-[#E63946]">SERVICES</span>
            </nav>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E63946] animate-pulse" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#111]">
                Enterprise Solutions
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-heading font-extrabold mb-6 max-w-4xl text-[#0D0D0D] leading-[1.05] tracking-tight">
              Full-Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E63946] to-[#c1121f]">Digital Growth</span>
            </h1>
            <p className="text-xl text-[#666] max-w-2xl leading-relaxed font-medium">
              From technical SEO to cinematic video production — every service we offer is engineered to generate measurable revenue and build lasting brand authority.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services Grid - Premium Glassmorphism */}
      <section className="section-pad relative bg-[#FAFAFA]">
        <div className="absolute inset-0 noise opacity-50 z-0 pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SERVICES.map((svc, i) => {
              const Icon = iconMap[svc.icon] || Search;
              return (
                <Reveal key={svc.slug} direction="up" delay={i * 50}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="group relative block h-full overflow-hidden rounded-[2rem] bg-white/40 backdrop-blur-2xl border border-white/60 p-8 sm:p-10 transition-all duration-700 ease-[0.16,1,0.3,1] hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover:bg-white/80 z-10"
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E63946]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    
                    <div className="relative z-20 flex flex-col sm:flex-row gap-6 sm:gap-8 h-full">
                      <div className="shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-white shadow-[0_8px_16px_-4px_rgba(0,0,0,0.05)] flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_12px_24px_-4px_rgba(230,57,70,0.15)] transition-all duration-500">
                          <Icon size={28} className="text-[#0D0D0D] group-hover:text-[#E63946] transition-colors duration-500" />
                        </div>
                      </div>
                      
                      <div className="flex-1 flex flex-col">
                        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl mb-3 text-[#0D0D0D] group-hover:text-[#E63946] transition-colors duration-500 tracking-tight">
                          {svc.title}
                        </h2>
                        
                        <p className="text-[#666] text-base leading-relaxed mb-6 font-medium">
                          {svc.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                          {svc.subServices.map((sub) => (
                            <span key={sub} className="text-[11px] font-bold px-3 py-1.5 rounded-full bg-white border border-black/5 text-[#555] shadow-sm uppercase tracking-wider">
                              {sub}
                            </span>
                          ))}
                        </div>
                        
                        <div className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-[#0D0D0D] uppercase tracking-widest group-hover:text-[#E63946] transition-colors">
                          Explore Capability 
                          <span className="w-8 h-8 rounded-full bg-white shadow-sm border border-black/5 flex items-center justify-center group-hover:translate-x-2 group-hover:border-[#E63946]/20 transition-all duration-500">
                            <ArrowRight size={14} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

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
      <section className="pt-36 pb-20 hero-bg relative overflow-hidden">
        <div className="container-custom">
          <Reveal direction="up">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#666] mb-8">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#E63946]">Services</span>
            </nav>
            <div className="line-deco mb-4">What We Offer</div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-extrabold mb-6 max-w-3xl">
              Full-Stack <span className="text-gradient">Digital Marketing</span> Services
            </h1>
            <p className="text-xl text-[#666] max-w-2xl leading-relaxed">
              From SEO to cinematic video — every service we offer is engineered to generate measurable growth and build lasting brand authority.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-pad bg-[#F8F8F8]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((svc, i) => {
              const Icon = iconMap[svc.icon];
              return (
                <Reveal key={svc.slug} direction="up" delay={i * 70}>
                  <div className="glass rounded-2xl border border-black/5 p-8 card-hover group border-glow h-full">
                    <div className="flex items-start gap-5 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#E63946]/10 border border-[#E63946]/20 flex items-center justify-center shrink-0 group-hover:bg-[#E63946]/20 transition-colors">
                        {Icon && <Icon size={26} className="text-[#E63946]" />}
                      </div>
                      <div>
                        <h2 className="font-heading font-bold text-xl mb-1">{svc.title}</h2>
                        <div className="flex flex-wrap gap-2">
                          {svc.subServices.map((sub) => (
                            <span key={sub} className="text-xs px-2 py-1 rounded-full bg-black/5 text-[#666] border border-black/5">
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-[#666] text-sm leading-relaxed mb-6">{svc.description}</p>
                    <Link
                      href={`/services/${svc.slug}`}
                      className="flex items-center gap-2 text-sm font-semibold text-[#E63946] hover:gap-3 transition-all"
                      aria-label={`Learn more about ${svc.title}`}
                    >
                      Explore Service <ArrowRight size={14} />
                    </Link>
                  </div>
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

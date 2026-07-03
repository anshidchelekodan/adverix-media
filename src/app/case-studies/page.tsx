import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { SITE } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Case Studies — Adverix Media",
  description: "Explore our featured case studies. See how we've helped businesses achieve 10x ROI through SEO, Performance Marketing, Branding, and Video.",
  alternates: { canonical: `${SITE.url}/case-studies` },
};

const caseStudies = [
  {
    slug: "technova-seo-growth",
    client: "TechNova Solutions",
    industry: "B2B SaaS",
    service: "SEO",
    headline: "340% Organic Traffic Growth in 6 Months",
    metric1: { label: "Traffic Growth", val: "+340%" },
    metric2: { label: "Keywords Ranking", val: "200+" },
    metric3: { label: "Organic Revenue", val: "+₹28L" },
  },
  {
    slug: "fitlife-google-ads",
    client: "FitLife Wellness",
    industry: "Health & Wellness",
    service: "Google Ads",
    headline: "55% Lower Cost-Per-Lead with 3x More Conversions",
    metric1: { label: "CPL Reduction", val: "-55%" },
    metric2: { label: "Conv. Rate", val: "3x" },
    metric3: { label: "Monthly ROAS", val: "9.4x" },
  },
  {
    slug: "luxehome-branding",
    client: "LuxeHome Interiors",
    industry: "Interior Design",
    service: "Branding",
    headline: "Premium Brand Rebrand Drives 60% More High-Ticket Inquiries",
    metric1: { label: "Inquiries Growth", val: "+60%" },
    metric2: { label: "Avg. Deal Size", val: "+45%" },
    metric3: { label: "Brand Recall", val: "94%" },
  },
  {
    slug: "cloudstack-video",
    client: "CloudStack Tech",
    industry: "Technology",
    service: "Video Production",
    headline: "Cinematic Product Video Generates 2M Views and 40% Demo Spike",
    metric1: { label: "Views", val: "2M+" },
    metric2: { label: "Demo Requests", val: "+40%" },
    metric3: { label: "Engagement", val: "8.5%" },
  },
  {
    slug: "greenearth-social",
    client: "GreenEarth Organics",
    industry: "E-commerce",
    service: "Social Media",
    headline: "From 2K to 50K Engaged Instagram Followers in 8 Months",
    metric1: { label: "Follower Growth", val: "2400%" },
    metric2: { label: "Engagement Rate", val: "6.2%" },
    metric3: { label: "Social Sales", val: "+120%" },
  },
  {
    slug: "edureach-website",
    client: "EduReach Online",
    industry: "EdTech",
    service: "Website Design",
    headline: "High-Performance Next.js Website Increases Conversion Rate to 8.3%",
    metric1: { label: "Load Time", val: "0.8s" },
    metric2: { label: "Conversion Rate", val: "8.3%" },
    metric3: { label: "Bounce Rate", val: "-45%" },
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="pt-36 pb-16 hero-bg relative overflow-hidden">
        <div className="container-custom">
          <Reveal direction="up">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#666] mb-8">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#E63946]">Case Studies</span>
            </nav>
            <div className="line-deco mb-4">Proven Results</div>
            <h1 className="text-5xl sm:text-6xl font-heading font-extrabold mb-5 max-w-3xl">
              Client <span className="text-gradient">Success Stories</span>
            </h1>
            <p className="text-lg text-[#666] max-w-2xl leading-relaxed">
              We measure our success by the growth of our clients. Explore how we&apos;ve helped ambitious brands achieve their revenue goals.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-[#F8F8F8]">
        <div className="container-custom space-y-6">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} direction="up" delay={i * 80}>
              <Link
                href={`/case-studies/${cs.slug}`}
                className="group block glass rounded-2xl border border-black/5 p-8 card-hover border-glow"
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#E63946]/10 text-[#E63946] border border-[#E63946]/20">
                        {cs.service}
                      </span>
                      <span className="text-xs text-[#666]">{cs.industry}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold mb-2 group-hover:text-[#E63946] transition-colors">
                      {cs.headline}
                    </h3>
                    <p className="text-sm text-[#666]">{cs.client}</p>
                  </div>

                  <div className="flex gap-8 shrink-0">
                    {[cs.metric1, cs.metric2, cs.metric3].map((m) => (
                      <div key={m.label} className="text-center">
                        <p className="text-2xl font-heading font-extrabold text-[#E63946] mb-0.5">{m.val}</p>
                        <p className="text-xs text-[#666] whitespace-nowrap">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-[#E63946] font-semibold group-hover:gap-3 transition-all shrink-0">
                    <TrendingUp size={16} /> Read Study <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      
      <CTASection />
    </>
  );
}

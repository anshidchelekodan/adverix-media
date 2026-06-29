import type { Metadata } from "next";
import Link from "next/link";
import { SITE, FAQ_GENERAL } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Adverix Media",
  description:
    "Find answers to the most common questions about Adverix Media's digital marketing services, pricing, timelines, and approach. 20 detailed FAQs covering SEO, ads, branding, and more.",
  alternates: { canonical: `${SITE.url}/faq` },
  openGraph: { url: `${SITE.url}/faq` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_GENERAL.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="pt-36 pb-16 hero-bg relative overflow-hidden">
        <div className="container-custom">
          <Reveal direction="up">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#666] mb-8">
              <Link href="/" className="hover:text-foreground">Home</Link>
              <span>/</span>
              <span className="text-[#E63946]">FAQ</span>
            </nav>
            <div className="line-deco mb-4">Got Questions?</div>
            <h1 className="text-5xl sm:text-6xl font-heading font-extrabold mb-5">
              Frequently Asked{" "}
              <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-lg text-[#666] max-w-xl">
              Everything you need to know about working with Adverix Media — from services and pricing to timelines and results.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ List */}
      <section className="section-pad bg-[#F8F8F8]">
        <div className="container-custom max-w-3xl mx-auto space-y-4">
          {FAQ_GENERAL.map((item, i) => (
            <Reveal key={i} direction="up" delay={i * 40}>
              <details className="group glass rounded-2xl border border-black/5 overflow-hidden cursor-pointer">
                <summary className="flex items-center justify-between p-6 gap-4 list-none">
                  <h2 className="font-heading font-bold text-base pr-4 leading-snug">
                    {item.q}
                  </h2>
                  <span className="w-6 h-6 rounded-full bg-[#E63946]/10 border border-[#E63946]/20 flex items-center justify-center shrink-0 text-[#E63946] text-sm font-bold group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-sm text-[#666] leading-relaxed border-t border-black/5 pt-4">
                    {item.a}
                  </p>
                </div>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" delay={200}>
          <div className="text-center mt-14">
            <p className="text-[#666] mb-5 text-sm">Still have questions? We&apos;d love to help.</p>
            <Link href="/contact" className="btn-primary">
              <span>Book a Free Strategy Call</span>
            </Link>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}

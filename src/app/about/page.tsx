import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import CTASection from "@/components/sections/CTASection";git pu
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Adverix Media — Our Story, Mission & Values",
  description:
    "Learn about Adverix Media — a premium digital marketing agency founded to help ambitious brands grow through strategy, creativity, and cutting-edge digital execution.",
  alternates: { canonical: `${SITE.url}/about` },
  openGraph: { url: `${SITE.url}/about` },
};

const timeline = [
  { year: "2019", title: "Founded in Mumbai", desc: "Adverix Media was born with a mission to deliver premium, results-driven digital marketing to ambitious brands." },
  { year: "2020", title: "First 20 Clients", desc: "Scaled rapidly through word-of-mouth, serving e-commerce, SaaS, and hospitality brands across India." },
  { year: "2021", title: "Launched Video Production", desc: "Expanded services to include cinematic video production — commercial ads, corporate films, and product videos." },
  { year: "2022", title: "50+ Active Clients", desc: "Crossed a major milestone with 50+ active retainer clients and expanded the team to 25+ specialists." },
  { year: "2023", title: "Google & Meta Partner", desc: "Achieved official Google Partner and Meta Business Partner status — validating our performance marketing excellence." },
  { year: "2024", title: "AI-Powered Marketing", desc: "Integrated AI tools into our workflow for faster, smarter campaign execution and predictive analytics." },
  { year: "2025+", title: "Global Expansion", desc: "Serving clients in India, UAE, USA, UK, and Australia — with a mission to become Asia's most trusted marketing agency." },
];

const values = [
  { title: "Excellence", desc: "We set the bar high — for ourselves, our campaigns, and the results we deliver." },
  { title: "Transparency", desc: "No hidden fees, no vanity metrics. Clear reporting, honest communication, always." },
  { title: "Innovation", desc: "We stay ahead of every algorithm, platform change, and creative trend." },
  { title: "Integrity", desc: "We only take on clients we can genuinely help, and we always deliver on our promises." },
  { title: "Partnership", desc: "Your success is our success. We build relationships, not just campaigns." },
  { title: "Impact", desc: "Every strategy we create is designed to create a measurable, lasting impact." },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-36 pb-20 bg-background relative overflow-hidden hero-bg">
        <div className="container-custom">
          <Reveal direction="up">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#666] mb-8">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#E63946]">About</span>
            </nav>
            <div className="line-deco mb-4">Our Story</div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-extrabold mb-6 max-w-3xl leading-tight">
              Obsessed with{" "}
              <span className="text-gradient">Your Growth</span>
            </h1>
            <p className="text-xl text-[#666] max-w-2xl leading-relaxed">
              We are Adverix Media — a team of strategists, creatives, and technologists who believe that every ambitious brand deserves world-class marketing.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-[#F8F8F8] border-y border-black/5">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: "200+", label: "Projects Delivered" },
            { num: "100+", label: "Happy Clients" },
            { num: "5+", label: "Years Experience" },
            { num: "95%", label: "Client Retention" },
          ].map((s, i) => (
            <Reveal key={s.label} direction="up" delay={i * 80}>
              <div className="text-center">
                <div className="stat-number mb-1"><AnimatedCounter end={s.num} /></div>
                <p className="text-sm text-[#666]">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section-pad bg-background">
        <div className="container-custom grid md:grid-cols-2 gap-10">
          {[
            {
              label: "Our Mission",
              title: "Empowering Brands to Reach Their Full Digital Potential",
              body: "We exist to help ambitious businesses unlock explosive growth through premium digital marketing strategies. We combine deep expertise, cutting-edge technology, and relentless creativity to deliver results that move the needle — not just vanity metrics, but real revenue.",
              list: ["Measurable business outcomes", "Transparent processes", "Continuous innovation", "Long-term brand building"],
            },
            {
              label: "Our Vision",
              title: "To Become Asia's Most Trusted Digital Marketing Agency",
              body: "We are building toward a future where every brand — regardless of size — has access to world-class marketing that drives sustainable growth. Our vision is to become the agency that ambitious founders trust when they want to build something extraordinary.",
              list: ["Global reach, local insight", "AI-powered execution", "Creative excellence", "Category-defining results"],
            },
          ].map((card) => (
            <Reveal key={card.label} direction="up">
              <div className="glass rounded-2xl border border-black/5 p-8 h-full">
                <div className="line-deco mb-4">{card.label}</div>
                <h2 className="text-2xl font-heading font-extrabold mb-4">{card.title}</h2>
                <p className="text-[#666] text-sm leading-relaxed mb-6">{card.body}</p>
                <ul className="space-y-2">
                  {card.list.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-[#444]">
                      <CheckCircle size={15} className="text-[#E63946] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-[#F8F8F8]">
        <div className="container-custom">
          <Reveal direction="up">
            <div className="text-center mb-14">
              <div className="line-deco justify-center mb-4">Our Journey</div>
              <h2 className="text-4xl font-heading font-extrabold">
                From Startup to <span className="text-gradient">Market Leader</span>
              </h2>
            </div>
          </Reveal>
          <div className="relative max-w-3xl mx-auto space-y-8">
            <div className="absolute left-[3.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-[#E63946]/50 to-transparent" aria-hidden />
            {timeline.map((t, i) => (
              <Reveal key={t.year} direction="left" delay={i * 80}>
                <div className="flex gap-8 items-start">
                  <div className="shrink-0 w-28 text-right">
                    <span className="text-sm font-heading font-bold text-[#E63946]">{t.year}</span>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-8 top-1.5 w-3 h-3 rounded-full bg-[#E63946] border-2 border-[#0D0D0D] animate-pulse-red" />
                    <div className="glass rounded-xl border border-black/5 p-5">
                      <h3 className="font-heading font-bold text-sm mb-1">{t.title}</h3>
                      <p className="text-xs text-[#666] leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-background">
        <div className="container-custom">
          <Reveal direction="up">
            <div className="text-center mb-14">
              <div className="line-deco justify-center mb-4">What We Stand For</div>
              <h2 className="text-4xl font-heading font-extrabold">
                Our <span className="text-gradient">Core Values</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} direction="up" delay={i * 70}>
                <div className="glass rounded-2xl border border-black/5 p-6 card-hover border-glow">
                  <h3 className="font-heading font-bold text-xl text-[#E63946] mb-3">{v.title}</h3>
                  <p className="text-sm text-[#666] leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

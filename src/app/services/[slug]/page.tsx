import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { SITE, SERVICES, TESTIMONIALS, FAQ_GENERAL } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";
import CTASection from "@/components/sections/CTASection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const svc = SERVICES.find((s) => s.slug === slug);
  if (!svc) return {};
  return {
    title: `${svc.title} Services in India | Adverix Media`,
    description: `${svc.description} Adverix Media delivers measurable results with our expert ${svc.title.toLowerCase()} services.`,
    alternates: { canonical: `${SITE.url}/services/${slug}` },
    openGraph: { url: `${SITE.url}/services/${slug}` },
  };
}

const serviceDetails: Record<string, {
  heroSub: string;
  benefits: string[];
  process: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}> = {
  seo: {
    heroSub: "Dominate Google rankings and drive a consistent stream of high-quality organic traffic that compounds over time.",
    benefits: [
      "Page 1 rankings for high-intent keywords",
      "Technical SEO audit & fixes",
      "Local SEO for Google Maps visibility",
      "Content strategy & execution",
      "Link building & authority growth",
      "Monthly ranking & traffic reports",
    ],
    process: [
      { title: "SEO Audit", desc: "We analyse your website's technical health, on-page factors, backlink profile, and competitor rankings." },
      { title: "Keyword Strategy", desc: "We identify high-intent, commercial keywords with the best opportunity for ranking and traffic." },
      { title: "On-Page Optimisation", desc: "We optimise meta tags, headings, content, internal links, and schema markup across your site." },
      { title: "Technical SEO", desc: "We fix crawl errors, improve Core Web Vitals, optimise site speed, and ensure mobile-friendliness." },
      { title: "Link Building", desc: "We earn high-authority backlinks through digital PR, guest posts, and content marketing." },
      { title: "Reporting & Growth", desc: "Monthly reports with traffic, rankings, and revenue attribution — always improving." },
    ],
    faqs: [
      { q: "How long does SEO take to show results?", a: "Most clients see meaningful improvements within 3–6 months, with compounding results from 6–12 months onwards." },
      { q: "Do you guarantee first-page rankings?", a: "No ethical agency can guarantee rankings — but our data-driven process consistently delivers first-page results for our target keywords." },
      { q: "What's included in your SEO service?", a: "Technical audit, keyword research, on-page optimisation, content creation, link building, Core Web Vitals, and monthly reporting." },
    ],
  },
  "performance-marketing": {
    heroSub: "ROI-focused paid advertising that puts your brand in front of the right people at the right time — and converts them into customers.",
    benefits: [
      "Google Search, Display & Shopping Ads",
      "Meta (Facebook & Instagram) Ads",
      "YouTube Ads & video campaigns",
      "Conversion-optimised landing pages",
      "A/B testing & creative iteration",
      "Real-time performance dashboards",
    ],
    process: [
      { title: "Audit & Research", desc: "We audit existing campaigns and research your audience, competitors, and market positioning." },
      { title: "Strategy & Structure", desc: "We build campaign architectures aligned with your funnel — from awareness to conversion." },
      { title: "Creative Production", desc: "We create compelling ad copy, visuals, and video creatives that stop the scroll." },
      { title: "Launch & Monitor", desc: "We launch campaigns and monitor performance daily, making real-time adjustments." },
      { title: "Optimise & Scale", desc: "We identify winning ad sets, scale budgets intelligently, and kill underperformers." },
      { title: "Report & Refine", desc: "Weekly insights and monthly strategic reviews to continuously improve ROAS." },
    ],
    faqs: [
      { q: "What is ROAS and what should I expect?", a: "ROAS (Return on Ad Spend) measures revenue generated per rupee spent. Our average client achieves 8.2x ROAS across campaigns." },
      { q: "What's the minimum ad budget you work with?", a: "We recommend a minimum ad spend of ₹50,000/month for meaningful results, with our management fee separate." },
      { q: "Do you manage Google Ads and Meta Ads together?", a: "Yes — we offer integrated cross-platform campaigns for maximum reach and attribution accuracy." },
    ],
  },
  "social-media-marketing": {
    heroSub: "Build a powerful social media presence that turns followers into loyal customers and brand advocates.",
    benefits: [
      "Full social media strategy",
      "Daily content creation & scheduling",
      "Community management & engagement",
      "Influencer marketing campaigns",
      "Paid social amplification",
      "Monthly analytics reporting",
    ],
    process: [
      { title: "Audit & Positioning", desc: "We audit your current social presence and define your brand voice, tone, and content pillars." },
      { title: "Content Calendar", desc: "We build a 30-day content calendar with a mix of educational, inspirational, and promotional content." },
      { title: "Design & Create", desc: "Our creative team produces on-brand graphics, reels, carousels, and copy for every platform." },
      { title: "Publish & Engage", desc: "We publish content at optimal times and actively engage with your community." },
      { title: "Amplify with Ads", desc: "We boost top-performing organic content with paid amplification for maximum reach." },
      { title: "Analyse & Optimise", desc: "Monthly performance reviews to refine strategy and double down on what drives results." },
    ],
    faqs: [
      { q: "Which social media platforms do you manage?", a: "We primarily manage Instagram, Facebook, LinkedIn, and YouTube — customised based on where your audience lives." },
      { q: "How quickly can we grow followers?", a: "Organic growth varies, but our clients typically see 200–500% follower growth in the first 6 months with the right strategy." },
      { q: "Do you create the content or do we provide it?", a: "We handle all content creation — strategy, design, copywriting, and scheduling. You just approve and we execute." },
    ],
  },
  "brand-strategy": {
    heroSub: "Craft a brand identity that commands premium positioning, builds instant trust, and makes your competitors irrelevant.",
    benefits: [
      "Brand positioning & strategy",
      "Logo design & visual identity",
      "Brand guidelines document",
      "Typography & colour system",
      "Brand voice & messaging",
      "Marketing collateral design",
    ],
    process: [
      { title: "Discovery Workshop", desc: "We dive deep into your vision, target audience, competitive landscape, and brand aspirations." },
      { title: "Research & Analysis", desc: "We analyse your market, competitors, and audience to identify white-space positioning opportunities." },
      { title: "Brand Strategy", desc: "We define your brand positioning, unique value proposition, messaging hierarchy, and personality." },
      { title: "Visual Identity", desc: "We design your logo, colour palette, typography system, and visual language — all premium, all intentional." },
      { title: "Brand Guidelines", desc: "We deliver a comprehensive brand guidelines document ensuring consistency across all touchpoints." },
      { title: "Rollout Support", desc: "We apply your new brand across key marketing materials, website, and social media templates." },
    ],
    faqs: [
      { q: "How long does a branding project take?", a: "A complete brand identity project typically takes 4–8 weeks depending on complexity and feedback cycles." },
      { q: "Will we own all the brand assets?", a: "Yes — all final deliverables, source files, and intellectual property transfer to you upon project completion." },
      { q: "Can you rebrand an existing business?", a: "Absolutely. Rebranding is one of our specialities — we help businesses evolve their identity without losing existing brand equity." },
    ],
  },
  "website-design": {
    heroSub: "Premium websites that load fast, look stunning, and convert visitors into customers with precision-engineered UX.",
    benefits: [
      "Custom UI/UX design",
      "Next.js or WordPress development",
      "Mobile-first responsive design",
      "Core Web Vitals optimised",
      "SEO-ready on day one",
      "Conversion rate optimised",
    ],
    process: [
      { title: "Discovery & Sitemap", desc: "We map your website architecture, user journeys, and conversion goals before a single line is written." },
      { title: "UX Wireframes", desc: "We create wireframes that define layout, flow, and user experience hierarchy." },
      { title: "Visual Design", desc: "We design pixel-perfect, brand-aligned mockups that wow at first glance." },
      { title: "Development", desc: "We build with clean, performant code — Next.js, TypeScript, and modern best practices." },
      { title: "SEO & Speed", desc: "We optimise for Core Web Vitals, mobile performance, and technical SEO from the ground up." },
      { title: "Launch & Support", desc: "We handle deployment, DNS, and provide 30 days of post-launch support." },
    ],
    faqs: [
      { q: "How long does a website project take?", a: "Landing pages take 1–2 weeks; corporate websites typically take 4–8 weeks depending on scope." },
      { q: "Do you design and develop, or just design?", a: "We do both — full-stack design and development under one roof for a seamless, consistent output." },
      { q: "Will my website be optimised for SEO?", a: "Yes. Every website we build includes technical SEO foundations, schema markup, proper heading structure, and Core Web Vitals optimisation." },
    ],
  },
  "video-production": {
    heroSub: "Cinematic video content that tells your brand story with stunning visual quality and drives real engagement.",
    benefits: [
      "Commercial & brand films",
      "Product videos & demos",
      "Corporate & testimonial videos",
      "Social media reels & shorts",
      "Motion graphics & animation",
      "Event coverage & photography",
    ],
    process: [
      { title: "Concept & Script", desc: "We develop the creative concept, script, and storyboard aligned with your campaign goals." },
      { title: "Pre-Production", desc: "We handle casting, location scouting, shot lists, and logistics for a smooth shoot day." },
      { title: "Filming", desc: "Our professional crew captures stunning footage with cinema-grade cameras and lighting." },
      { title: "Post-Production", desc: "Expert editing, colour grading, motion graphics, and sound design to create the final cut." },
      { title: "Review & Revise", desc: "We incorporate your feedback with up to 3 rounds of revisions per project." },
      { title: "Delivery & Distribution", desc: "We deliver optimised formats for all platforms — YouTube, Instagram, LinkedIn, TV." },
    ],
    faqs: [
      { q: "What types of videos do you produce?", a: "We produce commercial ads, brand films, product videos, corporate explainers, event coverage, social media reels, and testimonial videos." },
      { q: "Do you handle scripting and creative direction?", a: "Yes — our in-house creative director and scriptwriter handle the full creative process from concept to final delivery." },
      { q: "Can you produce videos for social media formats?", a: "Absolutely. We deliver platform-optimised formats including 9:16 vertical for Reels and Stories, 1:1 for feed, and 16:9 for YouTube." },
    ],
  },
  "content-marketing": {
    heroSub: "Strategic content that educates your audience, builds authority, and drives organic traffic and conversions.",
    benefits: [
      "Content strategy & editorial calendar",
      "Long-form SEO blog articles",
      "Email marketing campaigns",
      "Marketing automation workflows",
      "Lead magnet creation",
      "Monthly analytics & insights",
    ],
    process: [
      { title: "Audience Research", desc: "We build detailed audience personas and map content to each stage of the buyer journey." },
      { title: "Content Strategy", desc: "We create a 90-day content roadmap with topics, formats, and distribution channels." },
      { title: "Content Creation", desc: "Expert writers craft SEO-optimised blog posts, whitepapers, case studies, and email campaigns." },
      { title: "Distribution", desc: "We distribute content across all relevant channels for maximum reach and engagement." },
      { title: "Email Automation", desc: "We build automated email sequences that nurture leads and drive repeat purchases." },
      { title: "Measure & Refine", desc: "We track content performance, organic traffic, and email metrics to continuously improve." },
    ],
    faqs: [
      { q: "How many blog articles do you produce per month?", a: "We typically produce 4–8 long-form articles per month, each averaging 1,500–2,500 words with full SEO optimisation." },
      { q: "Do you write for all industries?", a: "Yes — our writers are trained in research-first content creation and work across technology, health, finance, retail, and more." },
      { q: "What email platform do you work with?", a: "We work with Mailchimp, Klaviyo, HubSpot, ActiveCampaign, and custom solutions depending on your needs." },
    ],
  },
  cro: {
    heroSub: "Turn more of your existing traffic into paying customers with data-backed conversion rate optimisation.",
    benefits: [
      "CRO audit & baseline analysis",
      "Heatmap & session recording",
      "A/B testing & multivariate tests",
      "Landing page optimisation",
      "Form & funnel optimisation",
      "User behaviour analysis",
    ],
    process: [
      { title: "Baseline Audit", desc: "We analyse your current conversion rates, funnels, and user behaviour across all key pages." },
      { title: "Heatmap Analysis", desc: "We use heatmaps and session recordings to identify where users drop off and why." },
      { title: "Hypothesis Formation", desc: "We form data-backed hypotheses about what changes will improve conversion rates." },
      { title: "A/B Testing", desc: "We design and run controlled A/B tests to validate each hypothesis with statistical significance." },
      { title: "Implementation", desc: "Winning variants are implemented and the testing cycle continues with new hypotheses." },
      { title: "Reporting", desc: "Monthly CRO reports with lift achieved, tests run, and next-phase recommendations." },
    ],
    faqs: [
      { q: "What is a good conversion rate?", a: "Average website conversion rates are 2–3%. Great CRO can push this to 5–10%+, which can double or triple your revenue without increasing ad spend." },
      { q: "What tools do you use for CRO?", a: "We use Hotjar, Microsoft Clarity, Google Optimize, Optimizely, and custom analytics setups depending on the project." },
      { q: "How long before we see CRO results?", a: "Initial improvements can be seen within the first month. Statistically significant A/B test results typically take 2–4 weeks per experiment." },
    ],
  },
};

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const svc = SERVICES.find((s) => s.slug === slug);
  if (!svc) notFound();

  const details = serviceDetails[slug];
  const relatedServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);
  const relevantTestimonials = TESTIMONIALS.slice(0, 2);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: svc.title,
    description: svc.description,
    provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
    url: `${SITE.url}/services/${slug}`,
    areaServed: "IN",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: svc.title,
      itemListElement: svc.subServices.map((sub) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: sub },
      })),
    },
    ...(details?.faqs?.length && {
      mainEntity: details.faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    }),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="pt-36 pb-20 hero-bg relative overflow-hidden">
        <div className="container-custom">
          <Reveal direction="up">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#666] mb-8">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
              <span>/</span>
              <span className="text-[#E63946]">{svc.shortTitle}</span>
            </nav>
            <div className="line-deco mb-4">{svc.shortTitle}</div>
            <h1 className="text-5xl sm:text-6xl font-heading font-extrabold mb-6 max-w-3xl">
              {svc.title}{" "}
              <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-[#666] max-w-2xl leading-relaxed mb-8">
              {details?.heroSub || svc.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                <span>Get a Free Proposal</span>
                <ArrowRight size={16} />
              </Link>
              <a href={`tel:${SITE.phone}`} className="btn-outline flex items-center gap-2">
                <Phone size={14} /> {SITE.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Benefits + Process */}
      <section className="section-pad bg-[#F8F8F8]">
        <div className="container-custom grid lg:grid-cols-2 gap-12">
          {/* Benefits */}
          <Reveal direction="left">
            <h2 className="text-3xl font-heading font-extrabold mb-8">
              What&apos;s <span className="text-gradient">Included</span>
            </h2>
            <ul className="space-y-4">
              {(details?.benefits || svc.subServices).map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#E63946] mt-0.5 shrink-0" />
                  <span className="text-[#444] text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Process */}
          <Reveal direction="right">
            <h2 className="text-3xl font-heading font-extrabold mb-8">
              Our <span className="text-gradient">Process</span>
            </h2>
            <div className="space-y-4">
              {details?.process.map((step, i) => (
                <div key={step.title} className="flex gap-4 glass rounded-xl border border-black/5 p-4">
                  <span className="text-[#E63946] font-heading font-extrabold text-sm w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-sm mb-1">{step.title}</h3>
                    <p className="text-xs text-[#666] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad bg-background">
        <div className="container-custom">
          <Reveal direction="up">
            <h2 className="text-3xl font-heading font-extrabold mb-8 text-center">
              Client <span className="text-gradient">Results</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {relevantTestimonials.map((t, i) => (
              <Reveal key={t.name} direction="up" delay={i * 80}>
                <div className="glass rounded-2xl border border-black/5 p-6">
                  <p className="text-[#444] text-sm italic mb-5">&ldquo;{t.content}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#E63946]/20 flex items-center justify-center text-sm font-bold text-[#E63946]">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{t.name}</p>
                      <p className="text-xs text-[#666]">{t.role}, {t.company}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {details?.faqs && (
        <section className="section-pad bg-[#F8F8F8]">
          <div className="container-custom max-w-3xl mx-auto">
            <Reveal direction="up">
              <h2 className="text-3xl font-heading font-extrabold mb-10 text-center">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
            </Reveal>
            <div className="space-y-4">
              {details.faqs.map((faq, i) => (
                <Reveal key={i} direction="up" delay={i * 80}>
                  <div className="glass rounded-2xl border border-black/5 p-6">
                    <h3 className="font-heading font-bold text-base mb-3">{faq.q}</h3>
                    <p className="text-sm text-[#666] leading-relaxed">{faq.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      <section className="section-pad bg-background">
        <div className="container-custom">
          <Reveal direction="up">
            <h2 className="text-3xl font-heading font-extrabold mb-8">
              Related <span className="text-gradient">Services</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {relatedServices.map((rs, i) => (
              <Reveal key={rs.slug} direction="up" delay={i * 80}>
                <Link href={`/services/${rs.slug}`} className="glass rounded-xl border border-black/5 p-5 card-hover group block">
                  <h3 className="font-heading font-bold text-sm mb-2 group-hover:text-[#E63946] transition-colors">{rs.title}</h3>
                  <p className="text-xs text-[#666] leading-relaxed line-clamp-2">{rs.description}</p>
                  <div className="mt-3 flex items-center gap-1 text-xs text-[#E63946] font-semibold">
                    Learn More <ArrowRight size={12} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

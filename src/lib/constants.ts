// ─── Site Configuration ───────────────────────────────────────────────────────
export const SITE = {
  name: "Adverix Media",
  description:
    "Adverix Media is a premium digital marketing agency delivering SEO, Google Ads, branding, video production, and social media marketing with measurable results.",
  url: "https://adverixmedia.com",
  phone: "+91 91882 82337",
  whatsapp: "+919188282337",
  email: "hello@adverixmedia.com",
  address: "Nilambur, Malappuram, Kerala, India",
  workingHours: "Mon – Sat, 9:00 AM – 7:00 PM IST",
  founded: 2019,
} as const;

// ─── Navigation Links ─────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home",         href: "/" },
  { label: "Services",     href: "/services" },
  { label: "Portfolio",    href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog",         href: "/blog" },
  { label: "About",        href: "/about" },
  { label: "Contact",      href: "/contact" },
] as const;

// ─── Social Links ─────────────────────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/adverixmedia", icon: "Instagram" },
  { label: "Facebook",  href: "https://www.facebook.com/adverixmedia",  icon: "Facebook" },
  { label: "LinkedIn",  href: "https://www.linkedin.com/company/adverix-media", icon: "Linkedin" },
  { label: "YouTube",   href: "https://www.youtube.com/@adverixmedia",  icon: "Youtube" },
  { label: "Twitter",   href: "https://x.com/adverixmedia",             icon: "Twitter" },
] as const;

// ─── Services ─────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    slug: "seo",
    title: "Search Engine Optimisation",
    shortTitle: "SEO",
    description:
      "Dominate Google rankings and drive consistent, compounding organic traffic with our data-driven SEO strategies.",
    icon: "Search",
    subServices: [
      "Technical SEO Audit",
      "Keyword Research & Strategy",
      "On-Page Optimisation",
      "Local SEO",
      "Link Building",
      "Core Web Vitals",
    ],
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    shortTitle: "Paid Ads",
    description:
      "ROI-focused paid advertising on Google, Meta, and YouTube that puts your brand in front of the right people and converts them into customers.",
    icon: "TrendingUp",
    subServices: [
      "Google Search Ads",
      "Meta (Facebook & Instagram) Ads",
      "YouTube Ads",
      "Shopping Campaigns",
      "Retargeting",
      "A/B Testing",
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    shortTitle: "Social Media",
    description:
      "Build a powerful social presence that turns followers into loyal customers with strategic content, community management, and paid amplification.",
    icon: "Share2",
    subServices: [
      "Social Media Strategy",
      "Content Creation",
      "Community Management",
      "Influencer Marketing",
      "Paid Social",
      "Analytics & Reporting",
    ],
  },
  {
    slug: "brand-strategy",
    title: "Brand Strategy & Design",
    shortTitle: "Branding",
    description:
      "Craft a compelling brand identity that commands premium positioning, builds instant trust, and makes your competitors irrelevant.",
    icon: "Layers",
    subServices: [
      "Brand Positioning",
      "Logo Design",
      "Visual Identity System",
      "Brand Guidelines",
      "Typography & Colour",
      "Marketing Collateral",
    ],
  },
  {
    slug: "website-design",
    title: "Website Design & Development",
    shortTitle: "Web Design",
    description:
      "Premium websites built with Next.js that load fast, look stunning, and convert visitors into customers with precision-engineered UX.",
    icon: "Monitor",
    subServices: [
      "UI/UX Design",
      "Next.js Development",
      "WordPress Development",
      "Mobile-First Responsive",
      "SEO-Ready Architecture",
      "CRO Implementation",
    ],
  },
  {
    slug: "video-production",
    title: "Video Production",
    shortTitle: "Video",
    description:
      "Cinematic video content that tells your brand story with stunning visual quality and drives real engagement across every platform.",
    icon: "Video",
    subServices: [
      "Commercial & Brand Films",
      "Product Videos",
      "Corporate Videos",
      "Social Media Reels",
      "Motion Graphics",
      "Event Coverage",
    ],
  },
  {
    slug: "content-marketing",
    title: "Content Marketing",
    shortTitle: "Content",
    description:
      "Strategic content that educates your audience, builds authority, and drives organic traffic and conversions at every stage of the funnel.",
    icon: "FileText",
    subServices: [
      "Content Strategy",
      "SEO Blog Articles",
      "Email Marketing",
      "Marketing Automation",
      "Lead Magnets",
      "Editorial Calendar",
    ],
  },
  {
    slug: "cro",
    title: "Conversion Rate Optimisation",
    shortTitle: "CRO",
    description:
      "Turn more of your existing traffic into paying customers with data-backed CRO strategies, A/B testing, and landing page optimisation.",
    icon: "BarChart3",
    subServices: [
      "CRO Audit",
      "Heatmap & Session Recording",
      "A/B Testing",
      "Landing Page Optimisation",
      "Funnel Optimisation",
      "User Behaviour Analysis",
    ],
  },
] as const;

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    role: "CEO",
    company: "TechNova Solutions",
    content:
      "Adverix Media transformed our digital presence. In just 6 months, our organic traffic grew by 340% and we're consistently ranking on page 1 for our target keywords. The ROI has been phenomenal.",
  },
  {
    name: "Priya Menon",
    role: "Marketing Director",
    company: "FitLife Wellness",
    content:
      "The performance marketing team at Adverix is exceptional. They reduced our cost-per-lead by 55% while tripling our conversion volume. They genuinely care about results, not just activity.",
  },
  {
    name: "Arjun Kapoor",
    role: "Founder",
    company: "LuxeHome Interiors",
    content:
      "Our brand rebrand was flawless. The new identity immediately elevated our premium positioning and we saw a 60% increase in high-ticket inquiries within the first quarter. Truly world-class work.",
  },
  {
    name: "Sneha Iyer",
    role: "Growth Manager",
    company: "CloudStack Tech",
    content:
      "The video they produced for our product launch was cinematic-quality. Over 2 million views organically and a 40% spike in demo requests. The creative direction was exactly what we envisioned.",
  },
  {
    name: "Mohammed Al Rashid",
    role: "Director",
    company: "GreenEarth Organics",
    content:
      "We went from 2,000 to 50,000 engaged Instagram followers in 8 months. But more importantly, social media is now a significant revenue channel for us. Adverix delivers real business outcomes.",
  },
  {
    name: "Anita Desai",
    role: "CMO",
    company: "EduReach Online",
    content:
      "Our new Next.js website loads in under a second and our conversion rate jumped to 8.3%. The team was professional, communicative, and delivered exactly what they promised — on time and on budget.",
  },
] as const;

// ─── FAQ (General) ────────────────────────────────────────────────────────────
export const FAQ_GENERAL = [
  {
    q: "What digital marketing services does Adverix Media offer?",
    a: "We offer a full suite of digital marketing services including SEO, Performance Marketing (Google & Meta Ads), Social Media Marketing, Brand Strategy & Design, Website Design & Development, Video Production, Content Marketing, and Conversion Rate Optimisation.",
  },
  {
    q: "How much does digital marketing cost?",
    a: "Our pricing varies depending on the scope and services required. We offer tailored retainer packages starting from ₹25,000/month, as well as project-based pricing for branding, website, and video work. We recommend booking a free strategy call to get a custom quote.",
  },
  {
    q: "How long does it take to see results from SEO?",
    a: "SEO is a long-term investment. Most clients see meaningful improvements in rankings and traffic within 3–6 months, with significant compounding results from 6–12 months onwards. We provide monthly reports so you can track progress every step of the way.",
  },
  {
    q: "Do you work with small businesses or only large enterprises?",
    a: "We work with ambitious businesses of all sizes — from funded startups and growing SMEs to established enterprises. Our solutions are always tailored to your budget, goals, and growth stage.",
  },
  {
    q: "What is your onboarding process?",
    a: "Our onboarding process starts with a free 30-minute strategy call to understand your goals. We then conduct a comprehensive audit of your current digital presence and deliver a customised growth roadmap within 5 business days. Once approved, we begin execution immediately.",
  },
  {
    q: "Do you offer performance guarantees?",
    a: "While no ethical agency can guarantee specific rankings or exact ROAS without understanding your full business context, we are deeply committed to delivering measurable results. We set clear KPIs in our contracts and work relentlessly to exceed them.",
  },
  {
    q: "Which industries do you specialise in?",
    a: "We have extensive experience across e-commerce, B2B SaaS, health & wellness, real estate, hospitality, education, and professional services. Our data-driven approach is adaptable to any industry.",
  },
  {
    q: "Will I have a dedicated account manager?",
    a: "Yes. Every client gets a dedicated account manager as their primary point of contact, plus access to our full team of specialists in SEO, design, paid media, video, and content.",
  },
  {
    q: "How do you measure and report campaign performance?",
    a: "We provide detailed monthly performance reports covering all agreed KPIs — traffic, rankings, leads, conversions, ROAS, and more. You'll also have access to a real-time live dashboard so you can check your campaign metrics at any time.",
  },
  {
    q: "Can you manage our Google Ads and Meta Ads together?",
    a: "Absolutely. We specialise in integrated cross-platform paid media campaigns and provide unified attribution reporting so you can see the true impact of each channel on your overall marketing funnel.",
  },
  {
    q: "What is your minimum contract length?",
    a: "For retainer services (SEO, social media, paid media), we recommend a minimum 3-month commitment to see meaningful results. After the initial period, contracts renew monthly with 30 days' notice to cancel.",
  },
  {
    q: "Do you provide content and creative assets as part of your services?",
    a: "Yes. Our in-house team handles all content creation including blog articles, social media graphics, ad creatives, email copy, and video scripts. You review and approve before anything goes live.",
  },
  {
    q: "How do you approach local SEO for businesses in Kerala or India?",
    a: "We have specific expertise in local SEO for the Indian market. We optimise your Google Business Profile, build local citations, create locally-relevant content, and implement schema markup to dominate local search results in your target geography.",
  },
  {
    q: "What platforms do you use for social media management?",
    a: "We primarily manage Instagram, Facebook, LinkedIn, and YouTube. Depending on your target audience and industry, we may also recommend Twitter/X, Pinterest, or emerging platforms like Threads.",
  },
  {
    q: "Do you offer website maintenance after launch?",
    a: "Yes. We offer monthly website maintenance retainers that include security updates, performance monitoring, content updates, and technical support. We also provide 30 days of complimentary post-launch support on all website projects.",
  },
  {
    q: "Can you help with video production for social media specifically?",
    a: "Yes. We produce short-form video content optimised for Instagram Reels, YouTube Shorts, and TikTok, in addition to long-form brand films and corporate videos. All videos are delivered in platform-optimised formats and aspect ratios.",
  },
  {
    q: "Is the digital marketing proposal free?",
    a: "Yes. Our initial 30-minute strategy call and custom digital marketing proposal are completely free with no obligation. We believe in demonstrating value upfront before asking for commitment.",
  },
  {
    q: "How do you handle communication and project updates?",
    a: "We use a combination of email updates, monthly strategy calls, and a shared project management dashboard. You'll always know exactly what's been done, what's coming next, and what results have been achieved.",
  },
  {
    q: "Do you sign NDAs and confidentiality agreements?",
    a: "Yes. We routinely sign NDAs and confidentiality agreements upon client request. Protecting your business information and competitive intelligence is something we take very seriously.",
  },
  {
    q: "How do I get started with Adverix Media?",
    a: "The easiest way to get started is to book a free 30-minute strategy call via our Contact page. Alternatively, you can email us at hello@adverixmedia.com or WhatsApp us directly. We typically respond within 2 hours during business hours.",
  },
] as const;

// ─── Blog Categories ──────────────────────────────────────────────────────────
export const BLOG_CATEGORIES = [
  "All",
  "SEO",
  "Google Ads",
  "Meta Ads",
  "Social Media",
  "Video Marketing",
  "Branding",
  "Content Marketing",
] as const;

// ─── Portfolio Categories ─────────────────────────────────────────────────────
export const PORTFOLIO_CATEGORIES = [
  "All",
  "Branding",
  "Website",
  "Ads",
  "Video",
  "Social Media",
] as const;

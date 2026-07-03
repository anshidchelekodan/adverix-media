// ─── Site Configuration ───────────────────────────────────────────────────────
export const SITE = {
  name: "Adverix Media",
  description:
    "We are a premium digital marketing and video production agency in Kerala. We help ambitious brands scale through SEO, Google Ads, Meta Ads, and cinematic visual storytelling.",
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
    slug: "seo-services",
    title: "Search Engine Optimisation (SEO)",
    shortTitle: "SEO",
    description:
      "We engineer data-driven SEO campaigns that secure page-one rankings, drive high-intent organic traffic, and establish your brand's digital authority.",
    icon: "Search",
    subServices: ["Technical SEO", "Keyword Strategy", "On-Page SEO", "Link Building", "Competitor Analysis", "Core Web Vitals"],
  },
  {
    slug: "google-ads",
    title: "Google Ads Management",
    shortTitle: "Google Ads",
    description:
      "We capture high-intent search traffic with precision-targeted Google Ads campaigns designed to maximize ROI and lower your cost per acquisition.",
    icon: "TrendingUp",
    subServices: ["Search Campaigns", "Display Network", "Shopping Ads", "YouTube Ads", "Retargeting", "Conversion Tracking"],
  },
  {
    slug: "meta-ads",
    title: "Meta Ads (Facebook & Instagram)",
    shortTitle: "Meta Ads",
    description:
      "We build highly profitable Meta Ad funnels using scroll-stopping creatives and advanced audience targeting to scale your revenue.",
    icon: "Layers",
    subServices: ["Campaign Strategy", "Audience Targeting", "Creative A/B Testing", "Retargeting Funnels", "Lead Generation", "E-commerce Sales"],
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    shortTitle: "Performance Marketing",
    description:
      "We integrate cross-channel paid media strategies to deliver measurable, scalable, and predictable revenue growth for your business.",
    icon: "BarChart3",
    subServices: ["Cross-Channel Strategy", "ROAS Optimization", "Advanced Attribution", "Funnel Mapping", "Budget Scaling", "Data Analytics"],
  },
  {
    slug: "video-production",
    title: "Cinematic Video Production",
    shortTitle: "Video Production",
    description:
      "We produce premium, cinematic video content that captures attention, tells your brand story, and significantly boosts conversion rates.",
    icon: "Video",
    subServices: ["Brand Films", "Commercial Ads", "Corporate Documentaries", "Product Videos", "Social Media Reels", "Drone Cinematography"],
  },
  {
    slug: "branding",
    title: "Premium Brand Strategy",
    shortTitle: "Branding",
    description:
      "We craft cohesive, luxurious brand identities that elevate your market positioning, build deep trust, and make competitors irrelevant.",
    icon: "Layers",
    subServices: ["Brand Positioning", "Visual Identity", "Logo Design", "Brand Guidelines", "Typography Systems", "Marketing Collateral"],
  },
  {
    slug: "website-design",
    title: "Enterprise Website Design",
    shortTitle: "Website Design",
    description:
      "We design and develop lightning-fast, conversion-optimized Next.js websites that serve as your most powerful digital asset.",
    icon: "Monitor",
    subServices: ["UI/UX Design", "Next.js Development", "Performance Optimization", "Mobile-First Design", "Conversion Rate Optimization (CRO)", "Headless CMS"],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    shortTitle: "Social Media",
    description:
      "We cultivate engaged digital communities through strategic content, authentic storytelling, and proactive community management.",
    icon: "Share2",
    subServices: ["Platform Strategy", "Content Creation", "Community Management", "Influencer Partnerships", "Trend Analysis", "Growth Hacking"],
  },
  {
    slug: "content-marketing",
    title: "Content Marketing",
    shortTitle: "Content Marketing",
    description:
      "We create authoritative, high-value content that educates your audience, nurtures leads, and drives long-term organic growth.",
    icon: "FileText",
    subServices: ["Content Strategy", "SEO Blog Writing", "Whitepapers", "Email Newsletters", "Lead Magnets", "Copywriting"],
  },
  {
    slug: "local-seo",
    title: "Local SEO Strategies",
    shortTitle: "Local SEO",
    description:
      "We dominate local search results and Google Maps to ensure your business captures the highest intent customers in your specific geography.",
    icon: "Search",
    subServices: ["Google Business Profile", "Local Citations", "Review Management", "Local Link Building", "Hyper-local Content", "Map Pack Optimization"],
  },
  {
    slug: "aeo",
    title: "AI Engine Optimization (AEO)",
    shortTitle: "AEO",
    description:
      "We future-proof your digital presence by optimizing your brand entities to be cited as the authoritative answer in ChatGPT, Gemini, and AI Overviews.",
    icon: "Monitor",
    subServices: ["Entity SEO", "Knowledge Graph Optimization", "Conversational Content", "FAQ Schema", "Brand Mention Strategies", "AI Search Audits"],
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
    q: "What digital marketing services do you offer?",
    a: "We provide an enterprise-grade suite including SEO, Google Ads, Meta Ads, Video Production, Branding, Website Design, Social Media Marketing, Content Marketing, Local SEO, AEO, and Performance Marketing.",
  },
  {
    q: "How much do your services cost?",
    a: "We believe in transparent, value-driven pricing. Retainers start at ₹25,000/month, scaling based on the aggressiveness of your growth targets. Project-based work (websites, branding, video) is quoted custom after a discovery phase.",
  },
  {
    q: "How long does it take to see results from SEO?",
    a: "While we implement quick wins immediately, true SEO compounding takes 3–6 months. We focus on sustainable, high-intent organic growth that builds lasting digital equity for your brand.",
  },
  {
    q: "Do you guarantee results?",
    a: "We guarantee world-class execution, complete transparency, and data-driven strategies. While no ethical agency can guarantee specific Google rankings, our track record of delivering high ROI across industries speaks for itself.",
  },
  {
    q: "What makes Adverix Media different from other agencies?",
    a: "We are an integrated team of specialists. We don't just run ads; we build premium brands, optimize conversion rates, and produce cinematic video content. We focus entirely on measurable business outcomes, not vanity metrics.",
  },
  {
    q: "How do you handle reporting and communication?",
    a: "You receive a dedicated account manager, real-time analytics dashboards, bi-weekly strategy alignment calls, and comprehensive monthly performance reports detailing exactly where your investment is going and the return it's generating.",
  },
] as const;

// ─── Blogs Data ──────────────────────────────────────────────────────────────
export const BLOG_POSTS = [
  {
    slug: "complete-seo-guide-kerala-businesses",
    title: "The Complete SEO Guide for Kerala Businesses in 2026",
    excerpt: "Discover the exact strategies local Kerala businesses are using to dominate Google search and drive high-intent organic traffic.",
    category: "SEO",
    date: "July 12, 2026",
    author: "Adverix Strategy Team",
    readTime: "12 min read",
    image: "/blog/seo-guide.jpg",
  },
  {
    slug: "google-ads-vs-meta-ads",
    title: "Google Ads vs Meta Ads: Where Should You Invest Your Budget?",
    excerpt: "Search intent versus disruptive advertising. We break down the data to help you allocate your performance marketing budget effectively.",
    category: "Performance Marketing",
    date: "July 05, 2026",
    author: "Adverix Performance Team",
    readTime: "8 min read",
    image: "/blog/google-meta-ads.jpg",
  },
  {
    slug: "ai-search-optimization-aeo",
    title: "AI Search Optimization (AEO): Future-Proofing Your Digital Presence",
    excerpt: "ChatGPT, Gemini, and AI Overviews are changing search. Learn how Entity SEO ensures your brand remains the definitive answer.",
    category: "AEO",
    date: "June 28, 2026",
    author: "Adverix Strategy Team",
    readTime: "10 min read",
    image: "/blog/ai-search.jpg",
  },
  {
    slug: "local-seo-checklist",
    title: "The Ultimate Local SEO Checklist for Multi-Location Brands",
    excerpt: "A step-by-step framework to optimize your Google Business Profiles and capture local market share across multiple geographies.",
    category: "Local SEO",
    date: "June 20, 2026",
    author: "Adverix SEO Team",
    readTime: "9 min read",
    image: "/blog/local-seo.jpg",
  },
  {
    slug: "why-business-needs-video-marketing",
    title: "Why Cinematic Video Marketing is Non-Negotiable in 2026",
    excerpt: "Video is no longer optional. See how premium visual storytelling dramatically lowers acquisition costs and boosts conversion rates.",
    category: "Video Production",
    date: "June 15, 2026",
    author: "Adverix Creative Team",
    readTime: "7 min read",
    image: "/blog/video-marketing.jpg",
  },
  {
    slug: "website-design-mistakes",
    title: "7 Costly Website Design Mistakes Killing Your Conversion Rate",
    excerpt: "Beautiful design isn't enough. We analyze the common UX and performance flaws that are silently draining your marketing ROI.",
    category: "Website Design",
    date: "June 08, 2026",
    author: "Adverix Design Team",
    readTime: "11 min read",
    image: "/blog/web-design.jpg",
  },
  {
    slug: "content-marketing-strategy",
    title: "Building a Content Marketing Strategy that Actually Generates Leads",
    excerpt: "Move beyond fluff. Learn how to create authoritative, middle-of-funnel content that nurtures prospects and drives sales.",
    category: "Content Marketing",
    date: "May 30, 2026",
    author: "Adverix Content Team",
    readTime: "14 min read",
    image: "/blog/content-strategy.jpg",
  },
  {
    slug: "performance-marketing-guide",
    title: "The Advanced Guide to Scaling Performance Marketing",
    excerpt: "Strategies for scaling ad spend without losing ROAS. Deep dive into attribution modeling, bid strategies, and creative testing.",
    category: "Performance Marketing",
    date: "May 22, 2026",
    author: "Adverix Performance Team",
    readTime: "15 min read",
    image: "/blog/performance-guide.jpg",
  },
  {
    slug: "b2b-lead-generation-guide",
    title: "B2B Lead Generation: Strategies for High-Ticket Sales",
    excerpt: "How to combine LinkedIn targeting, cold email outreach, and high-value lead magnets to build a predictable B2B pipeline.",
    category: "Lead Generation",
    date: "May 14, 2026",
    author: "Adverix Strategy Team",
    readTime: "13 min read",
    image: "/blog/lead-gen.jpg",
  },
  {
    slug: "social-media-growth-guide",
    title: "Organic Social Media Growth: Building Communities, Not Just Followings",
    excerpt: "The playbook for authentic brand building on Instagram and LinkedIn through consistent, high-leverage content formats.",
    category: "Social Media",
    date: "May 05, 2026",
    author: "Adverix Social Team",
    readTime: "9 min read",
    image: "/blog/social-growth.jpg",
  },
  {
    slug: "brand-positioning-guide",
    title: "Brand Positioning: How to Make Your Competitors Irrelevant",
    excerpt: "A masterclass on defining your unique value proposition, target audience, and brand voice in a crowded digital landscape.",
    category: "Branding",
    date: "April 28, 2026",
    author: "Adverix Creative Team",
    readTime: "10 min read",
    image: "/blog/brand-positioning.jpg",
  },
  {
    slug: "future-of-ai-seo",
    title: "The Future of SEO: Navigating the AI Search Revolution",
    excerpt: "As search engines evolve into answer engines, we explore the fundamental shifts required in technical SEO and content architecture.",
    category: "SEO",
    date: "April 15, 2026",
    author: "Adverix SEO Team",
    readTime: "11 min read",
    image: "/blog/future-seo.jpg",
  },
];

// ─── Blog Categories ──────────────────────────────────────────────────────────
export const BLOG_CATEGORIES = [
  "All",
  "SEO",
  "AEO",
  "Performance Marketing",
  "Video Production",
  "Branding",
  "Website Design",
  "Local SEO",
  "Content Marketing",
  "Social Media",
  "Lead Generation"
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

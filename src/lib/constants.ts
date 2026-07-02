// Site-wide constants for ADVERIX MEDIA

export const SITE = {
  name: "Adverix Media",
  tagline: "Transforming Brands Through Strategy, Creativity & Visual Storytelling",
  description:
    "Adverix Media is a premium digital marketing agency helping businesses grow faster through SEO, Performance Marketing, Branding, and Cinematic Video Production.",
  url: "https://adverixmedia.com",
  email: "hello@adverixmedia.com",
  phone: "+91 92921 99727",
  whatsapp: "+919292199727",
  address: "Malappuram nilambur, Edakkara..679331",
  workingHours: "10:00 AM to 6:00 PM",
  founded: 2019,
};

export const STATS = [
  { number: "200+", label: "Projects Delivered" },
  { number: "100+", label: "Happy Clients" },
  { number: "5+",   label: "Years Experience" },
  { number: "95%",  label: "Client Satisfaction" },
];

export const NAV_LINKS = [
  { label: "Home",        href: "/" },
  { label: "About",       href: "/about" },
  { label: "Services",    href: "/services" },
  { label: "Portfolio",   href: "/portfolio" },
  { label: "Case Studies",href: "/case-studies" },
  { label: "Blog",        href: "/blog" },
  { label: "Contact",     href: "/contact" },
];

export const SERVICES = [
  {
    slug: "seo",
    title: "Search Engine Optimization",
    shortTitle: "SEO",
    icon: "Search",
    description: "Dominate Google rankings with data-driven SEO strategies that drive organic traffic and generate qualified leads.",
    subServices: ["Local SEO","Technical SEO","International SEO","Content SEO"],
    color: "#E63946",
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    shortTitle: "PPC & Ads",
    icon: "TrendingUp",
    description: "ROI-focused paid advertising campaigns on Google, Meta, and YouTube that convert clicks into customers.",
    subServices: ["Google Ads","Meta Ads","YouTube Ads","Lead Generation"],
    color: "#E63946",
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    shortTitle: "Social Media",
    icon: "Share2",
    description: "Build a powerful social presence that engages your audience and converts followers into loyal customers.",
    subServices: ["Instagram Marketing","Facebook Marketing","LinkedIn Marketing","Content Creation"],
    color: "#E63946",
  },
  {
    slug: "brand-strategy",
    title: "Brand Strategy",
    shortTitle: "Branding",
    icon: "Layers",
    description: "Craft a compelling brand identity that resonates with your target audience and commands premium positioning.",
    subServices: ["Brand Identity","Logo Design","Visual Identity","Creative Strategy"],
    color: "#E63946",
  },
  {
    slug: "website-design",
    title: "Website Design & Development",
    shortTitle: "Web Design",
    icon: "Monitor",
    description: "Premium websites built for conversion — fast, beautiful, and optimised for search engines.",
    subServices: ["Landing Pages","Corporate Websites","UI/UX Design","Website Optimisation"],
    color: "#E63946",
  },
  {
    slug: "video-production",
    title: "Video Production",
    shortTitle: "Video",
    icon: "Video",
    description: "Cinematic video content that tells your brand story and drives measurable engagement across all platforms.",
    subServices: ["Commercial Ads","Corporate Films","Product Videos","Reels & Event Coverage"],
    color: "#E63946",
  },
  {
    slug: "content-marketing",
    title: "Content Marketing",
    shortTitle: "Content",
    icon: "FileText",
    description: "Strategic content that educates, engages, and converts — from blog posts to email campaigns.",
    subServices: ["Content Strategy","Email Marketing","Marketing Automation","Analytics"],
    color: "#E63946",
  },
  {
    slug: "cro",
    title: "Conversion Rate Optimisation",
    shortTitle: "CRO",
    icon: "BarChart3",
    description: "Turn more visitors into customers with data-backed CRO strategies and A/B testing.",
    subServices: ["A/B Testing","Landing Page Optimisation","Funnel Analysis","Heatmap Analysis"],
    color: "#E63946",
  },
];

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/adverix.media?igsh=MXZhdnIyYmdwMTc0aA==", icon: "Instagram" },
  { label: "Facebook",  href: "https://facebook.com/adverixmedia",  icon: "Facebook" },
  { label: "LinkedIn",  href: "https://linkedin.com/company/adverixmedia", icon: "Linkedin" },
  { label: "YouTube",   href: "https://youtube.com/@adverixmedia",  icon: "Youtube" },
  { label: "Twitter",   href: "https://twitter.com/adverixmedia",   icon: "Twitter" },
];

export const TESTIMONIALS = [
  {
    name: "Arjun Mehta",
    company: "TechNova Solutions",
    role: "Founder & CEO",
    content: "Adverix Media completely transformed our digital presence. Our organic traffic grew by 340% in just 6 months, and we're now dominating Page 1 for our key keywords. The ROI has been extraordinary.",
    rating: 5,
    image: "/testimonials/arjun.jpg",
  },
  {
    name: "Priya Sharma",
    company: "LuxeHome Interiors",
    role: "Marketing Director",
    content: "The branding work Adverix did for us is world-class. Our brand now feels premium and we've seen a 60% increase in high-ticket inquiries. The team is creative, professional, and delivers results.",
    rating: 5,
    image: "/testimonials/priya.jpg",
  },
  {
    name: "Rajesh Kumar",
    company: "FitLife Wellness",
    role: "CEO",
    content: "Our Google Ads campaigns were underperforming until Adverix took over. They cut our cost-per-lead by 55% while tripling our conversion rate. Best marketing investment we've made.",
    rating: 5,
    image: "/testimonials/rajesh.jpg",
  },
  {
    name: "Ananya Nair",
    company: "CloudStack Technologies",
    role: "Growth Manager",
    content: "The video production team at Adverix is phenomenal. Our product explainer video generated 2M views and a 40% spike in demo requests. Pure cinematic quality at every level.",
    rating: 5,
    image: "/testimonials/ananya.jpg",
  },
  {
    name: "Vikram Patel",
    company: "GreenEarth Organics",
    role: "Founder",
    content: "From brand strategy to social media execution, Adverix delivered beyond expectations. Our Instagram following grew from 2K to 50K in 8 months with real, engaged followers.",
    rating: 5,
    image: "/testimonials/vikram.jpg",
  },
  {
    name: "Meera Joshi",
    company: "EduReach Online",
    role: "Co-Founder",
    content: "The website Adverix built for us loads in under 2 seconds and converts at 8.3%. That's industry-leading. Their SEO foundation has put us on Page 1 for 40+ competitive keywords.",
    rating: 5,
    image: "/testimonials/meera.jpg",
  },
];

export const PORTFOLIO_CATEGORIES = [
  "All", "SEO", "Ads", "Branding", "Video", "Website", "Social Media",
];

export const BLOG_CATEGORIES = [
  "All", "SEO", "Google Ads", "Branding", "Video Marketing",
  "Social Media", "Business Growth", "AI Marketing", "Content Marketing",
];

export const FAQ_GENERAL = [
  {
    q: "What services does Adverix Media offer?",
    a: "Adverix Media offers a comprehensive suite of digital marketing services including SEO (Local, Technical, International), Performance Marketing (Google Ads, Meta Ads, YouTube Ads), Social Media Marketing, Brand Strategy & Identity, Website Design & Development, Video Production, Content Marketing, Email Marketing, and Conversion Rate Optimisation.",
  },
  {
    q: "How long does it take to see results from SEO?",
    a: "SEO is a long-term investment. Most clients begin seeing meaningful improvements in rankings and organic traffic within 3–6 months. Significant, compounding results typically emerge between 6–12 months. We provide monthly reports so you can track progress every step of the way.",
  },
  {
    q: "What is your minimum project budget?",
    a: "Our project budgets vary by service. Digital marketing retainers start from ₹25,000/month, and one-time projects like brand identity or website design start from ₹50,000. We offer custom packages tailored to your specific goals and budget.",
  },
  {
    q: "Do you work with businesses outside India?",
    a: "Yes! We work with clients globally. Our team has delivered campaigns for businesses across India, UAE, USA, UK, and Australia. We adapt our strategies to local market dynamics and cultural nuances for maximum impact.",
  },
  {
    q: "How do you measure the success of digital marketing campaigns?",
    a: "We use a data-driven approach with KPIs tailored to your goals — organic traffic, keyword rankings, ROAS (Return on Ad Spend), cost-per-lead, conversion rate, engagement metrics, and revenue attribution. You receive detailed monthly reports and have access to live dashboards.",
  },
  {
    q: "What makes Adverix Media different from other agencies?",
    a: "We combine strategic thinking with creative excellence and technical expertise. Unlike agencies that focus on vanity metrics, we're obsessed with measurable business results. Every campaign is built around your revenue goals, and we use AI-powered tools alongside human creativity to deliver premium outcomes.",
  },
  {
    q: "Can you help with both B2B and B2C marketing?",
    a: "Absolutely. We have extensive experience in both B2B and B2C sectors — from SaaS companies and professional services to e-commerce brands, restaurants, and luxury retail. Our strategies are always customised to your specific industry and buyer persona.",
  },
  {
    q: "Do you offer a free consultation?",
    a: "Yes! We offer a free 30-minute Strategy Call where we analyse your current digital presence, identify growth opportunities, and outline a tailored roadmap. No obligation, no sales pressure — just genuine strategic advice.",
  },
  {
    q: "How do your Google Ads campaigns work?",
    a: "We start with comprehensive keyword research, competitor analysis, and audience targeting. We build campaign structures aligned with your sales funnel, create compelling ad copy, design high-converting landing pages, and continuously optimise based on performance data to maximise your ROAS.",
  },
  {
    q: "What is included in your SEO service?",
    a: "Our SEO service covers: technical audit and fixes, on-page optimisation, keyword strategy, content creation, link building, local SEO setup, Core Web Vitals improvement, monthly reporting, and ongoing strategy refinement. We handle everything end-to-end.",
  },
  {
    q: "How does your branding process work?",
    a: "Our branding process begins with a discovery workshop to understand your vision, audience, and competitive landscape. We then develop brand strategy, positioning, visual identity (logo, colour palette, typography, brand guidelines), and creative collateral — ensuring every element communicates premium authority.",
  },
  {
    q: "What industries do you specialise in?",
    a: "We serve a broad range of industries including technology, healthcare, education, real estate, hospitality, e-commerce, professional services, fintech, and consumer brands. Our team's diverse expertise allows us to craft industry-relevant strategies.",
  },
  {
    q: "Do you provide social media management?",
    a: "Yes. Our social media management service includes content strategy, creative design, copywriting, scheduling, community management, influencer outreach, paid promotion, and monthly analytics reporting across Instagram, Facebook, LinkedIn, and YouTube.",
  },
  {
    q: "How do you handle video production projects?",
    a: "Our video production process includes: concept development, scripting, pre-production planning, professional filming, post-production editing, motion graphics, colour grading, sound design, and platform-optimised delivery. We produce everything from 15-second Reels to full corporate films.",
  },
  {
    q: "Do you sign NDAs and contracts?",
    a: "Yes, we sign NDAs and provide detailed service agreements before beginning any project. Confidentiality, IP ownership clarity, and transparent deliverables are standard practice at Adverix Media.",
  },
  {
    q: "Can you redesign our existing website?",
    a: "Absolutely. We specialise in website redesigns that improve aesthetics, UX, page speed, SEO foundation, and conversion rates simultaneously. We conduct a thorough audit of your current site before recommending a redesign strategy.",
  },
  {
    q: "How often will we communicate during a project?",
    a: "You'll have a dedicated account manager with regular check-ins (weekly or bi-weekly depending on the project). We use shared project management tools for full transparency, and you'll receive monthly performance reports with detailed insights.",
  },
  {
    q: "Do you offer email marketing services?",
    a: "Yes. We design and execute email marketing strategies including welcome sequences, nurture campaigns, promotional emails, re-engagement flows, and marketing automation using platforms like Mailchimp, Klaviyo, and HubSpot.",
  },
  {
    q: "What is Conversion Rate Optimisation (CRO)?",
    a: "CRO is the process of increasing the percentage of website visitors who take a desired action — making a purchase, filling a form, or booking a call. We use heatmaps, session recordings, A/B testing, and user behaviour analysis to systematically improve your conversion rates.",
  },
  {
    q: "How do I get started with Adverix Media?",
    a: "Getting started is simple. Book a free 30-minute Strategy Call via our website, or reach out via WhatsApp or email. We'll understand your goals, conduct an initial audit, and present a customised proposal within 48 hours.",
  },
];

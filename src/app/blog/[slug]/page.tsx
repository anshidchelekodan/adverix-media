import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, User, Clock, Share2 } from "lucide-react";
import { SITE } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";
import CTASection from "@/components/sections/CTASection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug.replace(/-/g, ' ').toUpperCase()} | Adverix Media Blog`,
    description: "Read this insightful article from Adverix Media to level up your digital marketing game.",
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  
  // In a real application, you would fetch the blog post data based on the slug.
  // We'll use a placeholder structure for now.
  
  const post = {
    title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    date: "June 25, 2026",
    author: "Adverix Team",
    readTime: "8 min read",
    category: "SEO",
  };

  return (
    <>
      <article className="pt-36 pb-16 bg-background">
        <div className="container-custom max-w-4xl mx-auto">
          <Reveal direction="up">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#666] mb-8">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-[#E63946] truncate max-w-[200px]">{post.title}</span>
            </nav>

            <div className="mb-6 flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#E63946]/10 text-[#E63946] border border-[#E63946]/20">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-4 border-y border-black/5 py-6 mb-12">
              <div className="flex items-center gap-6 text-sm text-[#666]">
                <span className="flex items-center gap-2"><User size={15} className="text-[#E63946]" /> {post.author}</span>
                <span className="flex items-center gap-2"><Calendar size={15} className="text-[#E63946]" /> {post.date}</span>
                <span className="flex items-center gap-2"><Clock size={15} className="text-[#E63946]" /> {post.readTime}</span>
              </div>
              <button className="flex items-center gap-2 text-sm text-[#333] hover:text-[#E63946] transition-colors">
                <Share2 size={15} /> Share Article
              </button>
            </div>
          </Reveal>

          <Reveal direction="up" delay={100}>
            <div className="prose-dark max-w-none">
              <p className="text-xl text-[#333] leading-relaxed mb-10 font-medium">
                This is a placeholder for the full article content. In a production environment, this would be populated with rich text, markdown, or MDX content fetched from a CMS or local files.
              </p>
              
              <h2>Understanding the Basics</h2>
              <p>
                Digital marketing is constantly evolving. What worked yesterday might not work today. That's why it's critical to stay ahead of the curve.
              </p>
              
              <h3>Key Strategies for Success</h3>
              <ul>
                <li>Focus on user intent, not just keywords.</li>
                <li>Ensure your website loads in under 2 seconds.</li>
                <li>Invest in high-quality, cinematic video content.</li>
                <li>Build a recognizable and premium brand identity.</li>
              </ul>
              
              <blockquote>
                "Marketing is no longer about the stuff that you make, but about the stories you tell." - Seth Godin
              </blockquote>
              
              <h2>Conclusion</h2>
              <p>
                By implementing these foundational strategies, you can position your brand for sustainable, long-term growth.
              </p>
            </div>
          </Reveal>

          {/* Author Box */}
          <Reveal direction="up" delay={200}>
            <div className="mt-16 glass rounded-2xl border border-black/5 p-8 flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-[#E63946]/20 flex items-center justify-center text-2xl font-bold text-[#E63946] shrink-0">
                A
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg mb-1">Adverix Team</h3>
                <p className="text-sm text-[#666]">
                  Expert strategists, marketers, and creatives dedicated to helping ambitious brands scale through digital excellence.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </article>

      <CTASection />
    </>
  );
}

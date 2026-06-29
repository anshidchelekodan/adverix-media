import { Target, Lightbulb, BarChart3, Shield, Zap, Heart } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const reasons = [
  {
    icon: Target,
    title: "Results-First Approach",
    desc: "Every strategy we build is engineered around your revenue goals — not vanity metrics. We are accountable to numbers that matter.",
  },
  {
    icon: Lightbulb,
    title: "Creative Excellence",
    desc: "We blend data-driven strategy with award-worthy creative execution. Your brand deserves to stand out, not blend in.",
  },
  {
    icon: BarChart3,
    title: "Full Transparency",
    desc: "Live dashboards, monthly reports, and open communication — you always know exactly what is happening and why.",
  },
  {
    icon: Zap,
    title: "AI-Powered Strategies",
    desc: "We leverage cutting-edge AI tools alongside deep human expertise to deliver faster, smarter, and more efficient campaigns.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Processes",
    desc: "From onboarding to delivery, our processes are structured for scalability, consistency, and quality at every touchpoint.",
  },
  {
    icon: Heart,
    title: "Long-Term Partnerships",
    desc: "We don't just run campaigns — we build long-term partnerships where your success is our success. 95% client retention speaks for itself.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="section-pad bg-background relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left copy */}
          <div>
            <Reveal direction="left">
              <div className="line-deco mb-4">Why Choose Us</div>
              <h2 className="text-4xl sm:text-5xl font-heading font-extrabold mb-6 leading-tight">
                We Don&apos;t Just Market.
                <br />
                <span className="text-gradient">We Transform.</span>
              </h2>
              <p className="text-[#666] text-lg leading-relaxed mb-8">
                Adverix Media was founded with a single obsession: making premium digital marketing accessible to ambitious businesses. We combine the creative firepower of a boutique agency with the strategic rigour of a global consultancy.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Avg. Traffic Growth", val: "340%" },
                  { label: "Avg. ROAS", val: "8.2x" },
                  { label: "Avg. Lead Reduction Cost", val: "-55%" },
                  { label: "Client Retention Rate", val: "95%" },
                ].map((m) => (
                  <div key={m.label} className="glass rounded-xl border border-black/5 p-4">
                    <p className="text-2xl font-heading font-extrabold text-[#E63946] mb-1">{m.val}</p>
                    <p className="text-xs text-[#666]">{m.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <Reveal key={r.title} direction="right" delay={i * 80}>
                <div className="glass rounded-2xl border border-black/5 p-6 card-hover group">
                  <div className="w-10 h-10 rounded-xl bg-[#E63946]/10 border border-[#E63946]/20 flex items-center justify-center mb-4 group-hover:bg-[#E63946]/20 transition-colors">
                    <r.icon size={18} className="text-[#E63946]" />
                  </div>
                  <h3 className="font-heading font-bold text-sm mb-2">{r.title}</h3>
                  <p className="text-xs text-[#666] leading-relaxed">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

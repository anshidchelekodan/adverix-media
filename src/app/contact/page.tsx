import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import { SITE } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Adverix Media — Book a Free Strategy Call",
  description:
    "Get in touch with Adverix Media. Book a free 30-minute strategy call, or reach out via email or WhatsApp. We'll deliver a custom growth roadmap within 48 hours.",
  alternates: { canonical: `${SITE.url}/contact` },
  openGraph: { url: `${SITE.url}/contact` },
};

const contactDetails = [
  { icon: Mail,     label: "Email Us",    value: SITE.email,   href: `mailto:${SITE.email}` },
  { icon: Phone,    label: "Call Us",     value: SITE.phone,   href: `tel:${SITE.phone}` },
  { icon: MapPin,   label: "Our Office",  value: SITE.address, href: "https://maps.google.com" },
  { icon: Clock,    label: "Working Hours", value: "Mon – Sat, 9:00 AM – 7:00 PM IST", href: null },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 hero-bg relative overflow-hidden">
        <div className="container-custom">
          <Reveal direction="up">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#666] mb-8">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#E63946]">Contact</span>
            </nav>
            <div className="line-deco mb-4">Let&apos;s Talk</div>
            <h1 className="text-5xl sm:text-6xl font-heading font-extrabold mb-5">
              Start Your Growth{" "}
              <span className="text-gradient">Journey</span>
            </h1>
            <p className="text-lg text-[#666] max-w-xl">
              Book a free 30-minute strategy call and receive a customised digital marketing roadmap for your business — no commitment required.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-pad bg-[#F8F8F8]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Left — Info */}
            <div className="lg:col-span-2 space-y-6">
              <Reveal direction="left">
                <div className="space-y-4">
                  {contactDetails.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="glass rounded-2xl border border-black/5 p-5 flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-[#E63946]/10 border border-[#E63946]/20 flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-[#E63946]" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-[#666] mb-1">{label}</p>
                        {href ? (
                          <a href={href} className="text-sm text-[#333] hover:text-foreground transition-colors break-all">
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm text-[#333]">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${SITE.whatsapp}?text=Hi%20Adverix%20Media%2C%20I%27d%20like%20to%20discuss%20my%20digital%20marketing%20strategy.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-semibold text-sm hover:bg-[#25D366]/20 transition-colors w-full"
                >
                  <MessageSquare size={18} />
                  Chat with Us on WhatsApp
                </a>

                {/* Map embed */}
                <div className="rounded-2xl overflow-hidden border border-black/5 h-[220px] mt-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160990097!2d72.74109989999999!3d19.0759837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "grayscale(1) invert(0.9)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Adverix Media Office Location — Mumbai"
                  />
                </div>
              </Reveal>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3">
              <Reveal direction="right">
                <div className="glass rounded-3xl border border-black/5 p-8 sm:p-10">
                  <h2 className="text-2xl font-heading font-extrabold mb-2">
                    Book Your Free Strategy Call
                  </h2>
                  <p className="text-sm text-[#666] mb-8">
                    Fill out the form below and we&apos;ll respond within 24 hours with your personalised growth roadmap.
                  </p>
                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

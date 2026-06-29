"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";

const schema = z.object({
  name:    z.string().min(2, "Name must be at least 2 characters"),
  email:   z.string().email("Please enter a valid email"),
  phone:   z.string().min(10, "Please enter a valid phone number").optional().or(z.literal("")),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget:  z.string().min(1, "Please select a budget range"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormData = z.infer<typeof schema>;

const services = [
  "SEO (Search Engine Optimisation)",
  "Performance Marketing (Google/Meta Ads)",
  "Social Media Marketing",
  "Brand Strategy & Identity",
  "Website Design & Development",
  "Video Production",
  "Content Marketing",
  "Conversion Rate Optimisation",
  "Multiple Services / Full Package",
];

const budgets = [
  "₹25,000 – ₹50,000/month",
  "₹50,000 – ₹1,00,000/month",
  "₹1,00,000 – ₹2,50,000/month",
  "₹2,50,000+/month",
  "One-time project — discuss budget",
];

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        toast.success("Message sent! We'll get back to you within 24 hours.");
        reset();
      } else {
        toast.error("Something went wrong. Please try again or WhatsApp us.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-5 py-3.5 rounded-xl bg-black/5 border border-black/5 text-sm text-foreground placeholder:text-[#555] focus:outline-none focus:border-[#E63946]/60 transition-colors";
  const errorClass = "text-xs text-[#E63946] mt-1.5";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-[#666] mb-2 uppercase tracking-wide">
            Full Name *
          </label>
          <input id="name" placeholder="Your full name" className={inputClass} {...register("name")} />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-[#666] mb-2 uppercase tracking-wide">
            Email Address *
          </label>
          <input id="email" type="email" placeholder="you@company.com" className={inputClass} {...register("email")} />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-[#666] mb-2 uppercase tracking-wide">
            Phone Number
          </label>
          <input id="phone" type="tel" placeholder="+91 98765 43210" className={inputClass} {...register("phone")} />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="company" className="block text-xs font-semibold text-[#666] mb-2 uppercase tracking-wide">
            Company Name
          </label>
          <input id="company" placeholder="Your company" className={inputClass} {...register("company")} />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-xs font-semibold text-[#666] mb-2 uppercase tracking-wide">
          Service Required *
        </label>
        <select id="service" className={inputClass} {...register("service")}>
          <option value="" className="bg-white">Select a service…</option>
          {services.map((s) => <option key={s} value={s} className="bg-white">{s}</option>)}
        </select>
        {errors.service && <p className={errorClass}>{errors.service.message}</p>}
      </div>

      <div>
        <label htmlFor="budget" className="block text-xs font-semibold text-[#666] mb-2 uppercase tracking-wide">
          Monthly Budget *
        </label>
        <select id="budget" className={inputClass} {...register("budget")}>
          <option value="" className="bg-white">Select your budget range…</option>
          {budgets.map((b) => <option key={b} value={b} className="bg-white">{b}</option>)}
        </select>
        {errors.budget && <p className={errorClass}>{errors.budget.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-[#666] mb-2 uppercase tracking-wide">
          Tell Us About Your Goals *
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="What are you trying to achieve? What challenges are you facing?"
          className={`${inputClass} resize-none`}
          {...register("message")}
        />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center text-sm py-4 disabled:opacity-60 disabled:cursor-not-allowed"
        aria-label="Send message"
      >
        {loading ? (
          <><Loader2 size={16} className="animate-spin" /> Sending…</>
        ) : (
          <><Send size={16} /> <span>Send Message — Get Free Strategy Call</span></>
        )}
      </button>

      <p className="text-xs text-center text-[#666]">
        🔒 Your information is 100% confidential. No spam, ever.
      </p>
    </form>
  );
}

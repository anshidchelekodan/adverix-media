"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export default function Reveal({ children, className, delay = 0, direction = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const initialStyles: Record<string, string> = {
      opacity: "0",
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
    };

    if (direction === "up")    initialStyles.transform = "translateY(40px)";
    if (direction === "left")  initialStyles.transform = "translateX(-40px)";
    if (direction === "right") initialStyles.transform = "translateX(40px)";

    Object.assign(el.style, initialStyles);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translate(0,0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [delay, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// Stagger container
export function StaggerReveal({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("stagger-container", className)}>
      {children}
    </div>
  );
}

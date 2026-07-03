"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  end: string; // e.g. "200+" or "95%"
  duration?: number;
}

export default function AnimatedCounter({ end, duration = 2000 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const numMatch = end.match(/[\d.]+/);
    if (!numMatch) { 
      const t = setTimeout(() => setDisplay(end), 0); 
      return () => clearTimeout(t); 
    }
    const suffix = end.replace(/[\d.]+/, "");
    const target = parseFloat(numMatch[0]);
    const isDecimal = numMatch[0].includes(".");
    const steps = 60;
    const step = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current = Math.min(current + step, target);
      setDisplay((isDecimal ? current.toFixed(1) : Math.floor(current).toString()) + suffix);
      if (current >= target) clearInterval(interval);
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, end, duration]);

  return <span ref={ref}>{display}</span>;
}

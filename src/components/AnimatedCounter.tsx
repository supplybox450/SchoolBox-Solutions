import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export default function AnimatedCounter({ end, suffix = "", prefix = "", label, duration = 2 }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isInView || !countRef.current) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      if (countRef.current) {
        countRef.current.textContent = `${prefix}${Math.floor(start).toLocaleString()}${suffix}`;
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, suffix, prefix, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="text-center"
    >
      <span ref={countRef} className="block text-4xl sm:text-5xl font-bold text-primary tabular-nums">
        {prefix}0{suffix}
      </span>
      <span className="text-sm text-muted-foreground mt-2 block">{label}</span>
    </motion.div>
  );
}

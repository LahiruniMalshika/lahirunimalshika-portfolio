"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  index,
  label,
  title,
}: {
  index: string;
  label: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-16 flex items-end justify-between border-b border-border pb-6"
    >
      <div>
        <div className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {index} — {label}
        </div>
        <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
          {title}
        </h2>
      </div>
    </motion.div>
  );
}

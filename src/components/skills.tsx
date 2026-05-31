"use client";

import { motion } from "framer-motion";
import {
  Code,
  Layout,
  Server,
  Database,
  Wrench,
} from "lucide-react";
import { skills } from "@/data/content";
import { SectionHeading } from "./section-heading";

const categoryIcons: Record<string, typeof Code> = {
  Languages: Code,
  Frontend: Layout,
  Backend: Server,
  Database: Database,
  Tools: Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="container py-24 sm:py-32">
      <SectionHeading index="04" label="Toolkit" title="Technical skills" />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, items], i) => {
          const Icon = categoryIcons[category] ?? Code;
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5"
            >
              {/* Gradient accent */}
              <div className="absolute -right-12 -top-12 size-32 rounded-full bg-accent/5 blur-2xl transition-all duration-500 group-hover:bg-accent/15" />

              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="inline-flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="size-4" />
                  </div>
                  <div>
                    <div className="font-display text-lg tracking-tight">
                      {category}
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {items.length} skills
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 border-t border-border/60 pt-4">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border/60 bg-background px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

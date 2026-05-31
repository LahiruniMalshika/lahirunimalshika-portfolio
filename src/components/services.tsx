"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Sparkles, ArrowRight } from "lucide-react";
import { services } from "@/data/content";
import { SectionHeading } from "./section-heading";

const icons = [Code2, Smartphone, Sparkles];

export function Services() {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <SectionHeading
        index="03"
        label="What I do"
        title="Services"
      />

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service, i) => {
          const Icon = icons[i] ?? Code2;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5"
            >
              {/* Number badge */}
              <div className="absolute right-6 top-6 font-mono text-xs text-muted-foreground/60">
                0{i + 1}
              </div>

              {/* Decorative gradient blob */}
              <div className="absolute -right-16 -top-16 size-40 rounded-full bg-accent/5 blur-3xl transition-all duration-500 group-hover:bg-accent/15" />

              <div className="relative">
                <div className="mb-6 inline-flex size-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="size-5" />
                </div>

                <h3 className="font-display text-2xl tracking-tight">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2 border-t border-border/60 pt-6">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-2 text-sm text-foreground/80"
                    >
                      <ArrowRight className="size-3 text-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

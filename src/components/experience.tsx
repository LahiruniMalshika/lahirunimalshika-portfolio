"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/content";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <section id="experience" className="container py-24 sm:py-32">
      <SectionHeading index="02" label="Where I've worked" title="Work experience" />

      <div className="space-y-6">
        {experience.map((job, i) => (
          <motion.div
            key={job.period}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5"
          >
            {/* Decorative gradient */}
            <div className="absolute -left-20 -top-20 size-48 rounded-full bg-accent/5 blur-3xl transition-all duration-500 group-hover:bg-accent/10" />

            <div className="relative grid gap-6 md:grid-cols-12 md:gap-8">
              {/* Left meta */}
              <div className="md:col-span-3">
                <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Briefcase className="size-4" />
                </div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {job.period}
                </div>
                <div className="mt-2 inline-block rounded-full border border-border bg-background px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  {job.type}
                </div>
              </div>

              {/* Right content */}
              <div className="md:col-span-9">
                <h3 className="font-display text-2xl tracking-tight">
                  {job.role}
                </h3>
                <div className="mt-1 text-sm font-medium text-accent">
                  @ {job.company}
                </div>

                <ul className="mt-5 space-y-2.5">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-secondary px-2.5 py-1 font-mono text-[11px] text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

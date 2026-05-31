"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { about, personal } from "@/data/content";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <SectionHeading index="01" label="Who I am" title="About me" />

      <div className="grid gap-10 md:grid-cols-12">
        {/* Left: portrait card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="md:col-span-5"
        >
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-secondary via-card to-secondary p-1 shadow-lg shadow-foreground/5">
            <div className="relative overflow-hidden rounded-xl bg-card p-8">
              {/* Decorative accent corner */}
              <div className="absolute -right-12 -top-12 size-32 rounded-full bg-accent/10 blur-2xl" />
              <div className="absolute -bottom-12 -left-12 size-32 rounded-full bg-accent/5 blur-2xl" />

              <div className="relative">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  <span className="size-1.5 rounded-full bg-accent" />
                  Available for hire
                </div>

                <h3 className="font-display text-3xl tracking-tight">
                  {personal.fullName}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {personal.role} · {personal.location}
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {about.facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="rounded-lg border border-border/60 bg-background/50 p-3"
                    >
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {fact.label}
                      </div>
                      <div className="mt-1 text-sm font-medium text-foreground">
                        {fact.value}
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href={personal.cv}
                  className="group/btn mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
                >
                  <Download className="size-4" />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: bio */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-7"
        >
          <div className="space-y-6">
            <p className="font-display text-2xl leading-snug tracking-tight sm:text-3xl">
              <span className="text-accent">&ldquo;</span>
              {about.intro}
              <span className="text-accent">&rdquo;</span>
            </p>

            <p className="text-base leading-relaxed text-muted-foreground">
              {about.body}
            </p>

            <p className="text-base leading-relaxed text-muted-foreground">
              {about.closing}
            </p>

            <div className="grid grid-cols-3 gap-4 border-t border-border pt-8">
              <div>
                <div className="font-display text-4xl text-accent">2+</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  Years coding
                </div>
              </div>
              <div>
                <div className="font-display text-4xl text-accent">4</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  Major projects
                </div>
              </div>
              <div>
                <div className="font-display text-4xl text-accent">2</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  Industry roles
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

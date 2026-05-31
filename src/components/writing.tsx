"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { writing } from "@/data/content";
import { SectionHeading } from "./section-heading";

export function Writing() {
  return (
    <section id="writing" className="container py-24 sm:py-32">
      <SectionHeading index="06" label="Writing" title="From the blog" />

      <div className="grid gap-6 md:grid-cols-2">
        {writing.map((post, i) => (
          <motion.a
            key={post.url}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5"
          >
            <div className="absolute -right-12 -top-12 size-32 rounded-full bg-accent/5 blur-2xl transition-all duration-500 group-hover:bg-accent/15" />

            <div className="relative">
              <div className="mb-4 flex items-center justify-between">
                <div className="inline-flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <BookOpen className="size-4" />
                </div>
                <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>

              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {post.date}
              </div>
              <h3 className="mt-2 font-display text-xl tracking-tight transition-colors group-hover:text-accent">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {post.summary}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

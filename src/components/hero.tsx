"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/data/content";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-14">
      <div className="absolute inset-0 bg-grid" aria-hidden />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          Open to software engineer roles
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl md:text-8xl"
        >
          {personal.name.split(" ")[0]}
          <br />
          <span className="italic text-accent">{personal.name.split(" ")[1]}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          {personal.tagline}{" "}
          Currently a{" "}
          <span className="text-foreground">Trainee Software Engineer at Virstack</span>,
          shipping production web and mobile applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
          >
            Get in touch
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <div className="flex items-center gap-2">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary"
              aria-label="GitHub"
            >
              <Github className="size-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary"
              aria-label="Email"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute bottom-12 left-0 right-0 container hidden items-end justify-between md:flex"
        >
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <div>{personal.location}</div>
            <div className="mt-1">Available globally · Remote</div>
          </div>
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Scroll ↓
          </div>
        </motion.div>
      </div>
    </section>
  );
}

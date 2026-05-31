"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { personal } from "@/data/content";

const links = [
  { label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { label: "GitHub", value: "@LahiruniMalshika", href: personal.github },
  { label: "LinkedIn", value: "lahiruni-malshika", href: personal.linkedin },
  { label: "Medium", value: "@lahimalshi", href: personal.medium },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border bg-foreground text-background"
    >
      <div className="container py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-xs uppercase tracking-widest text-background/60">
            07 — Get in touch
          </div>
          <h2 className="mt-4 font-display text-5xl leading-none tracking-tight sm:text-7xl md:text-8xl">
            Let&apos;s build
            <br />
            <span className="italic text-accent">something good.</span>
          </h2>

          <p className="mt-8 max-w-xl text-lg text-background/70">
            I&apos;m actively looking for full-time software engineer roles.
            If you&apos;re hiring or just want to chat about a project, my
            inbox is open.
          </p>

          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}&su=${encodeURIComponent("Hello from your portfolio")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.02]"
          >
            Send me an email
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        <div className="mt-20 grid gap-8 border-t border-background/20 pt-12 sm:grid-cols-2 md:grid-cols-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group"
            >
              <div className="font-mono text-xs uppercase tracking-widest text-background/50">
                {link.label}
              </div>
              <div className="mt-2 text-base transition-colors group-hover:text-accent">
                {link.value}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 text-xs text-background/50 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} {personal.name}. All rights reserved.</div>
          <div className="font-mono">
            Built with Next.js, TypeScript & Tailwind
          </div>
        </div>
      </div>
    </section>
  );
}

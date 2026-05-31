"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Folder } from "lucide-react";
import { projects } from "@/data/content";
import { SectionHeading } from "./section-heading";

export function Projects() {
  return (
    <section id="projects" className="container py-24 sm:py-32">
      <SectionHeading index="05" label="Selected work" title="Projects" />

      <div className="space-y-6">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5"
          >
            {/* Decorative gradient */}
            <div className="absolute -right-20 -top-20 size-48 rounded-full bg-accent/5 blur-3xl transition-all duration-500 group-hover:bg-accent/10" />

            <div className="relative grid gap-8 md:grid-cols-12">
              {/* Left meta */}
              <div className="md:col-span-4">
                <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Folder className="size-4" />
                </div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  0{i + 1} / {String(projects.length).padStart(2, "0")}
                </div>
                <h3 className="mt-3 font-display text-3xl tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm italic text-muted-foreground">
                  {project.tagline}
                </p>
                <div className="mt-4 inline-block rounded-full border border-border bg-background px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  {project.role}
                </div>
              </div>

              {/* Right content */}
              <div className="md:col-span-8">
                <p className="text-base leading-relaxed text-foreground/90">
                  {project.description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-secondary px-2.5 py-1 font-mono text-[11px] text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border/60 pt-5 text-sm">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-1.5 font-medium text-accent transition-colors hover:text-foreground"
                    >
                      Live site
                      <ArrowUpRight className="size-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  )}
                  {project.frontend && (
                    <a
                      href={project.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Github className="size-3.5" /> Frontend
                    </a>
                  )}
                  {project.backend && (
                    <a
                      href={project.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Github className="size-3.5" /> Backend
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

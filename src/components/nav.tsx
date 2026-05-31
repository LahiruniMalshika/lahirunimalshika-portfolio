"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { personal } from "@/data/content";

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-md">
      <nav className="container flex h-14 items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl tracking-tight"
        >
          {personal.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={personal.cv}
            className="hidden rounded-full border border-border px-4 py-1.5 text-xs font-medium transition-colors hover:bg-secondary sm:inline-block"
          >
            Resume
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

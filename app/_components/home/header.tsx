"use client";

import { useState } from "react";
import { navItems } from "./data";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/85 backdrop-blur-md border-b border-border/70 z-50 px-6 py-4">
      <nav className="relative max-w-6xl mx-auto flex justify-between items-center">
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-foreground"
          onClick={() => setIsMenuOpen(false)}
        >
          Konjed
        </a>
        <ul className="hidden md:flex gap-8 list-none">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground text-sm font-medium hover:text-foreground transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition hover:border-foreground md:hidden"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="sr-only">
            {isMenuOpen ? "Close menu" : "Open menu"}
          </span>
          <span className="flex w-4 flex-col gap-1.5">
            <span
              className={`h-0.5 rounded-full bg-foreground transition ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 rounded-full bg-foreground transition ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 rounded-full bg-foreground transition ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
        {isMenuOpen ? (
          <div
            id="mobile-menu"
            className="absolute left-0 right-0 top-14 rounded-2xl border border-border bg-card p-2 shadow-xl md:hidden"
          >
            <ul className="list-none">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block rounded-xl px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </nav>
    </header>
  );
}

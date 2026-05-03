"use client";

import { useState } from "react";
import { navItems } from "./data";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between rounded-full border border-border/80 bg-card/85 px-4 py-3 shadow-sm backdrop-blur-md">
        <a
          href="#home"
          className="flex items-center gap-3 text-lg font-bold tracking-tight text-foreground"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm text-accent-foreground">
            K
          </span>
          <span>Konjed</span>
        </a>
        <ul className="hidden list-none items-center gap-1 rounded-full bg-muted/50 p-1 md:flex">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-card hover:text-foreground"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm transition hover:border-foreground md:hidden"
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
            className="absolute left-0 right-0 top-16 rounded-2xl border border-border bg-card p-2 shadow-xl md:hidden"
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

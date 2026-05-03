import { navItems } from "./data";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background/85 backdrop-blur-md border-b border-border/70 z-50 px-6 py-4">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-foreground"
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
      </nav>
    </header>
  );
}

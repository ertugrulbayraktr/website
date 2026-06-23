"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/lib/i18n";
import { profile } from "@/lib/content";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import Monogram from "./Monogram";

const links = [
  { id: "about", key: "nav.about" },
  { id: "timeline", key: "nav.timeline" },
  { id: "stack", key: "nav.stack" },
  { id: "projects", key: "nav.projects" },
  { id: "blog", key: "nav.blog" },
  { id: "contact", key: "nav.contact" },
];

export default function Navbar() {
  const { t } = useLang();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: yalnızca ana sayfada aktif bölümü izle.
  useEffect(() => {
    if (!isHome) return;
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <header
      className={`sticky top-0 z-50 transition ${
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-serif text-lg font-semibold tracking-tight"
        >
          <Monogram className="h-8 w-8 text-xs" />
          <span className="hidden sm:inline">{profile.name}</span>
        </Link>

        {/* Masaüstü menü */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6 text-sm text-muted">
            {links.map((l) => {
              const isActive = isHome && active === l.id;
              return (
                <li key={l.id}>
                  <Link
                    href={`/#${l.id}`}
                    className={`relative transition hover:text-fg ${
                      isActive ? "text-fg" : ""
                    }`}
                  >
                    {t(l.key)}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobil kontroller */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            aria-label="Menü"
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobil açılır menü */}
      {open && (
        <div className="border-t border-border bg-bg md:hidden">
          <ul className="mx-auto flex max-w-content flex-col px-6 py-2">
            {links.map((l) => (
              <li key={l.id}>
                <Link
                  href={`/#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm text-muted transition hover:text-fg"
                >
                  {t(l.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

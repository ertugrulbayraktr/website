"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { profile, socials, pick } from "@/lib/content";

export default function Hero() {
  const { t, lang } = useLang();

  return (
    <section className="relative mx-auto flex min-h-[88vh] max-w-content flex-col justify-center px-6 py-24">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sm uppercase tracking-[0.2em] text-muted"
      >
        {t("hero.eyebrow")}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-4 font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
      >
        {profile.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.12 }}
        className="mt-4 font-serif text-xl italic text-accent sm:text-2xl"
      >
        {pick(profile.role, lang)}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.18 }}
        className="mt-6 max-w-2xl text-lg leading-relaxed text-muted"
      >
        {pick(profile.tagline, lang)}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.22 }}
        className="mt-6 flex items-center gap-2.5 text-sm text-muted"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        {t("hero.status")}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.28 }}
        className="mt-8 flex flex-wrap items-center gap-4"
      >
        <Link
          href="#contact"
          className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition hover:opacity-90"
        >
          {t("hero.cta.primary")}
        </Link>
        <Link
          href="#projects"
          className="rounded-full border border-border px-6 py-3 text-sm font-medium transition hover:bg-bg-soft"
        >
          {t("hero.cta.secondary")}
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 flex items-center gap-5 text-sm text-muted"
      >
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline transition hover:text-fg"
          >
            {s.label}
          </a>
        ))}
      </motion.div>
    </section>
  );
}

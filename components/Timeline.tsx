"use client";

import { useLang } from "@/lib/i18n";
import { pick, TimelineItem } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

// Kurum adından baş harfleri üretir (logo yoksa gösterilir).
// Yalnızca harf/rakamla başlayan kelimeleri dikkate alır ("/" gibi tokenları atlar).
function initials(name: string): string {
  const letters = name
    .split(/\s+/)
    .map((w) => w.match(/[\p{L}\p{N}]/u)?.[0])
    .filter((c): c is string => Boolean(c))
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return letters || "•";
}

export default function Timeline({ items }: { items: TimelineItem[] }) {
  const { t, lang } = useLang();

  return (
    <section id="timeline" className="mx-auto max-w-content px-6 py-24">
      <SectionHeading
        title={t("timeline.title")}
        subtitle={t("timeline.subtitle")}
      />

      <div className="relative ml-3 border-l border-border pl-8 sm:ml-5 sm:pl-10">
        {items.map((item, i) => {
          const org = pick(item.org, lang);
          return (
            <Reveal key={i} delay={i * 0.05}>
              <div className="relative pb-20 last:pb-0">
                {/* Logo (dosya varsa) ya da kurum baş harfleri */}
                <span className="absolute -left-[49px] top-0 flex h-9 w-9 items-center justify-center overflow-hidden rounded-md border border-border bg-bg-soft text-xs font-semibold text-accent sm:-left-[59px]">
                  {item.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.logo}
                      alt={`${org} logo`}
                      className="h-full w-full object-contain p-1"
                    />
                  ) : (
                    initials(org)
                  )}
                </span>

                <p className="inline-block rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted">
                  {pick(item.period, lang)}
                </p>
                <h3 className="mt-3 font-serif text-xl font-semibold">
                  {pick(item.role, lang)}
                </h3>
                <p className="text-accent">{org}</p>
                <p className="mt-2 max-w-2xl text-muted">
                  {pick(item.description, lang)}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

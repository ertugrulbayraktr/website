"use client";

import { useLang } from "@/lib/i18n";
import { stack, pick } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function TechStack() {
  const { t, lang } = useLang();

  return (
    <section id="stack" className="border-y border-border bg-bg-soft">
      <div className="mx-auto max-w-content px-6 py-24">
        <SectionHeading
          title={t("stack.title")}
          subtitle={t("stack.subtitle")}
        />

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((group, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                {pick(group.category, lang)}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-bg px-3 py-1.5 font-mono text-[0.8rem] transition hover:border-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

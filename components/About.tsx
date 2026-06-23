"use client";

import { useLang } from "@/lib/i18n";
import {
  profile,
  education,
  certifications,
  pick,
} from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  const { t, lang } = useLang();

  return (
    <section id="about" className="border-y border-border bg-bg-soft">
      <div className="mx-auto max-w-content px-6 py-24">
        <SectionHeading title={t("about.title")} />

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Bio */}
          <Reveal className="lg:col-span-1">
            <div className="space-y-4">
              {pick(profile.bio, lang)
                .split("\n\n")
                .map((para, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "text-lg leading-relaxed text-fg"
                        : "leading-relaxed text-muted"
                    }
                  >
                    {para}
                  </p>
                ))}
            </div>
            <p className="mt-4 text-sm text-muted">{pick(profile.location, lang)}</p>
          </Reveal>

          <div className="space-y-12 lg:col-span-2">
            {/* Eğitim */}
            <Reveal>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                {t("about.education")}
              </h3>
              <div className="mt-5 space-y-6">
                {education.map((e, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-1 border-l border-border pl-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <div>
                      <p className="font-serif text-lg font-medium">
                        {pick(e.degree, lang)}
                      </p>
                      <p className="text-muted">{pick(e.school, lang)}</p>
                    </div>
                    <p className="shrink-0 text-sm text-muted">
                      {pick(e.period, lang)}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Sertifikalar */}
            <Reveal>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                {t("about.certifications")}
              </h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {certifications.map((c, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-border bg-bg p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-medium">{pick(c.name, lang)}</p>
                      <span className="shrink-0 text-sm text-muted">
                        {c.year}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted">
                      {pick(c.issuer, lang)}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

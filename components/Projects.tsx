"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { projects, pick } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Projects() {
  const { t, lang } = useLang();

  return (
    <section id="projects" className="mx-auto max-w-content px-6 py-24">
      <SectionHeading
        title={t("projects.title")}
        subtitle={t("projects.subtitle")}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 0.05}>
            <Link
              href={`/projects/${project.slug}`}
              className="group flex h-full flex-col rounded-xl border border-border bg-bg-soft p-6 transition hover:-translate-y-1 hover:border-accent hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted">
                    {project.year}
                  </p>
                  <h3 className="mt-1 font-serif text-xl font-semibold">
                    {pick(project.title, lang)}
                  </h3>
                </div>
                <span
                  aria-hidden
                  className="mt-1 text-muted transition group-hover:text-accent"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </span>
              </div>

              <p className="mt-3 flex-1 text-muted">
                {pick(project.description, lang)}
              </p>

              <div className="mt-5 flex items-center justify-between gap-4">
                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <span className="shrink-0 text-sm font-medium text-accent opacity-0 transition group-hover:opacity-100">
                  {t("projects.detail")} →
                </span>
              </div>
            </Link>
          </Reveal>
        ))}

        {/* Yakında eklenecek proje için yer tutucu kart */}
        <Reveal delay={(projects.length % 2) * 0.05}>
          <div className="flex h-full min-h-[200px] flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border p-6 text-center text-muted">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
            <span className="text-sm font-medium">{t("projects.comingSoon")}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

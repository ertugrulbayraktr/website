"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { Project, pick } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Projects({ items }: { items: Project[] }) {
  const { t, lang } = useLang();

  return (
    <section id="projects" className="mx-auto max-w-content px-6 py-24">
      <SectionHeading
        title={t("projects.title")}
        subtitle={t("projects.subtitle")}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 0.05}>
            <Link
              href={`/projects/${project.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-bg-soft transition hover:-translate-y-1 hover:border-accent hover:shadow-sm"
            >
              {(project.cardImage ?? project.cover) && (
                <div className="aspect-[16/9] w-full overflow-hidden border-b border-border bg-bg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.cardImage ?? project.cover}
                    alt={pick(project.title, lang)}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
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
                      className="rounded-full border border-border px-2.5 py-1 font-mono text-[0.7rem] text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <span className="shrink-0 text-sm font-medium text-accent opacity-0 transition group-hover:opacity-100">
                  {t("projects.detail")} →
                </span>
              </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

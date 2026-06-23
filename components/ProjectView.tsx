"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { Project, pick } from "@/lib/content";
import Reveal from "./Reveal";

function ExternalLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition hover:border-accent hover:text-accent"
    >
      {label}
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 17 17 7M7 7h10v10" />
      </svg>
    </a>
  );
}

export default function ProjectView({ project }: { project: Project }) {
  const { t, lang } = useLang();

  return (
    <article>
      <Reveal>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-fg"
        >
          <span aria-hidden>←</span> {t("project.back")}
        </Link>

        <p className="mt-8 text-sm uppercase tracking-wider text-muted">
          {project.year}
        </p>
        <h1 className="mt-2 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {pick(project.title, lang)}
        </h1>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-[0.72rem] text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>

        {(project.liveUrl || project.repoUrl) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl && (
              <ExternalLink href={project.liveUrl} label={t("project.live")} />
            )}
            {project.repoUrl && (
              <ExternalLink href={project.repoUrl} label={t("project.code")} />
            )}
          </div>
        )}

        <hr className="my-10 border-border" />
      </Reveal>

      <div className="space-y-10">
        <Reveal>
          <Section title={t("project.overview")}>
            {pick(project.overview, lang)}
          </Section>
        </Reveal>
        <Reveal>
          <Section title={t("project.problem")}>
            {pick(project.problem, lang)}
          </Section>
        </Reveal>
        <Reveal>
          <Section title={t("project.solution")}>
            {pick(project.solution, lang)}
          </Section>
        </Reveal>
        <Reveal>
          <div>
            <h2 className="font-serif text-2xl font-semibold">
              {t("project.highlights")}
            </h2>
            <ul className="mt-4 space-y-3">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {pick(h, lang)}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {project.screenshots && project.screenshots.length > 0 && (
          <Reveal>
            <div>
              <h2 className="font-serif text-2xl font-semibold">
                {t("project.screenshots")}
              </h2>
              <div className="mt-5 space-y-6">
                {project.screenshots.map((shot, i) => (
                  <figure key={i}>
                    <a
                      href={shot.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block overflow-hidden rounded-xl border border-border transition hover:border-accent"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={shot.src}
                        alt={
                          shot.caption
                            ? pick(shot.caption, lang)
                            : `${pick(project.title, lang)} — ${i + 1}`
                        }
                        className="w-full"
                        loading="lazy"
                      />
                    </a>
                    {shot.caption && (
                      <figcaption className="mt-2 text-center text-sm text-muted">
                        {pick(shot.caption, lang)}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-serif text-2xl font-semibold">{title}</h2>
      <p className="mt-3 leading-relaxed text-muted">{children}</p>
    </div>
  );
}

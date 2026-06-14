"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { PostMeta, formatDate, readingLabel } from "@/lib/format";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Blog({ posts }: { posts: PostMeta[] }) {
  const { t, lang } = useLang();

  return (
    <section id="blog" className="mx-auto max-w-content px-6 py-24">
      <SectionHeading title={t("blog.title")} subtitle={t("blog.subtitle")} />

      {posts.length === 0 ? (
        <p className="text-muted">{t("blog.empty")}</p>
      ) : (
        <div className="divide-y divide-border border-y border-border">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <div className="max-w-2xl">
                  <h3 className="font-serif text-xl font-semibold transition group-hover:text-accent">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-muted">{post.excerpt}</p>
                </div>
                <time className="shrink-0 text-sm text-muted">
                  {formatDate(post.date, lang)} · {readingLabel(post.readingMinutes, lang)}
                </time>
              </Link>
            </Reveal>
          ))}
        </div>
      )}

      <div className="mt-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent transition hover:gap-3"
        >
          {t("blog.all")}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}

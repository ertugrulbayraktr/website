"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { PostMeta, formatDate, readingLabel } from "@/lib/format";
import Reveal from "./Reveal";

export default function BlogList({ posts }: { posts: PostMeta[] }) {
  const { t, lang } = useLang();

  return (
    <div>
      <Reveal className="mb-12">
        <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
          {t("blog.title")}
        </h1>
        <p className="mt-3 text-muted">{t("blog.subtitle")}</p>
      </Reveal>

      {posts.length === 0 ? (
        <p className="text-muted">{t("blog.empty")}</p>
      ) : (
        <div className="divide-y divide-border border-y border-border">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.04}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-2 py-7 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-border px-2 py-0.5 text-xs uppercase text-muted">
                      {post.lang}
                    </span>
                    <h2 className="font-serif text-2xl font-semibold transition group-hover:text-accent">
                      {post.title}
                    </h2>
                  </div>
                  <p className="mt-2 text-muted">{post.excerpt}</p>
                </div>
                <time className="shrink-0 text-sm text-muted">
                  {formatDate(post.date, lang)} · {readingLabel(post.readingMinutes, lang)}
                </time>
              </Link>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}

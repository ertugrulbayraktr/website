"use client";

import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { useLang } from "@/lib/i18n";
import { Post, formatDate, readingLabel } from "@/lib/format";
import Reveal from "./Reveal";

export default function PostView({ post }: { post: Post }) {
  const { t, lang } = useLang();

  return (
    <article>
      <Reveal>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-fg"
        >
          <span aria-hidden>←</span> {t("blog.back")}
        </Link>

        <h1 className="mt-8 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 flex items-center gap-3 text-sm text-muted">
          <span>{formatDate(post.date, lang)}</span>
          <span aria-hidden>·</span>
          <span>{readingLabel(post.readingMinutes, lang)}</span>
        </p>
        <hr className="my-8 border-border" />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="prose">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </Reveal>
    </article>
  );
}

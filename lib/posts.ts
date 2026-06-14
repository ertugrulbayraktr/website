import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Lang } from "./i18n";
import { PostMeta, Post, readingMinutes } from "./format";

export type { PostMeta, Post } from "./format";
export { formatDate } from "./format";

const postsDir = path.join(process.cwd(), "content", "posts");

function readPostFiles(): string[] {
  if (!fs.existsSync(postsDir)) return [];
  return fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));
}

export function getAllPosts(): PostMeta[] {
  return readPostFiles()
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(postsDir, file), "utf8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        excerpt: data.excerpt ?? "",
        lang: (data.lang as Lang) ?? "tr",
        readingMinutes: readingMinutes(content),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | null {
  const file = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    lang: (data.lang as Lang) ?? "tr",
    readingMinutes: readingMinutes(content),
    content,
  };
}

export function getPostSlugs(): string[] {
  return readPostFiles().map((f) => f.replace(/\.md$/, ""));
}

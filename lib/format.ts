import { Lang } from "./i18n";

// Client-güvenli tipler ve yardımcılar (fs içermez).

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  lang: Lang;
  readingMinutes: number;
}

export interface Post extends PostMeta {
  content: string;
}

// Ortalama 200 kelime/dakika üzerinden okuma süresi.
export function readingMinutes(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function readingLabel(minutes: number, lang: Lang): string {
  return lang === "tr" ? `${minutes} dk okuma` : `${minutes} min read`;
}

export function formatDate(date: string, lang: Lang): string {
  if (!date) return "";
  const d = new Date(date);
  if (isNaN(d.getTime())) return date;
  return d.toLocaleDateString(lang === "tr" ? "tr-TR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

"use client";

import { useLang } from "@/lib/i18n";

export default function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center rounded-full border border-border text-xs font-medium">
      <button
        type="button"
        onClick={() => setLang("tr")}
        aria-pressed={lang === "tr"}
        className={`rounded-full px-2.5 py-1 transition ${
          lang === "tr" ? "bg-accent text-bg" : "text-muted hover:text-fg"
        }`}
      >
        TR
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`rounded-full px-2.5 py-1 transition ${
          lang === "en" ? "bg-accent text-bg" : "text-muted hover:text-fg"
        }`}
      >
        EN
      </button>
    </div>
  );
}

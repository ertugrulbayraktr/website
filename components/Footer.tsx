"use client";

import { useLang } from "@/lib/i18n";
import { profile, socials } from "@/lib/content";
import Monogram from "./Monogram";

export default function Footer() {
  const { t } = useLang();
  const year = 2026; // Placeholder — dağıtımda dinamikleştirilebilir.

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-6 px-6 py-12 sm:flex-row">
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center gap-2.5 sm:justify-start">
            <Monogram className="h-9 w-9 text-sm" />
            <p className="font-serif text-lg font-semibold">{profile.name}</p>
          </div>
          <p className="mt-2 text-sm text-muted">
            © {year} {profile.name}. {t("footer.rights")}
          </p>
        </div>

        <div className="flex items-center gap-5 text-sm text-muted">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline transition hover:text-fg"
            >
              {s.label}
            </a>
          ))}
          <a href="#" className="transition hover:text-fg">
            ↑ {t("footer.top")}
          </a>
        </div>
      </div>
    </footer>
  );
}

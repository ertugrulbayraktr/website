"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type Lang = "tr" | "en";

type Dict = Record<string, { tr: string; en: string }>;

// Tüm arayüz metinleri burada. Yeni metin eklemek için anahtar + tr/en ekleyin.
export const dict: Dict = {
  "nav.about": { tr: "Hakkımda", en: "About" },
  "nav.timeline": { tr: "Tecrübe", en: "Experience" },
  "nav.stack": { tr: "Teknolojiler", en: "Tech Stack" },
  "nav.projects": { tr: "Projeler", en: "Projects" },
  "nav.blog": { tr: "Blog", en: "Blog" },
  "nav.contact": { tr: "İletişim", en: "Contact" },

  "hero.eyebrow": {
    tr: "Backend & Dağıtık Sistemler",
    en: "Backend & Distributed Systems",
  },
  "hero.cta.primary": { tr: "İletişime geç", en: "Get in touch" },
  "hero.cta.secondary": { tr: "Projelerimi gör", en: "View projects" },

  "timeline.title": { tr: "Tecrübe", en: "Experience" },
  "timeline.subtitle": {
    tr: "Profesyonel ve akademik yolculuğum.",
    en: "My professional and academic journey.",
  },

  "stack.title": { tr: "Teknolojiler", en: "Tech Stack" },
  "stack.subtitle": {
    tr: "Düzenli olarak çalıştığım araçlar ve teknolojiler.",
    en: "Tools and technologies I work with regularly.",
  },

  "projects.title": { tr: "Projeler", en: "Projects" },
  "projects.subtitle": {
    tr: "Üzerinde çalıştığım seçili işler.",
    en: "Selected work I've built.",
  },
  "projects.visit": { tr: "İncele", en: "Visit" },
  "projects.detail": { tr: "Detayları gör", en: "View details" },
  "project.back": { tr: "Tüm projelere dön", en: "Back to all projects" },
  "project.overview": { tr: "Genel Bakış", en: "Overview" },
  "project.problem": { tr: "Problem", en: "Problem" },
  "project.solution": { tr: "Çözüm", en: "Solution" },
  "project.highlights": { tr: "Öne Çıkanlar", en: "Highlights" },
  "project.live": { tr: "Canlı Site", en: "Live Site" },
  "project.code": { tr: "Kaynak Kod", en: "Source Code" },

  "about.title": { tr: "Hakkımda", en: "About" },
  "about.education": { tr: "Eğitim", en: "Education" },
  "about.certifications": { tr: "Sertifikalar", en: "Certifications" },

  "blog.title": { tr: "Blog", en: "Blog" },
  "blog.subtitle": {
    tr: "Düşüncelerim, notlarım ve yazılarım.",
    en: "Thoughts, notes, and writing.",
  },
  "blog.readmore": { tr: "Devamını oku", en: "Read more" },
  "blog.all": { tr: "Tüm yazılar", en: "All posts" },
  "blog.back": { tr: "Tüm yazılara dön", en: "Back to all posts" },
  "blog.empty": { tr: "Henüz yazı yok.", en: "No posts yet." },

  "contact.title": { tr: "İletişim", en: "Contact" },
  "contact.subtitle": {
    tr: "Bir fikriniz mi var? Birlikte konuşalım.",
    en: "Have something in mind? Let's talk.",
  },
  "contact.name": { tr: "Adınız", en: "Your name" },
  "contact.email": { tr: "E-posta", en: "Email" },
  "contact.message": { tr: "Mesajınız", en: "Your message" },
  "contact.send": { tr: "Gönder", en: "Send" },
  "contact.sending": { tr: "Gönderiliyor…", en: "Sending…" },
  "contact.success": {
    tr: "Mesajınız iletildi. Teşekkürler!",
    en: "Your message has been sent. Thank you!",
  },
  "contact.error": {
    tr: "Bir hata oluştu. Lütfen tekrar deneyin.",
    en: "Something went wrong. Please try again.",
  },
  "contact.or": { tr: "ya da doğrudan", en: "or reach me directly at" },

  "footer.rights": { tr: "Tüm hakları saklıdır.", en: "All rights reserved." },
  "footer.top": { tr: "Yukarı çık", en: "Back to top" },

  "common.present": { tr: "Günümüz", en: "Present" },
};

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("tr");

  useEffect(() => {
    const stored = window.localStorage.getItem("lang") as Lang | null;
    if (stored === "tr" || stored === "en") {
      setLangState(stored);
    } else if (navigator.language.toLowerCase().startsWith("en")) {
      setLangState("en");
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("lang", l);
    document.documentElement.lang = l;
  };

  const t = (key: string) => {
    const entry = dict[key];
    if (!entry) return key;
    return entry[lang];
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

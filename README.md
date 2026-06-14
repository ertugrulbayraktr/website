# Ertuğrul Bayraktar — Kişisel Website

Dağıtık sistemler ve olay-güdümlü mikroservisler üzerine uzmanlaşmış bir yazılım mühendisinin kişisel web sitesi. İki dilli (TR/EN), açık/koyu tema ve içerik odaklı, resmi-akademik bir tasarım.

## Teknolojiler

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — CSS değişkenleriyle temalandırma
- **Framer Motion** — dengeli scroll/hover animasyonları
- **next-themes** — açık/koyu mod (sistem algılama + localStorage)
- **Markdown blog** — `react-markdown` + `rehype-highlight`

## Geliştirme

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## İçeriği düzenleme

- **Kişisel bilgiler, tecrübe, projeler, tech stack, eğitim, sertifikalar:** `lib/content.ts`
- **Arayüz metinleri (TR/EN):** `lib/i18n.tsx`
- **Renk paleti:** `app/globals.css` (`:root` ve `.dark` değişken blokları)
- **Blog yazıları:** `content/posts/*.md`

## Lisans

© Ertuğrul Bayraktar. Tüm hakları saklıdır.

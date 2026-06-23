# Proje Ekran Görüntüleri

Her projenin ekran görüntülerini buraya, proje slug'ına göre bir alt klasöre koyun:

```
public/projects/
  aeroops/
    dashboard.png
    audit-diff.png
  skydesk/
    agent-queue.png
  skin-lesion-classification/
    result.png
```

Sonra `lib/content.ts` içindeki ilgili projenin `screenshots` alanına ekleyin:

```ts
screenshots: [
  { src: "/projects/aeroops/dashboard.png", caption: { tr: "Panel", en: "Dashboard" } },
  { src: "/projects/aeroops/audit-diff.png", caption: { tr: "Denetim farkları", en: "Audit diff viewer" } },
],
```

## Öneriler

- **Format:** `.png` (keskin UI) veya `.webp` (daha küçük dosya). `.jpg` da olur.
- **Genişlik:** ~1600px ideal (retina için net, ama çok büyük dosya değil).
- Tutarlılık için tüm görüntüleri benzer en-boy oranında çekin.
- `caption` opsiyoneldir; verilmezse alt yazı gösterilmez.

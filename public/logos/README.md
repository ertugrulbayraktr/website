# Şirket Logoları

Bu klasöre kurum logolarını ekleyin. Dosya yoksa otomatik olarak kurum baş harfleri gösterilir.

## Beklenen dosyalar (timeline ile eşleşir)

| Dosya | Kurum |
|-------|-------|
| `turkcell.svg`   | Turkcell Global Bilgi |
| `avsos.svg`      | Avsos.ai |
| `sunexpress.svg` | SunExpress Airlines |
| `llux.svg`       | Llux |

## Format önerileri

- **Tercih: `.svg`** (keskin, her ekranda net). Olmazsa **`.png`** (şeffaf arka plan).
- **Şeffaf arka plan** kullanın — rozet zemini temaya göre değişir.
- Kare veya kareye yakın oran ideal (rozet 36×36 px, logo `object-contain` ile sığdırılır).
- Tek renkli/sade logolar açık+koyu temada en iyi durur.

## Farklı bir dosya adı/uzantı kullanmak isterseniz

`lib/content.ts` içindeki ilgili timeline kaydının `logo` alanını güncelleyin,
örn. `logo: "/logos/turkcell.png"`.

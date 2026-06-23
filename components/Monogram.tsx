// "EB" monogram markası — navbar ve footer'da kullanılır.
// Boyut/renk dışarıdan className ile verilir; temaya uyum sağlar (currentColor + border).
export default function Monogram({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={`inline-flex shrink-0 items-center justify-center rounded-md border border-fg/25 font-serif font-semibold leading-none tracking-tight ${className}`}
    >
      EB
    </span>
  );
}

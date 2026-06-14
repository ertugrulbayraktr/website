import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-serif text-6xl font-semibold">404</p>
      <p className="mt-4 text-muted">Aradığınız sayfa bulunamadı.</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition hover:opacity-90"
      >
        Ana sayfaya dön
      </Link>
    </main>
  );
}

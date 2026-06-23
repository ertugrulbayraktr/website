"use client";

import { useCallback, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Lang } from "@/lib/i18n";
import { LocalizedText } from "@/lib/content";

type Shot = { src: string; caption?: LocalizedText };

export default function Lightbox({
  shots,
  index,
  onClose,
  onNavigate,
  lang,
}: {
  shots: Shot[];
  index: number | null;
  onClose: () => void;
  onNavigate: (i: number) => void;
  lang: Lang;
}) {
  const reduce = useReducedMotion();
  const open = index !== null;
  const many = shots.length > 1;

  const prev = useCallback(() => {
    if (index !== null) onNavigate((index - 1 + shots.length) % shots.length);
  }, [index, shots.length, onNavigate]);

  const next = useCallback(() => {
    if (index !== null) onNavigate((index + 1) % shots.length);
  }, [index, shots.length, onNavigate]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, prev, next]);

  const shot = index !== null ? shots[index] : null;

  const navBtn =
    "absolute top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur transition hover:bg-white/20";

  return (
    <AnimatePresence>
      {open && shot && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Görsel önizleme"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Kapat"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur transition hover:bg-white/20"
          >
            ×
          </button>

          {many && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Önceki"
              className={`${navBtn} left-4`}
            >
              ‹
            </button>
          )}

          <figure
            className="flex max-h-full max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={shot.src}
              alt={shot.caption ? shot.caption[lang] : ""}
              className="max-h-[82vh] w-auto rounded-lg"
            />
            <figcaption className="mt-3 text-center text-sm text-white/70">
              {shot.caption ? `${shot.caption[lang]} · ` : ""}
              {(index ?? 0) + 1} / {shots.length}
            </figcaption>
          </figure>

          {many && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Sonraki"
              className={`${navBtn} right-4`}
            >
              ›
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

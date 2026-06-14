"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

// App Router'da template.tsx her gezinmede yeniden monte edilir;
// bu sayede sayfa geçişlerinde yumuşak bir giriş animasyonu sağlar.
export default function Template({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

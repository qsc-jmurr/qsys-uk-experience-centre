"use client";

// A wrapper component that adds page transition animations using Framer Motion

import { motion } from "framer-motion";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
        key = {typeof window !== 'undefined' ? window.location.pathname : ''}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className = "p-4"
    >
      {children}
    </motion.div>
  );
}
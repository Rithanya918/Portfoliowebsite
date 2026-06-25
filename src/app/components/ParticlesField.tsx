import { motion } from "motion/react";

/**
 * Ambient red dots that drift across the whole page.
 * Rendered once at the app root as a fixed, full-viewport layer.
 * Sits above section backgrounds but below content (which uses z-10),
 * and is pointer-events-none so it never blocks interaction.
 */
export function ParticlesField() {
  const width = typeof window !== "undefined" ? window.innerWidth : 1440;
  const height = typeof window !== "undefined" ? window.innerHeight : 900;

  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      {[...Array(28)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
          initial={{
            x: Math.random() * width,
            y: Math.random() * height,
          }}
          animate={{
            y: [null, Math.random() * height],
            x: [null, Math.random() * width],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
}

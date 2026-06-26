import { motion } from "motion/react";

/**
 * Ambient red "light" gradient that continues across the whole page.
 * Fixed, full-viewport layer of small drifting radial glows.
 * Sits above section backgrounds but below content (z-10) and is
 * pointer-events-none so it never blocks interaction.
 */
export function RedGlowField() {
  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute top-[8%] left-[6%] w-[32rem] h-[32rem] rounded-full bg-primary/15 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[42%] right-[8%] w-[28rem] h-[28rem] rounded-full bg-red-700/15 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 40, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[38%] w-[32rem] h-[32rem] rounded-full bg-red-900/20 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -25, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[70%] right-[30%] w-[26rem] h-[26rem] rounded-full bg-red-600/12 blur-3xl"
        animate={{ x: [0, -25, 0], y: [0, -30, 0], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

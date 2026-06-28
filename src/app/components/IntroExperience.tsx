import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useCallback } from "react";
import { Briefcase, Code2, User } from "lucide-react";

type Phase = "profiles" | "tudum" | "done";

const PROFILES = [
  {
    id: "recruiter",
    label: "Recruiter",
    icon: Briefcase,
    gradient: "linear-gradient(135deg, #e50914 0%, #7f1d1d 100%)",
  },
  {
    id: "engineer",
    label: "Engineer",
    icon: Code2,
    gradient: "linear-gradient(135deg, #b81d24 0%, #4a1010 100%)",
  },
  {
    id: "visitor",
    label: "Visitor",
    icon: User,
    gradient: "linear-gradient(135deg, #991b1b 0%, #1a0d0d 100%)",
  },
];

/**
 * Plays a short, synthesized "tudum"-style cue using the Web Audio API.
 * No external/copyrighted audio asset required. Safe to call from a user
 * gesture (the profile click), which satisfies browser autoplay rules.
 */
function playTudum() {
  try {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    // Context can start "suspended" even inside a gesture — force it on.
    ctx.resume?.();

    // Gentle master volume so the whole cue stays soft.
    const master = ctx.createGain();
    master.gain.value = 0.22;
    master.connect(ctx.destination);

    // A soft bell-like note: pure sine, slow attack, long airy fade.
    const note = (startOffset: number, freq: number, duration: number) => {
      const t = ctx.currentTime + startOffset;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.linearRampToValueAtTime(1, t + 0.06); // smooth swell in
      gain.gain.exponentialRampToValueAtTime(0.0001, t + duration); // long fade
      osc.connect(gain);
      gain.connect(master);
      osc.start(t);
      osc.stop(t + duration + 0.1);
    };

    // Soft ascending arpeggio (A major: A4 - C#5 - E5), notes overlapping.
    note(0, 440.0, 1.1);
    note(0.18, 554.37, 1.2);
    note(0.36, 659.25, 1.6);
  } catch {
    /* audio not available — fail silently */
  }
}

export function IntroExperience({ onComplete }: { onComplete: () => void }) {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const [phase, setPhase] = useState<Phase>("profiles");

  const finish = useCallback(() => {
    setPhase("done");
    onComplete();
  }, [onComplete]);

  const selectProfile = (id: string) => {
    try {
      sessionStorage.setItem("rs-profile", id);
    } catch {
      /* ignore */
    }
    if (prefersReduced) {
      finish();
      return;
    }
    playTudum();
    setPhase("tudum");
  };

  // Auto-advance after the tudum animation runs its course.
  useEffect(() => {
    if (phase !== "tudum") return;
    const timer = setTimeout(finish, 2600);
    return () => clearTimeout(timer);
  }, [phase, finish]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Skip */}
          <button
            onClick={finish}
            className="absolute top-6 right-6 z-10 px-4 py-2 text-sm text-white/60 hover:text-white border border-white/15 hover:border-white/40 rounded-md transition-colors"
          >
            Skip intro
          </button>

          {phase === "profiles" && (
            <motion.div
              className="flex flex-col items-center px-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-white text-3xl md:text-5xl font-medium mb-10 md:mb-14 text-center">
                Who's watching?
              </h1>

              <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                {PROFILES.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <motion.button
                      key={p.id}
                      onClick={() => selectProfile(p.id)}
                      className="group flex flex-col items-center gap-3"
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + i * 0.12, duration: 0.4 }}
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <div
                        className="w-28 h-28 md:w-36 md:h-36 rounded-md flex items-center justify-center ring-2 ring-transparent group-hover:ring-white transition-all duration-200"
                        style={{ background: p.gradient }}
                      >
                        <Icon className="w-12 h-12 md:w-16 md:h-16 text-white/90" />
                      </div>
                      <span className="text-white/60 group-hover:text-white text-lg md:text-xl transition-colors">
                        {p.label}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {phase === "tudum" && (
            <div className="relative flex items-center justify-center">
              {/* Red glow burst */}
              <motion.div
                className="absolute w-[40rem] h-[40rem] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(229,9,20,0.45) 0%, transparent 60%)",
                }}
                initial={{ scale: 0.2, opacity: 0 }}
                animate={{ scale: [0.2, 1.4, 1.1], opacity: [0, 0.9, 0] }}
                transition={{ duration: 2.4, ease: "easeOut" }}
              />

              {/* Name zoom — Netflix-logo style */}
              <motion.h1
                className="relative font-bold tracking-tight text-center select-none"
                style={{
                  color: "#e50914",
                  textShadow: "0 0 40px rgba(229,9,20,0.6)",
                  fontSize: "clamp(2.5rem, 12vw, 9rem)",
                }}
                initial={{ scale: 2.6, opacity: 0, letterSpacing: "0.3em" }}
                animate={{
                  scale: [2.6, 1, 1, 1.25],
                  opacity: [0, 1, 1, 0],
                  letterSpacing: ["0.3em", "0em", "0em", "0.05em"],
                }}
                transition={{
                  duration: 2.5,
                  times: [0, 0.35, 0.8, 1],
                  ease: "easeInOut",
                }}
              >
                Welcome!
              </motion.h1>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

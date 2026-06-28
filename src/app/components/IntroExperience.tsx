import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useCallback, useRef } from "react";
import { Briefcase, User, ArrowRight } from "lucide-react";

type Phase = "profiles" | "form" | "welcome" | "done";

const PROFILES = [
  {
    id: "hr",
    label: "HR",
    icon: Briefcase,
    gradient: "linear-gradient(135deg, #e50914 0%, #7f1d1d 100%)",
  },
  {
    id: "visitor",
    label: "Visitor",
    icon: User,
    gradient: "linear-gradient(135deg, #991b1b 0%, #1a0d0d 100%)",
  },
];

/**
 * Fire-and-forget visit recording.
 *
 * Sends the captured visitor details to the /api/track serverless function,
 * which appends a row to the linked Google Sheet. Failures are swallowed so a
 * tracking hiccup never blocks the visitor's experience.
 *
 * Requires SHEET_WEBHOOK_URL to be set in Vercel (see VISIT_TRACKING.md).
 */
function notifyVisit(visit: {
  name: string;
  company: string;
  profile: string;
  time: string;
}) {
  try {
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(visit),
      keepalive: true,
    }).catch(() => {
      /* tracking is best-effort */
    });
  } catch {
    /* ignore */
  }
}

/**
 * Plays a soft, gentle ascending chime using the Web Audio API.
 * No external/copyrighted audio asset required. Safe to call from a user
 * gesture (form submit), which satisfies browser autoplay rules.
 */
function playChime() {
  try {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    ctx.resume?.();

    const master = ctx.createGain();
    master.gain.value = 0.22;
    master.connect(ctx.destination);

    const note = (startOffset: number, freq: number, duration: number) => {
      const t = ctx.currentTime + startOffset;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.linearRampToValueAtTime(1, t + 0.06);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
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
  const [profile, setProfile] = useState<string>("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const nameInputRef = useRef<HTMLInputElement>(null);

  const finish = useCallback(() => {
    setPhase("done");
    onComplete();
  }, [onComplete]);

  const selectProfile = (id: string) => {
    setProfile(id);
    setPhase("form");
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = name.trim();
    const cleanCompany = company.trim();
    if (!cleanName) {
      nameInputRef.current?.focus();
      return;
    }

    try {
      sessionStorage.setItem("rs-profile", profile);
      sessionStorage.setItem("rs-name", cleanName);
      sessionStorage.setItem("rs-company", cleanCompany);
    } catch {
      /* ignore */
    }

    notifyVisit({
      name: cleanName,
      company: cleanCompany || "—",
      profile,
      time: new Date().toLocaleString(),
    });

    if (prefersReduced) {
      finish();
      return;
    }
    playChime();
    setPhase("welcome");
  };

  // Focus the name field when the form appears.
  useEffect(() => {
    if (phase === "form") {
      const id = setTimeout(() => nameInputRef.current?.focus(), 350);
      return () => clearTimeout(id);
    }
  }, [phase]);

  // Auto-advance after the welcome card has been shown.
  useEffect(() => {
    if (phase !== "welcome") return;
    const timer = setTimeout(finish, 3200);
    return () => clearTimeout(timer);
  }, [phase, finish]);

  const firstName = name.trim().split(/\s+/)[0] || "there";

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden px-6"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* ---------- Profiles ---------- */}
          {phase === "profiles" && (
            <motion.div
              className="flex flex-col items-center"
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

          {/* ---------- Name / Company form ---------- */}
          {phase === "form" && (
            <motion.form
              onSubmit={submitForm}
              className="w-full max-w-md flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45 }}
            >
              <h2 className="text-white text-2xl md:text-4xl font-semibold mb-2 text-center">
                Before we roll the credits…
              </h2>
              <p className="text-white/50 text-center mb-8">
                Tell me who's stopping by.
              </p>

              <label className="text-white/70 text-sm mb-2" htmlFor="visit-name">
                Your name
              </label>
              <input
                id="visit-name"
                ref={nameInputRef}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alex Johnson"
                autoComplete="name"
                className="mb-5 px-4 py-3 rounded-md bg-[#1a1a1a] text-white placeholder-white/30 border border-white/15 focus:border-[#e50914] focus:outline-none transition-colors"
              />

              <label className="text-white/70 text-sm mb-2" htmlFor="visit-company">
                Company / Organization
              </label>
              <input
                id="visit-company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g. Netflix"
                autoComplete="organization"
                className="mb-8 px-4 py-3 rounded-md bg-[#1a1a1a] text-white placeholder-white/30 border border-white/15 focus:border-[#e50914] focus:outline-none transition-colors"
              />

              <motion.button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3 rounded-md bg-[#e50914] text-white font-semibold hover:bg-[#c40812] transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Continue
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
            </motion.form>
          )}

          {/* ---------- Personalized welcome card ---------- */}
          {phase === "welcome" && (
            <div className="relative flex items-center justify-center w-full">
              {/* Red glow burst */}
              <motion.div
                className="absolute w-[40rem] h-[40rem] rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(229,9,20,0.45) 0%, transparent 60%)",
                }}
                initial={{ scale: 0.2, opacity: 0 }}
                animate={{ scale: [0.2, 1.4, 1.1], opacity: [0, 0.9, 0.3] }}
                transition={{ duration: 2.4, ease: "easeOut" }}
              />

              <motion.div
                className="relative z-10 w-full max-w-lg rounded-2xl border border-white/10 px-8 py-10 md:px-12 md:py-14 text-center shadow-2xl"
                style={{
                  background:
                    "linear-gradient(160deg, #1a0d0d 0%, #2a0a0a 45%, #0b0b0d 100%)",
                }}
                initial={{ scale: 0.7, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
              >
                <motion.p
                  className="uppercase tracking-[0.3em] text-xs mb-4"
                  style={{ color: "#e50914" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                >
                  Now Playing
                </motion.p>

                <motion.h1
                  className="font-bold text-white leading-tight"
                  style={{
                    textShadow: "0 0 40px rgba(229,9,20,0.5)",
                    fontSize: "clamp(2rem, 7vw, 3.75rem)",
                  }}
                  initial={{ scale: 1.3, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  Welcome, {firstName}!
                </motion.h1>

                {company.trim() && (
                  <motion.p
                    className="text-white/60 mt-4 text-lg"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    from {company.trim()}
                  </motion.p>
                )}

                <motion.p
                  className="text-white/40 mt-6 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Enjoy the show.
                </motion.p>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

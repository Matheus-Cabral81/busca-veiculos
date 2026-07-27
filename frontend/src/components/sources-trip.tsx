import { motion } from "motion/react";
import { c } from "../lib/theme";
import { SOURCES } from "../lib/data";

export function SourceStrip() {
  return (
    <section id="fontes" className="max-w-6xl mx-auto px-6 md:px-10 py-10">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <span className="text-xs font-medium uppercase tracking-widest shrink-0" style={{ color: c.inkSoft }}>
          Consultando agora
        </span>
        <div className="relative flex-1 h-px" style={{ background: c.hairline }}>
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 h-px w-24 rounded-full"
            style={{ background: `linear-gradient(90deg, transparent, ${c.brass}, transparent)` }}
            animate={{ left: ["-6rem", "100%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
        {SOURCES.map((s) => (
          <span key={s} className="text-sm" style={{ fontFamily: "'IBM Plex Mono', monospace", color: c.inkSoft }}>
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}

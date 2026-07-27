import { motion } from "motion/react";
import { c } from "../lib/theme";
import { STEPS } from "../lib/data";
import { Reveal } from "./reveal";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
      <Reveal>
        <h2 className="text-3xl md:text-4xl mb-12" style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, color: c.ink }}>
          Como funciona
        </h2>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-10">
        {STEPS.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <span className="text-sm" style={{ fontFamily: "'IBM Plex Mono', monospace", color: c.brass }}>
              {s.n}
            </span>
            <h3 className="text-lg mt-3 mb-2" style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, color: c.ink }}>
              {s.titulo}
            </h3>
            <p className="text-sm leading-relaxed font-light" style={{ color: c.inkSoft }}>
              {s.texto}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

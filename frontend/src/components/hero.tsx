import { motion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";
import { c } from "../lib/theme";
import { fadeUp } from "../lib/motion";
import { Odometer } from "./odometer";

const FIELDS = [
  { label: "Marca", placeholder: "Ex: Volkswagen" },
  { label: "Modelo", placeholder: "Ex: T-Cross" },
  { label: "Localização", placeholder: "Cidade ou UF" },
  { label: "Preço até", placeholder: "R$ 90.000" },
];

export function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 pt-20 md:pt-32 pb-14">
      <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.09 } } }}>
        <motion.p
          variants={fadeUp}
          className="text-xs font-medium uppercase tracking-[0.22em] mb-6"
          style={{ color: c.brass }}
        >
          Consulta multi-revendedor
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-7xl leading-[1.03] max-w-3xl"
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 300, color: c.ink }}
        >
          Todos os revendedores.
          <br />
          <span style={{ fontStyle: "italic", fontWeight: 500, color: c.emerald }}>Uma busca só.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-base md:text-lg max-w-lg font-light"
          style={{ color: c.inkSoft }}
        >
          O Radar consulta lojas e revendedoras online ao mesmo tempo e traz o
          carro certo, com o preço certo, na hora.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 rounded-2xl p-2.5 flex flex-col md:flex-row gap-2"
          style={{ background: c.surface, border: `1px solid ${c.hairline}`, boxShadow: "0 20px 40px -24px rgba(20,21,26,0.15)" }}
        >
          <div className="flex-1 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x" style={{ borderColor: c.hairline }}>
            {FIELDS.map((f) => (
              <div key={f.label} className="flex-1 px-4 py-3">
                <label className="block text-[10px] font-medium uppercase tracking-wide mb-1" style={{ color: c.inkSoft }}>
                  {f.label}
                </label>
                <input
                  type="text"
                  placeholder={f.placeholder}
                  className="w-full text-sm bg-transparent outline-none placeholder:opacity-40"
                  style={{ color: c.ink }}
                />
              </div>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 text-sm font-medium px-7 py-3.5 rounded-xl"
            style={{ background: c.emerald, color: c.porcelain }}
          >
            Buscar carros
            <ArrowRight size={16} weight="bold" />
          </motion.button>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-6 flex items-center gap-2 text-sm">
          <motion.span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{ background: c.emerald }}
            animate={{ opacity: [1, 0.35, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <Odometer target={12847} />
          <span style={{ color: c.inkSoft }}>veículos ativos neste instante</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

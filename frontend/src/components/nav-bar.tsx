import { motion } from "motion/react"
import { c } from "../lib/theme";

export default function NavBar() {
  return (
    <motion.header
    initial={{ opacity: 0, y: -12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="sticky top-0 z-30 backdrop-blur-md"
    style={{ background: "rga(247,246,242,0.85)", borderBottom: `1px solid ${c.hairline}`}}
  >
    <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">
          <span
            className="text-xl tracking-tight"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, color: c.ink }}
          >
            Buscar-Veiculos
          </span>

          <nav className="hidden md:flex items-center gap-10 text-sm" style={{ color: c.inkSoft }}>
            <a href="#como-funciona" className="hover:opacity-70 transition-opacity" style={{ color: c.inkSoft }}>
              Como funciona
            </a>
            <a href="#fontes" className="hover:opacity-70 transition-opacity" style={{ color: c.inkSoft }}>
              Fontes
            </a>
            <a href="#destaques" className="hover:opacity-70 transition-opacity" style={{ color: c.inkSoft }}>
              Destaques
            </a>
          </nav>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="text-sm font-medium px-5 py-2.5 rounded-full"
            style={{ background: c.emerald, color: c.porcelain }}
          >
            Buscar agora
          </motion.button>
        </div>
    </motion.header>
  )
}

import { useOdometer } from "../hooks/useOdometer";
import { c } from "../lib/theme";

export function Odometer({ target }: { target: number }) {
  const value = useOdometer(target, 1500);
  return (
    <span
      className="font-semibold tabular-nums"
      style={{ fontFamily: "'IBM Plex Mono', monospace", color: c.brass }}
    >
      {value.toLocaleString("pt-BR")}
    </span>
  );
}

import { useEffect, useState } from "react";


//anima um número até "target" com easing, depois faz pequenos incrementos
//periódicos para simular veículos entrando na base em tempo real
export function useOdometer(target: number, durationMs: number) {
  const [value, setValue] = useState(Math.round(target * 0.86));

  useEffect(() => {
    let raf: number;
    const from = value;
    const delta = target - from;
    const start = performance.now();

    function tick(now: number) {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(from + delta * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    const interval = setInterval(() => {
      setValue((v) => v + Math.floor(Math.random() * 3));
    }, 2800);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return value;
}

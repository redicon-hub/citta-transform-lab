import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const CLOSED = "https://artigianiincitta.it/wp-content/uploads/2021/01/Letto-a-scomparsa-peneloper-chiuso-materasso-alto.jpg";
const OPEN = "https://artigianiincitta.it/wp-content/uploads/2021/01/Letto-a-scomparsa-peneloper-aperto-materasso-alto.jpg";
const CYCLE = 5200;

export function WallBedHero() {
  const [night, setNight] = useState(false);
  const [auto, setAuto] = useState(true);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!auto) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setNight((n) => !n);
      setTick((t) => t + 1);
    }, CYCLE);
    return () => window.clearInterval(id);
  }, [auto]);

  const choose = (value: boolean) => {
    setAuto(false);
    if (value !== night) {
      setNight(value);
      setTick((t) => t + 1);
    }
  };

  return (
    <section className="relative isolate overflow-hidden bg-ink text-warm-cream">
      <div className="absolute inset-0 -z-10">
        {/* Closed: day */}
        <img
          src={CLOSED}
          alt="Letto a scomparsa Penelope chiuso con divano: di giorno un soggiorno"
          fetchPriority="high"
          className={cn(
            "absolute inset-0 h-full w-full object-cover object-[48%_center] md:object-[62%_center] transition-transform duration-[6000ms] ease-out",
            night ? "scale-[1.02]" : "scale-[1.1]",
          )}
        />
        {/* Open: night, revealed with a curtain wipe from the top */}
        <img
          src={OPEN}
          alt="Lo stesso letto a scomparsa Penelope in apertura sopra il divano"
          className={cn(
            "absolute inset-0 h-full w-full object-cover object-[48%_center] md:object-[62%_center] transition-[clip-path,transform,filter] duration-[1800ms] ease-[cubic-bezier(0.77,0,0.18,1)]",
            night
              ? "scale-[1.06] [clip-path:inset(0_0_0_0)] brightness-[0.92]"
              : "scale-[1.12] [clip-path:inset(0_0_100%_0)]",
          )}
        />
        {/* Light sweep on every transition */}
        <div key={tick} className="pointer-events-none absolute inset-0 overflow-hidden">
          {tick > 0 && (
            <div className="wallbed-sweep absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-warm-cream/25 to-transparent" />
          )}
        </div>
        <div className="absolute inset-0 hidden bg-gradient-to-r from-ink/85 via-ink/35 via-40% to-transparent to-65% md:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/65 via-60% to-ink/20 md:from-ink/60 md:via-transparent" />
      </div>

      <div className="mx-auto flex min-h-[640px] max-w-[1600px] flex-col justify-end px-6 pb-10 pt-24 md:min-h-[calc(100svh-129px)] md:px-16 md:pb-16">
        <nav aria-label="Breadcrumb" className="mb-8 flex gap-2 text-[11px] text-warm-cream/60">
          <a href="/" className="hover:text-warm-cream">Home</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="text-warm-cream/90">Letti a scomparsa</span>
        </nav>
        <div className="text-[10px] uppercase tracking-[0.28em] text-warm-cream/70 md:text-[11px]">
          Letti a scomparsa su misura · Milano
        </div>
        <h1 className="mt-5 max-w-4xl font-display text-[12vw] font-light leading-[0.95] sm:text-6xl md:text-[5.6vw]">
          <span className={cn("block transition-opacity duration-700", night && "opacity-40")}>
            Di giorno vivi.
          </span>
          <span className={cn("block italic transition-opacity duration-700", !night && "opacity-40")}>
            Di notte dormi.
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-[15px] font-light leading-relaxed text-warm-cream/80 md:text-lg">
          La stessa parete, due stanze. Letti veri con materasso fino a 30 cm, dal singolo
          80×190 al king size 180×200, costruiti sulle misure della tua casa.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#configurazioni"
            className="group inline-flex min-h-14 items-center justify-between gap-6 bg-warm-cream px-6 text-[11px] font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:bg-warm-clay hover:text-warm-cream"
          >
            Cosa farai di giorno?
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#modelli"
            className="group inline-flex min-h-14 items-center justify-between gap-6 border border-warm-cream/50 px-6 text-[11px] font-medium uppercase tracking-[0.16em] transition-colors hover:border-warm-cream hover:bg-warm-cream/10"
          >
            Sfoglia tutti i modelli
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-10 flex items-center gap-5 border-t border-warm-cream/15 pt-5">
          <div role="group" aria-label="Mostra il letto chiuso o aperto" className="flex rounded-full border border-warm-cream/25 p-1">
            {[
              { v: false, label: "Giorno", Icon: Sun },
              { v: true, label: "Notte", Icon: Moon },
            ].map(({ v, label, Icon }) => (
              <button
                key={label}
                type="button"
                aria-pressed={night === v}
                onClick={() => choose(v)}
                className={cn(
                  "flex h-9 items-center gap-2 rounded-full px-4 text-[10px] uppercase tracking-[0.16em] transition-colors",
                  night === v ? "bg-warm-cream text-ink" : "text-warm-cream/70 hover:text-warm-cream",
                )}
              >
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                {label}
              </button>
            ))}
          </div>
          <div className="hidden h-px flex-1 overflow-hidden bg-warm-cream/15 sm:block">
            {auto && (
              <div
                key={tick}
                className="wallbed-progress h-full bg-warm-cream/70"
                style={{ ["--wallbed-cycle" as string]: `${CYCLE}ms` }}
              />
            )}
          </div>
          <span className="hidden text-[10px] uppercase tracking-[0.18em] text-warm-cream/60 md:inline">
            Modello Penelope · materasso alto
          </span>
        </div>
      </div>
    </section>
  );
}

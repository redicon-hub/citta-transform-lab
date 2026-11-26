import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  SELECT_SUBCATEGORY_EVENT,
  wallBedCategoryUrl,
  wallBedSubcategories,
} from "@/data/site-categories";

const PER_PAGE = 20;
const euro = new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

export function WallBedCatalog() {
  const [slug, setSlug] = useState("letti-a-scomparsa-con-divano");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("sottocategoria");
    if (fromUrl && wallBedSubcategories.some((s) => s.slug === fromUrl)) setSlug(fromUrl);
    const onSelect = (event: Event) => {
      const next = (event as CustomEvent<string>).detail;
      if (wallBedSubcategories.some((s) => s.slug === next)) {
        setSlug(next);
        setPage(1);
      }
    };
    window.addEventListener(SELECT_SUBCATEGORY_EVENT, onSelect);
    return () => window.removeEventListener(SELECT_SUBCATEGORY_EVENT, onSelect);
  }, []);

  const current = wallBedSubcategories.find((s) => s.slug === slug) ?? wallBedSubcategories[0]!;
  const pages = Math.max(1, Math.ceil(current.products.length / PER_PAGE));
  const visible = useMemo(
    () => current.products.slice((page - 1) * PER_PAGE, page * PER_PAGE),
    [current, page],
  );

  const goTo = (next: number) => {
    setPage(next);
    document.getElementById("modelli")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="modelli" className="scroll-mt-36 px-6 py-16 md:scroll-mt-40 md:px-16 md:py-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-eyebrow text-warm-clay">Catalogo · {wallBedSubcategories.length} famiglie</div>
            <h2 className="mt-3 font-display text-4xl font-light leading-tight md:text-6xl">
              Scegli il tuo letto a scomparsa.
            </h2>
          </div>
          <p className="max-w-md text-sm font-light leading-relaxed text-muted-foreground">
            Seleziona una famiglia: i modelli cambiano subito. Prezzi indicativi, ogni composizione
            viene adattata alla tua parete.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Sottocategorie dei letti a scomparsa"
          className="-mx-6 mt-10 flex gap-2 overflow-x-auto px-6 pb-2 md:mx-0 md:flex-wrap md:px-0"
        >
          {wallBedSubcategories.map((s) => (
            <button
              key={s.slug}
              type="button"
              role="tab"
              aria-selected={s.slug === slug}
              onClick={() => {
                setSlug(s.slug);
                setPage(1);
              }}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2.5 text-xs transition-colors",
                s.slug === slug
                  ? "border-ink bg-ink text-warm-cream"
                  : "border-border bg-background text-ink hover:border-ink",
              )}
            >
              {shortName(s.name)}
              <span className={cn("ml-2 text-[10px]", s.slug === slug ? "text-warm-cream/60" : "text-muted-foreground")}>
                {s.products.length}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-8 flex items-baseline justify-between gap-4 border-b border-border pb-4 text-xs text-muted-foreground">
          <span>
            <strong className="font-medium text-ink">{current.name}</strong> · {current.products.length} modelli
            {pages > 1 && ` · pagina ${page} di ${pages}`}
          </span>
          <a href={wallBedCategoryUrl(current.slug)} className="shrink-0 underline underline-offset-4 hover:text-ink">
            Pagina della categoria
          </a>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
          {visible.map((p) => (
            <li key={p.url} className="min-w-0">
              <a href={p.url} className="group block">
                <div className="aspect-square overflow-hidden bg-secondary">
                  {p.image && (
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      width={300}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  )}
                </div>
                <h3 className="mt-3 line-clamp-2 text-[13px] leading-snug md:text-sm">{p.name}</h3>
                {p.price != null && (
                  <div className="mt-1.5 flex items-baseline gap-2 text-sm">
                    <span className="font-medium">{euro.format(p.price)}</span>
                    {p.regular != null && (
                      <span className="text-xs text-muted-foreground line-through">{euro.format(p.regular)}</span>
                    )}
                  </div>
                )}
              </a>
            </li>
          ))}
        </ul>

        {pages > 1 && (
          <nav aria-label="Pagine del catalogo" className="mt-12 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => goTo(page - 1)}
              disabled={page === 1}
              aria-label="Pagina precedente"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border disabled:opacity-30"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => goTo(n)}
                aria-current={n === page ? "page" : undefined}
                className={cn(
                  "h-11 w-11 rounded-full text-sm",
                  n === page ? "bg-ink text-warm-cream" : "border border-border hover:border-ink",
                )}
              >
                {n}
              </button>
            ))}
            <button
              type="button"
              onClick={() => goTo(page + 1)}
              disabled={page === pages}
              aria-label="Pagina successiva"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border disabled:opacity-30"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}

function shortName(name: string) {
  return name
    .replace(/ (salvaspazio|integrato su misura a Milano|Artigianale)$/i, "")
    .replace(/^Letti a scomparsa /, "")
    .replace(/^Letto a scomparsa /i, "")
    .replace(/^./, (c) => c.toUpperCase());
}

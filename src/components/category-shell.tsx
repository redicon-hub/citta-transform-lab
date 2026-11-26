import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  CalendarDays,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  ShoppingBag,
  X,
} from "lucide-react";
import logo from "@/assets/logo-artigiani.svg";
import { cn } from "@/lib/utils";

export const PHONE_DISPLAY = "02 3993 0866";
export const PHONE_HREF = "tel:+390239930866";
export const WHATSAPP_HREF = "https://wa.me/393475078626";
export const DIRECTIONS_HREF =
  "https://www.google.com/maps/dir/?api=1&destination=Viale+Italia+10%2C+20094+Corsico+MI%2C+Italia";
export const PRIVACY_HREF = "https://www.iubenda.com/privacy-policy/33149617/full-legal";

export function WhatsAppMark({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      style={{ width: size, height: size }}
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function CategoryCta({
  href,
  children,
  tone = "dark",
  className = "",
  track,
}: {
  href: string;
  children: ReactNode;
  tone?: "dark" | "light" | "outline";
  className?: string;
  track?: string;
}) {
  return (
    <a
      href={href}
      data-track-event={track}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-4 px-6 py-3.5 text-center text-[11px] font-medium uppercase leading-relaxed tracking-[0.16em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        tone === "dark" && "bg-ink text-warm-cream hover:bg-warm-clay",
        tone === "light" && "bg-warm-clay text-primary-foreground hover:bg-ink",
        tone === "outline" &&
          "border border-ink/30 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-warm-cream",
        className,
      )}
    >
      <span>{children}</span>
      <ArrowRight
        className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </a>
  );
}

export function CategoryHeader({ categoryLabel }: { categoryLabel: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const submitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = search.trim();
    if (query)
      window.location.href = `https://artigianiincitta.it/?s=${encodeURIComponent(query)}&post_type=product`;
  };

  const closeMenu = () => setMenuOpen(false);
  const links = [
    ["Configurazioni", "#configurazioni"],
    ["Misure", "#misure"],
    ["Modelli", "#modelli"],
    ["Showroom", "#showroom"],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background text-foreground">
      <div className="hidden border-b border-border/50 bg-warm-cream/60 md:block">
        <div className="mx-auto flex h-9 max-w-[1600px] items-center justify-between px-12 text-[11px] uppercase tracking-[0.12em]">
          <div className="flex items-center gap-6">
            <a
              href={PHONE_HREF}
              data-track-event="category_phone_click"
              data-track-location="header"
              className="flex items-center gap-2 hover:text-warm-clay"
            >
              <Phone className="h-3 w-3" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              data-track-event="category_whatsapp_click"
              data-track-location="header"
              className="flex items-center gap-2 hover:text-warm-clay"
            >
              <WhatsAppMark size={14} />
              WhatsApp
            </a>
            <a
              href="mailto:info@artigianiincitta.it"
              className="flex items-center gap-2 hover:text-warm-clay"
            >
              <Mail className="h-3 w-3" />
              info@artigianiincitta.it
            </a>
          </div>
          <a href="#showroom" className="flex items-center gap-2 hover:text-warm-clay">
            <MapPin className="h-3 w-3" />
            Showroom Milano · Corsico
          </a>
        </div>
      </div>

      <div className="px-5 pb-4 pt-3 md:hidden">
        <div className="grid h-11 grid-cols-[44px_minmax(0,1fr)_auto] items-center gap-3">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="category-mobile-menu"
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-secondary"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-6 w-6" />}
          </button>
          <a
            href="/"
            className="flex min-w-0 justify-center"
            aria-label="Artigiani in Città — Home"
          >
            <img src={logo} alt="Artigiani in Città" className="h-10 w-auto max-w-full" />
          </a>
          <a
            href="https://artigianiincitta.it/shop/"
            className="inline-flex h-9 items-center rounded-full border border-ink bg-ink px-3 text-[9px] font-medium uppercase tracking-[0.12em] text-warm-cream"
          >
            Shop online
          </a>
        </div>
        <form
          onSubmit={submitSearch}
          className="mt-3 grid h-12 grid-cols-[auto_minmax(0,1fr)_40px] items-center rounded-full border border-ink/25 bg-muted p-1 pl-4 shadow-sm focus-within:border-ink focus-within:bg-background"
        >
          <Search className="h-4 w-4 text-ink/70" aria-hidden="true" />
          <label htmlFor="category-mobile-search" className="sr-only">
            Cerca prodotti
          </label>
          <input
            id="category-mobile-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Cerca prodotti e soluzioni…"
            className="min-w-0 bg-transparent px-3 text-sm text-ink outline-none placeholder:text-muted-foreground"
          />
          <button
            type="submit"
            aria-label="Avvia ricerca"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-warm-cream"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>

      <div className="mx-auto hidden h-[92px] max-w-[1600px] items-center gap-8 px-12 md:flex">
        <a href="/" className="shrink-0" aria-label="Artigiani in Città — Home">
          <img src={logo} alt="Artigiani in Città" className="h-14 w-auto" />
        </a>
        <nav
          aria-label="Navigazione di categoria"
          className="ml-4 flex items-center gap-7 text-[11px] uppercase tracking-[0.16em]"
        >
          {links.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-warm-clay">
              {label}
            </a>
          ))}
        </nav>
        <form
          onSubmit={submitSearch}
          className="ml-auto flex h-10 w-full max-w-[240px] items-center rounded-full border border-border bg-background px-4 focus-within:border-ink"
        >
          <Search className="h-4 w-4 shrink-0 opacity-70" />
          <label htmlFor="category-desktop-search" className="sr-only">
            Cerca nel catalogo
          </label>
          <input
            id="category-desktop-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Cerca nel catalogo…"
            className="w-full min-w-0 bg-transparent px-3 text-xs outline-none"
          />
        </form>
        <a
          href="#progetto"
          className="shrink-0 border border-warm-clay bg-warm-clay px-5 py-3 text-[11px] uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-ink"
        >
          Richiedi il progetto
        </a>
      </div>

      <div
        id="category-mobile-menu"
        className={cn(
          "absolute inset-x-0 top-full h-[calc(100dvh-133px)] overflow-y-auto border-t border-border bg-background px-6 py-6 transition-all duration-300 md:hidden",
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0 pointer-events-none",
        )}
      >
        <nav aria-label="Navigazione mobile" className="border-t border-border">
          {[[categoryLabel, "#configurazioni"], ...links.slice(1), ["Homepage", "/"]].map(
            ([label, href]) => (
              <a
                key={`${label}-${href}`}
                href={href}
                onClick={closeMenu}
                className="group flex items-center justify-between border-b border-border py-5 font-display text-2xl hover:text-warm-clay"
              >
                {label}
                <ArrowRight className="h-4 w-4 text-warm-clay transition-transform group-hover:translate-x-1" />
              </a>
            ),
          )}
        </nav>
        <div className="mt-6 space-y-3 pb-8">
          <a
            href={PHONE_HREF}
            onClick={closeMenu}
            className="flex min-h-12 items-center gap-3 border border-border px-5"
          >
            <Phone className="h-5 w-5 text-warm-clay" />
            {PHONE_DISPLAY}
          </a>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            className="flex min-h-12 items-center gap-3 border border-border px-5"
          >
            <WhatsAppMark size={20} className="text-[#25D366]" />
            WhatsApp
          </a>
          <a
            href="#progetto"
            onClick={closeMenu}
            className="flex min-h-16 items-center justify-between rounded-full bg-warm-clay px-6 text-primary-foreground"
          >
            <span>
              <small className="block text-[10px] uppercase tracking-[0.16em] opacity-80">
                Partiamo dalla tua stanza
              </small>
              <strong className="mt-1 block text-base font-medium">Richiedi il progetto</strong>
            </span>
            <CalendarDays className="h-6 w-6" />
          </a>
          <a
            href="https://artigianiincitta.it/shop/"
            className="flex min-h-13 items-center justify-between rounded-full border border-ink/25 bg-warm-cream px-6 text-xs uppercase tracking-[0.14em]"
          >
            <span>Visita lo shop online</span>
            <ShoppingBag className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}

export function CategoryMobileBar() {
  return (
    <nav
      aria-label="Contatti e richiesta progetto"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-ink/10 pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <a
        href={PHONE_HREF}
        data-track-event="category_phone_click"
        data-track-location="mobile_bar"
        className="flex h-[76px] min-w-0 flex-col items-center justify-center gap-1.5 bg-warm-clay px-1 text-[11px] font-medium text-primary-foreground"
      >
        <Phone style={{ width: 25, height: 25 }} aria-hidden="true" />
        Chiama
      </a>
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noreferrer"
        data-track-event="category_whatsapp_click"
        data-track-location="mobile_bar"
        className="flex h-[76px] min-w-0 flex-col items-center justify-center gap-1.5 border-l border-ink/10 bg-[#25D366] px-1 text-[11px] font-medium text-primary-foreground"
      >
        <WhatsAppMark size={25} />
        WhatsApp
      </a>
      <a
        href="#progetto"
        className="flex h-[76px] min-w-0 flex-col items-center justify-center gap-1.5 border-l border-ink/10 bg-ink px-1 text-[11px] font-medium text-warm-cream"
      >
        <CalendarDays style={{ width: 25, height: 25 }} aria-hidden="true" />
        Progetto
      </a>
    </nav>
  );
}

export function CategoryFooter() {
  return (
    <footer className="bg-ink text-warm-cream/70">
      <div className="mx-auto max-w-[1600px] px-6 pb-10 pt-16 md:px-16 md:pt-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="/">
              <img src={logo} alt="Artigiani in Città" className="h-9 invert brightness-0" />
            </a>
            <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-warm-cream/60">
              Studio di trasformazione degli spazi urbani. Progettiamo e produciamo arredi
              salvaspazio su misura, con falegnameria interna a Milano.
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="text-eyebrow text-warm-cream/40">Letti a scomparsa</div>
            <ul className="mt-5 space-y-3 text-sm font-light">
              <li>
                <a href="#configurazioni" className="hover:text-warm-clay">
                  Come vuoi usare la stanza
                </a>
              </li>
              <li>
                <a href="#misure" className="hover:text-warm-clay">
                  Misure e ingombri
                </a>
              </li>
              <li>
                <a href="#modelli" className="hover:text-warm-clay">
                  Modelli e prezzi
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-warm-clay">
                  Domande frequenti
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <div className="text-eyebrow text-warm-cream/40">Showroom e contatti</div>
            <address className="mt-5 space-y-3 text-sm font-light not-italic">
              <a
                href={DIRECTIONS_HREF}
                target="_blank"
                rel="noreferrer"
                className="block hover:text-warm-clay"
              >
                Viale Italia 10
                <br />
                20094 Corsico (MI)
              </a>
              <span className="block text-warm-cream/55">
                Lun–Sab · 9:30–12:30 / 14:00–19:30
                <br />
                Domenica chiuso
              </span>
              <a href={PHONE_HREF} className="block hover:text-warm-clay">
                {PHONE_DISPLAY}
              </a>
              <a
                href="mailto:info@artigianiincitta.it"
                className="block break-all hover:text-warm-clay"
              >
                info@artigianiincitta.it
              </a>
            </address>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-warm-cream/10 pt-7 text-xs font-light text-warm-cream/45 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Artigiani in Città · C.F. / P.iva 08929640962</span>
          <a href={PRIVACY_HREF} target="_blank" rel="noreferrer" className="hover:text-warm-clay">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Phone, Smartphone, Mail, Search, ShoppingBag, Instagram, Facebook, Youtube, Menu } from "lucide-react";
import logo from "@/assets/logo-artigiani.svg";
import heroLiving from "@/assets/hero-living.jpg";
import heroBed from "@/assets/hero-bed.jpg";
import craftsmanship from "@/assets/craftsmanship.jpg";
import perchePhoto from "@/assets/perche-sceglierci.png";
import projectCucina from "@/assets/cucina-salvaspazio-brera.webp.asset.json";
import projectArmadio from "@/assets/armadio-muro-porta-romana.webp.asset.json";
import projectLettoDivano from "@/assets/letto-divano-citta-studi.webp.asset.json";
import projectStudio from "@/assets/project-studio.jpg";
import projectChildren from "@/assets/project-children.jpg";
import projectOffice from "@/assets/project-office.jpg";
import showroom from "@/assets/showroom.webp";
import showroomArredo from "@/assets/showroom-arredo-salvaspazio-600mq-corsico-milano.webp.asset.json";
import showroomIngresso from "@/assets/showroom-ingresso-piano-terra-arredamento-completo-su-misura-corsico-milano.webp.asset.json";
import ritrattoDef2 from "@/assets/ritratto-def2.jpg.asset.json";
import catLetti from "@/assets/cat-letti-scomparsa.jpg";
import catDivaniLetto from "@/assets/cat-divani-letto.jpg";
import catDivaniPouff from "@/assets/cat-divani-pouff.jpg";
import catTavoli from "@/assets/cat-tavoli-consolle.jpg";
import catCucine from "@/assets/cat-cucine-scomparsa.jpg";
import catBagni from "@/assets/cat-bagni-lavanderie.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Artigiani in Città — Studio di trasformazione degli spazi urbani" },
      { name: "description", content: "Progettiamo soluzioni salvaspazio su misura per appartamenti di pregio a Milano. Letti a scomparsa, mobili trasformabili, consulenza architettonica e produzione interna artigianale." },
      { property: "og:title", content: "Artigiani in Città — Lo spazio non si aumenta. Si progetta meglio." },
      { property: "og:description", content: "Consulenza architettonica e artigianato italiano per trasformare piccoli spazi urbani in grandi possibilità." },
    ],
  }),
  component: Home,
});

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border/40 text-foreground" : "bg-transparent text-white"}`}>
      {/* Top utility bar */}
      <div className={`hidden md:block border-b transition-colors ${scrolled ? "border-border/40 bg-background/60" : "border-white/15 bg-black/20"}`}>
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-9 flex items-center justify-between text-[11px] tracking-[0.14em] uppercase">
          <div className="flex items-center gap-6 opacity-90">
            <a href="tel:+390239930866" className="flex items-center gap-2 hover:opacity-60 transition"><Phone className="w-3 h-3" /> 02 39930866</a>
            <a href="tel:+393475078626" className="flex items-center gap-2 hover:opacity-60 transition"><Smartphone className="w-3 h-3" /> 347 5078626</a>
            <a href="https://wa.me/393475078626" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:opacity-60 transition">
              <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
              WhatsApp
            </a>
            <a href="mailto:info@artigianiincitta.it" className="flex items-center gap-2 hover:opacity-60 transition"><Mail className="w-3 h-3" /><span>info@artigianiincitta.it</span></a>
          </div>
          <div className="flex items-center gap-4 opacity-90">
            <a href="#" aria-label="Instagram" className="hover:opacity-60 transition"><Instagram className="w-3.5 h-3.5" /></a>
            <a href="#" aria-label="Facebook" className="hover:opacity-60 transition"><Facebook className="w-3.5 h-3.5" /></a>
            <a href="#" aria-label="YouTube" className="hover:opacity-60 transition"><Youtube className="w-3.5 h-3.5" /></a>
            <span className="opacity-40">|</span>
            <a href="#showroom" className="hover:opacity-60 transition">Showroom Milano</a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-4 md:py-5 flex items-center gap-6">
        <a href="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="Artigiani in Città" className={`h-10 md:h-14 transition-all ${scrolled ? "" : "invert brightness-0"}`} />
        </a>

        <nav className={`hidden lg:flex items-center gap-8 text-[12px] tracking-[0.18em] uppercase ml-6`}>
          <a href="#progetti" className="hover:opacity-60 transition">Progetti</a>
          <a href="#contatti" className="hover:opacity-60 transition">Contatti</a>
          <a href="#catalogo" className="hover:opacity-60 transition">Catalogo</a>
          <a href="#appuntamento" className="hover:opacity-60 transition">Consulenza</a>
        </nav>

        <form
          onSubmit={(e) => e.preventDefault()}
          className={`hidden md:flex items-center flex-1 max-w-md ml-auto h-10 px-4 rounded-full border transition ${scrolled ? "border-border bg-background/60" : "border-white/30 bg-white/10 backdrop-blur"}`}
        >
          <Search className="w-4 h-4 opacity-70" />
          <input
            type="search"
            placeholder="Cerca letti a scomparsa, mobili trasformabili…"
            className="bg-transparent outline-none px-3 text-[12px] tracking-wide w-full placeholder:opacity-60"
          />
        </form>

        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <a href="#appuntamento" className={`inline-flex text-[10px] md:text-[11px] tracking-[0.18em] md:tracking-[0.22em] uppercase px-3 md:px-5 py-2.5 md:py-3 transition bg-warm-clay text-white border border-warm-clay hover:bg-warm-clay/90 whitespace-nowrap`}>
            Prenota consulenza
          </a>
          <button aria-label="Carrello" className={`relative h-10 w-10 inline-flex items-center justify-center rounded-full border transition ${scrolled ? "border-border hover:bg-foreground hover:text-background" : "border-white/40 hover:bg-white hover:text-foreground"}`}>
            <ShoppingBag className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 h-4 min-w-4 px-1 rounded-full bg-warm-clay text-white text-[9px] font-medium flex items-center justify-center">0</span>
          </button>
          <button aria-label="Menu" className={`lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-full border ${scrolled ? "border-border" : "border-white/40"}`}>
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Cinematic transformation: cycle living -> bed
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setPhase((p) => (p + 1) % 2), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-ink">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <div className="absolute inset-0">
          <img src={heroLiving} alt="Soggiorno milanese con parete su misura" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ease-in-out ${phase === 0 ? "opacity-100" : "opacity-0"} animate-slow-zoom`} />
          <img src={heroBed} alt="Letto a scomparsa premium rivelato dalla parete" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ease-in-out ${phase === 1 ? "opacity-100" : "opacity-0"} animate-slow-zoom`} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-32 px-6 md:px-16 max-w-[1600px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}>
          <div className="text-eyebrow text-white/70 mb-8">Studio · Milano · dal 2008</div>
          <h1 className="font-display text-white text-[12vw] md:text-[6.5vw] leading-[0.95] max-w-5xl font-extralight">
            Lo spazio non aumenta.<br />
            <span className="italic font-light">Si progetta meglio.</span>
          </h1>
          <div className="mt-12 max-w-md text-white/80 text-base md:text-lg font-light leading-relaxed">
            Trasformiamo appartamenti urbani di pregio con soluzioni salvaspazio su misura, progettate intorno alla vostra vita e prodotte interamente nei nostri laboratori.
          </div>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center">
            <Cta href="#appuntamento" tone="dark" variant="solid">
              Prenota un appuntamento
            </Cta>
            <Cta href="#contatti" tone="dark" variant="outline">
              Scrivici
            </Cta>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8 text-white/50 text-[10px] tracking-[0.3em] uppercase z-10 hidden md:block">
        Scroll · 01 / 09
      </div>
    </section>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

type CtaProps = {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: "solid" | "outline";
  tone?: "light" | "dark";
  className?: string;
  target?: string;
  rel?: string;
};

function Cta({
  children,
  href,
  type,
  variant = "solid",
  tone = "light",
  className = "",
  target,
  rel,
}: CtaProps) {
  const base =
    "group inline-flex items-center justify-center gap-3 px-8 py-5 text-[12px] tracking-[0.22em] uppercase font-normal transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]";

  const styles: Record<string, string> = {
    "light-solid": "bg-ink text-warm-cream hover:bg-warm-clay",
    "light-outline": "border border-ink/30 text-ink hover:border-ink hover:bg-ink/5",
    "dark-solid": "bg-warm-cream text-ink hover:bg-white",
    "dark-outline": "border border-white/40 text-white hover:border-white hover:bg-white/10",
  };

  const cls = `${base} ${styles[`${tone}-${variant}`]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
    </>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={cls}>
        {content}
      </a>
    );
  }
  return (
    <button type={type ?? "button"} className={cls}>
      {content}
    </button>
  );
}

function Manifesto() {
  return (
    <section id="manifesto" className="py-32 md:py-48 px-6 md:px-16">
      <div className="max-w-[1600px] mx-auto grid md:grid-cols-12 gap-8">
        <div className="md:col-span-3">
          <div className="text-eyebrow text-muted-foreground">— 01 Manifesto</div>
        </div>
        <div className="md:col-span-9">
          <Reveal>
            <h2 className="font-display text-[7vw] md:text-[3.5vw] leading-[1.15] max-w-5xl font-extralight">
              Non realizziamo solo mobili su misura,
              <br />
              <span className="italic font-light">creiamo spazio da vivere.</span>
            </h2>
            <p className="mt-8 md:mt-12 text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">
              Ogni progetto nasce da un'esigenza concreta: recuperare centimetri preziosi, rendere più ordinato un ambiente, valorizzare una parete inutilizzata o trasformare una zona difficile della casa in una soluzione funzionale. Con progettazione su misura e produzione artigianale italiana, realizziamo arredi salvaspazio pensati per migliorare il modo in cui vivi ogni ambiente.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const problems = [
  { n: "01", t: "Monolocali da 25 mq", d: "Spazi compatti che devono accogliere giorno, notte, lavoro e ricevere ospiti.", href: "https://artigianiincitta.it/milano/letti-a-scomparsa/" },
  { n: "02", t: "Camere multifunzione", d: "Stanze che cambiano funzione tra giorno e notte, tra lavoro e relax.", href: "https://artigianiincitta.it/milano/letti-a-scomparsa/letti-a-scomparsa-con-divano/" },
  { n: "03", t: "Stanze ospiti occasionali", d: "Ambienti che restano vuoti per mesi e devono trasformarsi in pochi gesti.", href: "https://artigianiincitta.it/milano/divani-letto/" },
  { n: "04", t: "Home office discreti", d: "Postazioni di lavoro integrate nell'architettura, invisibili a fine giornata.", href: "https://artigianiincitta.it/milano/letti-a-scomparsa/letti-a-scomparsa-con-scrivania/" },
  { n: "05", t: "Camere bambini in evoluzione", d: "Spazi che crescono con loro: dal gioco allo studio, dal letto singolo al doppio.", href: "https://artigianiincitta.it/milano/letti-a-scomparsa/camerette-salvaspazio/" },
  { n: "06", t: "Airbnb di alto livello", d: "Massimizzare la capienza senza sacrificare l'eleganza percepita dall'ospite.", href: "https://artigianiincitta.it/milano/letti-a-scomparsa/letti-a-scomparsa-con-divano/" },
];

const projects = [
  {
    img: projectCucina.url,
    title: "Brera, 46 mq",
    subtitle: "Prima e dopo · Cucina salvaspazio",
    link: "https://artigianiincitta.it/progetti-realizzati/prima-e-dopo-cucina-angolare-salvaspazio-su-misura/",
  },
  {
    img: projectArmadio.url,
    title: "Porta Romana, 28 mq",
    subtitle: "Prima e dopo · Armadio a muro su misura",
    link: "https://artigianiincitta.it/progetti-realizzati/prima-e-dopo-progetto-armadio-a-muro-su-misura-salvaspazio/",
  },
  {
    img: projectLettoDivano.url,
    title: "Città Studi, 22 mq",
    subtitle: "Prima e dopo · Letto a scomparsa con divano",
    link: "https://artigianiincitta.it/progetti-realizzati/progetto-prima-dopo-letto-a-scomparsa-divano-su-misura/",
  },
];

function Projects() {
  return (
    <section id="progetti" className="bg-warm-cream py-32 md:py-48 px-6 md:px-16">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-12 gap-8 mb-24">
          <div className="md:col-span-3">
            <div className="text-eyebrow text-muted-foreground">— 03 Progetti realizzati</div>
          </div>
          <div className="md:col-span-9">
            <Reveal>
              <h2 className="font-display text-[8vw] md:text-[4.2vw] leading-[1.05] font-extralight max-w-3xl">
                Progetti <span className="italic">realizzati</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {projects.map((p, i) => (
            <Reveal key={p.title}>
              <a
                href={p.link ?? "#"}
                target={p.link ? "_blank" : undefined}
                rel={p.link ? "noreferrer" : undefined}
                className="relative w-full overflow-hidden aspect-[3/4] group block"
              >
                <motion.img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                  initial={{ scale: 1.15 }}
                  whileInView={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 group-hover:from-black/30 group-hover:to-black/30 transition-colors duration-700" />

                {/* Cartiglio in alto */}
                <div className="absolute inset-x-0 top-0 flex justify-center p-4 md:p-6">
                  <div className="bg-background w-full max-w-sm p-5 md:p-6 shadow-2xl text-center">
                    <div className="text-eyebrow text-warm-clay mb-3">— Progetto {String(i + 1).padStart(2, "0")}</div>
                    <div className="text-eyebrow text-muted-foreground mb-2">{p.subtitle}</div>
                    <h3 className="font-display text-2xl md:text-3xl font-light italic leading-tight">{p.title}</h3>
                  </div>
                </div>

                {/* Bottone in basso */}
                <div className="absolute inset-x-0 bottom-0 flex justify-center p-4 md:p-6">
                  <span className="inline-flex items-center gap-3 bg-background/95 backdrop-blur px-6 py-3.5 text-[11px] tracking-[0.22em] uppercase border border-foreground/10 shadow-lg transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-warm-clay group-hover:text-white group-hover:border-warm-clay group-hover:-translate-y-3 group-hover:shadow-[0_20px_50px_-15px_rgba(120,70,40,0.35)]">
                    <span>Scopri il progetto</span>
                    <span className="transition-transform duration-500 group-hover:translate-x-2">→</span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 md:mt-24 flex justify-center">
            <Cta
              href="https://artigianiincitta.it/progetti-realizzati/"
              target="_blank"
              rel="noreferrer"
              tone="light"
              variant="solid"
            >
              Visualizza tutti i progetti
            </Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Problems() {
  return (
    <section id="problemi" className="py-32 md:py-48 px-6 md:px-16">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-3">
            <div className="text-eyebrow text-muted-foreground">— 04 Problemi che risolviamo</div>
          </div>
          <div className="md:col-span-9">
            <Reveal>
              <h2 className="font-display text-[8vw] md:text-[4.2vw] leading-[1.05] font-extralight max-w-4xl">
                Sei sfide ricorrenti, <span className="italic">una risposta su misura</span>.
              </h2>
            </Reveal>
          </div>
        </div>
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-t border-l border-foreground/15 max-w-6xl mx-auto">
          {problems.map((p) => (
              <a
                key={p.n}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="relative border-r border-b border-foreground/15 p-6 md:p-8 group cursor-pointer overflow-hidden transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-warm-clay/[0.06] hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgba(120,70,40,0.18)] hover:z-10"
              >
                <div className="mb-5 flex items-center gap-2 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
                  <span className="block w-2 h-2 rounded-full bg-warm-clay" />
                  <span className="block h-px w-8 bg-warm-clay/60 transition-all duration-[900ms] group-hover:w-14" />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-light leading-tight transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">{p.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground font-light leading-relaxed transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">{p.d}</p>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-warm-clay transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
                <span className="absolute bottom-5 right-5 text-warm-clay text-lg opacity-0 -translate-x-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="mt-20 md:mt-24 max-w-6xl mx-auto border-t border-foreground/15 pt-12 md:pt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-xl">
              <div className="text-eyebrow text-warm-clay mb-4">— Ti riconosci in uno di questi?</div>
              <h3 className="font-display text-3xl md:text-4xl font-extralight leading-[1.1]">
                Raccontaci il tuo spazio. <span className="italic">Ti diciamo come risolverlo</span>.
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Cta href="#appuntamento" tone="light" variant="solid">Prenota un appuntamento</Cta>
              <Cta href="#contatti" tone="light" variant="outline">Scrivici</Cta>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Craftsmanship() {
  return (
    <section id="perche" className="relative bg-ink text-white overflow-hidden">
      <div className="grid md:grid-cols-2">
        <div className="relative h-[60vh] md:h-[100vh] overflow-hidden">
          <motion.img
            src={perchePhoto}
            alt="Consulenza nello showroom di letti a scomparsa a Milano"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <div className="px-6 md:px-16 py-24 md:py-32 flex flex-col justify-center">
          <Reveal>
            <div className="text-eyebrow text-white/50 mb-8">— 02 Perché sceglierci</div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-extralight leading-[1.05] mb-12">
              Cinque ragioni <span className="italic">solide</span>.
            </h2>
            <ul className="divide-y divide-white/15 border-y border-white/15">
              {[
                { n: "01", t: "Falegnameria dal 1977", d: "Quasi cinquant'anni di mestiere e tre generazioni di artigiani." },
                { n: "02", t: "Shop online da 15 anni", d: "Pionieri dell'arredo su misura in rete, dal 2011." },
                { n: "03", t: "600 mq di showroom", d: "Materiali, finiture e progetti da toccare con mano." },
                { n: "04", t: "Consulenza reale", d: "Architetti e artigiani al tuo fianco, non venditori." },
                { n: "05", t: "Consegna in tutta Europa", d: "Logistica e installazione gestite direttamente da noi." },
              ].map((r) => (
                <li key={r.n} className="py-6 flex gap-6 items-start">
                  <div className="shrink-0 pt-3"><span className="block w-2.5 h-2.5 rounded-full bg-warm-clay" /></div>
                  <div>
                    <div className="font-display text-2xl md:text-3xl font-light leading-tight">{r.t}</div>
                    <div className="text-white/60 text-sm md:text-base font-light mt-2 max-w-md">{r.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const reviews = [
  {
    n: "sabrina naclerio",
    i: "S",
    w: "6 mesi fa",
    t: "Mi sono affidata ad Artigiani in Città per arredare la mia casa! Fin da subito tutto il team si è dimostrato disponibile ad ascoltare le mie esigenze e a trovare la soluzione migliore per ogni ambiente.",
  },
  {
    n: "Marco Delise",
    i: "M",
    w: "6 mesi fa",
    t: "Professionali",
  },
  {
    n: "Beatrice Tarantola",
    i: "B",
    w: "9 mesi fa",
    t: "Avevamo la necessità di farci fare una cucina su misura dato il poco spazio a disposizione. Siamo assolutamente soddisfatti del risultato e della cura in ogni dettaglio.",
  },
];

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Artigiani+in+Citt%C3%A0+Milano+recensioni";

function GoogleG({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.44c-.28 1.48-1.12 2.73-2.39 3.57v2.97h3.86c2.26-2.08 3.58-5.15 3.58-8.78z"/>
      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-2.97c-1.07.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"/>
      <path fill="#FBBC05" d="M5.27 14.32c-.24-.72-.38-1.49-.38-2.32s.14-1.6.38-2.32V6.59H1.29C.47 8.23 0 10.06 0 12s.47 3.77 1.29 5.41l3.98-3.09z"/>
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.59l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z"/>
    </svg>
  );
}

function Stars({ value = 5, className = "text-base" }: { value?: number; className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 text-warm-clay ${className}`} aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <span key={i} className="relative inline-block leading-none">
            <span className="opacity-25">★</span>
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              ★
            </span>
          </span>
        );
      })}
    </div>
  );
}

function Reviews() {
  return (
    <section id="testimonianze" className="pt-32 md:pt-48 pb-16 md:pb-20 px-6 md:px-16 bg-warm-cream">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-3">
            <div className="text-eyebrow text-muted-foreground">— 05 Testimonianze</div>
          </div>
          <div className="md:col-span-9">
            <Reveal>
              <h2 className="font-display text-[8vw] md:text-[4.5vw] leading-[1.05] font-extralight">
                Scopri chi siamo dalle recensioni dei nostri clienti.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          {/* Media Google */}
          <div className="md:col-span-3">
            <Reveal>
            <div className="text-center md:text-left">
              <div className="text-eyebrow text-muted-foreground">Eccellente</div>
              <div className="flex items-baseline gap-3 justify-center md:justify-start mt-3">
                <span className="font-display text-5xl md:text-6xl font-light leading-none">4,5</span>
                <Stars value={4.5} className="text-2xl" />
              </div>
              <p className="text-sm text-muted-foreground font-light mt-4">
                In base a <span className="text-foreground font-medium">294 recensioni</span>
              </p>
              <div className="flex items-center gap-2 justify-center md:justify-start mt-5">
                <GoogleG className="w-6 h-6" />
                <span className="text-eyebrow text-muted-foreground">Google Reviews</span>
              </div>
            </div>
            </Reveal>
          </div>

          {/* Recensioni */}
          <div className="md:col-span-9 grid md:grid-cols-3 gap-6 md:gap-8">
            {reviews.map((r, i) => (
              <Reveal key={r.n} delay={i * 0.1}>
                <div className="h-full bg-background border border-border p-7 flex flex-col transition-all duration-500 hover:shadow-[0_20px_50px_-30px_rgba(0,0,0,0.35)] hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 w-11 h-11 rounded-full bg-warm-stone/40 text-foreground flex items-center justify-center font-medium">
                      {r.i}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm truncate">{r.n}</div>
                      <div className="text-xs text-muted-foreground font-light mt-0.5">{r.w}</div>
                    </div>
                    <GoogleG className="w-5 h-5 shrink-0 mt-1" />
                  </div>
                  <Stars className="text-lg mt-5" />
                  <p className="text-sm md:text-base font-light leading-relaxed mt-4 flex-1">{r.t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14 md:mt-20 flex justify-center">
          <Cta href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">
            Leggi le nostre recensioni
          </Cta>
        </div>
      </div>
    </section>
  );
}


const collections = [
  { t: "Letti a scomparsa", d: "Sistemi murphy con meccanismi italiani premium.", img: catLetti, href: "https://artigianiincitta.it/milano/letti-a-scomparsa/" },
  { t: "Divani letto", d: "Sedute di giorno, letti comodi di notte.", img: catDivaniLetto, href: "https://artigianiincitta.it/milano/divani-letto/" },
  { t: "Divani, pouff e poltrone", d: "Imbottiti su misura, tessuti selezionati.", img: catDivaniPouff, href: "https://artigianiincitta.it/milano/divani-poltrone-e-pouf/" },
  { t: "Tavoli e consolle", d: "Allungabili e trasformabili, in legno massello.", img: catTavoli, href: "https://artigianiincitta.it/milano/tavoli-trasformabili/" },
  { t: "Cucine a scomparsa", d: "Blocchi cucina integrati dietro ante filomuro.", img: catCucine, href: "https://artigianiincitta.it/milano/cucine/cucina-a-scomparsa/" },
  { t: "Bagni e lavanderie", d: "Mobili contenitori e zone lavaggio su misura.", img: catBagni, href: "https://artigianiincitta.it/milano/bagni-e-lavanderie/" },
];


function Catalog() {
  return (
    <section id="catalogo" className="py-32 md:py-48 px-6 md:px-16 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-3">
            <div className="text-eyebrow text-muted-foreground">— 07 Catalogo tecnico</div>
          </div>
          <div className="md:col-span-9">
            <Reveal>
              <h2 className="font-display text-[8vw] md:text-[4.2vw] leading-[1.05] font-extralight max-w-4xl">
                Esplorate le soluzioni.
              </h2>
              <p className="text-muted-foreground mt-6 max-w-xl font-light">Una selezione delle tipologie disponibili. Ogni progetto è poi modellato sui vostri spazi, materiali e necessità.</p>
            </Reveal>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {collections.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.08}>
              <a href={c.href} target="_blank" rel="noreferrer" className="block bg-background border border-border h-full group hover:border-foreground transition-colors duration-500 overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <img src={c.img} alt={c.t} loading="lazy" width={1280} height={960} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
                <div className="p-10">
                  <h3 className="font-display text-3xl md:text-4xl font-light mb-4">{c.t}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light mb-10">{c.d}</p>
                  <div className="text-[11px] tracking-[0.22em] uppercase border-b border-foreground inline-block pb-1 group-hover:opacity-60">Esplora →</div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-20 md:mt-28 flex flex-col items-center text-center">
            <p className="text-muted-foreground font-light max-w-lg mb-8">
              Queste sono solo alcune categorie. Esplora il catalogo completo con tutte le tipologie disponibili.
            </p>
            <a
              href="https://artigianiincitta.it/shop/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-warm-clay text-white px-10 md:px-14 py-5 md:py-6 text-[12px] md:text-[13px] tracking-[0.22em] uppercase hover:bg-warm-clay/90 transition-colors"
            >
              Visualizza tutte le categorie →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="appuntamento" className="bg-warm-cream text-foreground pt-6 md:pt-8 pb-20 md:pb-28 px-6 md:px-16">
      <div className="max-w-[1500px] mx-auto">
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Colonna sinistra: foto visibile senza tagli, ferma nello scroll desktop */}
            <div className="lg:sticky lg:top-28 self-start">
              <div className="relative overflow-hidden bg-warm-cream/40">
                <img src={ritrattoDef2.url} alt="I fondatori di Artigiani in Città" className="w-full h-auto max-h-[680px] object-contain mx-auto" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent">
                  <div className="text-eyebrow text-white/70 mb-1 text-[10px]">Studio · Milano</div>
                  <div className="text-white font-display text-xl font-light">Ti rispondiamo di persona, sempre.</div>
                </div>
              </div>
            </div>

            {/* Colonna destra: titolo, testo e form */}
            <div className="flex flex-col gap-5 lg:pl-4">
              <div className="text-eyebrow text-muted-foreground text-sm">— 06 Una consulenza, non un preventivo</div>
              <h2 className="font-display text-[8vw] md:text-[3.2vw] leading-[1] font-extralight whitespace-nowrap">
                Parliamo della <span className="italic">tua casa</span>.
              </h2>
              <p className="text-base md:text-lg font-light text-muted-foreground max-w-2xl leading-relaxed">
                Compila il form e scegli la modalità più comoda per te: un nostro esperto progettista ti ricontatterà per confermare l'appuntamento e capire insieme le tue esigenze.
              </p>
              <form
                onSubmit={(e) => { e.preventDefault(); }}
                className="flex flex-col gap-6 mt-2"
              >
              {/* Contatti in cima — tre riquadri */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="relative">
                  <input
                    required
                    type="text"
                    placeholder="Nome e cognome"
                    className="w-full bg-background border border-border rounded-sm py-2.5 pl-3 pr-6 text-base font-light text-ink placeholder:text-muted-foreground focus:outline-none focus:border-warm-clay focus:bg-background transition"
                  />
                  <span aria-hidden="true" className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-red-600 text-base leading-none">*</span>
                </div>
                <div className="relative">
                  <input
                    required
                    type="tel"
                    placeholder="Telefono"
                    className="w-full bg-background border border-border rounded-sm py-2.5 pl-3 pr-6 text-base font-light text-ink placeholder:text-muted-foreground focus:outline-none focus:border-warm-clay focus:bg-background transition"
                  />
                  <span aria-hidden="true" className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-red-600 text-base leading-none">*</span>
                </div>
                <div className="relative">
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    className="w-full bg-background border border-border rounded-sm py-2.5 pl-3 pr-6 text-base font-light text-ink placeholder:text-muted-foreground focus:outline-none focus:border-warm-clay focus:bg-background transition"
                  />
                  <span aria-hidden="true" className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-red-600 text-base leading-none">*</span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-eyebrow text-muted-foreground">Raccontaci il tuo progetto</label>
                <textarea
                  rows={4}
                  placeholder="Spazi, esigenze della famiglia, mobili che immagini…"
                  className="bg-background border border-border rounded-sm py-2 px-3 text-base font-light text-ink placeholder:text-muted-foreground focus:outline-none focus:border-warm-clay focus:bg-background transition resize-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-eyebrow text-muted-foreground">Tipo di consulenza</label>
                <select
                  defaultValue=""
                  className="bg-background border border-border rounded-sm py-2.5 px-3 text-base font-light text-ink focus:outline-none focus:border-warm-clay focus:bg-background transition"
                >
                  <option value="" disabled>Seleziona un'opzione…</option>
                  <option value="telefono">Primo contatto telefonico con un esperto</option>
                  <option value="showroom">Appuntamento in showroom a Corsico</option>
                  <option value="online">Richiedo un progetto online</option>
                  <option value="casa">Richiedi un esperto a casa tua</option>
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-eyebrow text-muted-foreground">Giorno preferito</label>
                  <select
                    defaultValue=""
                    className="bg-background border border-border rounded-sm py-2.5 px-3 text-base font-light text-ink focus:outline-none focus:border-warm-clay focus:bg-background transition"
                  >
                    <option value="" disabled>Seleziona un giorno…</option>
                    {["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"].map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-eyebrow text-muted-foreground">Fascia oraria</label>
                  <div className="grid grid-cols-2 gap-2">
                    {["9:30 / 12:30", "14:00 / 19:00"].map((slot) => (
                      <label
                        key={slot}
                        className="cursor-pointer bg-background border border-border rounded-sm py-2.5 px-2 text-center text-base font-normal text-ink hover:bg-warm-cream has-[:checked]:bg-warm-clay has-[:checked]:border-warm-clay has-[:checked]:text-white transition"
                      >
                        <input type="radio" name="slot" value={slot} className="sr-only" />
                        {slot}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-eyebrow text-muted-foreground">Come vuoi essere contattato?</label>
                <div className="grid grid-cols-3 gap-2">
                  {["Telefono", "WhatsApp", "Email"].map((ch) => (
                    <label
                      key={ch}
                      className="cursor-pointer bg-background border border-border rounded-sm py-2.5 px-2 text-center text-base font-normal text-ink hover:bg-warm-cream has-[:checked]:bg-warm-clay has-[:checked]:border-warm-clay has-[:checked]:text-white transition"
                    >
                      <input type="radio" name="channel" value={ch} className="sr-only" />
                      {ch}
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-1 flex flex-col sm:flex-row sm:items-center gap-4">
                <Cta type="submit" tone="light" variant="solid">
                  Richiedi la consulenza
                </Cta>
                <p className="text-muted-foreground text-xs font-light leading-relaxed">
                  Ti ricontattiamo entro 24h. Nessun impegno.
                </p>
              </div>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ShowroomSlideshow({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {images.map((src, i) => (
        <motion.img
          key={src}
          src={src}
          alt={alt}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{
            opacity: i === index ? 1 : 0,
            scale: i === index ? 1 : 1.05,
          }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ))}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Vedi slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? "w-8 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <section id="contatti" className="bg-warm-cream text-foreground py-32 md:py-48 px-6 md:px-16">
      <div className="max-w-[1600px] mx-auto">
        <Reveal>
          <div className="text-eyebrow text-muted-foreground mb-12">— 08 Parliamone</div>
          <h2 className="font-display text-[10vw] md:text-[5.5vw] leading-[0.95] font-extralight max-w-5xl">
            Tre modi per <span className="italic">iniziare</span>.
          </h2>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground font-light max-w-2xl leading-relaxed">
            Scrivici, chiamaci o passa in showroom. Rispondiamo sempre, di persona, entro poche ore.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 grid md:grid-cols-3 gap-px bg-border border border-border">
            <a href="tel:+390239930866" className="bg-warm-cream p-10 hover:bg-background transition-colors group">
              <div className="text-eyebrow text-muted-foreground mb-4">Telefono</div>
              <div className="font-readable-numbers text-4xl md:text-5xl font-medium leading-none text-ink">02 39930866</div>
              <div className="mt-4 text-sm text-muted-foreground">Lun–Sab · 9:30 – 12:30  |  14:00 – 19:30</div>
            </a>
            <a href="https://wa.me/393475078626" target="_blank" rel="noreferrer" className="bg-warm-cream p-10 hover:bg-background transition-colors group">
              <div className="text-eyebrow text-muted-foreground mb-4">WhatsApp</div>
              <div className="font-readable-numbers text-4xl md:text-5xl font-medium leading-none text-ink">347 5078626</div>
              <div className="mt-4 text-sm text-muted-foreground">Risposta entro 2 ore</div>
            </a>
            <a href="mailto:info@artigianiincitta.it" className="bg-warm-cream p-10 hover:bg-background transition-colors group">
              <div className="text-eyebrow text-muted-foreground mb-4">Email</div>
              <div className="font-display text-3xl md:text-4xl font-light leading-tight break-all">info@artigianiincitta.it</div>
              <div className="mt-4 text-sm text-muted-foreground">Risposta in giornata</div>
            </a>
          </div>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-2 gap-12 md:gap-20 items-stretch">
          <Reveal>
            <div id="showroom" className="relative overflow-hidden h-full min-h-[420px] md:min-h-[640px]">
              <ShowroomSlideshow
                images={[showroom, showroomArredo.url, showroomIngresso.url]}
                alt="Showroom Artigiani in Città a Milano"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-ink/80 to-transparent">
                <div className="text-eyebrow text-white/70 mb-2">Showroom</div>
                <div className="text-white font-display text-2xl font-light">600 mq · Milano</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => { e.preventDefault(); }}
              className="bg-background border border-border p-8 md:p-12 flex flex-col justify-center h-full"
            >
              <div className="text-eyebrow text-muted-foreground mb-6">Scrivici</div>
              <h3 className="font-display text-3xl md:text-4xl font-light leading-tight mb-8">
                Raccontaci il tuo <span className="italic">spazio</span>.
              </h3>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { type: "text", placeholder: "Nome" },
                  { type: "text", placeholder: "Cognome" },
                  { type: "email", placeholder: "Email" },
                  { type: "tel", placeholder: "Telefono" },
                ].map((f) => (
                  <div key={f.placeholder} className="relative">
                    <input required type={f.type} placeholder={f.placeholder} className="w-full bg-warm-cream/60 border border-border rounded-sm py-4 pl-4 pr-8 text-base font-normal text-ink placeholder:text-muted-foreground focus:outline-none focus:border-ink focus:bg-warm-cream focus:ring-2 focus:ring-ink/10 transition" />
                    <span aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-red-600 text-base leading-none">*</span>
                  </div>
                ))}
              </div>
              <textarea rows={3} placeholder="Due righe sul tuo progetto (facoltativo)" className="mt-5 bg-warm-cream/60 border border-border rounded-sm py-4 px-4 text-base font-normal text-ink placeholder:text-muted-foreground focus:outline-none focus:border-ink focus:bg-warm-cream focus:ring-2 focus:ring-ink/10 transition resize-none" />
              <div className="mt-10">
                <Cta type="submit" tone="light" variant="solid">
                  Richiedi una consulenza gratuita
                </Cta>
              </div>
              <p className="mt-5 text-xs text-muted-foreground font-light leading-relaxed">
                Nessun impegno, nessun preventivo automatico. Ti risponde una persona del nostro studio, di solito in giornata. I tuoi dati restano tra noi.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-white/70 border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 pt-24 pb-12">
        {/* Top: brand + columns */}
        <div className="grid gap-16 md:gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <img src={logo} alt="Artigiani in Città" className="h-8 invert brightness-0" />
            <p className="mt-6 text-sm leading-relaxed text-white/60 font-light max-w-sm">
              Studio di trasformazione degli spazi urbani. Da quasi 50 anni progettiamo
              e produciamo arredi salvaspazio su misura, con falegnameria interna a Milano.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="https://instagram.com" aria-label="Instagram" className="w-10 h-10 border border-white/15 flex items-center justify-center hover:border-warm-clay hover:text-warm-clay transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="w-10 h-10 border border-white/15 flex items-center justify-center hover:border-warm-clay hover:text-warm-clay transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" aria-label="YouTube" className="w-10 h-10 border border-white/15 flex items-center justify-center hover:border-warm-clay hover:text-warm-clay transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <div className="text-eyebrow text-white/40 mb-5">Naviga</div>
            <ul className="space-y-3 text-sm font-light">
              <li><a href="#manifesto" className="hover:text-warm-clay transition-colors">Manifesto</a></li>
              <li><a href="#perche" className="hover:text-warm-clay transition-colors">Perché sceglierci</a></li>
              <li><a href="#progetti" className="hover:text-warm-clay transition-colors">Progetti</a></li>
              <li><a href="#problemi" className="hover:text-warm-clay transition-colors">Problemi che risolviamo</a></li>
              <li><a href="#testimonianze" className="hover:text-warm-clay transition-colors">Testimonianze</a></li>
              <li><a href="#catalogo" className="hover:text-warm-clay transition-colors">Catalogo tecnico</a></li>
            </ul>
          </div>

          {/* Catalogo */}
          <div className="md:col-span-3">
            <div className="text-eyebrow text-white/40 mb-5">Catalogo</div>
            <ul className="space-y-3 text-sm font-light">
              <li><a href="#catalogo" className="hover:text-warm-clay transition-colors">Letti a scomparsa</a></li>
              <li><a href="#catalogo" className="hover:text-warm-clay transition-colors">Divani letto</a></li>
              <li><a href="#catalogo" className="hover:text-warm-clay transition-colors">Cucine su misura</a></li>
              <li><a href="#catalogo" className="hover:text-warm-clay transition-colors">Tavoli e consolle</a></li>
              <li><a href="#catalogo" className="hover:text-warm-clay transition-colors">Camerette e camere</a></li>
              <li><a href="#catalogo" className="hover:text-warm-clay transition-colors">Bagni e lavanderie</a></li>
            </ul>
          </div>

          {/* Contatti */}
          <div className="md:col-span-3">
            <div className="text-eyebrow text-white/40 mb-5">Contatti</div>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-warm-clay shrink-0" />
                <div>
                  <a href="tel:0239930866" className="block hover:text-warm-clay transition-colors">02 3993 0866</a>
                  <a href="tel:3475078626" className="block text-white/50 hover:text-warm-clay transition-colors">347 507 8626</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 text-warm-clay shrink-0" />
                <a href="mailto:info@artigianiincitta.it" className="hover:text-warm-clay transition-colors break-all">info@artigianiincitta.it</a>
              </li>
              <li className="pt-2 border-t border-white/10">
                <div className="text-eyebrow text-white/40 mb-2">Showroom</div>
                <a href="https://goo.gl/maps/67FrnGtLnQQvN7qR6" target="_blank" rel="noreferrer" className="hover:text-warm-clay transition-colors">
                  Viale Italia 10<br />20094 Corsico (MI)
                </a>
              </li>
              <li>
                <div className="text-eyebrow text-white/40 mb-2">Orari</div>
                <div className="text-white/60">
                  Lun–Sab · 9:30 – 12:30  |  14:00 – 19:30<br />
                  <span className="text-white/40">Domenica chiuso</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + bottom bar */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="text-xs text-white/40 font-light">
            © {new Date().getFullYear()} Artigiani in Città · P.IVA 00000000000 · Tutti i diritti riservati
          </div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-xs font-light">
            <a href="#" className="text-white/50 hover:text-warm-clay transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-warm-clay transition-colors">Cookie Policy</a>
            <a href="#" className="text-white/50 hover:text-warm-clay transition-colors">Termini e condizioni</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Manifesto />
      <Craftsmanship />
      <Projects />
      <Problems />
      <Reviews />
      <CTA />
      <Catalog />
      <Contact />
      <Footer />
    </div>
  );
}

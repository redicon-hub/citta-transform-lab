import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Phone, Smartphone, Mail, Search, ShoppingBag, Instagram, Facebook, Youtube, Menu } from "lucide-react";
import logo from "@/assets/logo-artigiani.svg";
import heroLiving from "@/assets/hero-living.jpg";
import heroBed from "@/assets/hero-bed.jpg";
import craftsmanship from "@/assets/craftsmanship.jpg";
import projectStudio from "@/assets/project-studio.jpg";
import projectChildren from "@/assets/project-children.jpg";
import projectOffice from "@/assets/project-office.jpg";
import showroom from "@/assets/showroom.webp";
import founders from "@/assets/founders.jpg";
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
            <a href="tel:+390212345678" className="flex items-center gap-2 hover:opacity-60 transition"><Phone className="w-3 h-3" /> 02 1234 5678</a>
            <a href="tel:+393331234567" className="flex items-center gap-2 hover:opacity-60 transition"><Smartphone className="w-3 h-3" /> 333 123 4567</a>
            <a href="https://wa.me/393331234567" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:opacity-60 transition">
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
          <a href="#consulenza" className="hover:opacity-60 transition">Consulenza</a>
          <a href="#artigianato" className="hover:opacity-60 transition">Artigianato</a>
          <a href="#soluzioni" className="hover:opacity-60 transition">Soluzioni</a>
          <a href="#catalogo" className="hover:opacity-60 transition">Catalogo</a>
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
          <a href="#contatto" className={`hidden xl:inline-flex text-[11px] tracking-[0.22em] uppercase border px-5 py-3 transition ${scrolled ? "border-foreground hover:bg-foreground hover:text-background" : "border-white hover:bg-white hover:text-foreground"}`}>
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
            Lo spazio non<br />si aumenta.<br />
            <span className="italic font-light">Si progetta meglio.</span>
          </h1>
          <div className="mt-12 max-w-md text-white/80 text-base md:text-lg font-light leading-relaxed">
            Trasformiamo appartamenti urbani di pregio con soluzioni salvaspazio su misura, progettate intorno alla vostra vita e prodotte interamente nei nostri laboratori.
          </div>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center">
            <a href="#contatto" className="inline-flex items-center justify-center bg-white text-foreground px-8 py-5 text-[12px] tracking-[0.22em] uppercase hover:bg-warm-cream transition">
              Richiedi ora il tuo progetto gratuito
            </a>
            <a href="#contatto" className="inline-flex items-center text-white text-[12px] tracking-[0.22em] uppercase border-b border-white/40 pb-2 hover:border-white transition w-fit">
              Chiedi a un esperto →
            </a>
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

function Manifesto() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-16">
      <div className="max-w-[1600px] mx-auto grid md:grid-cols-12 gap-8">
        <div className="md:col-span-3">
          <div className="text-eyebrow text-muted-foreground">— 01 Manifesto</div>
        </div>
        <div className="md:col-span-9">
          <Reveal>
            <h2 className="font-display text-[8vw] md:text-[4.2vw] leading-[1.05] max-w-5xl font-extralight">
              Non vendiamo solo mobili. <span className="text-muted-foreground">Risolviamo problemi complessi di spazio</span> con intelligenza progettuale e produzione artigianale italiana.
            </h2>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const problems = [
  { n: "01", t: "Monolocali da 25 mq", d: "Spazi compatti che devono accogliere giorno, notte, lavoro e ricevere ospiti." },
  { n: "02", t: "Camere multifunzione", d: "Stanze che cambiano funzione tra giorno e notte, tra lavoro e relax." },
  { n: "03", t: "Stanze ospiti occasionali", d: "Ambienti che restano vuoti per mesi e devono trasformarsi in pochi gesti." },
  { n: "04", t: "Home office discreti", d: "Postazioni di lavoro integrate nell'architettura, invisibili a fine giornata." },
  { n: "05", t: "Camere bambini in evoluzione", d: "Spazi che crescono con loro: dal gioco allo studio, dal letto singolo al doppio." },
  { n: "06", t: "Airbnb di alto livello", d: "Massimizzare la capienza senza sacrificare l'eleganza percepita dall'ospite." },
];

const projects = [
  { img: projectStudio, title: "Brera, 28 mq", subtitle: "Monolocale", desc: "Un unico ambiente che diventa salotto, camera, studio e cucina senza compromessi formali." },
  { img: projectChildren, title: "Porta Romana, 14 mq", subtitle: "Camera bambini", desc: "Letto a castello su misura con scrivania, armadio e zona gioco integrati nella parete." },
  { img: projectOffice, title: "Città Studi, 9 mq", subtitle: "Home office", desc: "Studio professionale che scompare a fine giornata, restituendo l'ambiente alla vita domestica." },
];

function Projects() {
  return (
    <section id="progetti" className="bg-warm-cream py-32 md:py-48 px-6 md:px-16">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-12 gap-8 mb-24">
          <div className="md:col-span-3">
            <div className="text-eyebrow text-muted-foreground">— 03 Progetti realizzati</div>
          </div>
          <div className="md:col-span-9 flex justify-between items-end">
            <Reveal>
              <h2 className="font-display text-[8vw] md:text-[4.2vw] leading-[1.05] font-extralight max-w-3xl">
                Progetti <span className="italic">realizzati</span>
              </h2>
            </Reveal>
            <a href="#" className="hidden md:inline-block text-[11px] tracking-[0.22em] uppercase border-b border-foreground pb-1 hover:opacity-60 transition">
              Tutti i progetti →
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {projects.map((p, i) => (
            <Reveal key={p.title}>
              <div className="relative w-full overflow-hidden aspect-[3/4] group">
                <motion.img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ scale: 1.15 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex justify-center p-4 md:p-6">
                  <div className="bg-background w-full max-w-sm p-6 md:p-8 shadow-2xl text-center">
                    <div className="text-eyebrow text-warm-clay mb-4">— Progetto {String(i + 1).padStart(2, "0")}</div>
                    <div className="text-eyebrow text-muted-foreground mb-3">{p.subtitle}</div>
                    <h3 className="font-display text-2xl md:text-3xl mb-4 font-light italic leading-tight">{p.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-light">{p.desc}</p>
                    <a href="#" className="inline-block mt-5 text-[11px] tracking-[0.22em] uppercase border-b border-foreground pb-1 hover:opacity-60">
                      Scopri il progetto →
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Problems() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-16">
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
              <div
                key={p.n}
                className="border-r border-b border-foreground/15 p-6 md:p-8 group hover:bg-foreground hover:text-background transition-colors duration-500"
              >
                <div className="text-eyebrow text-warm-clay group-hover:text-background/70 mb-4">— {p.n}</div>
                <h3 className="font-display text-xl md:text-2xl font-light leading-tight">{p.t}</h3>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Craftsmanship() {
  return (
    <section id="artigianato" className="relative bg-ink text-white overflow-hidden">
      <div className="grid md:grid-cols-2">
        <div className="relative h-[60vh] md:h-[100vh] overflow-hidden">
          <motion.img
            src={craftsmanship}
            alt="Artigianato italiano nel laboratorio interno"
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
                  <div className="text-eyebrow text-warm-clay pt-1 shrink-0">{r.n}</div>
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
  { t: "Hanno trasformato un bilocale di 45 mq in un appartamento che sembra il doppio. Progettazione impeccabile, esecuzione di altissimo livello.", a: "Chiara M.", l: "Brera, Milano" },
  { t: "Approccio architettonico, non commerciale. Ci hanno ascoltati per ore prima di proporre qualunque soluzione. Il risultato è esattamente la nostra casa.", a: "Andrea & Sofia", l: "Porta Venezia" },
  { t: "Tre Airbnb di lusso ottimizzati con loro. Ogni metro quadro reso fruttifero senza perdere l'eleganza che i nostri ospiti si aspettano.", a: "Investitore privato", l: "Centro storico" },
];

function Reviews() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-16 bg-warm-cream">
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
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="flex flex-col h-full">
                <div className="text-warm-clay text-2xl tracking-widest mb-8">★★★★★</div>
                <p className="font-display text-2xl md:text-[26px] leading-[1.4] font-light italic mb-10 flex-1">
                  "{r.t}"
                </p>
                <div className="border-t border-border pt-6">
                  <div className="font-medium text-sm">{r.a}</div>
                  <div className="text-eyebrow text-muted-foreground mt-2">{r.l}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-20 flex justify-center">
          <a
            href="https://www.google.com/search?q=Artigiani+in+Citt%C3%A0+Milano+recensioni"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-4 bg-background border border-border px-6 py-4 hover:border-foreground transition-colors"
            aria-label="Recensioni Google"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0" aria-hidden="true">
              <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.44c-.28 1.48-1.12 2.73-2.39 3.57v2.97h3.86c2.26-2.08 3.58-5.15 3.58-8.78z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-2.97c-1.07.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"/>
              <path fill="#FBBC05" d="M5.27 14.32c-.24-.72-.38-1.49-.38-2.32s.14-1.6.38-2.32V6.59H1.29C.47 8.23 0 10.06 0 12s.47 3.77 1.29 5.41l3.98-3.09z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.59l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z"/>
            </svg>
            <div className="flex flex-col leading-tight">
              <div className="flex items-center gap-2">
                <span className="font-display text-2xl font-light">4,9</span>
                <span className="text-warm-clay tracking-widest text-sm">★★★★★</span>
              </div>
              <span className="text-eyebrow text-muted-foreground mt-1">Google Reviews · 180+ recensioni</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", t: "Ascoltiamo", d: "Comprendere come vivete il vostro spazio è il primo passo. Ogni progetto nasce da una conversazione approfondita." },
  { n: "02", t: "Analizziamo", d: "Sopralluogo tecnico, rilievo completo, studio dei flussi e dei vincoli architettonici dell'appartamento." },
  { n: "03", t: "Progettiamo", d: "Render fotorealistici, disegni esecutivi, scelta dei materiali e dei meccanismi su misura per voi." },
  { n: "04", t: "Produciamo", d: "Ogni elemento prende forma nel nostro laboratorio milanese, sotto il controllo diretto dei maestri artigiani." },
  { n: "05", t: "Installiamo", d: "Posa professionale a regola d'arte, collaudo dei meccanismi e consegna chiavi in mano." },
];

function Process() {
  return (
    <section id="consulenza" className="py-32 md:py-48 px-6 md:px-16">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-12 gap-8 mb-24">
          <div className="md:col-span-3">
            <div className="text-eyebrow text-muted-foreground">— 06 Il metodo</div>
          </div>
          <div className="md:col-span-9">
            <Reveal>
              <h2 className="font-display text-[8vw] md:text-[4.2vw] leading-[1.05] font-extralight max-w-4xl">
                Cinque tempi per <span className="italic">trasformare</span> uno spazio.
              </h2>
            </Reveal>
          </div>
        </div>
        <div className="border-t border-border">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div className="grid md:grid-cols-12 gap-8 py-10 md:py-14 border-b border-border group hover:bg-warm-cream/40 transition-colors duration-700 px-2">
                <div className="md:col-span-2 font-display text-4xl md:text-5xl font-extralight text-warm-clay">{s.n}</div>
                <div className="md:col-span-3">
                  <h3 className="font-display text-3xl md:text-4xl font-light">{s.t}</h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-light max-w-2xl">{s.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const collections = [
  { t: "Letti a scomparsa", d: "Sistemi murphy con meccanismi italiani premium.", img: catLetti },
  { t: "Divani letto", d: "Sedute di giorno, letti comodi di notte.", img: catDivaniLetto },
  { t: "Divani, pouff e poltrone", d: "Imbottiti su misura, tessuti selezionati.", img: catDivaniPouff },
  { t: "Tavoli e consolle", d: "Allungabili e trasformabili, in legno massello.", img: catTavoli },
  { t: "Cucine a scomparsa", d: "Blocchi cucina integrati dietro ante filomuro.", img: catCucine },
  { t: "Bagni e lavanderie", d: "Mobili contenitori e zone lavaggio su misura.", img: catBagni },
];

function Catalog() {
  return (
    <section id="catalogo" className="py-32 md:py-48 px-6 md:px-16 bg-secondary/30">
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
              <a href="#" className="block bg-background border border-border h-full group hover:border-foreground transition-colors duration-500 overflow-hidden">
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
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contatto" className="bg-ink text-white py-32 md:py-48 px-6 md:px-16">
      <div className="max-w-[1600px] mx-auto">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-stretch">
            <div className="relative overflow-hidden min-h-[420px] md:min-h-[640px]">
              <img src={founders} alt="I fondatori di Artigiani in Città" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-eyebrow text-white/50 mb-12">— 08 Iniziamo a progettare</div>
              <h2 className="font-display text-[10vw] md:text-[5.5vw] leading-[0.95] font-extralight">
                Raccontateci<br />il vostro <span className="italic">spazio</span>.
              </h2>
              <p className="mt-10 text-white/70 text-lg font-light max-w-xl leading-relaxed">
                Una consulenza dedicata, un sopralluogo, una proposta progettuale. Senza impegno, con la cura che riserviamo a ogni progetto.
              </p>
              <div className="mt-12 grid sm:grid-cols-2 gap-px bg-white/10">
                <a href="#" className="bg-ink p-8 hover:bg-white hover:text-foreground transition-colors duration-500 group">
                  <div className="text-eyebrow text-white/40 group-hover:text-foreground/60 mb-6">Primo contatto</div>
                  <div className="font-display text-2xl md:text-3xl font-light">Prenota una consulenza →</div>
                </a>
                <a href="#" className="bg-ink p-8 hover:bg-white hover:text-foreground transition-colors duration-500 group">
                  <div className="text-eyebrow text-white/40 group-hover:text-foreground/60 mb-6">Gratuito</div>
                  <div className="font-display text-2xl md:text-3xl font-light">Vuoi un vero progetto gratuito? →</div>
                </a>
              </div>
              <div className="mt-12 flex flex-col sm:flex-row gap-8 sm:gap-12 text-sm text-white/60 font-light">
                <div>
                  <div className="text-eyebrow text-white/40 mb-2">Studio</div>
                  Via Esempio 12, Milano
                </div>
                <div>
                  <div className="text-eyebrow text-white/40 mb-2">Telefono</div>
                  +39 02 0000 0000
                </div>
                <div>
                  <div className="text-eyebrow text-white/40 mb-2">WhatsApp</div>
                  Risposta entro 2 ore
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contatti" className="bg-warm-cream text-foreground py-32 md:py-48 px-6 md:px-16">
      <div className="max-w-[1600px] mx-auto">
        <Reveal>
          <div className="text-eyebrow text-muted-foreground mb-12">— 09 Parliamone</div>
          <h2 className="font-display text-[10vw] md:text-[5.5vw] leading-[0.95] font-extralight max-w-5xl">
            Tre modi per <span className="italic">iniziare</span>.
          </h2>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground font-light max-w-2xl leading-relaxed">
            Scrivici, chiamaci o passa in showroom. Rispondiamo sempre, di persona, entro poche ore.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 grid md:grid-cols-3 gap-px bg-border border border-border">
            <a href="tel:+390200000000" className="bg-warm-cream p-10 hover:bg-background transition-colors group">
              <div className="text-eyebrow text-muted-foreground mb-4">Telefono</div>
              <div className="font-display text-3xl md:text-4xl font-light leading-tight">+39 02 0000 0000</div>
              <div className="mt-4 text-sm text-muted-foreground">Lun–Sab · 9:30 – 19:30</div>
            </a>
            <a href="https://wa.me/393000000000" className="bg-warm-cream p-10 hover:bg-background transition-colors group">
              <div className="text-eyebrow text-muted-foreground mb-4">WhatsApp</div>
              <div className="font-display text-3xl md:text-4xl font-light leading-tight">+39 300 000 0000</div>
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
            <div className="relative overflow-hidden h-full min-h-[420px] md:min-h-[640px]">
              <img src={showroom} alt="Showroom Artigiani in Città a Milano" className="absolute inset-0 w-full h-full object-cover" />
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
                <input required type="text" placeholder="Nome" className="bg-transparent border-b border-border py-3 px-1 text-base font-light placeholder:text-muted-foreground/60 focus:outline-none focus:border-ink transition" />
                <input required type="text" placeholder="Cognome" className="bg-transparent border-b border-border py-3 px-1 text-base font-light placeholder:text-muted-foreground/60 focus:outline-none focus:border-ink transition" />
                <input required type="email" placeholder="Email" className="bg-transparent border-b border-border py-3 px-1 text-base font-light placeholder:text-muted-foreground/60 focus:outline-none focus:border-ink transition" />
                <input required type="tel" placeholder="Telefono" className="bg-transparent border-b border-border py-3 px-1 text-base font-light placeholder:text-muted-foreground/60 focus:outline-none focus:border-ink transition" />
              </div>
              <textarea rows={3} placeholder="Due righe sul tuo progetto (facoltativo)" className="mt-5 bg-transparent border-b border-border py-3 px-1 text-base font-light placeholder:text-muted-foreground/60 focus:outline-none focus:border-ink transition resize-none" />
              <button type="submit" className="mt-10 bg-ink text-white py-5 px-8 text-eyebrow hover:bg-foreground transition-colors">
                Richiedi una consulenza gratuita →
              </button>
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
    <footer className="bg-ink text-white/60 border-t border-white/10 py-12 px-6 md:px-16">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={logo} alt="Artigiani in Città" className="h-6 invert brightness-0" />
        <div className="text-eyebrow text-white/40">© Artigiani in Città — Studio di trasformazione, Milano</div>
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
      <Process />
      <Catalog />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

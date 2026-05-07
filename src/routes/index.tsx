import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/logo-artigiani.svg";
import heroLiving from "@/assets/hero-living.jpg";
import heroBed from "@/assets/hero-bed.jpg";
import craftsmanship from "@/assets/craftsmanship.jpg";
import projectStudio from "@/assets/project-studio.jpg";
import projectChildren from "@/assets/project-children.jpg";
import projectOffice from "@/assets/project-office.jpg";

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/40" : "bg-transparent"}`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="Artigiani in Città" className={`h-7 md:h-8 transition-all ${scrolled ? "" : "invert brightness-0"}`} />
        </a>
        <nav className={`hidden lg:flex items-center gap-10 text-[12px] tracking-[0.18em] uppercase ${scrolled ? "text-foreground" : "text-white"}`}>
          <a href="#progetti" className="hover:opacity-60 transition">Progetti</a>
          <a href="#consulenza" className="hover:opacity-60 transition">Consulenza</a>
          <a href="#artigianato" className="hover:opacity-60 transition">Artigianato</a>
          <a href="#soluzioni" className="hover:opacity-60 transition">Soluzioni</a>
          <a href="#catalogo" className="hover:opacity-60 transition">Catalogo</a>
        </nav>
        <a href="#contatto" className={`text-[11px] tracking-[0.22em] uppercase border px-5 py-3 transition ${scrolled ? "border-foreground text-foreground hover:bg-foreground hover:text-background" : "border-white text-white hover:bg-white hover:text-foreground"}`}>
          Prenota consulenza
        </a>
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
              Prenota una consulenza
            </a>
            <a href="#progetti" className="inline-flex items-center text-white text-[12px] tracking-[0.22em] uppercase border-b border-white/40 pb-2 hover:border-white transition w-fit">
              Invia pianta e misure →
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
    <section className="py-32 md:py-48 px-6 md:px-16 max-w-[1600px] mx-auto">
      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-3">
          <div className="text-eyebrow text-muted-foreground">— 01 Manifesto</div>
        </div>
        <div className="md:col-span-9">
          <Reveal>
            <h2 className="font-display text-[7vw] md:text-[3.8vw] leading-[1.05] max-w-5xl font-extralight">
              Non vendiamo mobili. <span className="text-muted-foreground">Risolviamo problemi complessi di spazio</span> con intelligenza progettuale e produzione artigianale italiana.
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

function Problems() {
  return (
    <section id="soluzioni" className="bg-ink text-white/90 py-32 md:py-48 px-6 md:px-16">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-3">
            <div className="text-eyebrow text-white/50">— 02 Problemi che risolviamo</div>
          </div>
          <div className="md:col-span-9">
            <Reveal>
              <h2 className="font-display text-[6vw] md:text-[3.2vw] leading-[1.05] font-extralight max-w-4xl">
                Ogni progetto nasce da un vincolo reale.
              </h2>
            </Reveal>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-white/10">
          {problems.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.05}>
              <div className="bg-ink p-10 md:p-12 h-full min-h-[280px] flex flex-col justify-between hover:bg-white/[0.03] transition-colors duration-700">
                <div className="text-eyebrow text-white/40">{p.n}</div>
                <div>
                  <h3 className="font-display text-3xl md:text-4xl mb-4 font-light">{p.t}</h3>
                  <p className="text-white/60 text-sm leading-relaxed font-light">{p.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  { img: projectStudio, title: "Brera, 28 mq", subtitle: "Monolocale", desc: "Un unico ambiente che diventa salotto, camera, studio e cucina senza compromessi formali." },
  { img: projectChildren, title: "Porta Romana, 14 mq", subtitle: "Camera bambini", desc: "Letto a castello su misura con scrivania, armadio e zona gioco integrati nella parete." },
  { img: projectOffice, title: "Città Studi, 9 mq", subtitle: "Home office", desc: "Studio professionale che scompare a fine giornata, restituendo l'ambiente alla vita domestica." },
];

function Projects() {
  return (
    <section id="progetti" className="py-32 md:py-48 px-6 md:px-16">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-12 gap-8 mb-24">
          <div className="md:col-span-3">
            <div className="text-eyebrow text-muted-foreground">— 03 Progetti recenti</div>
          </div>
          <div className="md:col-span-9 flex justify-between items-end">
            <Reveal>
              <h2 className="font-display text-[6vw] md:text-[3.2vw] leading-[1.05] font-extralight max-w-3xl">
                Trasformazioni reali in case reali.
              </h2>
            </Reveal>
            <a href="#" className="hidden md:inline-block text-[11px] tracking-[0.22em] uppercase border-b border-foreground pb-1 hover:opacity-60 transition">
              Tutti i progetti →
            </a>
          </div>
        </div>

        <div className="space-y-24 md:space-y-40">
          {projects.map((p, i) => (
            <Reveal key={p.title}>
              <div className="relative w-full overflow-hidden h-[80vh] md:h-[92vh] min-h-[600px]">
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
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/40" />
                <div className={`relative z-10 h-full flex p-6 md:p-20 ${i % 2 === 1 ? "justify-end items-end" : "justify-start items-end"}`}>
                  <div className="bg-background max-w-md w-full p-10 md:p-14 shadow-2xl">
                    <div className="text-eyebrow text-warm-clay mb-6">— Progetto {String(i + 1).padStart(2, "0")}</div>
                    <div className="text-eyebrow text-muted-foreground mb-4">{p.subtitle}</div>
                    <h3 className="font-display text-4xl md:text-5xl mb-6 font-light italic leading-tight">{p.title}</h3>
                    <p className="text-muted-foreground text-base leading-relaxed font-light">{p.desc}</p>
                    <a href="#" className="inline-block mt-8 text-[11px] tracking-[0.22em] uppercase border-b border-foreground pb-1 hover:opacity-60">
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
            <div className="text-eyebrow text-white/50 mb-8">— 04 Produzione interna</div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-extralight leading-[1.05] mb-10">
              Ogni pezzo nasce<br />nel <span className="italic">nostro laboratorio</span>.
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed font-light max-w-md mb-12">
              Non assembliamo prodotti di terzi. Disegniamo, costruiamo e installiamo internamente. Questo controllo totale è ciò che permette progetti veramente su misura, meccanismi premium e una qualità che si tramanda.
            </p>
            <div className="grid grid-cols-2 gap-10 max-w-md border-t border-white/15 pt-10">
              <div>
                <div className="font-display text-5xl font-extralight mb-2">17</div>
                <div className="text-eyebrow text-white/50">Anni di studio</div>
              </div>
              <div>
                <div className="font-display text-5xl font-extralight mb-2">800+</div>
                <div className="text-eyebrow text-white/50">Progetti consegnati</div>
              </div>
              <div>
                <div className="font-display text-5xl font-extralight mb-2">100%</div>
                <div className="text-eyebrow text-white/50">Produzione interna</div>
              </div>
              <div>
                <div className="font-display text-5xl font-extralight mb-2">Milano</div>
                <div className="text-eyebrow text-white/50">Laboratorio</div>
              </div>
            </div>
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
        <div className="text-eyebrow text-muted-foreground mb-16">— 05 Testimonianze</div>
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
              <h2 className="font-display text-[6vw] md:text-[3.2vw] leading-[1.05] font-extralight max-w-4xl">
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
  { t: "Letti a scomparsa", d: "Sistemi murphy con meccanismi italiani premium." },
  { t: "Pareti attrezzate", d: "Architetture integrate su misura millimetrica." },
  { t: "Mobili trasformabili", d: "Tavoli, scrivanie e sedute multifunzione." },
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
              <h2 className="font-display text-[6vw] md:text-[3.2vw] leading-[1.05] font-extralight max-w-4xl">
                Esplorate le soluzioni.
              </h2>
              <p className="text-muted-foreground mt-6 max-w-xl font-light">Una selezione delle tipologie disponibili. Ogni progetto è poi modellato sui vostri spazi, materiali e necessità.</p>
            </Reveal>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {collections.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.08}>
              <a href="#" className="block bg-background border border-border p-10 h-full group hover:border-foreground transition-colors duration-500">
                <div className="text-eyebrow text-warm-clay mb-12">— Collezione 0{i + 1}</div>
                <h3 className="font-display text-3xl md:text-4xl font-light mb-4">{c.t}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light mb-12">{c.d}</p>
                <div className="text-[11px] tracking-[0.22em] uppercase border-b border-foreground inline-block pb-1 group-hover:opacity-60">Esplora →</div>
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
          <div className="text-eyebrow text-white/50 mb-12">— 08 Iniziamo a progettare</div>
          <h2 className="font-display text-[10vw] md:text-[7vw] leading-[0.95] font-extralight max-w-6xl">
            Raccontateci<br />il vostro <span className="italic">spazio</span>.
          </h2>
          <p className="mt-12 text-white/70 text-lg md:text-xl font-light max-w-xl leading-relaxed">
            Una consulenza dedicata, un sopralluogo, una proposta progettuale. Senza impegno, con la cura che riserviamo a ogni progetto.
          </p>
          <div className="mt-16 grid md:grid-cols-2 gap-px bg-white/10 max-w-4xl">
            <a href="#" className="bg-ink p-10 hover:bg-white hover:text-foreground transition-colors duration-500 group">
              <div className="text-eyebrow text-white/40 group-hover:text-foreground/60 mb-8">Primo contatto</div>
              <div className="font-display text-3xl md:text-4xl font-light">Prenota una consulenza →</div>
            </a>
            <a href="#" className="bg-ink p-10 hover:bg-white hover:text-foreground transition-colors duration-500 group">
              <div className="text-eyebrow text-white/40 group-hover:text-foreground/60 mb-8">Veloce</div>
              <div className="font-display text-3xl md:text-4xl font-light">Inviateci pianta e misure →</div>
            </a>
          </div>
          <div className="mt-16 flex flex-col md:flex-row gap-8 md:gap-16 text-sm text-white/60 font-light">
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
        </Reveal>
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
      <Problems />
      <Projects />
      <Craftsmanship />
      <Reviews />
      <Process />
      <Catalog />
      <CTA />
      <Footer />
    </div>
  );
}

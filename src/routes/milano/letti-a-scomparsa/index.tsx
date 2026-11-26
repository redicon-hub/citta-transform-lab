import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, FileImage, MapPin, Phone, Ruler } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CategoryCta,
  CategoryFooter,
  CategoryHeader,
  CategoryMobileBar,
  DIRECTIONS_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
  PRIVACY_HREF,
  WHATSAPP_HREF,
  WhatsAppMark,
} from "@/components/category-shell";
import showroomImage from "@/assets/showroom-arredo-salvaspazio-600mq-corsico-milano.webp.asset.json";

const SITE = "https://artigianiincitta.it";
const PAGE_PATH = "/milano/letti-a-scomparsa/";
const PAGE_URL = `https://artigianiincitta.red-icon.dev${PAGE_PATH}`;
const HERO_IMAGE = `${SITE}/wp-content/uploads/2026/03/letto-a-scomparsa-su-misura-novera-materasso-alto.jpg`;

const configurations = [
  {
    name: "Letti a scomparsa con divano",
    use: "Soggiorno e camera",
    description:
      "Di giorno resta un living con una seduta vera; di notte la stessa parete accoglie il letto. La scelta più naturale per monolocali e soggiorni che diventano camera.",
    image: `${SITE}/wp-content/uploads/2024/09/letti-a-scomparsa-con-divano.jpg`,
    alt: "Letto a scomparsa Messina chiuso con divano angolare e librerie nella zona giorno",
    href: `${SITE}${PAGE_PATH}letti-a-scomparsa-con-divano/`,
    link: "Esplora i letti con divano",
    value: "divano",
  },
  {
    name: "Letti a scomparsa con scrivania",
    use: "Studio e camera",
    description:
      "Per lavorare o studiare nella stessa stanza in cui dormi, con la postazione integrata nella composizione.",
    image: `${SITE}/wp-content/uploads/2024/09/letti-a-scomparsa-con-scrivania.jpg`,
    alt: "Letto a scomparsa orizzontale con scrivania integrata e pensili",
    href: `${SITE}${PAGE_PATH}letti-a-scomparsa-con-scrivania/`,
    link: "Vedi i letti con scrivania",
    value: "scrivania",
  },
  {
    name: "Armadio con letto a scomparsa",
    use: "Un’unica parete attrezzata",
    description:
      "Letto, contenimento e libreria condividono la stessa parete, lasciando libero il centro della stanza.",
    image: `${SITE}/wp-content/uploads/2022/01/armadio-con-letto-a-scomparsa-vedano-al-lambro-componibile-su-misura-con-armadi-librerie-scrivania-t.jpg`,
    alt: "Armadio con letto a scomparsa aperto integrato in una parete con libreria",
    href: `${SITE}${PAGE_PATH}armadio-con-letto-a-scomparsa/`,
    link: "Vedi le composizioni con armadio",
    value: "parete",
  },
];

const products = [
  {
    name: "Abacus sofa ante orizzontali",
    configuration: "Con divano · Apertura verticale",
    detail: "Profondità da chiuso: 36,2 cm",
    price: "1.617,72 €",
    previousPrice: "2.232,60 €",
    image: `${SITE}/wp-content/uploads/2024/10/Letto-a-scomparsa-Abacus-divano-contenitore-ante-orizzontali-in-offerta.jpg`,
    alt: "Letto a scomparsa Abacus chiuso con divano contenitore e librerie",
    href: `${SITE}/shop/letti-a-scomparsa/letti-a-scomparsa-con-divano/letto-a-scomparsa-abacus-sofa-con-ante-orizzontali/`,
  },
  {
    name: "Caserta con divano Christian",
    configuration: "Matrimoniale · Con divano",
    detail: "Composizione personalizzabile su misura",
    price: "2.266,76 €",
    previousPrice: "3.128,08 €",
    image: `${SITE}/wp-content/uploads/2021/02/letto-a-scomparsa-caserta-con-divano-christian-matrimoniale.jpg`,
    alt: "Letto a scomparsa Caserta chiuso con divano Christian beige e armadio",
    href: `${SITE}/shop/letti-a-scomparsa/letti-a-scomparsa-prezzi-economici-personalizzabili-su-misura-modello-caserta-in-offerta/`,
  },
  {
    name: "Hiro — Clever IM22-012",
    configuration: "Orizzontale · Con scrivania",
    detail: "Camera e studio nella stessa composizione",
    image: `${SITE}/wp-content/uploads/2025/03/Camera-studio-letto-a-scomparsa-orizzontale-con-scrivania-Hiro-Clever-composizione-IM22-012.jpg`,
    alt: "Camera studio con letto a scomparsa orizzontale Hiro e scrivania",
    href: `${SITE}/shop/letti-a-scomparsa/letti-a-scomparsa-con-scrivania/camera-studio-letto-a-scomparsa-orizzontale-con-scrivania-hiro-clever-composizione-im22-012/`,
  },
  {
    name: "Clei-Table",
    configuration: "Con tavolo integrato",
    detail: "Zona pranzo e letto nella stessa parete",
    price: "3.618,52 €",
    previousPrice: "4.993,46 €",
    image: `${SITE}/wp-content/uploads/2023/04/letto-a-scomparsa-con-tavolo-clei-table-apparecchiato-1.jpg`,
    alt: "Letto a scomparsa Clei-Table con tavolo apparecchiato e librerie laterali",
    href: `${SITE}/shop/letti-a-scomparsa/letti-a-scomparsa-con-tavolo/letto-a-scomparsa-con-tavolo-clei-table/`,
  },
  {
    name: "Ikeano in pronta consegna",
    configuration: "Matrimoniale · Verticale",
    detail: "Materasso ortopedico a molle incluso",
    price: "3.403,80 €",
    previousPrice: "4.184,60 €",
    image: `${SITE}/wp-content/uploads/2024/10/Mobile-letto-a-scomparsa-Ikeano-matrimoniale-offerta-chiuso.jpg`,
    alt: "Mobile letto a scomparsa Ikeano matrimoniale chiuso con tavolo davanti",
    href: `${SITE}/shop/letti-a-scomparsa/letto-a-scomparsa-ikeano-in-offerta/`,
  },
  {
    name: "Penelope",
    configuration: "Componibile · Con o senza divano",
    detail: "Apertura automatica e parete componibile",
    price: "2.671,80 €",
    previousPrice: "3.686,84 €",
    image: `${SITE}/wp-content/uploads/2019/04/letto-a-scomparsa-con-divano-automatico-aperto-penelope-parete-con-librerie-ed-armadi-composizione-chiusa.jpg`,
    alt: "Letto a scomparsa Penelope con divano e parete con librerie",
    href: `${SITE}/shop/letti-a-scomparsa/letto-a-scomparsa-componibile-con-e-senza-divano-modello-penelope/`,
  },
];

const faqs = [
  {
    q: "Come misuro la stanza per un letto a scomparsa?",
    a: "Segna la larghezza della parete disponibile e lo spazio libero davanti al mobile. Indica anche porte, finestre, radiatori e ogni elemento che potrebbe interferire con l’apertura. Una foto frontale e una laterale aiutano a leggere meglio la stanza; se manca una misura, la verifichiamo insieme prima del progetto.",
  },
  {
    q: "Quando conviene un’apertura verticale e quando una orizzontale?",
    a: "La verticale sviluppa il letto dall’alto verso il basso e richiede spazio libero davanti alla parete. L’orizzontale si apre sul lato lungo ed è spesso valutata con soffitti più bassi o pareti lunghe. Non esiste una regola universale: ingombri e configurazione cambiano tra i modelli, quindi la scelta va verificata sulla stanza reale.",
  },
  {
    q: "Posso abbinare il letto a un divano o a una scrivania?",
    a: "Sì. Il catalogo include sia letti con divano, per living che diventano camera, sia letti con scrivania, per studio e camere ragazzi. Le due pagine dedicate mostrano le configurazioni disponibili e i rispettivi modelli.",
  },
  {
    q: "Quanto costa un letto a scomparsa su misura?",
    a: "Dipende dal modello e dalla composizione: apertura, materasso, divano o scrivania, elementi contenitivi, finiture e dimensioni incidono sul preventivo. Per alcuni prodotti il catalogo pubblica il prezzo della configurazione mostrata; per un progetto su misura definiamo il prezzo dopo avere scelto insieme questi elementi.",
  },
  {
    q: "Posso chiedere un progetto anche se ho soltanto una foto?",
    a: "Sì. Puoi iniziare con una foto della parete e raccontarci come vorresti usare la stanza. Le misure non sono un requisito per il primo contatto: se servono per sviluppare la proposta, ti indichiamo quali prendere e come farlo.",
  },
];

type Search = { soluzione?: string; dettagli?: string };
const usageValues = ["divano", "scrivania", "parete", "verticale", "orizzontale", "consiglio"];

export const Route = createFileRoute("/milano/letti-a-scomparsa/")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    ...(typeof search.soluzione === "string" ? { soluzione: search.soluzione } : {}),
    ...(typeof search.dettagli === "string" ? { dettagli: search.dettagli } : {}),
  }),
  head: () => ({
    meta: [
      { title: "Letti a scomparsa a Milano su misura | Artigiani in Città" },
      {
        name: "description",
        content:
          "Letti a scomparsa su misura a Milano con divano, scrivania o armadio. Scopri modelli e prezzi, verifica gli ingombri e richiedi il progetto per la tua stanza.",
      },
      { property: "og:title", content: "Letti a scomparsa a Milano | Artigiani in Città" },
      {
        property: "og:description",
        content:
          "Di giorno il tuo soggiorno, di notte la tua camera. Trova la configurazione adatta e progettala con i nostri artigiani.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { property: "og:image", content: HERO_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: HERO_IMAGE },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://artigianiincitta.red-icon.dev/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Milano",
              item: "https://artigianiincitta.it/milano/",
            },
            { "@type": "ListItem", position: 3, name: "Letti a scomparsa", item: PAGE_URL },
          ],
        }),
      },
    ],
  }),
  component: WallBedsPage,
});

function SectionHeading({
  index,
  eyebrow,
  title,
  text,
}: {
  index: string;
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-12 md:gap-8">
      <div className="text-eyebrow text-muted-foreground md:col-span-3">
        — {index} {eyebrow}
      </div>
      <div className="md:col-span-9">
        <h2 className="max-w-4xl font-display text-[9vw] font-extralight leading-[1.04] sm:text-5xl md:text-[4vw]">
          {title}
        </h2>
        {text && (
          <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-muted-foreground">
            {text}
          </p>
        )}
      </div>
    </div>
  );
}

function WallBedsPage() {
  return (
    <div className="bg-background pb-[calc(76px+env(safe-area-inset-bottom))] text-foreground md:pb-0">
      <CategoryHeader categoryLabel="Letti a scomparsa" />
      <main className="pt-[133px] md:pt-[129px]">
        <Hero />
        <Configurations />
        <Measurements />
        <Models />
        <ProjectForm />
        <Showroom />
        <Faq />
      </main>
      <CategoryFooter />
      <CategoryMobileBar />
    </div>
  );
}

function Hero() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-[1600px] px-6 md:px-16">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 overflow-x-auto whitespace-nowrap py-4 text-[11px] text-muted-foreground md:py-5"
        >
          <a href="/" className="hover:text-ink">
            Home
          </a>
          <span aria-hidden="true">/</span>
          <a href={`${SITE}/milano/`} className="hover:text-ink">
            Milano
          </a>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="text-ink">
            Letti a scomparsa
          </span>
        </nav>
        <div className="grid items-stretch gap-8 pb-8 md:grid-cols-12 md:gap-12 md:pb-16">
          <div className="flex flex-col justify-center md:col-span-5 md:py-8">
            <h1 className="font-display text-[10.5vw] font-light leading-[0.98] sm:text-5xl md:text-[4.2vw]">
              Letti a scomparsa <span className="italic text-warm-clay">a Milano</span>
            </h1>
            <p className="mt-5 font-display text-3xl font-light leading-[1.08] md:text-[2.25vw]">
              Di giorno il tuo soggiorno.
              <br />
              <span className="italic">Di notte la tua camera.</span>
            </p>
            <p className="mt-5 max-w-xl text-[15px] font-light leading-relaxed text-muted-foreground md:text-base">
              Con un letto a scomparsa puoi usare la stessa stanza in due modi. Partiamo dalle
              misure della tua parete e da quello che vuoi farci durante il giorno.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <CategoryCta
                href="#progetto"
                tone="light"
                className="sm:flex-1 md:flex-none lg:flex-1"
              >
                Verifica cosa ci sta nella tua stanza
              </CategoryCta>
              <CategoryCta
                href="#configurazioni"
                tone="outline"
                className="sm:flex-1 md:flex-none lg:flex-1"
              >
                Guarda i modelli
              </CategoryCta>
            </div>
          </div>
          <div className="md:col-span-7">
            <figure className="relative h-full min-h-[280px] overflow-hidden bg-secondary md:min-h-[540px]">
              <img
                src={HERO_IMAGE}
                alt="Letto a scomparsa su misura Novera in apertura, integrato in una parete living in legno"
                width={1280}
                height={853}
                fetchPriority="high"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-ink/85 to-transparent px-5 pb-5 pt-16 text-warm-cream md:px-7 md:pb-6">
                <span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-warm-cream/70">
                    Dal catalogo Artigiani in Città
                  </span>
                  <span className="mt-1 block font-display text-2xl font-light">
                    Novera · su misura
                  </span>
                </span>
                <a
                  href={`${SITE}/shop/letti-a-scomparsa/letto-a-scomparsa-su-misura-novera-con-materasso-alto/`}
                  className="shrink-0 border-b border-warm-cream/60 pb-1 text-[10px] uppercase tracking-[0.16em]"
                >
                  Vedi il modello
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

function Configurations() {
  return (
    <section
      id="configurazioni"
      className="scroll-mt-36 px-6 py-16 md:scroll-mt-40 md:px-16 md:py-28"
    >
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading
          index="01"
          eyebrow="La scelta parte da qui"
          title="Come vuoi usare la stanza di giorno?"
          text="Non partire dal meccanismo: parti dalla vita che fai nella stanza. Ecco tre configurazioni realmente presenti nel nostro catalogo."
        />
        <div className="mt-10 grid gap-8 md:mt-16 md:grid-cols-12 md:gap-6">
          <article className="md:col-span-7 md:row-span-2">
            <a href={configurations[0].href} className="group block">
              <div className="relative aspect-[16/11] overflow-hidden bg-secondary md:aspect-auto md:h-[520px]">
                <img
                  src={configurations[0].image}
                  alt={configurations[0].alt}
                  width={1280}
                  height={359}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />
              </div>
              <div className="border-x border-b border-border p-6 md:p-8">
                <div className="text-eyebrow text-warm-clay">{configurations[0].use}</div>
                <h3 className="mt-3 font-display text-3xl font-light leading-tight md:text-5xl">
                  {configurations[0].name}
                </h3>
                <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-muted-foreground md:text-base">
                  {configurations[0].description}
                </p>
                <span className="mt-7 inline-flex items-center gap-3 border-b border-ink pb-1 text-[11px] uppercase tracking-[0.18em]">
                  {configurations[0].link}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
            <a
              href={`${PAGE_PATH}?soluzione=divano#progetto`}
              className="mt-3 inline-flex items-center gap-2 px-1 text-xs text-muted-foreground underline decoration-border underline-offset-4 hover:text-ink"
            >
              Richiedi un progetto con divano
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </article>
          {configurations.slice(1).map((item) => (
            <article key={item.name} className="md:col-span-5">
              <a
                href={item.href}
                className="group grid grid-cols-[112px_minmax(0,1fr)] border border-border md:block"
              >
                <div className="min-h-full overflow-hidden bg-secondary md:aspect-[16/8]">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <div className="text-[9px] uppercase tracking-[0.16em] text-warm-clay md:text-[10px]">
                    {item.use}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-light leading-tight md:text-3xl">
                    {item.name}
                  </h3>
                  <p className="mt-3 hidden text-sm font-light leading-relaxed text-muted-foreground md:block">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.12em] md:text-[10px]">
                    {item.link}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Measurements() {
  const points = [
    [
      "01",
      "Larghezza della parete disponibile",
      "Misura la porzione davvero utilizzabile, escludendo altri mobili o ostacoli.",
    ],
    [
      "02",
      "Spazio libero davanti al mobile",
      "Considera l’ingombro quando il letto è aperto e il passaggio per muoverti intorno.",
    ],
    [
      "03",
      "Porte, finestre ed elementi fissi",
      "Segnalaci tutto ciò che può interferire con l’apertura, compresi radiatori e prese.",
    ],
  ];
  return (
    <section
      id="misure"
      className="scroll-mt-36 bg-warm-cream px-6 py-16 md:scroll-mt-40 md:px-16 md:py-28"
    >
      <div className="mx-auto max-w-[1500px]">
        <SectionHeading
          index="02"
          eyebrow="Prima del modello"
          title="Quanto spazio serve davvero?"
          text="Dipende dal modello e dalla configurazione. Per capirlo bastano tre osservazioni della tua stanza, senza affidarsi a misure universali."
        />
        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-2 md:gap-14">
          <div>
            <img
              src={`${SITE}/wp-content/uploads/2020/02/letto-a-scomparsa-con-divano-penelope-parete-aperto-e1605201307619.jpg`}
              alt="Letto a scomparsa Penelope durante l’apertura sopra il divano"
              loading="lazy"
              width={800}
              height={334}
              className="aspect-[4/3] w-full bg-secondary object-cover md:aspect-[16/11]"
            />
            <div className="border-x border-b border-border bg-background p-5">
              <svg
                viewBox="0 0 560 110"
                className="h-auto w-full text-warm-clay"
                role="img"
                aria-label="Schema senza misure: parete, letto aperto e spazio libero davanti"
              >
                <path
                  d="M28 18v76M28 94h160M188 94h318M188 94V52h318v42M188 52l52-26h318l-52 26M506 94V26"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M30 104h480" stroke="currentColor" strokeWidth="1" strokeDasharray="5 7" />
                <text x="36" y="40" fill="currentColor" fontSize="12">
                  PARETE
                </text>
                <text x="300" y="76" fill="currentColor" fontSize="12">
                  LETTO APERTO
                </text>
                <text x="390" y="106" fill="currentColor" fontSize="10">
                  SPAZIO DAVANTI
                </text>
              </svg>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="border-t border-ink/20">
              {points.map(([n, title, text]) => (
                <div
                  key={n}
                  className="grid grid-cols-[38px_minmax(0,1fr)] gap-3 border-b border-ink/20 py-5 md:py-6"
                >
                  <span className="font-display text-xl italic text-warm-clay">{n}</span>
                  <div>
                    <h3 className="font-display text-2xl font-light leading-tight md:text-3xl">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-7">
              <h3 className="font-display text-2xl font-light italic">
                Hai già le misure? Partiamo da quelle.
              </h3>
              <div className="mt-4 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <CategoryCta href={`${PAGE_PATH}?dettagli=misure#progetto`} tone="dark">
                  Inserisci le tue misure
                </CategoryCta>
                <a
                  href={`${PAGE_PATH}?soluzione=consiglio#progetto`}
                  className="px-1 py-2 text-xs underline decoration-border underline-offset-4 hover:text-warm-clay"
                >
                  Non le hai ancora? Ti aiutiamo noi
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Models() {
  return (
    <section id="modelli" className="scroll-mt-36 px-6 py-16 md:scroll-mt-40 md:px-16 md:py-28">
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading
          index="03"
          eyebrow="Catalogo"
          title="Modelli e ambienti reali."
          text="Una selezione per confrontare le funzioni. Apri la scheda per verificare composizione, varianti, disponibilità e prezzo aggiornato."
        />
        <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="group flex min-w-0 flex-col border-t border-ink/20 pt-4"
            >
              <a href={product.href} className="block overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={product.alt}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </a>
              <div className="flex flex-1 flex-col pt-5">
                <div className="text-[10px] uppercase tracking-[0.16em] text-warm-clay">
                  {product.configuration}
                </div>
                <h3 className="mt-2 font-display text-3xl font-light leading-tight">
                  <a href={product.href} className="hover:text-warm-clay">
                    {product.name}
                  </a>
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                  {product.detail}
                </p>
                <div className="mt-5 flex flex-1 flex-col justify-end">
                  {product.price ? (
                    <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="font-readable-numbers text-xl text-ink">
                        {product.price}
                      </span>
                      <span className="font-readable-numbers text-sm text-muted-foreground line-through">
                        {product.previousPrice}
                      </span>
                      <span className="w-full text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                        IVA inclusa · offerta catalogo
                      </span>
                    </p>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Prezzo in base alla configurazione scelta
                    </p>
                  )}
                  <a
                    href={product.href}
                    className="mt-5 inline-flex items-center justify-between border-t border-border py-3 text-[10px] uppercase tracking-[0.15em] hover:text-warm-clay"
                  >
                    Vedi {product.name}
                    <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-border pt-6 md:flex-row md:items-center">
          <p className="max-w-2xl text-xs font-light leading-relaxed text-muted-foreground">
            Prezzi rilevati dalle schede del catalogo e riferiti alle composizioni pubblicate. Il
            prezzo del progetto su misura dipende da modello, dimensioni, materasso, accessori e
            finiture.
          </p>
          <CategoryCta href={`${SITE}/shop/letti-a-scomparsa/`} tone="outline" className="shrink-0">
            Vedi tutto il catalogo letti
          </CategoryCta>
        </div>
      </div>
    </section>
  );
}

function ProjectForm() {
  const search = Route.useSearch();
  const initialUsage =
    search.soluzione && usageValues.includes(search.soluzione) ? search.soluzione : "";
  const [contactMethod, setContactMethod] = useState<"telefono" | "email">("telefono");
  const [usage, setUsage] = useState(initialUsage);
  const [detailsOpen, setDetailsOpen] = useState(search.dettagli === "misure");
  const [notice, setNotice] = useState("");

  return (
    <section
      id="progetto"
      className="scroll-mt-36 bg-ink px-6 py-16 text-warm-cream md:scroll-mt-40 md:px-16 md:py-28"
    >
      <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="text-eyebrow text-warm-clay">— 04 Il tuo progetto</div>
          <h2 className="mt-6 font-display text-[10vw] font-extralight leading-[1.02] sm:text-5xl md:text-[4vw]">
            Vediamo quale letto ci sta{" "}
            <span className="italic text-warm-clay">nella tua stanza.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-warm-cream/65">
            Raccontaci come usi la stanza durante il giorno. Se hai già una misura, una foto o una
            piantina, puoi condividerla per preparare il progetto da vedere in showroom a Milano.
          </p>
          <div className="mt-10 border-t border-warm-cream/15 pt-7">
            <h3 className="font-display text-3xl font-light">Preferisci parlarne?</h3>
            <p className="mt-3 text-sm font-light text-warm-cream/55">
              Puoi chiamarci o scriverci su WhatsApp anche senza misure.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href={PHONE_HREF}
                data-track-event="category_phone_click"
                data-track-location="project_form"
                className="inline-flex min-h-12 flex-1 items-center justify-center gap-3 border border-warm-cream/25 px-5 text-sm hover:border-warm-clay hover:text-warm-clay"
              >
                <Phone className="h-5 w-5" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                data-track-event="category_whatsapp_click"
                data-track-location="project_form"
                className="inline-flex min-h-12 flex-1 items-center justify-center gap-3 border border-warm-cream/25 px-5 text-sm hover:border-[#25D366] hover:text-[#25D366]"
              >
                <WhatsAppMark size={20} />
                Scrivici su WhatsApp
              </a>
            </div>
          </div>
        </div>

        <form
          data-form-integration="gravity-forms"
          onSubmit={(event) => {
            event.preventDefault();
            setNotice(
              "Richiesta non inviata: in questo prototipo il collegamento al modulo del sito non è ancora attivo. Puoi contattarci direttamente per telefono o WhatsApp.",
            );
          }}
          className="bg-warm-cream p-5 text-ink sm:p-8 lg:col-span-7 lg:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="project-name" className="text-xs font-medium">
                Nome <span className="text-warm-clay">*</span>
              </label>
              <input
                id="project-name"
                name="input_1"
                autoComplete="given-name"
                required
                className="mt-2 min-h-12 w-full border border-border bg-background px-4 text-base outline-none focus:border-warm-clay focus:ring-2 focus:ring-warm-clay/15"
              />
            </div>
            <fieldset className="sm:col-span-2">
              <legend className="text-xs font-medium">
                Come preferisci essere ricontattato? <span className="text-warm-clay">*</span>
              </legend>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {(["telefono", "email"] as const).map((method) => (
                  <label
                    key={method}
                    className={`flex min-h-12 cursor-pointer items-center justify-center border px-3 text-sm capitalize transition-colors ${contactMethod === method ? "border-ink bg-ink text-warm-cream" : "border-border bg-background hover:border-warm-clay"}`}
                  >
                    <input
                      type="radio"
                      name="input_2"
                      value={method}
                      checked={contactMethod === method}
                      onChange={() => setContactMethod(method)}
                      className="sr-only"
                    />
                    {method}
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="sm:col-span-2">
              <label htmlFor="project-contact" className="text-xs font-medium">
                {contactMethod === "telefono" ? "Numero di telefono" : "Indirizzo email"}{" "}
                <span className="text-warm-clay">*</span>
              </label>
              <input
                key={contactMethod}
                id="project-contact"
                name={contactMethod === "telefono" ? "input_3" : "input_4"}
                type={contactMethod === "telefono" ? "tel" : "email"}
                inputMode={contactMethod === "telefono" ? "tel" : "email"}
                autoComplete={contactMethod === "telefono" ? "tel" : "email"}
                required
                className="mt-2 min-h-12 w-full border border-border bg-background px-4 text-base outline-none focus:border-warm-clay focus:ring-2 focus:ring-warm-clay/15"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="project-usage" className="text-xs font-medium">
                Come vorresti usare la stanza? <span className="text-warm-clay">*</span>
              </label>
              <select
                id="project-usage"
                name="input_5"
                required
                value={usage}
                onChange={(event) => setUsage(event.target.value)}
                className="mt-2 min-h-12 w-full border border-border bg-background px-3 text-base outline-none focus:border-warm-clay focus:ring-2 focus:ring-warm-clay/15"
              >
                <option value="" disabled>
                  Scegli un’opzione
                </option>
                <option value="divano">Soggiorno di giorno, camera di notte · con divano</option>
                <option value="scrivania">Studio o lavoro · con scrivania</option>
                <option value="parete">Vorrei letto e contenimento nella stessa parete</option>
                <option value="verticale">Mi interessa un’apertura verticale</option>
                <option value="orizzontale">Mi interessa un’apertura orizzontale</option>
                <option value="consiglio">Vorrei un consiglio</option>
              </select>
            </div>
          </div>

          <details
            open={detailsOpen}
            onToggle={(event) => setDetailsOpen(event.currentTarget.open)}
            className="group mt-6 border-y border-border"
          >
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-clay">
              <span className="flex items-center gap-3">
                <Ruler className="h-5 w-5 text-warm-clay" />
                Aggiungi misure o una foto{" "}
                <span className="font-light text-muted-foreground">(facoltativo)</span>
              </span>
              <span className="text-xl font-light transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <div className="grid gap-5 pb-6 sm:grid-cols-2">
              <div>
                <label htmlFor="wall-width" className="text-xs">
                  Larghezza della parete
                </label>
                <div className="mt-2 flex items-center border border-border bg-background">
                  <input
                    id="wall-width"
                    name="input_6"
                    type="number"
                    min="0"
                    step="0.1"
                    inputMode="decimal"
                    className="min-h-12 w-full min-w-0 bg-transparent px-4 outline-none focus:border-warm-clay"
                  />
                  <span className="pr-4 text-sm text-muted-foreground">cm</span>
                </div>
              </div>
              <div>
                <label htmlFor="front-space" className="text-xs">
                  Spazio disponibile davanti
                </label>
                <div className="mt-2 flex items-center border border-border bg-background">
                  <input
                    id="front-space"
                    name="input_7"
                    type="number"
                    min="0"
                    step="0.1"
                    inputMode="decimal"
                    className="min-h-12 w-full min-w-0 bg-transparent px-4 outline-none"
                  />
                  <span className="pr-4 text-sm text-muted-foreground">cm</span>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="project-notes" className="text-xs">
                  Note sulla stanza
                </label>
                <textarea
                  id="project-notes"
                  name="input_8"
                  rows={3}
                  placeholder="Porte, finestre, radiatori o altre indicazioni utili…"
                  className="mt-2 w-full resize-y border border-border bg-background px-4 py-3 text-base outline-none focus:border-warm-clay"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="project-file" className="text-xs">
                  Foto o piantina
                </label>
                <label
                  htmlFor="project-file"
                  className="mt-2 flex min-h-16 cursor-pointer items-center gap-3 border border-dashed border-ink/30 bg-background px-4 text-sm text-muted-foreground hover:border-warm-clay"
                >
                  <FileImage className="h-5 w-5 shrink-0 text-warm-clay" />
                  <span>Scegli un’immagine o un PDF</span>
                </label>
                <input
                  id="project-file"
                  name="input_9"
                  type="file"
                  accept="image/*,.pdf"
                  className="sr-only"
                />
              </div>
            </div>
          </details>

          <label className="mt-6 flex cursor-pointer items-start gap-3 text-xs font-light leading-relaxed text-muted-foreground">
            <input
              type="checkbox"
              name="input_10"
              value="1"
              required
              className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--warm-clay)]"
            />
            <span>
              Ho letto e compreso{" "}
              <a
                href={PRIVACY_HREF}
                target="_blank"
                rel="noreferrer"
                className="text-ink underline underline-offset-2"
              >
                l’informativa sulla privacy
              </a>
              . <span className="text-warm-clay">*</span>
            </span>
          </label>
          <button
            type="submit"
            className="mt-7 inline-flex min-h-14 w-full items-center justify-center gap-4 bg-ink px-6 py-4 text-[11px] font-medium uppercase tracking-[0.18em] text-warm-cream transition-colors hover:bg-warm-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-clay focus-visible:ring-offset-2"
          >
            Richiedi il progetto
            <ArrowRight className="h-4 w-4" />
          </button>
          <p className="mt-4 text-center text-[11px] font-light leading-relaxed text-muted-foreground">
            Nessun dato tecnico è obbligatorio per iniziare. L’invio sarà collegato a Gravity Forms
            in produzione.
          </p>
          {notice && (
            <p
              role="status"
              className="mt-4 border border-warm-clay/40 bg-warm-clay/10 p-4 text-sm leading-relaxed text-ink"
            >
              {notice}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Showroom() {
  return (
    <section id="showroom" className="scroll-mt-36 px-6 py-16 md:scroll-mt-40 md:px-16 md:py-28">
      <div className="mx-auto grid max-w-[1500px] overflow-hidden border border-border md:grid-cols-2">
        <img
          src={showroomImage.url}
          alt="Interno dello showroom Artigiani in Città dedicato agli arredi salvaspazio"
          loading="lazy"
          className="h-full min-h-[300px] w-full object-cover md:min-h-[520px]"
        />
        <div className="flex flex-col justify-center bg-warm-cream p-7 md:p-12 lg:p-16">
          <div className="text-eyebrow text-warm-clay">— 05 Showroom Milano</div>
          <h2 className="mt-5 font-display text-4xl font-light leading-tight md:text-5xl">
            Porta la tua stanza.
            <br />
            <span className="italic">Ne parliamo dal vivo.</span>
          </h2>
          <p className="mt-5 text-base font-light leading-relaxed text-muted-foreground">
            In showroom possiamo discutere il progetto partendo dalle tue fotografie e dalle misure,
            confrontando la configurazione più adatta al modo in cui vivi la stanza.
          </p>
          <div className="mt-7 grid gap-5 border-y border-border py-6 text-sm sm:grid-cols-2">
            <div>
              <span className="text-eyebrow text-muted-foreground">Dove</span>
              <p className="mt-2">
                Viale Italia 10
                <br />
                20094 Corsico (MI)
              </p>
            </div>
            <div>
              <span className="text-eyebrow text-muted-foreground">Orari</span>
              <p className="mt-2">
                Lun–Sab · 9:30–12:30
                <br />
                14:00–19:30
                <br />
                <span className="text-muted-foreground">Domenica chiuso</span>
              </p>
            </div>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CategoryCta href={DIRECTIONS_HREF} tone="dark" track="category_directions_click">
              <MapPin className="mr-1 inline h-4 w-4" />
              Indicazioni stradali
            </CategoryCta>
            <CategoryCta href="#progetto" tone="outline">
              Prepara la visita
            </CategoryCta>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section
      id="faq"
      className="scroll-mt-36 border-t border-border px-6 py-16 md:scroll-mt-40 md:px-16 md:py-28"
    >
      <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-4">
          <div className="text-eyebrow text-muted-foreground">— 06 Domande frequenti</div>
          <h2 className="mt-5 font-display text-5xl font-extralight leading-[1.02]">
            Prima di <span className="italic">scegliere.</span>
          </h2>
          <p className="mt-5 text-sm font-light leading-relaxed text-muted-foreground">
            Risposte concrete per arrivare preparato al primo confronto. Per il tuo caso specifico
            partiamo sempre dalla stanza.
          </p>
        </div>
        <Accordion type="single" collapsible className="border-t border-ink/20 md:col-span-8">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.q} value={`faq-${index}`} className="border-b border-ink/20">
              <AccordionTrigger className="py-6 text-left font-display text-2xl font-light leading-tight hover:text-warm-clay hover:no-underline md:text-3xl">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="max-w-3xl pb-7 text-base font-light leading-relaxed text-muted-foreground">
                {faq.a}
                {index === 2 && (
                  <span className="mt-4 flex flex-wrap gap-4">
                    <a
                      href={configurations[0].href}
                      className="inline-flex items-center gap-2 text-sm text-ink underline decoration-warm-clay underline-offset-4"
                    >
                      Letti con divano
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={configurations[1].href}
                      className="inline-flex items-center gap-2 text-sm text-ink underline decoration-warm-clay underline-offset-4"
                    >
                      Letti con scrivania
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </span>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="mx-auto mt-14 flex max-w-[1400px] flex-col items-start justify-between gap-6 bg-warm-cream p-7 md:flex-row md:items-center md:p-10">
        <div>
          <h3 className="font-display text-3xl font-light">Hai una stanza diversa dal solito?</h3>
          <p className="mt-2 text-sm font-light text-muted-foreground">
            È proprio da lì che inizia un progetto su misura.
          </p>
        </div>
        <CategoryCta href="#progetto" tone="light" className="shrink-0">
          Raccontacela
        </CategoryCta>
      </div>
    </section>
  );
}

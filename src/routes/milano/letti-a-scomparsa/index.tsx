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
import { WallBedHero } from "@/components/wall-bed-hero";
import { WallBedCatalog } from "@/components/wall-bed-catalog";
import { selectWallBedSubcategory } from "@/data/site-categories";
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
        <WallBedHero />
        <DayUse />
        <ProjectForm />
        <WallBedCatalog />
        <Measurements />
        <Showroom />
        <Faq />
      </main>
      <CategoryFooter />
      <CategoryMobileBar />
    </div>
  );
}

function DayUse() {
  const options = [
    {
      label: "Divano",
      text: "Un living con una seduta vera, che di notte diventa camera.",
      slug: "letti-a-scomparsa-con-divano",
      image: `${SITE}/wp-content/uploads/2024/09/letti-a-scomparsa-con-divano.jpg`,
    },
    {
      label: "Scrivania",
      text: "Lavori o studi nella stessa stanza in cui dormi.",
      slug: "letti-a-scomparsa-con-scrivania",
      image: `${SITE}/wp-content/uploads/2024/09/letti-a-scomparsa-con-scrivania.jpg`,
    },
    {
      label: "Tavolo",
      text: "Pranzi e cene sulla parete che la sera si apre.",
      slug: "letti-a-scomparsa-con-tavolo",
      image: `${SITE}/wp-content/uploads/2024/09/letti-a-scomparsa-con-tavolo.jpeg`,
    },
    {
      label: "Libreria e armadio",
      text: "Contenimento e libri attorno al letto, centro stanza libero.",
      slug: "armadio-con-letto-a-scomparsa",
      image: `${SITE}/wp-content/uploads/2022/01/armadio-con-letto-a-scomparsa-vedano-al-lambro-componibile-su-misura-con-armadi-librerie-scrivania-t.jpg`,
    },
  ];
  return (
    <section
      id="configurazioni"
      className="scroll-mt-36 px-6 py-16 md:scroll-mt-40 md:px-16 md:py-28"
    >
      <div className="mx-auto max-w-[1600px]">
        <SectionHeading
          index="01"
          eyebrow="La scelta parte da qui"
          title="Di giorno, cosa ci farai?"
          text="Scegli come userai la stanza quando il letto è chiuso: ti mostriamo subito i modelli giusti."
        />
        <div className="mt-10 grid grid-cols-2 gap-3 md:mt-14 md:grid-cols-4 md:gap-6">
          {options.map((o, i) => (
            <button
              key={o.slug}
              type="button"
              onClick={() => selectWallBedSubcategory(o.slug)}
              className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden bg-ink text-left text-warm-cream md:aspect-[4/5]"
            >
              <img
                src={o.image}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
              <span className="relative p-4 md:p-7">
                <span className="block text-[10px] uppercase tracking-[0.2em] text-warm-cream/60">
                  0{i + 1}
                </span>
                <span className="mt-2 block font-display text-2xl font-light md:text-4xl">
                  {o.label}
                </span>
                <span className="mt-2 hidden text-sm font-light leading-relaxed text-warm-cream/75 md:block">
                  {o.text}
                </span>
                <span className="mt-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.16em]">
                  Vedi i modelli{" "}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </span>
            </button>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => selectWallBedSubcategory("tutti")}
            className="inline-flex items-center gap-3 bg-ink px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-warm-cream transition-colors hover:bg-warm-clay"
          >
            Visualizza tutti i modelli <ArrowRight className="h-4 w-4" />
          </button>
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
          index="03"
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
          <div className="text-eyebrow text-warm-clay">— 02 Il tuo progetto</div>
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
          <div className="text-eyebrow text-warm-clay">— 04 Showroom Milano</div>
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
          <div className="text-eyebrow text-muted-foreground">— 05 Domande frequenti</div>
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

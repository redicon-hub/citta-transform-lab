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
import { WallBedHero, type HeroCopy } from "@/components/wall-bed-hero";
import { WallBedCatalog } from "@/components/wall-bed-catalog";
import { selectWallBedSubcategory, type WallBedSubcategory } from "@/data/site-categories";
import sofaSubcategories from "@/data/divani-letto-subcategories.json";

const sofaSubs = sofaSubcategories as WallBedSubcategory[];
const sofaCategoryUrl = (slug: string) => `${SITE}/milano/divani-letto/${slug}/`;
const SOFA_SELECTION: [string, string][] = sofaSubs.map((s) => [s.slug, s.name]);
import showroomImage from "@/assets/showroom-arredo-salvaspazio-600mq-corsico-milano.webp.asset.json";

const SITE = "https://artigianiincitta.it";
const PAGE_PATH = "/milano/divani-letto/";
const PAGE_URL = `https://artigianiincitta.red-icon.dev${PAGE_PATH}`;
const HERO_IMAGE = `${SITE}/wp-content/uploads/2025/11/Foley-divano-letto-materasso-alto-chiuso.jpg`;
const HERO_OPEN = `${SITE}/wp-content/uploads/2025/11/Foley-divano-letto-materasso-alto-aperto.jpg`;

const configurations = [
  { href: `${SITE}${PAGE_PATH}divani-letto-con-materasso-alto/` },
  { href: `${SITE}${PAGE_PATH}divani-letto-con-letto-estraibile/` },
];

const faqs = [
  {
    q: "Un divano letto si può usare tutte le notti?",
    a: "Sì, se nasce per questo. I nostri modelli per uso quotidiano montano reti a doghe ortopediche e materassi alti fino a 30 cm, gli stessi spessori di un letto tradizionale. Il meccanismo si apre in pochi secondi e il materasso resta nel divano, senza smontare cuscini.",
  },
  {
    q: "Quanto spazio serve davanti al divano per aprirlo?",
    a: "Dipende dal meccanismo e dalla misura del materasso: in genere servono circa 2 metri dallo schienale al fondo del letto aperto. Indicaci la profondità libera della stanza e ti diciamo quali modelli ci stanno davvero.",
  },
  {
    q: "Ho bisogno di due letti: quali soluzioni ci sono?",
    a: "Puoi scegliere un divano letto con secondo letto estraibile, un modello gemellare con due letti singoli affiancabili oppure un divano letto a castello. Le pagine dedicate mostrano le configurazioni e i rispettivi modelli.",
  },
  {
    q: "Posso scegliere misure e tessuti?",
    a: "Sì. Larghezza, braccioli, profondità della seduta, materasso e rivestimento si scelgono in showroom tra centinaia di tessuti, anche sfoderabili e lavabili. Il prezzo pubblicato si riferisce alla configurazione mostrata.",
  },
  {
    q: "Fate consegna e montaggio a Milano?",
    a: "Sì, consegniamo e montiamo a Milano e provincia. Se il divano deve passare da porte o scale strette, verifichiamo prima le misure di accesso.",
  },
];

type Search = { soluzione?: string; dettagli?: string };
const usageValues = ["quotidiano", "ospiti", "due-letti", "relax", "consiglio"];

export const Route = createFileRoute("/milano/divani-letto/")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    ...(typeof search.soluzione === "string" ? { soluzione: search.soluzione } : {}),
    ...(typeof search.dettagli === "string" ? { dettagli: search.dettagli } : {}),
  }),
  head: () => ({
    meta: [
      { title: "Divani letto a Milano con materasso alto | Artigiani in Città" },
      {
        name: "description",
        content:
          "Divani letto su misura a Milano per dormire ogni notte: materassi alti fino a 30 cm, secondo letto estraibile, modelli relax ed elettrici. Prezzi e progetto in showroom.",
      },
      { property: "og:title", content: "Divani letto a Milano | Artigiani in Città" },
      {
        property: "og:description",
        content:
          "Un divano vero di giorno, un letto vero di notte. Scegli il modello e provalo nel nostro showroom.",
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
            { "@type": "ListItem", position: 3, name: "Divani letto", item: PAGE_URL },
          ],
        }),
      },
    ],
  }),
  component: SofaBedsPage,
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

const SOFA_HERO: HeroCopy = {
  closed: HERO_IMAGE,
  open: HERO_OPEN,
  closedAlt: "Divano letto Foley chiuso in tessuto giallo: di giorno un divano",
  openAlt: "Lo stesso divano letto Foley aperto con materasso alto",
  crumb: "Divani letto",
  eyebrow: "Divani letto su misura · Milano",
  day: "Un divano vero.",
  night: "Un letto vero.",
  text: "Siedi bene di giorno, dormi bene di notte. Materassi alti fino a 30 cm, reti a doghe e meccanismi che si aprono in un gesto, nella misura e nel tessuto che scegli tu.",
  secondary: { href: "#configurazioni", label: "Come lo userai?" },
  caption: "Modello Foley · materasso alto",
};

function SofaBedsPage() {
  return (
    <div className="bg-background pb-[calc(76px+env(safe-area-inset-bottom))] text-foreground md:pb-0">
      <CategoryHeader categoryLabel="Divani letto" />
      <main className="pt-[133px] md:pt-[129px]">
        <WallBedHero copy={SOFA_HERO} />
        <DayUse />
        <ProjectForm />
        <WallBedCatalog
          subcategories={sofaSubs}
          selection={SOFA_SELECTION}
          defaultSlug="divani-letto-con-materasso-alto"
          categoryUrl={sofaCategoryUrl}
          allName="Tutti i divani"
          title="Scegli il tuo divano letto."
          tabsLabel="Sottocategorie dei divani letto"
        />
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
      label: "Ogni notte",
      text: "Materasso alto e rete a doghe: è il tuo letto principale.",
      slug: "divani-letto-con-materasso-alto",
      image: `${SITE}/wp-content/uploads/2025/11/Foley-divano-letto-materasso-alto-aperto.jpg`,
    },
    {
      label: "Per gli ospiti",
      text: "Comodissimo da seduto, pronto in un attimo quando serve.",
      slug: "divani-letto-comodissimi",
      image: `${SITE}/wp-content/uploads/2026/07/divano-letto-comodo-biosfera-aperto-materasso.jpg`,
    },
    {
      label: "Due letti",
      text: "Secondo letto estraibile, gemellare o a castello.",
      slug: "divani-letto-con-letto-estraibile",
      image: `${SITE}/wp-content/uploads/2026/03/lunevia-divano-doppio-letto-materassi-h-25-cm-apertura-secondo-letto.jpg`,
    },
    {
      label: "Relax",
      text: "Schienali e poggiapiedi reclinabili, anche motorizzati.",
      slug: "divani-letto-meccanismo-relax",
      image: `${SITE}/wp-content/uploads/2025/02/Divano-letto-relax-integrato-motorizzato-Duo-Comfort-H-14-cm-con-schienali-reclinabili-in-movimento-foto-immagine-a-notte-con-materasso-e-alzapiedi-aperti.jpg`,
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
          title="Come lo userai?"
          text="Dimmi quanto spesso ci dormirai e per chi: ti mostriamo subito i modelli giusti."
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
      "Larghezza della parete",
      "Misura lo spazio libero dove appoggerai lo schienale, braccioli compresi.",
    ],
    [
      "02",
      "Profondità con il letto aperto",
      "Di solito servono circa 2 metri dallo schienale: lascia anche un passaggio.",
    ],
    [
      "03",
      "Porte, scale e ascensore",
      "Verifichiamo che il divano passi fino alla stanza, senza sorprese il giorno della consegna.",
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
          title="Ci sta aperto nella tua stanza?"
          text="Dipende da meccanismo e materasso. Bastano tre misure per scegliere il modello giusto."
        />
        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-2 md:gap-14">
          <div>
            <img
              src={`${SITE}/wp-content/uploads/2026/10/divano-letto-freydan-aperto-ambientato-boucle-tortora-braccioli-sottili.webp`}
              alt="Divano letto Freydan aperto in bouclé tortora in un soggiorno"
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
            Troviamo il divano letto{" "}
            <span className="italic text-warm-clay">giusto per te.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-warm-cream/65">
            Raccontaci quanto spesso ci dormirai e dove andrà. Se hai già una misura, una foto o una
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
                <option value="quotidiano">Ci dormirò tutte le notti</option>
                <option value="ospiti">Mi serve per gli ospiti</option>
                <option value="due-letti">Mi servono due letti</option>
                <option value="relax">Vorrei anche il relax</option>
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
          alt="Interno dello showroom Artigiani in Città con i divani letto in esposizione"
          loading="lazy"
          className="h-full min-h-[300px] w-full object-cover md:min-h-[520px]"
        />
        <div className="flex flex-col justify-center bg-warm-cream p-7 md:p-12 lg:p-16">
          <div className="text-eyebrow text-warm-clay">— 04 Showroom Milano</div>
          <h2 className="mt-5 font-display text-4xl font-light leading-tight md:text-5xl">
            Provali seduto e sdraiato.
            <br />
            <span className="italic">Ne parliamo dal vivo.</span>
          </h2>
          <p className="mt-5 text-base font-light leading-relaxed text-muted-foreground">
            In showroom apri e chiudi i meccanismi, provi i materassi e scegli il tessuto,
            partendo dalle misure della tua stanza.
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
                      Divani letto con materasso alto
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={configurations[1].href}
                      className="inline-flex items-center gap-2 text-sm text-ink underline decoration-warm-clay underline-offset-4"
                    >
                      Con secondo letto estraibile
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

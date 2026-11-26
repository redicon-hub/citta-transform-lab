import subcategories from "./letti-subcategories.json";

const SITE = "https://artigianiincitta.it";

export type WallBedProduct = {
  name: string;
  url: string;
  image: string | null;
  price: number | null;
  regular: number | null;
};
export type WallBedSubcategory = {
  slug: string;
  name: string;
  count: number;
  products: WallBedProduct[];
};

export const wallBedSubcategories = subcategories as WallBedSubcategory[];

export const wallBedCategoryUrl = (slug: string) => `${SITE}/milano/letti-a-scomparsa/${slug}/`;

/** Event used by menu and hero to pick a subcategory in the on-page catalog. */
export const SELECT_SUBCATEGORY_EVENT = "wallbed:select-subcategory";
export function selectWallBedSubcategory(slug: string) {
  window.dispatchEvent(new CustomEvent(SELECT_SUBCATEGORY_EVENT, { detail: slug }));
  document.getElementById("modelli")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export const megaMenuGroups: { title: string; href: string; items: [string, string][] }[] = [
  {
    title: "Divani letto",
    href: `${SITE}/milano/divani-letto/`,
    items: [
      ["Divani letto con materasso alto", `${SITE}/milano/divani-letto/divani-letto-con-materasso-alto/`],
      ["Divani letto comodissimi", `${SITE}/milano/divani-letto/divani-letto-comodissimi/`],
      ["Con secondo letto estraibile", `${SITE}/milano/divani-letto/divani-letto-con-letto-estraibile/`],
      ["Divani letto a castello", `${SITE}/milano/divani-letto/divani-letto-a-castello/`],
      ["Divani letto gemellari", `${SITE}/milano/divani-letto/divani-letto-gemellare/`],
      ["Divani letto elettrici", `${SITE}/milano/divani-letto/divani-letto-elettrico/`],
      ["Divani relax", `${SITE}/milano/divani-letto/divani-relax/`],
      ["Divani componibili", `${SITE}/milano/divani-letto/divani-componibili/`],
    ],
  },
  {
    title: "Cucine",
    href: `${SITE}/milano/cucine/`,
    items: [
      ["Cucina a scomparsa", `${SITE}/milano/cucine/cucina-a-scomparsa/`],
      ["Mini cucina monoblocco", `${SITE}/milano/cucine/mini-cucina-monoblocco/`],
      ["Cucina su misura", `${SITE}/milano/cucine/cucina-su-misura/`],
      ["Cucina moderna", `${SITE}/milano/cucine/cucina-moderna/`],
      ["Cucina lineare", `${SITE}/milano/cucine/cucina-lineare/`],
      ["Cucina classica", `${SITE}/milano/cucine/cucina-classica/`],
    ],
  },
  {
    title: "Zona notte",
    href: `${SITE}/milano/zona-notte/`,
    items: [
      ["Camerette bambini", `${SITE}/milano/zona-notte/camerette-bambini/`],
      ["Armadi su misura", `${SITE}/milano/zona-notte/armadi-su-misura/`],
      ["Letti imbottiti", `${SITE}/milano/zona-notte/letti-imbottiti/`],
      ["Letti in legno", `${SITE}/milano/zona-notte/letti-in-legno/`],
      ["Materassi e cuscini", `${SITE}/milano/zona-notte/materassi-e-cuscini/`],
    ],
  },
  {
    title: "Altri ambienti",
    href: `${SITE}/shop/`,
    items: [
      ["Tavoli trasformabili", `${SITE}/milano/tavoli-trasformabili/`],
      ["Consolle allungabili", `${SITE}/milano/tavoli-trasformabili/tavolo-trasformabile-consolle-allungabile/`],
      ["Bagni e lavanderie", `${SITE}/milano/bagni-e-lavanderie/`],
      ["Shop online", `${SITE}/shop/`],
    ],
  },
];

export type Colourway = "dark" | "light";
export type AdFormat = "board" | "film";

export type Ad = {
  id: string;
  number: string;
  title: string;
  colourway: Colourway;
  format: AdFormat;
  src: string;
  poster?: string;
  original: string;
  spec: string;
  note: string;
  duration?: string;
};

export type BoardPair = {
  number: string;
  title: string;
  slug: string;
  note: string;
  dark: Ad;
  light: Ad;
};

function board(
  number: string,
  slug: string,
  title: string,
  colourway: Colourway,
  note: string,
): Ad {
  const id = `${slug}-${colourway}`;
  return {
    id,
    number,
    title,
    colourway,
    format: "board",
    src: `/ads/static/${colourway}/${slug}.jpg`,
    original: `/ads/originals/${colourway}/${slug}.png`,
    spec: "1080 × 1350 · 4:5 feed",
    note,
  };
}

function pair(
  number: string,
  slug: string,
  title: string,
  note: string,
): BoardPair {
  return {
    number,
    title,
    slug,
    note,
    dark: board(number, slug, title, "dark", note),
    light: board(number, slug, title, "light", note),
  };
}

export const boardPairs: BoardPair[] = [
  pair("01", "01-giant-type", "Giant Type Takeover", "Type is the ad. The car comes out from behind it."),
  pair("02", "02-bow", "Car Wrapped in a Bow", "Gift energy. The tag says it came from your quote."),
  pair("03", "03-scratch-ticket", "Scratch Ticket", "Instant win feel. Four minutes, 20+ insurers, one prize."),
  pair("04", "04-keys", "Keys Close Up", "One object. These could be yours."),
  pair("05", "05-billboard", "Billboard in the Wild", "Seen from a car window. The prize, in the world."),
  pair("06", "06-breaking-news", "Breaking News Banner", "Prize as a headline. Ticker, lower third, showroom."),
];

export const films: Ad[] = [
  {
    id: "film-reel-reveal",
    number: "Video 1",
    title: "Reel Reveal",
    colourway: "dark",
    format: "film",
    src: "/ads/film/reel-reveal.mp4",
    poster: "/ads/film/reel-reveal.jpg",
    original: "/ads/film/reel-reveal.mp4",
    spec: "1080 × 1920 · 9:16 · 12s",
    duration: "12s",
    note: "One quote. One shot. Three slots land on the car.",
  },
  {
    id: "film-clock-dark",
    number: "Video 2",
    title: "The 4 Minute Clock",
    colourway: "dark",
    format: "film",
    src: "/ads/film/clock-dark.mp4",
    poster: "/ads/film/clock-dark.jpg",
    original: "/ads/film/clock-dark.mp4",
    spec: "1080 × 1920 · 9:16 · 12s",
    duration: "12s",
    note: "Quotes land while the clock runs out. 4 minutes well spent.",
  },
  {
    id: "film-clock-light",
    number: "Video 3",
    title: "The 4 Minute Clock",
    colourway: "light",
    format: "film",
    src: "/ads/film/clock-light.mp4",
    poster: "/ads/film/clock-light.jpg",
    original: "/ads/film/clock-light.mp4",
    spec: "1080 × 1920 · 9:16 · 12s",
    duration: "12s",
    note: "Same clock film, light colourway.",
  },
  {
    id: "film-ad-film",
    number: "Video 4",
    title: "Win a Free Car",
    colourway: "dark",
    format: "film",
    src: "/ads/film/win-a-free-car.mp4",
    poster: "/ads/film/win-a-free-car.jpg",
    original: "/ads/film/win-a-free-car.mp4",
    spec: "1080 × 1920 · 9:16 · 12s",
    duration: "12s",
    note: "Kinetic type. WIN. FREE. CAR. Then the offer.",
  },
];

export const ads: Ad[] = [...boardPairs.flatMap((p) => [p.dark, p.light]), ...films];

export const heroFilm = films.find((f) => f.id === "film-ad-film") ?? films[0];

export function adById(id: string | undefined): Ad | undefined {
  if (!id) return undefined;
  return ads.find((a) => a.id === id);
}

export function pairBySlug(slug: string): BoardPair | undefined {
  return boardPairs.find((p) => p.slug === slug);
}

export function filmById(id: string): Ad | undefined {
  return films.find((f) => f.id === id);
}

export const quoteUrl = "https://youset.ca/win";

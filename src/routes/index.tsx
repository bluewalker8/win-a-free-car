import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Heart, Volume2, VolumeX } from "lucide-react";
import { AutoVideo } from "@/components/auto-video";
import { AdCard } from "@/components/ad-card";
import { Lightbox } from "@/components/lightbox";
import { SiteNav } from "@/components/site-nav";
import {
  ads,
  filmById,
  heroFilm,
  pairBySlug,
  adById,
  type BoardPair,
} from "@/lib/ads";
import {
  concepts,
  presenter,
  questionFour,
  questionOne,
  questionThree,
  questionTwo,
} from "@/lib/research";

type Search = { ad?: string };

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    ad: typeof search.ad === "string" ? search.ad : undefined,
  }),
  component: Home,
});

function Home() {
  const { ad: adId } = Route.useSearch();
  const navigate = Route.useNavigate();
  const selected = adById(adId);

  function openAd(id: string) {
    void navigate({ search: { ad: id } });
  }

  function closeAd() {
    void navigate({ search: {} });
  }

  return (
    <div id="top" className="min-h-dvh bg-ys-white text-ys-ink">
      <SiteNav />
      <Hero onOpen={openAd} />
      <QuestionOne />
      <QuestionTwo onOpen={openAd} />
      <QuestionThree />
      <QuestionFour />
      <footer className="border-t border-ys-line bg-ys-white">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <p className="text-sm text-ys-muted">{presenter.name}</p>
        </div>
      </footer>
      {selected ? (
        <Lightbox ad={selected} ads={ads} onClose={closeAd} onSelect={openAd} />
      ) : null}
    </div>
  );
}

function Hero({ onOpen }: { onOpen: (id: string) => void }) {
  return (
    <section className="border-b border-ys-line">
      <div className="mx-auto grid max-w-6xl items-end gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-2 lg:py-16">
        <div>
          <p className="hero-in text-xs font-semibold uppercase tracking-kicker text-ys-blue">
            {presenter.assignment}
          </p>
          <p className="hero-in mt-6 text-xl font-semibold sm:text-2xl">{presenter.name}</p>
          <p className="hero-in mt-1 text-sm text-ys-muted">{presenter.role}</p>
          <h1 className="hero-in font-display mt-4 text-6xl font-extrabold uppercase leading-hero sm:text-8xl lg:text-9xl">
            Win a
            <br />
            Free Car
          </h1>
        </div>

        <button
          type="button"
          onClick={() => onOpen(heroFilm.id)}
          className="hero-in group relative mx-auto w-full max-w-xs lg:justify-self-end"
          style={{ animationDelay: "100ms" }}
          aria-label={`Play ${heroFilm.title}`}
        >
          <div className="aspect-film overflow-hidden rounded-xl bg-ys-paper shadow-[var(--shadow-border)]">
            <AutoVideo
              className="h-full w-full object-cover"
              poster={heroFilm.poster}
              src={heroFilm.src}
            />
          </div>
        </button>
      </div>
    </section>
  );
}

function QuestionHead({
  number,
  heading,
  prompt,
}: {
  number: string;
  heading: string;
  prompt: string;
}) {
  return (
    <header className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-kicker text-ys-blue">
        Question {number}
      </p>
      <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl">{heading}</h2>
      <p className="mt-3 text-sm leading-relaxed text-ys-muted sm:text-base">{prompt}</p>
    </header>
  );
}

function QuestionOne() {
  return (
    <section id="q1" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
      <QuestionHead
        number={questionOne.number}
        heading={questionOne.heading}
        prompt={questionOne.prompt}
      />
      <div className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed sm:text-lg">
        {questionOne.answer.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </section>
  );
}

function QuestionTwo({ onOpen }: { onOpen: (id: string) => void }) {
  return (
    <section id="q2" className="border-t border-ys-line">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <QuestionHead
          number={questionTwo.number}
          heading={questionTwo.heading}
          prompt={questionTwo.prompt}
        />

        <div className="mt-14">
          <p className="text-xs font-semibold uppercase tracking-kicker text-ys-blue">
            {questionTwo.a.letter}
          </p>
          <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{questionTwo.a.heading}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ys-muted sm:text-base">
            {questionTwo.a.prompt}
          </p>
        </div>

        <div className="mt-10 space-y-16">
          {concepts.map((concept) => (
            <ConceptBlock key={concept.id} concept={concept} onOpen={onOpen} />
          ))}
        </div>

        <div className="mt-20 border-t border-ys-line pt-14">
          <p className="text-xs font-semibold uppercase tracking-kicker text-ys-blue">
            {questionTwo.b.letter}
          </p>
          <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{questionTwo.b.heading}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ys-muted sm:text-base">
            {questionTwo.b.prompt}
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {concepts.map((concept) => (
              <CopyCard
                key={concept.id}
                name={concept.name}
                primary={concept.meta.primary}
                headline={concept.meta.headline}
              />
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-ys-line pt-14">
          <p className="text-xs font-semibold uppercase tracking-kicker text-ys-blue">
            {questionTwo.c.letter}
          </p>
          <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{questionTwo.c.heading}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ys-muted sm:text-base">
            {questionTwo.c.prompt}
          </p>
          <p className="mt-6 text-lg font-semibold">{questionTwo.c.pick}</p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ys-muted sm:text-lg">
            {questionTwo.c.answer}
          </p>
        </div>
      </div>
    </section>
  );
}

function ConceptBlock({
  concept,
  onOpen,
}: {
  concept: (typeof concepts)[number];
  onOpen: (id: string) => void;
}) {
  const pairs = concept.boardSlugs
    .map((slug) => pairBySlug(slug))
    .filter((p): p is BoardPair => Boolean(p));
  const film = filmById(concept.filmId);
  const filmB = concept.filmIdB ? filmById(concept.filmIdB) : undefined;

  return (
    <article>
      <p className="text-xs font-semibold uppercase tracking-kicker text-ys-muted">
        Concept {concept.number}
      </p>
      <h4 className="font-display mt-2 text-2xl font-bold sm:text-3xl">{concept.name}</h4>
      <p className="mt-3 max-w-2xl text-base leading-relaxed sm:text-lg">{concept.visual}</p>
      <p className="mt-2 max-w-2xl text-sm font-medium text-ys-blue">{concept.stop}</p>

      <div className="mt-8 space-y-10">
        {pairs.map((pair) => (
          <BoardPairRow key={pair.slug} pair={pair} onOpen={onOpen} />
        ))}
      </div>

      {film ? (
        <div className="mt-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-kicker text-ys-muted">
            Motion
          </p>
          <div className={filmB ? "grid grid-cols-2 gap-3 sm:max-w-md sm:gap-5" : "max-w-xs"}>
            <AdCard ad={film} onOpen={onOpen} fill />
            {filmB ? <AdCard ad={filmB} onOpen={onOpen} fill /> : null}
          </div>
        </div>
      ) : null}
    </article>
  );
}

function BoardPairRow({
  pair,
  onOpen,
}: {
  pair: BoardPair;
  onOpen: (id: string) => void;
}) {
  return (
    <div>
      <h5 className="text-base font-semibold sm:text-lg">{pair.title}</h5>
      <p className="mt-1 max-w-xl text-sm text-ys-muted">{pair.note}</p>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-5">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-kicker text-ys-muted">Blue</p>
          <AdCard ad={pair.dark} onOpen={onOpen} delayMs={40} fill />
        </div>
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-kicker text-ys-muted">White</p>
          <AdCard ad={pair.light} onOpen={onOpen} delayMs={80} fill />
        </div>
      </div>
    </div>
  );
}

function CopyCard({
  name,
  primary,
  headline,
}: {
  name: string;
  primary: string;
  headline: string;
}) {
  return (
    <div className="rounded-xl bg-ys-paper p-5 shadow-[var(--shadow-border)] sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-kicker text-ys-blue">{name}</p>
      <p className="mt-5 text-xs font-semibold uppercase tracking-kicker text-ys-muted">
        Primary text
      </p>
      <p className="mt-2 whitespace-pre-line text-sm leading-relaxed">{primary}</p>
      <p className="mt-5 text-xs font-semibold uppercase tracking-kicker text-ys-muted">Headline</p>
      <p className="mt-2 text-base font-semibold">{headline}</p>
    </div>
  );
}

function QuestionThree() {
  return (
    <section id="q3" className="border-t border-ys-line">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <QuestionHead
          number={questionThree.number}
          heading={questionThree.heading}
          prompt={questionThree.prompt}
        />

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
          <div className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-kicker text-ys-blue">
              Creator UGC
            </p>
            <p className="mt-3 text-base leading-relaxed sm:text-lg">{questionThree.creatorNote}</p>
            <p className="mt-3 text-sm text-ys-muted">{questionThree.followers} TikTok followers</p>
          </div>
          <PhoneSpot
            likes={questionThree.likes}
            src={questionThree.clip.src}
            poster={questionThree.clip.poster}
          />
        </div>

        <div className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-kicker text-ys-blue">Hooks</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {questionThree.hooks.map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-ys-paper p-5 shadow-[var(--shadow-border)] sm:p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-kicker text-ys-muted">
                  {item.title}
                </p>
                <p className="mt-3 text-base font-semibold leading-relaxed">“{item.hook}”</p>
                <p className="mt-3 text-sm leading-relaxed text-ys-muted">{item.piece}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-kicker text-ys-blue">Skit ideas</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {questionThree.skits.map((skit) => (
              <div key={skit.title}>
                <p className="text-base font-semibold">{skit.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ys-muted">{skit.idea}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneSpot({
  likes,
  src,
  poster,
}: {
  likes: string;
  src: string;
  poster: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  function toggleSound() {
    const video = videoRef.current;
    const nextMuted = !muted;
    setMuted(nextMuted);
    if (video) {
      if (!nextMuted) video.currentTime = 0;
      void video.play();
    }
  }

  return (
    <div className="mx-auto w-full max-w-xs lg:justify-self-end">
      <button
        type="button"
        onClick={toggleSound}
        className="block w-full rounded-2xl bg-ys-ink p-2 text-left shadow-[var(--shadow-card)]"
        aria-label={muted ? "Play with sound" : "Mute"}
      >
        <div className="relative aspect-film overflow-hidden rounded-xl bg-ys-navy">
          <AutoVideo
            videoRef={videoRef}
            className="h-full w-full object-cover"
            poster={poster}
            src={src}
            muted={muted}
            loop={muted}
          />
          {muted ? (
            <span className="absolute inset-x-4 top-1/2 flex -translate-y-1/2 flex-col items-center gap-2">
              <span className="inline-flex size-14 items-center justify-center rounded-full bg-ys-ink/70 text-ys-white">
                <VolumeX className="size-6" />
              </span>
              <span className="rounded-full bg-ys-ink/70 px-3 py-1 text-xs font-semibold uppercase tracking-kicker text-ys-white">
                Tap for sound
              </span>
            </span>
          ) : (
            <span className="absolute left-3 top-3 inline-flex size-10 items-center justify-center rounded-full bg-ys-ink/70 text-ys-white">
              <Volume2 className="size-4" />
            </span>
          )}
          <span className="absolute bottom-4 right-3 flex flex-col items-center gap-1 text-ys-white">
            <Heart className="size-7 fill-ys-white" />
            <span className="text-xs font-semibold">{likes}</span>
          </span>
        </div>
      </button>
    </div>
  );
}

function QuestionFour() {
  return (
    <section id="q4" className="border-t border-ys-line">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <QuestionHead
          number={questionFour.number}
          heading={questionFour.heading}
          prompt={questionFour.prompt}
        />
        <p className="mt-8 max-w-2xl text-base leading-relaxed sm:text-lg">{questionFour.answer}</p>
      </div>
    </section>
  );
}


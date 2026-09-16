import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Check, ChevronLeft, ChevronRight, Download, Link2, X } from "lucide-react";
import type { Ad } from "@/lib/ads";

type Props = {
  ad: Ad;
  ads: Ad[];
  onClose: () => void;
  onSelect: (id: string) => void;
};

export function Lightbox({ ad, ads, onClose, onSelect }: Props) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const filmRef = useRef<HTMLVideoElement>(null);
  const index = ads.findIndex((item) => item.id === ad.id);
  const prev = index > 0 ? ads[index - 1] : ads[ads.length - 1];
  const next = index >= 0 && index < ads.length - 1 ? ads[index + 1] : ads[0];
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const film = filmRef.current;
    if (film) void film.play().catch(() => {});
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [ad.id]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && prev) onSelect(prev.id);
      if (e.key === "ArrowRight" && next) onSelect(next.id);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onSelect, prev, next]);

  async function copyLink() {
    const url = new URL(window.location.href);
    url.searchParams.set("ad", ad.id);
    await navigator.clipboard.writeText(url.toString());
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  if (!mounted) return null;

  const isFilm = ad.format === "film";

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-ys-white"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div className="absolute inset-x-0 top-0 z-20 flex items-center gap-3 px-3 py-3 sm:px-5">
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-semibold uppercase tracking-kicker text-ys-blue">
            {ad.number} · {ad.colourway}
          </p>
          <h2 id={titleId} className="font-display truncate text-base font-bold sm:text-lg">
            {ad.title}
          </h2>
        </div>
        <a
          href={ad.original}
          download
          className="inline-flex size-11 items-center justify-center rounded-full bg-ys-lime text-ys-ink transition-transform duration-150 ease-out hover:brightness-105 active:scale-[0.96]"
          aria-label="Download"
        >
          <Download className="size-4" />
        </a>
        <button
          type="button"
          onClick={() => void copyLink()}
          className="inline-flex size-11 items-center justify-center rounded-full bg-ys-paper text-ys-ink shadow-[var(--shadow-border)] transition-transform duration-150 ease-out hover:bg-ys-blue-soft active:scale-[0.96]"
          aria-label={copied ? "Copied" : "Copy link"}
        >
          {copied ? <Check className="size-4" /> : <Link2 className="size-4" />}
        </button>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="inline-flex size-11 items-center justify-center rounded-full bg-ys-paper text-ys-ink shadow-[var(--shadow-border)] transition-transform duration-150 ease-out hover:bg-ys-blue-soft active:scale-[0.96]"
          aria-label="Close"
        >
          <X className="size-5" />
        </button>
      </div>

      <button
        type="button"
        onClick={() => prev && onSelect(prev.id)}
        className="absolute left-3 top-1/2 z-20 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-ys-paper text-ys-ink shadow-[var(--shadow-border)] transition-transform duration-150 ease-out hover:bg-ys-blue-soft active:scale-[0.96] sm:left-5"
        aria-label="Previous ad"
      >
        <ChevronLeft className="size-6" />
      </button>
      <button
        type="button"
        onClick={() => next && onSelect(next.id)}
        className="absolute right-3 top-1/2 z-20 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-ys-paper text-ys-ink shadow-[var(--shadow-border)] transition-transform duration-150 ease-out hover:bg-ys-blue-soft active:scale-[0.96] sm:right-5"
        aria-label="Next ad"
      >
        <ChevronRight className="size-6" />
      </button>

      <div className="flex h-full w-full items-center justify-center px-3 pb-4 pt-16 sm:px-20">
        {isFilm ? (
          <video
            key={ad.src}
            ref={filmRef}
            className="h-full w-auto max-w-full object-contain"
            poster={ad.poster}
            controls
            autoPlay
            playsInline
            preload="auto"
          >
            <source src={ad.src} type="video/mp4" />
          </video>
        ) : (
          <img src={ad.src} alt={`${ad.title} — ${ad.colourway} colourway`} className="h-full w-full object-contain" />
        )}
      </div>
    </div>,
    document.body,
  );
}

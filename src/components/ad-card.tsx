import { Play } from "lucide-react";
import { AutoVideo } from "@/components/auto-video";
import { cn } from "@/lib/utils";
import type { Ad } from "@/lib/ads";

type Props = {
  ad: Ad;
  onOpen: (id: string) => void;
  delayMs?: number;
  fill?: boolean;
  className?: string;
};

export function AdCard({ ad, onOpen, delayMs = 0, fill = false, className }: Props) {
  const isFilm = ad.format === "film";

  return (
    <button
      type="button"
      onClick={() => onOpen(ad.id)}
      className={cn("card-in group w-full text-left", fill && "h-full min-h-0", className)}
      style={{ animationDelay: `${delayMs}ms` }}
      aria-label={`Open ${ad.title}, ${ad.colourway}`}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-ys-paper transition-[filter,transform] duration-200 ease-out group-hover:brightness-[1.03] group-active:scale-[0.99]",
          fill
            ? isFilm
              ? "aspect-film rounded-xl shadow-[var(--shadow-border)]"
              : "aspect-board rounded-xl shadow-[var(--shadow-border)]"
            : cn(
                "rounded-xl shadow-[var(--shadow-border)]",
                isFilm ? "aspect-film" : "aspect-board",
              ),
        )}
      >
        {isFilm ? (
          <AutoVideo
            className="absolute inset-0 h-full w-full object-cover"
            poster={ad.poster}
            src={ad.src}
          />
        ) : (
          <img
            src={ad.src}
            alt={`${ad.title} — ${ad.colourway} colourway`}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        {isFilm ? (
          <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-ys-ink/70 px-2.5 py-1 text-xs font-semibold uppercase tracking-kicker text-ys-white backdrop-blur-sm">
            <Play className="size-3 fill-ys-white" />
            {ad.duration}
          </span>
        ) : null}
      </div>
      {fill ? null : (
        <div className="mt-3 flex items-baseline justify-between gap-3 px-0.5">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-ys-ink">{ad.title}</p>
            <p className="mt-0.5 text-xs text-ys-muted">{ad.spec}</p>
          </div>
          <span className="shrink-0 text-xs font-medium tabular-nums text-ys-muted">{ad.number}</span>
        </div>
      )}
    </button>
  );
}

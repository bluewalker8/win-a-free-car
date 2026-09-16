import { Wordmark } from "@/components/logo";
import { presenter } from "@/lib/research";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-ys-line bg-ys-white">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
        <a href="#top" className="shrink-0 text-ys-ink">
          <Wordmark />
        </a>
        <p className="truncate text-sm font-medium text-ys-muted">{presenter.name}</p>
      </div>
    </header>
  );
}

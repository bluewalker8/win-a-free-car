import { cn } from "@/lib/utils";

export function YouSetMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("shrink-0", className)} aria-hidden>
      <rect width="32" height="32" rx="8" className="fill-ys-blue" />
      <path
        d="M8.5 16.8 L13.2 21.5 L23.5 10.5"
        fill="none"
        className="stroke-ys-white"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <YouSetMark className="size-7" />
      <span className="text-sm font-semibold tracking-tight">YouSet</span>
    </span>
  );
}

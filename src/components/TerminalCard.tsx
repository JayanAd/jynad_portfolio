import type { ReactNode } from "react";

interface TerminalCardProps {
  filename: string;
  className?: string;
  right?: ReactNode;
  variant?: "card" | "window";
  children: ReactNode;
}

export const TerminalCard = ({ filename, className = "", right, variant = "card", children }: TerminalCardProps) => (
  <div className={`rounded-lg border border-border bg-card overflow-hidden ${className}`}>
    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-secondary/40">
      {variant === "window" ? (
        <>
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
        </>
      ) : (
        <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
      )}
      <span className="text-xs font-mono text-muted-foreground truncate ml-1">{filename}</span>
      {right && <span className="ml-auto shrink-0">{right}</span>}
    </div>
    <div className="p-6">{children}</div>
  </div>
);

export const SectionEyebrow = ({ index, label }: { index: string; label: string }) => (
  <div className="text-xs md:text-sm font-mono text-accent tracking-wide mb-2">
    // {index} — {label}
  </div>
);

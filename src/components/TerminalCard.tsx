import type { ReactNode } from "react";

interface TerminalCardProps {
  filename: string;
  right?: ReactNode;
  children: ReactNode;
}

export const TerminalCard = ({ filename, right, children }: TerminalCardProps) => (
  <div style={{ background: "var(--card-t)", border: "1px solid var(--border-t)", borderRadius: 8, overflow: "hidden" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", borderBottom: "1px solid var(--border-t)", background: "var(--bg-alt)" }}>
      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent-t)", flexShrink: 0 }} />
      <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11.5, color: "var(--muted-t)" }}>{filename}</span>
      {right && <span style={{ marginLeft: "auto" }}>{right}</span>}
    </div>
    <div style={{ padding: 22 }}>{children}</div>
  </div>
);

export const SectionEyebrow = ({ index, label }: { index: string; label: string }) => (
  <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 13, color: "var(--accent-t)", letterSpacing: "0.04em", marginBottom: 10 }}>
    // {index} — {label}
  </div>
);

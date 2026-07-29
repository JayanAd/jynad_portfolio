import { TerminalCard, SectionEyebrow } from "./TerminalCard";

const mono = "'IBM Plex Mono',monospace";
const sans = "'IBM Plex Sans',sans-serif";

export const About = () => {
  return (
    <section id="about" style={{ padding: "96px 24px", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionEyebrow index="01" label="about" />
        <h2 style={{ fontFamily: sans, fontWeight: 700, fontSize: "clamp(24px,3.4vw,32px)", color: "var(--fg)", margin: "0 0 32px" }}>About Me</h2>

        <TerminalCard filename="about.json">
          <h3 style={{ fontFamily: sans, fontWeight: 600, fontSize: 19, color: "var(--fg)", margin: "0 0 4px" }}>Bachelor of Computer Engineering</h3>
          <p style={{ fontFamily: sans, fontSize: 14.5, color: "var(--muted-t)", margin: "0 0 2px" }}>Gandaki College of Engineering and Science, Pokhara University</p>
          <p style={{ fontFamily: mono, fontSize: 12.5, color: "var(--muted-t)", margin: "0 0 18px" }}>2019 – 2024</p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 20 }}>
            <span style={{ fontFamily: mono, fontSize: 12.5, padding: "6px 14px", borderRadius: 5, background: "var(--accent-dim)", color: "var(--accent-t)", border: "1px solid var(--border-t)" }}>CGPA: 3.91 / 4.00</span>
            <span style={{ fontFamily: mono, fontSize: 12.5, padding: "6px 14px", borderRadius: 5, background: "var(--accent-dim)", color: "var(--accent-t)", border: "1px solid var(--border-t)" }}>Dean's List</span>
          </div>

          <p style={{ fontFamily: sans, fontSize: 14.5, lineHeight: 1.7, color: "var(--muted-t)", margin: 0 }}>
            <span style={{ color: "var(--fg)", fontWeight: 600 }}>Key coursework: </span>
            Deep Learning, Natural Language Processing, Probability &amp; Statistics, Linear Algebra, SQL, Calculus.
          </p>
        </TerminalCard>
      </div>
    </section>
  );
};

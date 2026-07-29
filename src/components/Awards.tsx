import { SectionEyebrow } from "./TerminalCard";

const mono = "'IBM Plex Mono',monospace";
const sans = "'IBM Plex Sans',sans-serif";

const awards = [
  { filename: "award_01.txt", title: "Dean's List", org: "Pokhara University", year: "2025", description: "Awarded for achieving high CGPA in Bachelor of Computer Engineering." },
  { filename: "award_02.txt", title: "Runner-up — 10th GCES IT Expo", org: "GCES IT Expo Project Evaluation Team", year: "2024", description: "Secured second position competing with IT and engineering students across Pokhara city." },
];

export const Awards = () => {
  return (
    <section id="awards" style={{ padding: "96px 24px", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionEyebrow index="07" label="awards" />
        <h2 style={{ fontFamily: sans, fontWeight: 700, fontSize: "clamp(24px,3.4vw,32px)", color: "var(--fg)", margin: "0 0 32px" }}>Awards &amp; Recognition</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16 }}>
          {awards.map((award, i) => (
            <div key={i} style={{ background: "var(--card-t)", border: "1px solid var(--border-t)", borderRadius: 8, overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", borderBottom: "1px solid var(--border-t)", background: "var(--bg-alt)" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent-t)" }} />
                <span style={{ fontFamily: mono, fontSize: 11.5, color: "var(--muted-t)" }}>{award.filename}</span>
              </div>
              <div style={{ padding: 22 }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 8, marginBottom: 6 }}>
                  <h3 style={{ fontFamily: sans, fontWeight: 600, fontSize: 16.5, color: "var(--fg)", margin: 0 }}>{award.title}</h3>
                  <span style={{ fontFamily: mono, fontSize: 12, color: "var(--accent-t)", whiteSpace: "nowrap" }}>{award.year}</span>
                </div>
                <p style={{ fontFamily: sans, fontSize: 13.5, color: "var(--muted-t)", fontWeight: 600, margin: "0 0 6px" }}>{award.org}</p>
                <p style={{ fontFamily: sans, fontSize: 13.5, color: "var(--muted-t)", lineHeight: 1.6, margin: 0 }}>{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

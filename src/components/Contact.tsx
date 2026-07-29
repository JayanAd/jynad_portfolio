import { SectionEyebrow } from "./TerminalCard";

const mono = "'IBM Plex Mono',monospace";
const sans = "'IBM Plex Sans',sans-serif";

export const Contact = () => {
  return (
    <section id="contact" style={{ padding: "96px 24px", background: "var(--bg-alt)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionEyebrow index="08" label="contact" />
        <h2 style={{ fontFamily: sans, fontWeight: 700, fontSize: "clamp(24px,3.4vw,32px)", color: "var(--fg)", margin: "0 0 6px" }}>Let's Connect</h2>
        <p style={{ fontFamily: sans, fontSize: 14.5, color: "var(--muted-t)", margin: "0 0 32px" }}>Open to opportunities and collaborations in AI and Data Science.</p>

        <div style={{ background: "var(--card-t)", border: "1px solid var(--border-t)", borderRadius: 8, overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", borderBottom: "1px solid var(--border-t)", background: "var(--bg-alt)" }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent-t)" }} />
            <span style={{ fontFamily: mono, fontSize: 12, color: "var(--muted-t)" }}>contact.sh</span>
          </div>
          <div style={{ padding: "clamp(20px,4vw,32px)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12, marginBottom: 24 }}>
              <a href="mailto:jayanadkh@gmail.com" style={{ display: "block", padding: "14px 16px", border: "1px solid var(--border-t)", borderRadius: 6 }}>
                <div style={{ fontFamily: mono, fontSize: 11.5, color: "var(--accent-t)", marginBottom: 4 }}>email</div>
                <div style={{ fontFamily: sans, fontSize: 13.5, color: "var(--fg)" }}>jayanadkh@gmail.com</div>
              </a>
              <a href="https://github.com/JayanAd" target="_blank" rel="noopener noreferrer" style={{ display: "block", padding: "14px 16px", border: "1px solid var(--border-t)", borderRadius: 6 }}>
                <div style={{ fontFamily: mono, fontSize: 11.5, color: "var(--accent-t)", marginBottom: 4 }}>github</div>
                <div style={{ fontFamily: sans, fontSize: 13.5, color: "var(--fg)" }}>@JayanAd</div>
              </a>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, paddingTop: 20, borderTop: "1px solid var(--border-t)", justifyContent: "center" }}>
              <a href="https://www.linkedin.com/in/jayanad/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: mono, fontWeight: 600, fontSize: 13.5, padding: "11px 22px", borderRadius: 6, background: "var(--accent-t)", color: "var(--accent-fg)" }}>
                [ connect_linkedin ]
              </a>
              <a href="https://github.com/JayanAd" target="_blank" rel="noopener noreferrer" style={{ fontFamily: mono, fontWeight: 600, fontSize: 13.5, padding: "11px 22px", borderRadius: 6, border: "1px solid var(--accent-t)", color: "var(--accent-t)" }}>
                [ view_github ]
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { useEffect, useState } from "react";
import { NeuralNetwork } from "./NeuralNetwork";

const ROLES = ["AI Engineer", "AI Researcher", "Data Scientist"];
const mono = "'IBM Plex Mono',monospace";
const sans = "'IBM Plex Sans',sans-serif";

const useTypewriter = () => {
  const [text, setText] = useState("");
  useEffect(() => {
    let roleIdx = 0, charIdx = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const full = ROLES[roleIdx];
      let delay = 65;
      if (!deleting) {
        charIdx++;
        setText(full.slice(0, charIdx));
        if (charIdx >= full.length) { deleting = true; delay = 1400; }
      } else {
        charIdx--;
        setText(full.slice(0, charIdx));
        delay = 35;
        if (charIdx <= 0) { deleting = false; roleIdx = (roleIdx + 1) % ROLES.length; delay = 250; }
      }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 250);
    return () => clearTimeout(timer);
  }, []);
  return text;
};

export const Hero = () => {
  const typedRole = useTypewriter();
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: "100px 20px 60px", background: "linear-gradient(180deg, var(--bg), var(--bg-alt))" }}
    >
      <NeuralNetwork />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 720, width: "100%" }}>
        <div style={{ background: "oklch(19% 0.017 250 / 0.88)", border: "1px solid var(--border-t)", borderRadius: 10, overflow: "hidden", backdropFilter: "blur(6px)", boxShadow: "0 40px 90px -30px rgba(0,0,0,0.7)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", borderBottom: "1px solid var(--border-t)", background: "var(--bg-alt)" }}>
            <div style={{ width: 9, height: 9, borderRadius: "50%", background: "oklch(65% 0.18 25)" }} />
            <div style={{ width: 9, height: 9, borderRadius: "50%", background: "oklch(75% 0.15 80)" }} />
            <div style={{ width: 9, height: 9, borderRadius: "50%", background: "oklch(75% 0.15 145)" }} />
            <span style={{ fontFamily: mono, fontSize: 12, color: "var(--muted-t)", marginLeft: 8 }}>whoami.sh</span>
          </div>

          <div style={{ padding: "clamp(24px,4vw,44px)" }}>
            <div style={{ fontFamily: mono, fontSize: 13.5, color: "var(--muted-t)" }}><span style={{ color: "var(--accent-t)" }}>$</span> whoami</div>
            <h1 style={{ fontFamily: sans, fontWeight: 700, fontSize: "clamp(30px,5.5vw,50px)", color: "var(--fg)", margin: "6px 0 2px", letterSpacing: "-0.01em" }}>Jayan Adhikari</h1>
            <div style={{ fontFamily: mono, fontSize: 13.5, color: "var(--accent-t)", marginBottom: 20, minHeight: 18 }}>
              {typedRole}<span style={{ animation: "jdBlink 1.1s step-start infinite" }}>_</span>
            </div>

            <div style={{ fontFamily: mono, fontSize: 13.5, color: "var(--muted-t)" }}><span style={{ color: "var(--accent-t)" }}>$</span> cat mission.txt</div>
            <p style={{ fontFamily: sans, fontSize: 16.5, lineHeight: 1.7, color: "var(--muted-t)", margin: "8px 0 24px", maxWidth: 520 }}>
              Transforming data into intelligent solutions through deep learning, NLP, and computer vision.
            </p>

            <div style={{ fontFamily: mono, fontSize: 13.5, color: "var(--muted-t)", marginBottom: 8 }}><span style={{ color: "var(--accent-t)" }}>$</span> contact --list</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 18px", marginBottom: 28 }}>
              <a href="mailto:jayanadkh@gmail.com" style={{ fontFamily: mono, fontSize: 12.5, color: "var(--muted-t)" }}>
                email: <span style={{ color: "var(--fg)" }}>jayanadkh@gmail.com</span>
              </a>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <span onClick={() => scrollTo("contact")} style={{ cursor: "pointer", fontFamily: mono, fontWeight: 600, fontSize: 13.5, padding: "11px 20px", borderRadius: 6, background: "var(--accent-t)", color: "var(--accent-fg)" }}>
                [ get_in_touch ]
              </span>
              <span onClick={() => scrollTo("projects")} style={{ cursor: "pointer", fontFamily: mono, fontWeight: 600, fontSize: 13.5, padding: "11px 20px", borderRadius: 6, border: "1px solid var(--accent-t)", color: "var(--accent-t)" }}>
                [ view_projects ]
              </span>
            </div>

            <div style={{ display: "flex", gap: 16, marginTop: 22 }}>
              <a href="https://github.com/JayanAd" target="_blank" rel="noopener noreferrer" style={{ fontFamily: mono, fontSize: 12.5, color: "var(--muted-t)" }}>github ↗</a>
              <a href="https://www.linkedin.com/in/jayanad/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: mono, fontSize: 12.5, color: "var(--muted-t)" }}>linkedin ↗</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { useEffect, useRef, useState } from "react";
import { SectionEyebrow } from "./TerminalCard";

const mono = "'IBM Plex Mono',monospace";
const sans = "'IBM Plex Sans',sans-serif";

interface Ring { label: string; sub: string; baseAngle: number; ringSpeed: number; orbitSpeed: number; phase: number; }

const RINGS: Ring[] = [
  { label: "Explainable AI", sub: "(XAI)", baseAngle: 0, ringSpeed: 0.3, orbitSpeed: 1.1, phase: 0 },
  { label: "RL for Healthcare", sub: "Offline · Clinical", baseAngle: 60, ringSpeed: -0.45, orbitSpeed: 1.3, phase: 130 },
  { label: "AI for Healthcare", sub: "Medical Imaging", baseAngle: 120, ringSpeed: 0.55, orbitSpeed: 0.9, phase: 250 },
];
const RADIUS_A = 210;
const RADIUS_B = 90;

export const ResearchInterests = () => {
  const [angle, setAngle] = useState(0);
  const rafRef = useRef<number>();

  useEffect(() => {
    const step = () => {
      setAngle((a) => (a + 0.15) % 360);
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  const project = (r: Ring) => {
    const ringAngle = r.baseAngle + angle * r.ringSpeed;
    const ringRad = (ringAngle * Math.PI) / 180;
    const t = ((angle * r.orbitSpeed + r.phase) * Math.PI) / 180;
    const ex = RADIUS_A * Math.cos(t), ey = RADIUS_B * Math.sin(t);
    const rx = ex * Math.cos(ringRad) - ey * Math.sin(ringRad);
    const ry = ex * Math.sin(ringRad) + ey * Math.cos(ringRad);
    return { ringAngle, rx, ry };
  };

  return (
    <section id="interests" style={{ padding: "72px 24px 56px", background: "var(--bg-alt)", overflow: "hidden" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionEyebrow index="02" label="research interests" />
        <h2 style={{ fontFamily: sans, fontWeight: 700, fontSize: "clamp(24px,3.4vw,32px)", color: "var(--fg)", margin: "0 0 8px" }}>Research Interests</h2>
        <p style={{ fontFamily: sans, fontSize: 14.5, color: "var(--muted-t)", margin: 0 }}>Three orbits I keep coming back to.</p>
      </div>

      <div style={{ position: "relative", height: 340, maxWidth: 520, margin: "16px auto 0" }}>
        <div style={{ position: "absolute", left: "50%", top: "50%", width: 100, height: 100, margin: "-50px 0 0 -50px", borderRadius: "50%", background: "radial-gradient(circle, var(--violet) 0%, transparent 70%)", opacity: 0.3, filter: "blur(8px)" }} />
        <div style={{ position: "absolute", left: "50%", top: "50%", width: 40, height: 40, margin: "-20px 0 0 -20px", borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, #ffffff, var(--violet) 62%, transparent 100%)", boxShadow: "0 0 40px 9px var(--violet)" }} />

        {RINGS.map((r, i) => {
          const { ringAngle, rx, ry } = project(r);
          return (
            <div key={i}>
              <div style={{ position: "absolute", left: "50%", top: "50%", width: 420, height: 180, margin: "-90px 0 0 -210px", border: "1px solid oklch(55% 0.04 260 / 0.35)", borderRadius: "50%", transform: `rotate(${ringAngle}deg)` }} />
              <div style={{ position: "absolute", left: "50%", top: "50%", width: 10, height: 10, margin: "-5px 0 0 -5px", borderRadius: "50%", background: "#fff", boxShadow: "0 0 15px 4px rgba(255,255,255,0.7)", transform: `translate3d(${rx}px, ${ry}px, 0)` }} />
            </div>
          );
        })}

        <div style={{ position: "absolute", top: 4, left: "50%", transform: "translateX(-50%)", textAlign: "center" }}>
          <div style={{ fontFamily: mono, fontWeight: 600, fontSize: 15, letterSpacing: "0.06em", color: "var(--fg)", textTransform: "uppercase" }}>{RINGS[0].label}</div>
          <div style={{ fontFamily: mono, fontSize: 12, color: "var(--muted-t)", marginTop: 4, letterSpacing: "0.04em" }}>{RINGS[0].sub}</div>
        </div>
        <div style={{ position: "absolute", bottom: 4, left: 0, textAlign: "left" }}>
          <div style={{ fontFamily: mono, fontWeight: 600, fontSize: 15, letterSpacing: "0.06em", color: "var(--fg)", textTransform: "uppercase" }}>{RINGS[1].label}</div>
          <div style={{ fontFamily: mono, fontSize: 12, color: "var(--muted-t)", marginTop: 4, letterSpacing: "0.04em" }}>{RINGS[1].sub}</div>
        </div>
        <div style={{ position: "absolute", bottom: 4, right: 0, textAlign: "right" }}>
          <div style={{ fontFamily: mono, fontWeight: 600, fontSize: 15, letterSpacing: "0.06em", color: "var(--fg)", textTransform: "uppercase" }}>{RINGS[2].label}</div>
          <div style={{ fontFamily: mono, fontSize: 12, color: "var(--muted-t)", marginTop: 4, letterSpacing: "0.04em" }}>{RINGS[2].sub}</div>
        </div>
      </div>
    </section>
  );
};

import { useEffect, useRef, useState } from "react";

interface Ring {
  label: string;
  sub: string;
  baseAngle: number;
  ringSpeed: number;
  orbitSpeed: number;
  phase: number;
}

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
    <section id="interests" className="py-20 px-4 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-2 animate-fade-in mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Research Interests</h2>
          <p className="text-lg text-muted-foreground">Three orbits I keep coming back to.</p>
        </div>

        <div className="relative mx-auto" style={{ height: 340, maxWidth: 520 }}>
          <div
            className="absolute rounded-full blur-lg opacity-30"
            style={{ left: "50%", top: "50%", width: 100, height: 100, marginLeft: -50, marginTop: -50, background: "radial-gradient(circle, hsl(var(--violet)) 0%, transparent 70%)" }}
          />
          <div
            className="absolute rounded-full"
            style={{ left: "50%", top: "50%", width: 40, height: 40, marginLeft: -20, marginTop: -20, background: "radial-gradient(circle at 35% 35%, #fff, hsl(var(--violet)) 62%, transparent 100%)", boxShadow: "0 0 40px 9px hsl(var(--violet))" }}
          />

          {RINGS.map((r, i) => {
            const { ringAngle, rx, ry } = project(r);
            return (
              <div key={i}>
                <div
                  className="absolute rounded-full border border-muted-foreground/20"
                  style={{ left: "50%", top: "50%", width: 420, height: 180, marginLeft: -210, marginTop: -90, transform: `rotate(${ringAngle}deg)` }}
                />
                <div
                  className="absolute rounded-full bg-white"
                  style={{ left: "50%", top: "50%", width: 10, height: 10, marginLeft: -5, marginTop: -5, boxShadow: "0 0 15px 4px rgba(255,255,255,0.7)", transform: `translate3d(${rx}px, ${ry}px, 0)` }}
                />
              </div>
            );
          })}

          <div className="absolute text-center" style={{ top: 4, left: "50%", transform: "translateX(-50%)" }}>
            <div className="font-mono font-semibold text-[15px] tracking-wide uppercase text-foreground">{RINGS[0].label}</div>
            <div className="font-mono text-xs text-muted-foreground mt-1">{RINGS[0].sub}</div>
          </div>
          <div className="absolute text-left" style={{ bottom: 4, left: 0 }}>
            <div className="font-mono font-semibold text-[15px] tracking-wide uppercase text-foreground">{RINGS[1].label}</div>
            <div className="font-mono text-xs text-muted-foreground mt-1">{RINGS[1].sub}</div>
          </div>
          <div className="absolute text-right" style={{ bottom: 4, right: 0 }}>
            <div className="font-mono font-semibold text-[15px] tracking-wide uppercase text-foreground">{RINGS[2].label}</div>
            <div className="font-mono text-xs text-muted-foreground mt-1">{RINGS[2].sub}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

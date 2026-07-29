import { useEffect, useState } from "react";

const navItems = [
  { id: "about", label: "~/about" },
  { id: "interests", label: "~/interests" },
  { id: "experience", label: "~/experience" },
  { id: "projects", label: "~/projects" },
  { id: "skills", label: "~/skills" },
  { id: "research", label: "~/research" },
  { id: "awards", label: "~/awards" },
  { id: "contact", label: "~/contact" },
];

const mono = "'IBM Plex Mono',monospace";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const onResize = () => { if (window.innerWidth >= 840) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mobileOpen]);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: "oklch(15% 0.015 250 / 0.82)", backdropFilter: "blur(10px)", borderBottom: "1px solid var(--border-t)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ fontFamily: mono, fontWeight: 600, fontSize: 14, color: "var(--accent-t)", cursor: "pointer", whiteSpace: "nowrap" }}
        >
          &gt;&gt;&gt; jayan.ai<span style={{ animation: "jdBlink 1.1s step-start infinite", color: "var(--accent-t)" }}>_</span>
        </div>

        <div className="hidden min-[840px]:flex items-center gap-0.5">
          {navItems.map((item) => (
            <span
              key={item.id}
              onClick={() => goTo(item.id)}
              className="hover:text-[color:var(--accent-t)]"
              style={{ fontFamily: mono, fontSize: 12.5, color: "var(--muted-t)", padding: "8px 12px", cursor: "pointer", transition: "color .2s" }}
            >
              {item.label}
            </span>
          ))}
        </div>

        <div className="min-[840px]:hidden">
          <span
            onClick={() => setMobileOpen((v) => !v)}
            style={{ fontFamily: mono, fontSize: 12.5, color: mobileOpen ? "var(--accent-t)" : "var(--muted-t)", cursor: "pointer", border: "1px solid var(--border-t)", padding: "6px 10px", borderRadius: 4 }}
          >
            {mobileOpen ? "[ close ]" : "[ menu ]"}
          </span>
        </div>
      </div>

      {mobileOpen && (
        <div style={{ borderTop: "1px solid var(--border-t)", background: "var(--bg-alt)", padding: "12px 24px 20px", display: "flex", flexDirection: "column", gap: 2 }}>
          {navItems.map((item) => (
            <span
              key={item.id}
              onClick={() => goTo(item.id)}
              style={{ fontFamily: mono, fontSize: 13, color: "var(--muted-t)", padding: "10px 4px", cursor: "pointer", borderBottom: "1px solid var(--border-t)" }}
            >
              {item.label}
            </span>
          ))}
        </div>
      )}
    </nav>
  );
};

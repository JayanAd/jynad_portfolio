import { SectionEyebrow } from "./TerminalCard";

const mono = "'IBM Plex Mono',monospace";
const sans = "'IBM Plex Sans',sans-serif";

const experiences = [
  { filename: "experience_01.log", kind: "industry", title: "AI Engineer Intern", company: "Exotrac LLC", location: "New York, USA (Remote)", period: "July 2026 – Present", items: ["Large Language Models (LLMs) & Vision-Language Models (VLMs)", "Transformer architectures", "Agentic AI systems"] },
  { filename: "experience_02.log", kind: "research", title: "Short-term Research Assistant", company: "Dept. of Robotics & AI Engineering, KMITL", location: "Bangkok, Thailand", period: "June 2026 – August 2026", items: ["Edge AI & computer vision for real-time surveillance systems", "Efficient deep learning deployment & optimization for resource-constrained environments", "Development and evaluation of practical AI systems for real-world deployment"] },
  { filename: "experience_03.log", kind: "industry", title: "Data Scientist", company: "Dvorak Innovation Pvt. Ltd.", location: "Pokhara, Nepal", period: "February 2025 – February 2026", items: ["Deep Learning & Generative AI", "Topic Modeling & LLMs", "RAG (Retrieval-Augmented Generation)", "Computer Vision & XAI"] },
  { filename: "experience_04.log", kind: "industry", title: "Data Science Intern", company: "Dvorak Innovation Pvt. Ltd.", location: "Pokhara, Nepal", period: "August 2024 – January 2025", items: ["Python, NumPy, Pandas", "Data Visualization (Matplotlib, Seaborn, Power BI, Tableau)", "Machine Learning with PyTorch"] },
];

export const Experience = () => {
  return (
    <section id="experience" style={{ padding: "96px 24px", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionEyebrow index="03" label="experience" />
        <h2 style={{ fontFamily: sans, fontWeight: 700, fontSize: "clamp(24px,3.4vw,32px)", color: "var(--fg)", margin: "0 0 32px" }}>Experience</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {experiences.map((exp, i) => (
            <div key={i} style={{ background: "var(--card-t)", border: "1px solid var(--border-t)", borderRadius: 8, overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", borderBottom: "1px solid var(--border-t)", background: "var(--bg-alt)" }}>
                <span style={{ fontFamily: mono, fontSize: 12, color: "var(--accent-t)" }}>{i === experiences.length - 1 ? "└──" : "├──"}</span>
                <span style={{ fontFamily: mono, fontSize: 12, color: "var(--muted-t)" }}>{exp.filename}</span>
                <span style={{ marginLeft: "auto", fontFamily: mono, fontSize: 10.5, letterSpacing: "0.04em", padding: "3px 9px", borderRadius: 4, border: "1px solid var(--border-t)", color: "var(--muted-t)" }}>
                  {exp.kind === "research" ? "RESEARCH" : "INDUSTRY"}
                </span>
              </div>
              <div style={{ padding: "24px clamp(20px,4vw,28px)" }}>
                <h3 style={{ fontFamily: sans, fontWeight: 600, fontSize: 18, color: "var(--fg)", margin: "0 0 4px" }}>{exp.title}</h3>
                <p style={{ fontFamily: sans, fontSize: 14.5, color: "var(--muted-t)", margin: "0 0 8px" }}>{exp.company}</p>
                <div style={{ fontFamily: mono, fontSize: 12, color: "var(--accent-t)", marginBottom: 16 }}>{exp.period} · {exp.location}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {exp.items.map((line, j) => (
                    <div key={j} style={{ display: "flex", gap: 8, fontFamily: sans, fontSize: 14, color: "var(--muted-t)" }}>
                      <span style={{ fontFamily: mono, color: "var(--accent-t)" }}>›</span>{line}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

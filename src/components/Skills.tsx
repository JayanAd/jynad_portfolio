import { SectionEyebrow } from "./TerminalCard";

const mono = "'IBM Plex Mono',monospace";
const sans = "'IBM Plex Sans',sans-serif";

const skillCategories = [
  { filename: "stack_01.json", title: "Programming & Frameworks", skills: ["Python", "FastAPI", "PyTorch", "TensorFlow"] },
  { filename: "stack_02.json", title: "Databases", skills: ["MySQL", "PostgreSQL", "MongoDB"] },
  { filename: "stack_03.json", title: "NLP & LLMs", skills: ["Transformers", "PEFT / LoRA", "RAG", "Agentic AI", "Prompt Engineering"] },
  { filename: "stack_04.json", title: "MLOps & Tools", skills: ["DVC", "MLflow", "WandB", "Optuna", "Git / GitHub"] },
  { filename: "stack_05.json", title: "Computer Vision", skills: ["YOLO", "Object Detection", "Image Segmentation"] },
  { filename: "stack_06.json", title: "XAI & GenAI", skills: ["SHAP", "LIME", "Grad-CAM", "LangChain", "LangGraph"] },
];

export const Skills = () => {
  return (
    <section id="skills" style={{ padding: "96px 24px", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionEyebrow index="05" label="skills" />
        <h2 style={{ fontFamily: sans, fontWeight: 700, fontSize: "clamp(24px,3.4vw,32px)", color: "var(--fg)", margin: "0 0 32px" }}>Skills &amp; Expertise</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {skillCategories.map((cat, i) => (
            <div key={i} style={{ background: "var(--card-t)", border: "1px solid var(--border-t)", borderRadius: 8, overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", borderBottom: "1px solid var(--border-t)", background: "var(--bg-alt)" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent-t)" }} />
                <span style={{ fontFamily: mono, fontSize: 11.5, color: "var(--muted-t)" }}>{cat.filename}</span>
              </div>
              <div style={{ padding: 18 }}>
                <h3 style={{ fontFamily: sans, fontWeight: 600, fontSize: 15, color: "var(--fg)", margin: "0 0 14px" }}>{cat.title}</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {cat.skills.map((skill, j) => (
                    <span
                      key={j}
                      className="hover:text-[color:var(--accent-t)] hover:border-[color:var(--accent-t)]"
                      style={{ fontFamily: mono, fontSize: 12, padding: "6px 12px", borderRadius: 5, border: "1px solid var(--border-t)", color: "var(--muted-t)", transition: "color .2s, border-color .2s" }}
                    >
                      {skill}
                    </span>
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

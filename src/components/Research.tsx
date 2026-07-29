import { SectionEyebrow } from "./TerminalCard";

const mono = "'IBM Plex Mono',monospace";
const sans = "'IBM Plex Sans',sans-serif";

const research = [
  { filename: "paper_01.pdf", status: "UNDER REVIEW", title: "GBEval: A SHAP-based Interpretable Gender Bias Assessment Framework for LLMs", description: "Developing an interpretable framework for assessing gender bias in Large Language Models using SHAP values.", tags: ["NLP", "XAI", "SHAP", "LLMs", "Bias Detection"] },
  { filename: "paper_02.pdf", status: "ARXIV PREPRINT", title: "Analysis of Invasive Breast Cancer in Mammograms Using YOLO, Explainability and Domain Adaptation", description: "Applying advanced computer vision techniques with explainable AI for breast cancer detection.", tags: ["Computer Vision", "YOLO", "Medical AI", "Domain Adaptation", "XAI"], url: "https://arxiv.org/abs/2512.00129" },
];

export const Research = () => {
  return (
    <section id="research" style={{ padding: "96px 24px", background: "var(--bg-alt)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionEyebrow index="06" label="research" />
        <h2 style={{ fontFamily: sans, fontWeight: 700, fontSize: "clamp(24px,3.4vw,32px)", color: "var(--fg)", margin: "0 0 32px" }}>Research &amp; Publications</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16 }}>
          {research.map((paper, i) => (
            <div key={i} style={{ background: "var(--card-t)", border: "1px solid var(--border-t)", borderRadius: 8, overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", borderBottom: "1px solid var(--border-t)", background: "var(--bg-alt)" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent-t)" }} />
                <span style={{ fontFamily: mono, fontSize: 11.5, color: "var(--muted-t)" }}>{paper.filename}</span>
              </div>
              <div style={{ padding: 22 }}>
                <span style={{ fontFamily: mono, fontSize: 11, padding: "4px 10px", borderRadius: 4, border: "1px solid var(--accent-t)", color: "var(--accent-t)" }}>[ {paper.status} ]</span>
                <h3 style={{ fontFamily: sans, fontWeight: 600, fontSize: 16.5, color: "var(--fg)", margin: "12px 0 10px", lineHeight: 1.4 }}>{paper.title}</h3>
                <p style={{ fontFamily: sans, fontSize: 13.5, color: "var(--muted-t)", lineHeight: 1.6, margin: "0 0 16px" }}>{paper.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {paper.tags.map((tag, j) => (
                    <span key={j} style={{ fontFamily: mono, fontSize: 10.5, padding: "3px 8px", borderRadius: 4, background: "var(--bg-alt)", color: "var(--muted-t)", border: "1px solid var(--border-t)" }}>{tag}</span>
                  ))}
                </div>
                {paper.url && (
                  <a href={paper.url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginTop: 14, fontFamily: mono, fontSize: 12, color: "var(--accent-t)" }}>
                    → read on arXiv
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

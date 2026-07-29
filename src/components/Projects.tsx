import { useMemo, useRef, useState } from "react";
import { SectionEyebrow } from "./TerminalCard";

type Category = "nlp" | "computer-vision" | "llm" | "vlm" | "recommender-systems" | "all";
const mono = "'IBM Plex Mono',monospace";
const sans = "'IBM Plex Sans',sans-serif";

interface ProjectT {
  id: string; filename: string; title: string; description: string;
  highlights: string[]; tags: string[]; githubUrl: string; category: Exclude<Category, "all">;
}

const projects: ProjectT[] = [
  { id: "youtube-sentiment", filename: "yt_sentiment.py", category: "nlp", title: "YouTube Comment Sentiment Analyzer", description: "Production-grade Chrome extension powered by an end-to-end NLP pipeline — from raw comment ingestion through preprocessing, model training with Optuna-tuned hyperparameters, to real-time inference via a Flask API on AWS.", highlights: ["Experiment tracking & reproducibility via DVC + MLflow", "Containerized deployment on AWS with Flask REST API", "Fully automated CI/CD pipeline with GitHub Actions"], tags: ["NLP", "Deep Learning", "MLflow", "DVC", "AWS", "Flask", "CI/CD"], githubUrl: "https://github.com/JayanAd/yt-comment-sentiment-analyzer" },
  { id: "hybrid-spotify-recommender", filename: "hybrid_recsys.py", category: "recommender-systems", title: "Hybrid Spotify Song Recommender", description: "Hybrid recommendation system for Spotify tracks combining content-based similarity (TF-IDF + feature engineering) with collaborative filtering from user listening behavior, wrapped in an interactive Streamlit app with a diversity control.", highlights: ["Content-based pipeline with TF-IDF tags + encoders/scalers and cosine similarity", "Collaborative filtering via sparse track x user interaction matrix built with Dask", "Hybrid score fusion with adjustable weighting in Streamlit UI"], tags: ["Recommender Systems", "TF-IDF", "Scikit-learn", "Dask", "Streamlit", "DVC"], githubUrl: "https://github.com/JayanAd/Hybrid-Recommender-System" },
  { id: "self-driving", filename: "self_driving.py", category: "computer-vision", title: "Self-Driving Car Prototype", description: "Implemented NVIDIA's end-to-end CNN architecture for autonomous lane keeping, extended with YOLO-based object detection for real-time obstacle avoidance at 30 FPS.", highlights: ["Real-time inference at 30 FPS on consumer GPU", "Multi-threaded pipeline for parallel sensor processing", "Architecture based on Bojarski et al. (NVIDIA, 2016)"], tags: ["Computer Vision", "CNN", "YOLO", "TensorFlow", "PyTorch"], githubUrl: "https://github.com/JayanAd/self_driving_car" },
  { id: "gpt-from-scratch", filename: "gpt_scratch.py", category: "llm", title: "GPT From Scratch", description: "Implemented a decoder-only Transformer language model from scratch in PyTorch, including tokenization, masked self-attention, positional encoding, and autoregressive text generation.", highlights: ["Built multi-head self-attention and causal masking from first principles", "Custom training loop with next-token prediction objective", "Inference pipeline for autoregressive text generation"], tags: ["Transformers", "LLM", "PyTorch", "Self-Attention"], githubUrl: "https://github.com/JayanAd/CustomLLM" },
  { id: "vit-from-scratch", filename: "vit_scratch.py", category: "vlm", title: "Vision Transformer (ViT) From Scratch", description: "Recreated the Vision Transformer architecture in PyTorch, implementing patch embeddings, positional encodings, and Transformer encoder blocks for image classification.", highlights: ["Manual implementation of patch embedding and CLS token mechanism", "Stacked Transformer encoder blocks with multi-head attention", "End-to-end training pipeline for image classification"], tags: ["Vision Transformer", "Computer Vision", "PyTorch", "Attention"], githubUrl: "https://github.com/JayanAd/ViT-from-scratch" },
];

const categories: { key: Category }[] = [
  { key: "all" }, { key: "nlp" }, { key: "llm" }, { key: "vlm" }, { key: "computer-vision" }, { key: "recommender-systems" },
];

export const Projects = () => {
  const [active, setActive] = useState<Category>("all");
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const filtered = useMemo(() => (active === "all" ? projects : projects.filter((p) => p.category === active)), [active]);

  const scrollByAmount = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="projects" style={{ padding: "96px 24px", background: "var(--bg-alt)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionEyebrow index="04" label="projects" />
        <h2 style={{ fontFamily: sans, fontWeight: 700, fontSize: "clamp(24px,3.4vw,32px)", color: "var(--fg)", margin: "0 0 6px" }}>Featured Projects</h2>
        <p style={{ fontFamily: sans, fontSize: 14.5, color: "var(--muted-t)", margin: "0 0 28px" }}>Please visit GitHub for more.</p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
          {categories.map((c) => {
            const isActive = active === c.key;
            return (
              <span
                key={c.key}
                onClick={() => { setActive(c.key); requestAnimationFrame(() => scrollerRef.current?.scrollTo({ left: 0, behavior: "smooth" })); }}
                style={{
                  cursor: "pointer", fontFamily: mono, fontSize: 12, padding: "8px 15px", borderRadius: 5,
                  border: isActive ? "1px solid var(--accent-t)" : "1px solid var(--border-t)",
                  background: isActive ? "var(--accent-t)" : "transparent",
                  color: isActive ? "var(--accent-fg)" : "var(--muted-t)",
                }}
              >
                --{c.key}
              </span>
            );
          })}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <div style={{ fontFamily: mono, fontSize: 12.5, color: "var(--muted-t)" }}>
            showing <span style={{ color: "var(--fg)" }}>{filtered.length}</span> project{filtered.length === 1 ? "" : "s"}
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <span onClick={() => scrollByAmount("left")} style={{ cursor: "pointer", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--border-t)", borderRadius: 6, color: "var(--muted-t)", fontFamily: mono }}>‹</span>
            <span onClick={() => scrollByAmount("right")} style={{ cursor: "pointer", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--border-t)", borderRadius: 6, color: "var(--muted-t)", fontFamily: mono }}>›</span>
          </div>
        </div>

        <div ref={scrollerRef} style={{ display: "flex", gap: 16, overflowX: "auto", paddingBottom: 8, scrollBehavior: "smooth" }}>
          {filtered.map((proj) => (
            <a key={proj.id} href={proj.githubUrl} target="_blank" rel="noopener noreferrer" style={{ flexShrink: 0, width: 320, display: "block", color: "inherit" }}>
              <div style={{ height: "100%", background: "var(--card-t)", border: "1px solid var(--border-t)", borderRadius: 8, overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", borderBottom: "1px solid var(--border-t)", background: "var(--bg-alt)" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent-t)" }} />
                  <span style={{ fontFamily: mono, fontSize: 11.5, color: "var(--muted-t)" }}>{proj.filename}</span>
                </div>
                <div style={{ padding: 20 }}>
                  <span style={{ fontFamily: mono, fontSize: 10.5, letterSpacing: "0.04em", color: "var(--accent-t)" }}>
                    {proj.category.toUpperCase().replace("-", " ")}
                  </span>
                  <h3 style={{ fontFamily: sans, fontWeight: 600, fontSize: 16.5, color: "var(--fg)", margin: "8px 0 8px", lineHeight: 1.3 }}>{proj.title}</h3>
                  <p style={{ fontFamily: sans, fontSize: 13.5, color: "var(--muted-t)", lineHeight: 1.6, margin: "0 0 14px" }}>{proj.description}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 16 }}>
                    {proj.highlights.map((h) => (
                      <div key={h} style={{ display: "flex", gap: 6, fontFamily: sans, fontSize: 12.5, color: "var(--muted-t)" }}>
                        <span style={{ color: "var(--accent-t)", fontFamily: mono }}>›</span>{h}
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, paddingTop: 14, borderTop: "1px solid var(--border-t)" }}>
                    {proj.tags.map((tag) => (
                      <span key={tag} style={{ fontFamily: mono, fontSize: 10.5, padding: "3px 8px", borderRadius: 4, background: "var(--bg-alt)", color: "var(--muted-t)", border: "1px solid var(--border-t)" }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

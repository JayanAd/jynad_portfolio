import { useEffect, useMemo, useRef, useState } from "react";
import { Github, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionEyebrow } from "./TerminalCard";

type Category = "nlp" | "computer-vision" | "llm" | "vlm" | "recommender-systems" | "all";

interface Project {
  id: string;
  filename: string;
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  githubUrl: string;
  category: Exclude<Category, "all">;
}

const projects: Project[] = [
  {
    id: "youtube-sentiment",
    filename: "yt_sentiment.py",
    title: "YouTube Comment Sentiment Analyzer",
    description:
      "Production-grade Chrome extension powered by an end-to-end NLP pipeline — from raw comment ingestion through preprocessing, model training with Optuna-tuned hyperparameters, to real-time inference via a Flask API on AWS.",
    highlights: [
      "Experiment tracking & reproducibility via DVC + MLflow",
      "Containerized deployment on AWS with Flask REST API",
      "Fully automated CI/CD pipeline with GitHub Actions",
    ],
    tags: ["NLP", "Deep Learning", "MLflow", "DVC", "AWS", "Flask", "CI/CD"],
    githubUrl: "https://github.com/JayanAd/yt-comment-sentiment-analyzer",
    category: "nlp",
  },
  {
    id: "hybrid-spotify-recommender",
    filename: "hybrid_recsys.py",
    title: "Hybrid Spotify Song Recommender",
    description:
      "Hybrid recommendation system for Spotify tracks combining content-based similarity (TF-IDF + feature engineering) with collaborative filtering from user listening behavior, wrapped in an interactive Streamlit app with a diversity control.",
    highlights: [
      "Content-based pipeline with TF-IDF tags + encoders/scalers and cosine similarity",
      "Collaborative filtering via sparse track x user interaction matrix built with Dask",
      "Hybrid score fusion with adjustable weighting (diversity vs personalization) in Streamlit UI",
    ],
    tags: ["Recommender Systems", "Hybrid Filtering", "TF-IDF", "Scikit-learn", "Dask", "SciPy Sparse", "Streamlit", "DVC", "GitHub Actions"],
    githubUrl: "https://github.com/JayanAd/Hybrid-Recommender-System",
    category: "recommender-systems",
  },
  {
    id: "self-driving",
    filename: "self_driving.py",
    title: "Self-Driving Car Prototype",
    description:
      "Implemented NVIDIA's end-to-end CNN architecture for autonomous lane keeping, extended with YOLO-based object detection for real-time obstacle avoidance at 30 FPS.",
    highlights: [
      "Real-time inference at 30 FPS on consumer GPU",
      "Multi-threaded pipeline for parallel sensor processing",
      "Architecture based on Bojarski et al. (NVIDIA, 2016)",
    ],
    tags: ["Computer Vision", "CNN", "YOLO", "TensorFlow", "PyTorch"],
    githubUrl: "https://github.com/JayanAd/self_driving_car",
    category: "computer-vision",
  },
  {
    id: "gpt-from-scratch",
    filename: "gpt_scratch.py",
    title: "GPT From Scratch",
    description:
      "Implemented a decoder-only Transformer language model from scratch in PyTorch, including tokenization, masked self-attention, positional encoding, and autoregressive text generation.",
    highlights: [
      "Built multi-head self-attention and causal masking from first principles",
      "Custom training loop with next-token prediction objective",
      "Inference pipeline for autoregressive text generation",
    ],
    tags: ["Transformers", "LLM", "PyTorch", "Self-Attention", "Deep Learning"],
    githubUrl: "https://github.com/JayanAd/CustomLLM",
    category: "llm",
  },
  {
    id: "vit-from-scratch",
    filename: "vit_scratch.py",
    title: "Vision Transformer (ViT) From Scratch",
    description:
      "Recreated the Vision Transformer architecture in PyTorch, implementing patch embeddings, positional encodings, and Transformer encoder blocks for image classification.",
    highlights: [
      "Manual implementation of patch embedding and CLS token mechanism",
      "Stacked Transformer encoder blocks with multi-head attention",
      "End-to-end training pipeline for image classification",
    ],
    tags: ["Vision Transformer", "Computer Vision", "PyTorch", "Attention", "Deep Learning"],
    githubUrl: "https://github.com/JayanAd/ViT-from-scratch",
    category: "vlm",
  },
];

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "all" },
  { key: "nlp", label: "nlp" },
  { key: "llm", label: "llm" },
  { key: "vlm", label: "vlm" },
  { key: "computer-vision", label: "vision" },
  { key: "recommender-systems", label: "recsys" },
];

export const Projects = () => {
  const [active, setActive] = useState<Category>("all");
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const filtered = useMemo(() => {
    if (active === "all") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  const scrollByAmount = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8">
          <div className="space-y-2 animate-fade-in">
            <SectionEyebrow index="04" label="projects" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">Please visit GitHub for more.</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const isActive = active === c.key;
              return (
                <button
                  key={c.key}
                  onClick={() => {
                    setActive(c.key);
                    requestAnimationFrame(() => {
                      scrollerRef.current?.scrollTo({ left: 0, behavior: "smooth" });
                    });
                  }}
                  className={[
                    "px-3 py-1.5 rounded-md text-xs font-mono border transition-all",
                    isActive
                      ? "bg-accent text-accent-foreground border-accent"
                      : "bg-transparent text-muted-foreground border-border hover:text-foreground",
                  ].join(" ")}
                >
                  --{c.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="text-sm font-mono text-muted-foreground">
              showing <span className="text-foreground">{filtered.length}</span> project{filtered.length === 1 ? "" : "s"}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollByAmount("left")}
                className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-border hover:border-accent transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollByAmount("right")}
                className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-border hover:border-accent transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div
            ref={scrollerRef}
            className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {filtered.map((project) => (
              <a
                key={project.id}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-[340px] sm:w-[380px] flex-shrink-0 snap-start block"
              >
                <div className="h-full rounded-lg border border-border bg-card overflow-hidden hover:border-accent/50 transition-colors">
                  <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-secondary/40">
                    <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                    <span className="text-xs font-mono text-muted-foreground truncate">{project.filename}</span>
                    <div className="ml-auto flex items-center gap-1.5 text-muted-foreground group-hover:text-accent transition-colors">
                      <Github className="w-3.5 h-3.5" />
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div className="p-5 flex flex-col h-full">
                    <span className="text-[10px] font-mono tracking-widest text-accent mb-2">
                      {project.category.toUpperCase().replace("-", " ")}
                    </span>
                    <h3 className="text-lg font-semibold mb-2 leading-tight group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">{project.description}</p>
                    <ul className="space-y-2 mb-5 flex-1">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="font-mono text-accent">›</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-secondary/50 text-muted-foreground border border-border">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

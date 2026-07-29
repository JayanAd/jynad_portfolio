import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

type Category = "nlp" | "computer-vision" | "llm" |"vlm"| "recommender-systems" | "all";

interface Project {
  id: string;
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
  // {
  //   id: "price-predictor",
  //   title: "Price Predictor — Fine-Tuning Llama 3.1",
  //   description:
  //     "Applied Parameter-Efficient Fine-Tuning (PEFT) to Llama 3.1 8B for domain-specific price prediction, achieving competitive accuracy at a fraction of full fine-tuning compute cost.",
  //   highlights: [
  //     "4-bit quantized LoRA with custom rank configuration",
  //     "Efficient training loop via HuggingFace SFTTrainer",
  //     "Live experiment dashboards with Weights & Biases",
  //   ],
  //   tags: ["LLM", "PEFT", "LoRA", "Quantization", "W&B"],
  //   githubUrl: "https://github.com/yourusername/price-predictor",
  //   category: "llm",
  // },
  {
  id: "hybrid-spotify-recommender",
  title: "Hybrid Spotify Song Recommender",
  description:
    "Hybrid recommendation system for Spotify tracks combining content-based similarity (TF-IDF + feature engineering) with collaborative filtering from user listening behavior, wrapped in an interactive Streamlit app with a diversity control.",
  highlights: [
    "Content-based pipeline with TF-IDF tags + encoders/scalers and cosine similarity",
    "Collaborative filtering via sparse track X user interaction matrix built with Dask",
    "Hybrid score fusion with adjustable weighting (diversity vs personalization) in Streamlit UI",
  ],
  tags: [
    "Recommender Systems",
    "Hybrid Filtering",
    "TF-IDF",
    "Scikit-learn",
    "Dask",
    "SciPy Sparse",
    "Streamlit",
    "DVC",
    "GitHub Actions",
  ],
  githubUrl: "https://github.com/JayanAd/Hybrid-Recommender-System",
  category: "recommender-systems",
},
  {
    id: "self-driving",
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
  title: "GPT From Scratch",
  description:
    "Implemented a decoder-only Transformer language model from scratch in PyTorch, including tokenization, masked self-attention, positional encoding, and autoregressive text generation.",
  highlights: [
    "Built multi-head self-attention and causal masking from first principles",
    "Custom training loop with next-token prediction objective",
    "Inference pipeline for autoregressive text generation",
  ],
  tags: [
    "Transformers",
    "LLM",
    "PyTorch",
    "Self-Attention",
    "Deep Learning",
  ],
  githubUrl: "https://github.com/JayanAd/CustomLLM",
  category: "llm",
},
{
  id: "vit-from-scratch",
  title: "Vision Transformer (ViT) From Scratch",
  description:
    "Recreated the Vision Transformer architecture in PyTorch, implementing patch embeddings, positional encodings, and Transformer encoder blocks for image classification.",
  highlights: [
    "Manual implementation of patch embedding and CLS token mechanism",
    "Stacked Transformer encoder blocks with multi-head attention",
    "End-to-end training pipeline for image classification",
  ],
  tags: [
    "Vision Transformer",
    "Computer Vision",
    "PyTorch",
    "Attention",
    "Deep Learning",
  ],
  githubUrl: "https://github.com/JayanAd/ViT-from-scratch",
  category: "vlm",
}
];

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "nlp", label: "NLP" },
  { key: "llm", label: "LLM" },
  { key: "vlm", label: "VLM" },
  { key: "computer-vision", label: "Vision" },
  { key: "recommender-systems", label: "Recommender Systems" },
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

    // scroll almost a full "page" of the container
    const amount = Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-10">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">Please visit GitHub for more..</p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((c) => {
              const isActive = active === c.key;
              return (
                <button
                  key={c.key}
                  onClick={() => {
                    setActive(c.key);
                    // reset slider to start when changing category
                    requestAnimationFrame(() => {
                      scrollerRef.current?.scrollTo({ left: 0, behavior: "smooth" });
                    });
                  }}
                  className={[
                    "px-3 py-1.5 rounded-full text-xs md:text-sm border transition-all",
                    isActive
                      ? "bg-primary text-primary-foreground border-primary/40 shadow-sm"
                      : "bg-muted/30 text-muted-foreground border-border hover:text-foreground hover:bg-muted/50",
                  ].join(" ")}
                >
                  {c.label}
                </button>
              );
            })}
          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-between gap-3">
            <div className="text-sm text-muted-foreground">
              Showing <span className="text-foreground font-medium">{filtered.length}</span> project
              {filtered.length === 1 ? "" : "s"}
              {active !== "all" ? (
                <>
                  {" "}
                  in <span className="text-foreground font-medium uppercase">{active.replace("-", " ")}</span>
                </>
              ) : null}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollByAmount("left")}
                className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-border bg-card hover:bg-muted/50 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollByAmount("right")}
                className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-border bg-card hover:bg-muted/50 transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Horizontal Slider */}
          <div
            ref={scrollerRef}
            className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group w-[340px] sm:w-[380px] flex-shrink-0 snap-start"
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="relative h-full rounded-xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_hsl(var(--primary)/0.08)]">
                    {/* Top gradient line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background:
                          "linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)",
                      }}
                    />

                    <div className="p-6 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-2.5 py-1 text-[10px] font-mono tracking-widest rounded-full bg-muted text-muted-foreground border border-border">
                          {project.category.toUpperCase().replace("-", " ")}
                        </span>

                        <div className="flex items-center gap-1.5 text-muted-foreground group-hover:text-primary transition-colors duration-300">
                          <Github className="w-4 h-4" />
                          <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      <ul className="space-y-2 mb-5 flex-1">
                        {project.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary/70 shadow-[0_0_10px_hsl(var(--primary)/0.35)]" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/60">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-muted/60 text-muted-foreground border border-border/60 group-hover:border-primary/20 group-hover:text-primary/80 transition-colors duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
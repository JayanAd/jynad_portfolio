import { TerminalCard, SectionEyebrow } from "./TerminalCard";

const skillCategories = [
  { filename: "stack_01.json", title: "Programming & Frameworks", skills: ["Python", "FastAPI", "PyTorch", "TensorFlow"] },
  { filename: "stack_02.json", title: "Databases", skills: ["MySQL", "PostgreSQL", "MongoDB"] },
  { filename: "stack_03.json", title: "NLP & LLMs", skills: ["Transformers", "PEFT/LoRA", "RAG", "Agentic AI", "Prompt Engineering"] },
  { filename: "stack_04.json", title: "MLOps & Tools", skills: ["DVC", "MLflow", "WandB", "Optuna", "Git/GitHub"] },
  { filename: "stack_05.json", title: "Computer Vision", skills: ["YOLO", "Object Detection", "Image Segmentation"] },
  { filename: "stack_06.json", title: "XAI & GenAI", skills: ["SHAP", "LIME", "Grad-CAM", "LangChain", "LangGraph"] },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8">
          <div className="space-y-2 animate-fade-in">
            <SectionEyebrow index="05" label="skills" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Skills &amp; Expertise</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <TerminalCard key={index} filename={category.filename} className="animate-fade-in-up">
                <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-3 py-1.5 rounded-md border border-border text-muted-foreground hover:text-accent hover:border-accent/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </TerminalCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

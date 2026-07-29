import { Calendar } from "lucide-react";
import { TerminalCard, SectionEyebrow } from "./TerminalCard";

const experiences = [
  {
    filename: "experience_01.log",
    kind: "Industry",
    title: "AI Engineer Intern",
    company: "Exotrac LLC",
    location: "New York, USA (Remote)",
    period: "July 2026 - Present",
    description: [
      "Large Language Models (LLMs) & Vision-Language Models (VLMs)",
      "Transformer architectures",
      "Agentic AI systems",
    ],
  },
  {
    filename: "experience_02.log",
    kind: "Research",
    title: "Short-term Research Assistant",
    company: "Dept. of Robotics & AI Engineering, KMITL",
    location: "Bangkok, Thailand",
    period: "June 2026 - August 2026",
    description: [
      "Edge AI & computer vision for real-time surveillance systems",
      "Efficient deep learning deployment & optimization for resource-constrained environments",
      "Development and evaluation of practical AI systems for real-world deployment",
    ],
  },
  {
    filename: "experience_03.log",
    kind: "Industry",
    title: "Data Scientist",
    company: "Dvorak Innovation Pvt. Ltd.",
    location: "Pokhara, Nepal",
    period: "February 2025 - February 2026",
    description: [
      "Deep Learning & Generative AI",
      "Topic Modeling & LLMs",
      "RAG (Retrieval-Augmented Generation)",
      "Computer Vision & XAI",
    ],
  },
  {
    filename: "experience_04.log",
    kind: "Industry",
    title: "Data Science Intern",
    company: "Dvorak Innovation Pvt. Ltd.",
    location: "Pokhara, Nepal",
    period: "August 2024 - January 2025",
    description: [
      "Python, NumPy, Pandas",
      "Data Visualization (Matplotlib, Seaborn, Power BI, Tableau)",
      "Machine Learning with PyTorch",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8">
          <div className="space-y-2 animate-fade-in">
            <SectionEyebrow index="03" label="experience" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience</h2>
            <p className="text-lg text-muted-foreground">Building AI solutions and driving innovation</p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <TerminalCard
                key={index}
                filename={exp.filename}
                className="animate-fade-in-up"
                right={
                  <span className="text-[10px] font-mono tracking-widest px-2 py-1 rounded-full border border-border text-muted-foreground">
                    {exp.kind.toUpperCase()}
                  </span>
                }
              >
                <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                <p className="text-lg text-muted-foreground font-medium">{exp.company}</p>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-sm font-mono text-accent">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                  <span className="text-muted-foreground">{exp.location}</span>
                </div>

                <ul className="mt-4 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="font-mono text-accent">›</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </TerminalCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

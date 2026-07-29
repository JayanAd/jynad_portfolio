import { TerminalCard, SectionEyebrow } from "./TerminalCard";

const research = [
  {
    filename: "paper_01.pdf",
    title: "GBEval: A SHAP-based Interpretable Gender Bias Assessment Framework for LLMs",
    status: "Under Review",
    description: "Developing an interpretable framework for assessing gender bias in Large Language Models using SHAP values",
    tags: ["NLP", "XAI", "SHAP", "LLMs", "Bias Detection"],
  },
  {
    filename: "paper_02.pdf",
    title: "Analysis of Invasive Breast Cancer in Mammograms Using YOLO, Explainability and Domain Adaptation",
    status: "ArXiv Preprint",
    description: "Applying advanced computer vision techniques with explainable AI for breast cancer detection",
    tags: ["Computer Vision", "YOLO", "Medical AI", "Domain Adaptation", "XAI"],
    link: "https://arxiv.org/abs/2512.00129",
  },
];

export const Research = () => {
  return (
    <section id="research" className="py-20 px-4 ">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8">
          <div className="space-y-2 animate-fade-in">
            <SectionEyebrow index="06" label="research" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Research &amp; Publications</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {research.map((paper, index) => (
              <TerminalCard
                key={index}
                filename={paper.filename}
                className="animate-fade-in-up"
                right={
                  <span className="text-[11px] font-mono px-2 py-1 rounded-full border border-accent text-accent whitespace-nowrap">
                    [ {paper.status.toUpperCase()} ]
                  </span>
                }
              >
                <h3 className="text-lg font-semibold leading-tight mb-3">{paper.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{paper.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {paper.tags.map((tag, i) => (
                    <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-secondary/50 text-muted-foreground border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
                {paper.link && (
                  <a href={paper.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm font-mono text-accent hover:underline">
                    → read on arXiv
                  </a>
                )}
              </TerminalCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

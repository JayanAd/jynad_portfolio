import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "Data Scientist",
    company: "Dvorak Innovation Pvt. Ltd.",
    location: "Pokhara, Nepal",
    period: "February 2025 - Present",
    description: [
      "Deep Learning & Generative AI",
      "Topic Modeling & LLMs",
      "RAG (Retrieval-Augmented Generation)",
      "Computer Vision & XAI",
    ],
  },
  {
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
        <div className="space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-lg text-muted-foreground">
              Building AI solutions and driving innovation
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="md:ml-20 border-primary/10 bg-card/80 backdrop-blur-sm hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                    <CardContent className="p-6">
                      <div className="absolute -left-12 top-8 hidden md:block">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                          <Briefcase className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2 mb-2 md:hidden">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                          <Briefcase className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-1 hidden md:block">{exp.title}</h3>
                      <p className="text-lg text-muted-foreground font-medium">{exp.company}</p>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                      
                      <ul className="mt-4 space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

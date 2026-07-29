import { GraduationCap } from "lucide-react";
import { TerminalCard, SectionEyebrow } from "./TerminalCard";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 ">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8">
          <div className="space-y-2 animate-fade-in">
            <SectionEyebrow index="01" label="about" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A passionate data scientist specializing in deep learning, NLP, and computer vision and a Certified Computer Engineer.
            </p>
          </div>

          <TerminalCard filename="about.json" className="animate-fade-in-up">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10 border border-accent/20 shrink-0">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Bachelor of Computer Engineering</h3>
                  <p className="text-muted-foreground">
                    Gandaki College of Engineering and Science, Pokhara University
                  </p>
                  <p className="text-sm font-mono text-muted-foreground mt-1">2019 - 2024</p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-mono font-semibold text-accent">
                    CGPA: 3.91/4.00
                  </span>
                  <span className="px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-mono font-semibold text-accent">
                    Dean's List
                  </span>
                </div>

                <div className="pt-2">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Key Coursework:</span> Deep Learning,
                    Natural Language Processing, Probability &amp; Statistics, Linear Algebra, SQL, Calculus
                  </p>
                </div>
              </div>
            </div>
          </TerminalCard>
        </div>
      </div>
    </section>
  );
};

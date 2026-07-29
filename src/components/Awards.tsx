import { Award, Trophy } from "lucide-react";
import { TerminalCard, SectionEyebrow } from "./TerminalCard";

const awards = [
  {
    filename: "award_01.txt",
    title: "Dean's List",
    organization: "Pokhara University",
    year: "2025",
    description: "Awarded for achieving high CGPA in Bachelor of Computer Engineering",
    icon: Award,
  },
  {
    filename: "award_02.txt",
    title: "Runner-up - 10th GCES IT Expo",
    organization: "GCES IT Expo Project Evaluation Team",
    year: "2024",
    description: "Secured second position competing with IT and engineering students across Pokhara city",
    icon: Trophy,
  },
];

export const Awards = () => {
  return (
    <section id="awards" className="py-20 px-4 ">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8">
          <div className="space-y-2 animate-fade-in">
            <SectionEyebrow index="07" label="awards" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Awards &amp; Recognition</h2>
            <p className="text-lg text-muted-foreground">Excellence in academics and innovation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <TerminalCard
                key={index}
                filename={award.filename}
                className="animate-fade-in-up"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 border border-accent/20 shrink-0">
                    <award.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-lg">{award.title}</h3>
                      <span className="text-sm font-mono text-accent shrink-0">{award.year}</span>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">{award.organization}</p>
                    <p className="text-sm text-muted-foreground">{award.description}</p>
                  </div>
                </div>
              </TerminalCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

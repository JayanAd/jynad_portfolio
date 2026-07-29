import { Award, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const awards = [
  {
    title: "Dean's List",
    organization: "Pokhara University",
    year: "2025",
    description: "Awarded for achieving high CGPA in Bachelor of Computer Engineering",
    icon: Award,
  },
  {
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
        <div className="space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Awards & Recognition
            </h2>
            <p className="text-lg text-muted-foreground">
              Excellence in academics and innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {awards.map((award, index) => (
              <Card
                key={index}
                className="border-primary/10 bg-card/80 backdrop-blur-sm hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-primary/10 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent shrink-0 group-hover:scale-110 transition-transform">
                      <award.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                          {award.title}
                        </h3>
                        <span className="text-sm text-muted-foreground shrink-0">
                          {award.year}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {award.organization}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

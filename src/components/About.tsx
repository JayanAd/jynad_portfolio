import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate data scientist specializing in deep learning, NLP, and computer vision
            </p>
          </div>
          
          <Card className="border-primary/10 bg-card/50 backdrop-blur-sm animate-fade-in-up">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Bachelor of Computer Engineering</h3>
                    <p className="text-muted-foreground">
                      Gandaki College of Engineering and Science, Pokhara University
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">2019 - 2024</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                        <span className="text-sm font-semibold text-primary">CGPA: 3.91/4.00</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                        <span className="text-sm font-semibold text-accent">Dean's List</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Key Coursework:</span> Deep Learning, 
                      Natural Language Processing, Probability & Statistics, Linear Algebra, SQL, Calculus
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NeuralNetwork } from "./NeuralNetwork";

const ROLES = ["AI Engineer", "AI Researcher", "Data Scientist"];

const useTypewriter = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const full = ROLES[roleIdx];
      let delay = 65;
      if (!deleting) {
        charIdx++;
        setText(full.slice(0, charIdx));
        if (charIdx >= full.length) { deleting = true; delay = 1400; }
      } else {
        charIdx--;
        setText(full.slice(0, charIdx));
        delay = 35;
        if (charIdx <= 0) { deleting = false; roleIdx = (roleIdx + 1) % ROLES.length; delay = 250; }
      }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 250);
    return () => clearTimeout(timer);
  }, []);

  return text;
};

export const Hero = () => {
  const typedRole = useTypewriter();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      <NeuralNetwork />
      
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono font-medium mb-4">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse-glow mr-2"></span>
              {typedRole}<span className="animate-pulse">_</span>
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in-up">
              Jayan Adhikari
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Transforming data into intelligent solutions through deep learning, 
            NLP, and computer vision
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground animate-fade-in-up font-mono">
            <a href="mailto:jayanadkh@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              jayanadkh@gmail.com
            </a>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all"
              onClick={() => scrollToSection("contact")}
            >
              Get in Touch
              <Mail className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="group border-primary/20 hover:border-accent hover:bg-accent/10"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
              <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-4 pt-8 animate-fade-in-up">
            <a
              href="https://github.com/JayanAd"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all group"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/jayanad/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all group"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

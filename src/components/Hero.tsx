import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { NeuralNetwork } from "./NeuralNetwork";
import { TerminalCard } from "./TerminalCard";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-24 bg-gradient-to-b from-background to-secondary/20">
      <NeuralNetwork />

      <div className="relative z-10 w-full max-w-2xl mx-auto">
        <TerminalCard filename="whoami.sh" variant="window" className="backdrop-blur-sm bg-card/90 shadow-2xl">
          <div className="text-sm font-mono text-muted-foreground">
            <span className="text-accent">$</span> whoami
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mt-2 mb-1">
            Jayan Adhikari
          </h1>
          <div className="text-sm font-mono text-accent mb-6 min-h-[20px]">
            {typedRole}<span className="animate-pulse">_</span>
          </div>

          <div className="text-sm font-mono text-muted-foreground">
            <span className="text-accent">$</span> cat mission.txt
          </div>
          <p className="text-base md:text-lg text-muted-foreground mt-2 mb-6 max-w-lg">
            Transforming data into intelligent solutions through deep learning, NLP, and computer vision
          </p>

          <div className="text-sm font-mono text-muted-foreground mb-2">
            <span className="text-accent">$</span> contact --list
          </div>
          <a href="mailto:jayanadkh@gmail.com" className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-accent transition-colors mb-6 w-fit">
            <Mail className="w-4 h-4" />
            jayanadkh@gmail.com
          </a>

          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={() => scrollToSection("contact")}
              className="font-mono font-semibold text-sm px-5 py-2.5 rounded-md bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
            >
              [ get_in_touch ]
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="font-mono font-semibold text-sm px-5 py-2.5 rounded-md border border-accent text-accent hover:bg-accent/10 transition-colors"
            >
              [ view_projects ]
            </button>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/JayanAd" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-muted-foreground hover:text-accent transition-colors flex items-center gap-1.5">
              <Github className="w-4 h-4" /> github ↗
            </a>
            <a href="https://www.linkedin.com/in/jayanad/" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-muted-foreground hover:text-accent transition-colors flex items-center gap-1.5">
              <Linkedin className="w-4 h-4" /> linkedin ↗
            </a>
          </div>
        </TerminalCard>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float z-10">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

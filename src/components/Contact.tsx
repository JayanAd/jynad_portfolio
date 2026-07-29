import { Mail, Github, Linkedin } from "lucide-react";
import { TerminalCard, SectionEyebrow } from "./TerminalCard";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-2 animate-fade-in">
            <SectionEyebrow index="08" label="contact" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Let's Connect</h2>
            <p className="text-lg text-muted-foreground">Open to opportunities and collaborations in AI and Data Science</p>
          </div>

          <TerminalCard filename="contact.sh" className="animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="mailto:jayanadkh@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-accent transition-all group"
              >
                <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-mono text-accent">email</p>
                  <p className="font-medium text-sm md:text-base">jayanadkh@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-4 rounded-lg border border-border">
                <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                  <Github className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-mono text-accent">github</p>
                  <a
                    href="https://github.com/JayanAd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-accent transition-colors"
                  >
                    @JayanAd
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/jayanad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center font-mono font-semibold text-sm px-6 py-3 rounded-md bg-accent text-accent-foreground hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
                <a
                  href="https://github.com/JayanAd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center font-mono font-semibold text-sm px-6 py-3 rounded-md border border-accent text-accent hover:bg-accent/10 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  View GitHub
                </a>
              </div>
            </div>
          </TerminalCard>
        </div>
      </div>
    </section>
  );
};

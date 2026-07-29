import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground">
              Open to opportunities and collaborations in AI and Data Science
            </p>
          </div>
          
          <Card className="border-primary/10 bg-card/50 backdrop-blur-sm animate-fade-in-up">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <a
                  href="mailto:adhikarijayan10@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-sm md:text-base">adhikarijayan10@gmail.com</p>
                  </div>
                </a>
                
                <a
                  href="tel:+9779816675010"
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+977 9816675010</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 p-4 rounded-lg border border-border">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Nepal</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 rounded-lg border border-border">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                    <Github className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">GitHub</p>
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
                  >
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all"
                    >
                      <Linkedin className="mr-2 w-5 h-5" />
                      Connect on LinkedIn
                    </Button>
                  </a>
                  <a
                    href="https://github.com/JayanAd"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto border-primary/20 hover:border-accent hover:bg-accent/10"
                    >
                      <Github className="mr-2 w-5 h-5" />
                      View GitHub
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

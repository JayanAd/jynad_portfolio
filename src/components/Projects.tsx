// import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
const projects = [{
  title: "YouTube Comment Sentiment Analyzer",
  description: "Chrome plugin with end-to-end sentiment analysis pipeline featuring NLP preprocessing, ML/DL models, and Optuna hyperparameter tuning",
  tags: ["NLP", "Deep Learning", "MLflow", "DVC", "AWS", "Flask", "CI/CD"],
  highlights: ["Reproducibility with DVC and MLflow", "Deployed on AWS with Flask REST API", "Automated CI/CD with GitHub Actions"]
}, {
  title: "Price Predictor (Fine-Tuning Llama 3.1)",
  description: "Parameter Efficient Fine-Tuning (PEFT) of Llama 3.1 8B with advanced quantization and visualization",
  tags: ["LLM", "PEFT", "LoRA", "Quantization", "W&B"],
  highlights: ["4-bit Quantized LoRA configuration", "SFTTrainer for efficient training", "Real-time monitoring with Weights & Biases"]
}, {
  title: "Self-Driving Car Prototype",
  description: "End-to-end autonomous driving system implementing NVIDIA's CNN architecture with real-time lane and object detection",
  tags: ["Computer Vision", "CNN", "YOLO", "TensorFlow", "PyTorch"],
  highlights: ["Real-time 30 FPS inference", "Multi-threaded parallel processing", "Based on Bojarski et al., 2016 paper"]
}];
export const Projects = () => {
  return <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">Building intelligent systems with cutting-edge AI technologies
Please visit GitHub for more..</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => <Card key={index} className="border-primary/10 bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-primary/10 group animate-fade-in-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                      <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded"></div>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-accent mt-1.5 shrink-0"></span>
                        <span>{highlight}</span>
                      </li>)}
                  </ul>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, i) => <Badge key={i} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
import { FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const research = [{
  title: "GBEval: A SHAP-based Interpretable Gender Bias Assessment Framework for LLMs",
  status: "Under Review",
  description: "Developing an interpretable framework for assessing gender bias in Large Language Models using SHAP values",
  tags: ["NLP", "XAI", "SHAP", "LLMs", "Bias Detection"]
}, {
  title: "Analysis of Invasive Breast Cancer in Mammograms Using YOLO, Explainability and Domain Adaptation",
  status: "Finalizing Manuscript - Expected 2025",
  description: "Applying advanced computer vision techniques with explainable AI for breast cancer detection",
  tags: ["Computer Vision", "YOLO", "Medical AI", "Domain Adaptation", "XAI"]
}];
export const Research = () => {
  return <section id="research" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Research & Publications
            </h2>
            <p className="text-lg text-muted-foreground">
          </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {research.map((paper, index) => <Card key={index} className="border-primary/10 bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-primary/10 group animate-fade-in-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardHeader>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <Badge variant="outline" className="border-accent/50 text-accent">
                      {paper.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {paper.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {paper.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {paper.tags.map((tag, i) => <Badge key={i} variant="secondary" className="text-xs">
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
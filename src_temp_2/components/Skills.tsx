import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const skillCategories = [{
  title: "Programming & Frameworks",
  skills: [{
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  }, {
    name: "FastAPI",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
  }, {
    name: "PyTorch",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
  }, {
    name: "TensorFlow",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
  }]
}, {
  title: "Databases",
  skills: [{
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  }, {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
  }, {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  }]
}, {
  title: "NLP & LLMs",
  skills: [{
    name: "Transformers",
    logo: "https://huggingface.co/front/assets/huggingface_logo.svg"
  }, {
    name: "PEFT/LoRA",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  }, {
    name: "RAG",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  }, {
    name: "Prompt Engineering",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg"
  }]
}, {
  title: "MLOps & Tools",
  skills: [{
    name: "DVC",
    logo: "https://dvc.org/img/logo-github-readme.svg"
  }, {
    name: "MLflow",
    logo: "https://www.mlflow.org/img/mlflow-black.svg"
  }, {
    name: "WandB",
    logo: "https://raw.githubusercontent.com/wandb/assets/main/wandb-logo-yellow-dots-black-wb.svg"
  }, {
    name: "Optuna",
    logo: "https://raw.githubusercontent.com/optuna/optuna/master/docs/image/optuna-logo.png"
  }, {
    name: "Git/GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  }]
}, {
  title: "Computer Vision",
  skills: [{
    name: "YOLO",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"
  }, {
    name: "Object Detection",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"
  }, {
    name: "Image Segmentation",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"
  }]
}, {
  title: "XAI & GenAI",
  skills: [{
    name: "SHAP",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  }, {
    name: "LIME",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  }, {
    name: "Grad-CAM",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  }, {
    name: "Langchain",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  }, {
    name: "Langgraph",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  }]
}];
export const Skills = () => {
  return <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground">
          </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => <Card key={index} className="border-primary/10 bg-card/80 backdrop-blur-sm hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-primary/10 animate-fade-in-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent"></span>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, i) => <div key={i} className="group flex flex-col items-center gap-2 p-3 rounded-lg border border-border hover:border-accent/50 bg-background/50 hover:bg-accent/5 transition-all duration-300 hover:scale-105">
                        <div className="relative w-12 h-12 flex items-center justify-center">
                          <img src={skill.logo} alt={`${skill.name} logo`} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110" onError={e => {
                      // Fallback if image fails to load
                      e.currentTarget.style.display = 'none';
                    }} />
                          {/* Glow effect on hover */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                        </div>
                        <span className="text-xs font-medium text-center group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                      </div>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Research } from "../components/Research";
import { Awards } from "../components/Awards";
import { Contact } from "../components/Contact";
const Index = () => {
  return <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Research />
      <Awards />
      <Contact />
      
      <footer className="py-8 px-4 border-t border-border bg-secondary/20">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 Jayan Adhikari</p>
        </div>
      </footer>
    </div>;
};
export default Index;
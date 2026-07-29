import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { ResearchInterests } from "../components/ResearchInterests";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Research } from "../components/Research";
import { Awards } from "../components/Awards";
import { Contact } from "../components/Contact";

const Index = () => {
  return (
    <div style={{ minHeight: "100vh", position: "relative", overflowX: "hidden" }}>
      <div
        style={{
          position: "fixed", inset: 0, pointerEvents: "none", zIndex: 5,
          background: "repeating-linear-gradient(to bottom, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 3px)",
        }}
      />
      <Navbar />
      <Hero />
      <About />
      <ResearchInterests />
      <Experience />
      <Projects />
      <Skills />
      <Research />
      <Awards />
      <Contact />

      <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: "1px solid var(--border-t)" }}>
        <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 12, color: "var(--muted-t)" }}>
          $ status: open to opportunities in AI &amp; Data Science
        </span>
      </footer>
    </div>
  );
};
export default Index;

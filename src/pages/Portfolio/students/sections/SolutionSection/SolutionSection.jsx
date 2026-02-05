import "./SolutionSection.css";
import SolutionHero from "./SolutionHero";
import SolutionCards from "./SolutionCards";
import SolutionCompare from "./SolutionCompare";
import SloutionCTA from "./SolutionCTA";
import SolutionCTA from "./SolutionCTA";

export default function SolutionSection() {
  return (
    <section className="solution-section">
      <SolutionHero />
    
      <SolutionCompare />
      
    </section>
  );
}

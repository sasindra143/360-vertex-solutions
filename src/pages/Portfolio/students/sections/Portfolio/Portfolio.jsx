import "./Portfolio.css";
import TemplateCard from "./TemplateCard";

export default function Portfolio() {
  return (
    <section className="portfolio-section" id="portfolio">
      {/* ===== TOP CONTENT ===== */}
      <div className="portfolio-header">
        <span className="portfolio-pill">PORTFOLIO TEMPLATES</span>

        <h2>
          Choose Your <span>Perfect Template</span>
        </h2>

        <p>
          Explore our handcrafted portfolio templates designed to make you
          stand out. Preview them live right here!
        </p>
      </div>

      {/* ===== CARDS ===== */}
      <div className="portfolio-grid">
        <TemplateCard
          badge="MOST POPULAR"
          urlText="sasindra-m-portfolio.netlify.app"
          image="https://res.cloudinary.com/dvknx0hpm/image/upload/v1770167886/Screenshot_2026-02-04_064724_mrivkc.png"
          plan="STANDARD"
          title="Full Stack Developer"
          description="Clean, modern design perfect for data analysts and professionals seeking a polished online presence."
          features={[
            "Modern Layout",
            "Project Showcase",
            "Contact Form",
            "Responsive",
          ]}
          link="https://sasindraportfolio.netlify.app/"
        />

        <TemplateCard
          urlText="sasindra-portfolio.netlify.app"
          image="https://res.cloudinary.com/dvknx0hpm/image/upload/v1764908869/Screenshot_2025-12-05_095413_zj3ogn.png"
          plan="PROFESSIONAL"
          title="Creative Starter"
          description="Elegant and minimalist portfolio design ideal for showcasing your skills and achievements beautifully."
          features={[
            "Clean Design",
            "Easy Navigation",
            "Skills Section",
            "Mobile First",
          ]}
          link="https://sasindra143.github.io/My-Portfolio/"
        />
      </div>

      {/* ===== BOTTOM CONTENT ===== */}
      <div className="portfolio-footer">
        <p>
          Can&apos;t find the perfect fit?
          <span> We&apos;ll create a custom design just for you.</span>
        </p>

        <button className="portfolio-footer-btn">
          Request Custom Design →
        </button>
      </div>
    </section>
  );
}

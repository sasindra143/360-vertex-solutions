import "./About.css";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* HEADER */}
        <h2 className="about-title reveal">
          About <span>360 Vertex Solutions</span>
        </h2>

        <p className="about-intro reveal">
          360 Vertex Solutions is a full-service digital and career-enablement
          platform focused on execution. We work with students, job seekers,
          startup founders, and business owners who require deployable results —
          not theory.
        </p>

        {/* MISSION */}
        <div className="about-row reveal">
          <div className="about-text">
            <h3>Our Mission</h3>
            <ul>
              <li>Deliver industry-relevant websites, portfolios, and platforms</li>
              <li>Enable job-seekers with ATS-optimized resumes & real projects</li>
              <li>Support startups with scalable and affordable digital solutions</li>
              <li>Maintain transparency, quality, and long-term support</li>
            </ul>
          </div>

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
              alt="Career Training"
            />
          </div>
        </div>

        {/* VISION */}
        <div className="about-row reverse reveal">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
              alt="Vision Technology"
            />
          </div>

          <div className="about-text">
            <h3>Our Vision</h3>
            <p>
              To build a trusted digital and career growth ecosystem where
              technology, design, and job-ready skills intersect with measurable
              impact and long-term value.
            </p>
          </div>
        </div>

        {/* SERVICES */}
        <div className="about-row reveal">
          <div className="about-text">
            <h3>What We Deliver</h3>
            <ul>
              <li>Business, Portfolio & E-commerce Websites</li>
              <li>ATS-Optimized Resume Building</li>
              <li>IT & Creative Portfolio Development</li>
              <li>Company-Wise Interview Preparation</li>
              <li>CSE & IT Academic + Industry Projects</li>
              <li>Graphic Design & Brand Assets</li>
            </ul>
          </div>

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
              alt="Web Development"
            />
          </div>
        </div>

        {/* PHILOSOPHY */}
        <div className="about-philosophy reveal">
          <h3>Core Philosophy</h3>
          <div className="philosophy-grid">
            <span>Execution beats theory</span>
            <span>Skills matter only when they deliver results</span>
            <span>Design, technology & strategy must align</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;

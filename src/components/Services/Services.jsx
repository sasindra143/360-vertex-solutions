import "./Services.css";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "Website Development",
      lines: [
        "Business, portfolio & e-commerce websites",
        "Responsive, fast & SEO-optimized builds",
        "Focused on real business conversion",
      ],
      link: "/web-development",
      cta: "Explore Web Development",
    },
    {
      title: "ATS Resume Building",
      lines: [
        "ATS-optimized professional resumes",
        "Recruiter-focused keyword strategy",
        "Designed for real shortlisting",
      ],
      link: "/resume-building",
      cta: "Explore Resume Services",
    },
    {
      title: "Portfolio Creation",
      lines: [
        "IT & creative professional portfolios",
        "Real project-based showcases",
        "Optimized for hiring managers",
      ],
      link: "/portfolio-creation",
      cta: "Explore Portfolio Creation",
    },
    {
      title: "Interview Preparation",
      lines: [
        "Company-wise interview questions",
        "Technical + HR round preparation",
        "Based on actual hiring trends",
      ],
      link: "/interview-prep",
      cta: "Explore Interview Prep",
    },
    {
      title: "Project Development",
      lines: [
        "Real-world CSE & IT projects",
        "Industry-aligned implementations",
        "Used for resumes & portfolios",
      ],
      link: "/project-development",
      cta: "Explore Projects",
    },
    {
      title: "Graphic Design & Branding",
      lines: [
        "Logos, banners & thumbnails",
        "Brand-focused visual identity",
        "Designed for digital growth",
      ],
      link: "/graphic-design",
      cta: "Explore Branding",
    },
  ];

  return (
    <section className="services-section" id="home-services">
      <div className="services-container">
        <header className="services-header">
          <h2 className="services-title">
            Our <span>Services</span>
          </h2>

          <p className="services-intro">
            Execution-focused digital and career services built for
            <strong> measurable results</strong> — not empty promises.
          </p>
        </header>

        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={index}>
              <div className="service-content">
                <h3>{service.title}</h3>

                <ul>
                  {service.lines.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>

              {/* 🔥 NAVIGATION FIXED */}
              <Link
                to={service.link}
                className="service-btn"
                onClick={() => window.scrollTo(0, 0)}
              >
                {service.cta} →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

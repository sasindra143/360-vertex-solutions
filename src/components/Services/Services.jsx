import "./Services.css";

function Services() {
  const services = [
    {
      title: "Website Development",
      lines: [
        "Business, portfolio & e-commerce websites",
        "Responsive, fast & SEO-optimized builds",
        "Focused on real business conversion",
      ],
      link: "#",
    },
    {
      title: "ATS Resume Building",
      lines: [
        "ATS-optimized professional resumes",
        "Recruiter-focused keyword strategy",
        "Designed for real shortlisting",
      ],
      link: "#",
    },
    {
      title: "Portfolio Creation",
      lines: [
        "IT & creative professional portfolios",
        "Real project-based showcases",
        "Optimized for hiring managers",
      ],
      link: "#",
    },
    {
      title: "Interview Preparation",
      lines: [
        "Company-wise interview questions",
        "Technical + HR round preparation",
        "Based on actual hiring trends",
      ],
      link: "#",
    },
    {
      title: "Project Development",
      lines: [
        "Real-world CSE & IT projects",
        "Industry-aligned implementations",
        "Used for resumes & portfolios",
      ],
      link: "#",
    },
    {
      title: "Graphic Design & Branding",
      lines: [
        "Logos, banners & thumbnails",
        "Brand-focused visual identity",
        "Designed for digital growth",
      ],
      link: "#",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2 className="services-title">
          Our <span>Services</span>
        </h2>

        <p className="services-intro">
          Execution-focused digital and career services built for measurable
          results — not promises.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>

              <ul>
                {service.lines.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>

              <a href={service.link} className="service-btn">
                Explore →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ✅ THIS LINE FIXES YOUR ERROR */
export default Services;

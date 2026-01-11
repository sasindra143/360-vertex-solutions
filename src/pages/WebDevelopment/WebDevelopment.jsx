import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./WebDevelopment.css";

/* ===============================
   DEFAULT CLIENT WORKS (FALLBACK)
================================ */
const defaultClientWorks = [
  {
    title: "PR Skillverse",
    type: "Education Business Website",
    goal: "Increase online credibility and student enquiries",
    solution:
      "Designed a performance-optimized business website with clear CTAs, SEO structure, and mobile-first UX.",
    result: "Higher inbound enquiries and improved brand trust",
    liveLink: "https://www.prskillverse.com",
    instaLink: "https://www.instagram.com/",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    ],
  },
];

/* ===============================
   SERVICES
================================ */
const services = [
  {
    title: "Business Websites",
    desc1:
      "Conversion-focused business websites designed to establish trust and drive enquiries.",
    desc2:
      "Ideal for startups, consultants, and SMEs focused on measurable growth.",
  },
  {
    title: "Portfolio Websites",
    desc1:
      "Career-driven portfolios that highlight skills, projects, and outcomes.",
    desc2:
      "Built for students and job seekers aiming for recruiter shortlisting.",
  },
  {
    title: "E-commerce Development",
    desc1:
      "Scalable online stores optimized for speed, UX, and conversions.",
    desc2:
      "Best suited for product brands and digital-first businesses.",
  },
  {
    title: "Custom Web Applications",
    desc1:
      "Tailored solutions designed around specific workflows and business logic.",
    desc2:
      "For startups and entrepreneurs with unique requirements.",
  },
  {
    title: "Landing Pages",
    desc1:
      "High-conversion landing pages for ads, funnels, and campaigns.",
    desc2:
      "Focused on clarity, speed, and action.",
  },
  {
    title: "Website Redesign & Optimization",
    desc1:
      "Modernization of outdated websites with SEO and UX improvements.",
    desc2:
      "For businesses struggling with engagement or performance.",
  },
];

function WebDevelopment() {
  /* ===============================
     SEO
  ============================== */
  useEffect(() => {
    document.title = "Web Development Services | 360 Vertex Solutions";

    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        "High-performance web development services for students, job seekers, startups, and businesses."
      );
    }
  }, []);

  /* ===============================
     CLIENT WORKS (ADMIN CONTROLLED)
  ============================== */
  const [clientWorks, setClientWorks] = useState(defaultClientWorks);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("webDevProjects"));
    if (stored && stored.length > 0) {
      setClientWorks(stored);
    }
  }, []);

  /* ===============================
     LIGHTBOX STATE
  ============================== */
  const [galleryImages, setGalleryImages] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = galleryImages ? "hidden" : "auto";
  }, [galleryImages]);

  const openGallery = (images) => {
    setGalleryImages(images);
    setActiveIndex(0);
  };

  const closeGallery = () => {
    setGalleryImages(null);
    setActiveIndex(0);
  };

  const nextImage = () => {
    setActiveIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setActiveIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <main className="webdev">
      {/* ===============================
         HERO
      ============================== */}
      <section className="hero-new">
        <div className="hero-container">
          <div className="hero-left">
            <h1>
              Web Development Services <br />
              Built for Growth, Hiring & Conversion
            </h1>
            <p className="hero-sub">
              We build high-performance websites that help students get
              shortlisted, startups acquire customers, and businesses scale.
            </p>
            <p className="hero-trust">
              Trusted by students, job seekers, startups, and growing businesses
              across India
            </p>
          </div>

          <div className="hero-right">
            <a href="#contact" className="btn primary hero-btn">
              Get Website Strategy
            </a>
            <a href="#services" className="btn secondary hero-btn">
              Explore Services
            </a>
            <span className="hero-micro">
              Free strategy • Clear roadmap • No obligation
            </span>
          </div>
        </div>
      </section>

      {/* ===============================
         SERVICES
      ============================== */}
      <section className="section" id="services">
        <h2>Web Development Services</h2>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <h3>{s.title}</h3>
              <p>{s.desc1}</p>
              <p>{s.desc2}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===============================
         CLIENT WORK
      ============================== */}
      <section className="section" id="work">
        <h2>Client Work & Use Cases</h2>

        <div className="work-grid">
          {clientWorks.map((work, i) => (
            <div className="work-card" key={i}>
              <div className="work-image-box">
                <img src={work.images?.[0]} alt={work.title} />
                {work.images && work.images.length > 1 && (
                  <div
                    className="work-image-count"
                    onClick={() => openGallery(work.images)}
                  >
                    +{work.images.length - 1}
                  </div>
                )}
              </div>

              <h3 className="work-title">{work.title}</h3>

              <span className="work-type">{work.type}</span>

              <p><strong>Goal:</strong> {work.goal}</p>
              <p><strong>Solution:</strong> {work.solution}</p>
              <p><strong>Result:</strong> {work.result}</p>

              <div className="work-actions">
                {work.liveLink && (
                  <a
                    href={work.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn primary small"
                  >
                    Live Website
                  </a>
                )}

                {work.instaLink && (
                  <a
                    href={work.instaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn secondary small"
                  >
                    Instagram Video
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===============================
         LIGHTBOX
      ============================== */}
      {galleryImages && (
        <div className="lightbox-overlay" onClick={closeGallery}>
          <div
            className="lightbox-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lightbox-close" onClick={closeGallery}>
              ✕
            </button>

            <button className="lightbox-prev" onClick={prevImage}>
              ‹
            </button>

            <img
              src={galleryImages[activeIndex]}
              className="lightbox-image"
              alt="Preview"
            />

            <button className="lightbox-next" onClick={nextImage}>
              ›
            </button>
          </div>
        </div>
      )}

      {/* ===============================
         FINAL CTA
      ============================== */}
      <section className="final-cta" id="contact">
        <h2>Ready to Build a Website That Delivers Real Results?</h2>

        <p>
          Get a clear strategy, realistic timeline, and transparent guidance
          before you invest.
        </p>

        <Link
          to="/web-development/consultation"
          className="btn primary large"
        >
          Book Free Consultation
        </Link>

        <p className="cta-note">
          No sales pressure. Just honest advice and a clear roadmap.
        </p>
      </section>
    </main>
  );
}

export default WebDevelopment;

import "./Hero.css";

function Hero() {
  const goToServices = () => {
    window.location.hash = "#services";
  };

  const goToContact = () => {
    window.location.hash = "#contact";
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-heading">
          Shape Your Future
          <br />
          with{" "}
          <span className="hero-highlight">
            360° Vertex Solution’s
          </span>
        </h1>

        <p className="hero-text">
          At 360° Vertex Solutions, we empower students, job seekers, and
          professionals with the tools and guidance they need to stand out in
          today's competitive world. From portfolio websites to resume building,
          e-commerce solutions, graphic design, and interview preparation, we
          make success achievable for everyone.
        </p>

        <div className="hero-buttons">
          <button
            className="btn-primary"
            onClick={goToServices}
          >
            Explore Services
          </button>

          <button
            className="btn-secondary"
            onClick={goToContact}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

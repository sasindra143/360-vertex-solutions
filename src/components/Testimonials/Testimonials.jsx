import "./Testimonials.css";

const testimonials = [
  {
    name: "Karthik Kukkapalli",
    image: "https://i.pravatar.cc/150?img=15",
    text:
      "From mechanical engineering to software development, 360 Vertex Solutions provided a structured and execution-driven path that actually worked.",
  },
  {
    name: "Asim Ahmed",
    image: "https://i.pravatar.cc/150?img=12",
    text:
      "Real projects, tough mock interviews, and constant feedback made me industry-ready instead of just certified.",
  },
  {
    name: "Deep Shika",
    image: "https://i.pravatar.cc/150?img=47",
    text:
      "Clear expectations, real-world delivery, and practical mentoring helped me gain confidence fast.",
  },
  {
    name: "Vinay Kumar R",
    image: "https://i.pravatar.cc/150?img=21",
    text:
      "Execution-focused guidance and hands-on work separated Vertex Solutions from generic platforms.",
  },
  {
    name: "Pooja Girish",
    image: "https://i.pravatar.cc/150?img=32",
    text:
      "Accountability, real reviews, and real ownership. No fluff, no shortcuts.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-header">
        <h2>What Our Clients & Learners Say</h2>
        <p>
          Real feedback from professionals who worked with 360 Vertex Solutions.
        </p>
      </div>

      <div className="testimonial-marquee">
        <div className="testimonial-track">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-text">“{item.text}”</p>

              <div className="testimonial-user">
                <img src={item.image} alt={item.name} />
                <strong>{item.name}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

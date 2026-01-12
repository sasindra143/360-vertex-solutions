import "./Testimonials.css";

const testimonials = [
  {
    name: "Ram",
    image: "https://res.cloudinary.com/dvknx0hpm/image/upload/v1747906461/mama_djalmo.jpg",
    text:
      "360° Vertex Solutions delivered exactly what we needed — a clean, professional website that truly represents PR Skillverse. The site is fast, easy to navigate, and works perfectly on mobile. Their communication and attention to detail made the entire process smooth and stress-free",
  },
  {
    name: "Vali",
    image: "https://res.cloudinary.com/dvknx0hpm/image/upload/v1760504184/WhatsApp_Image_2025-10-14_at_21.52.00_22e76dad_fz66sf.jpg",
    text:
      "A well-structured portfolio with clean design, smooth performance, and clear presentation of skills. Everything feels purposeful and easy to navigate.",
  },
  {
    name: "Praveen",
    image: "https://res.cloudinary.com/dvknx0hpm/image/upload/v1768188154/WhatsApp_Image_2025-12-22_at_15.01.14_afayup.jpg",
    text:
      "Clear expectations, real-world delivery, and practical mentoring helped me gain confidence fast.",
  }
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

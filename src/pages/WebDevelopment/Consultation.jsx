import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Consultation.css";

const Consultation = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, requirement } = formData;

    const message = `
📌 *New Web Development Consultation Request*

👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone || "Not provided"}

📝 Requirement:
${requirement}
    `;

    const whatsappNumber = "917331159645";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="consultation-page">
      {/* BACK BUTTON */}
      <button
        className="back-btn"
        onClick={() => navigate("/web-development")}
        aria-label="Go back"
      >
        ❮
      </button>

      <div className="consultation-container">
        <h1>Free Web Development Consultation</h1>

        <p>
          This is not a sales call. Share your requirements and we’ll respond
          with a clear plan, realistic timeline, and honest guidance.
        </p>

        <form className="consultation-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Phone / WhatsApp</label>
            <input
              type="tel"
              name="phone"
              placeholder="Optional but helpful"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Project Requirement</label>
            <textarea
              name="requirement"
              rows="5"
              placeholder="Describe what you want to build"
              required
              value={formData.requirement}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn primary large">
            Send via WhatsApp
          </button>
        </form>

        <p className="consultation-note">
          No spam. No pressure. Just practical advice.
        </p>
      </div>
    </section>
  );
};

export default Consultation;

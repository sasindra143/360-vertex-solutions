import { useState } from "react";
import "./Contact.css";

// ✅ REAL ICONS
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaTelegramPlane,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "917331159645";

    const text = `
New Enquiry - 360 Vertex Solutions

Name: ${form.name}
Phone: ${form.phone}
Message: ${form.message}
    `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-info">
          <h2>Contact 360 Vertex Solutions</h2>
          <p>
            Have a project, career enquiry, or business requirement?
            Start a direct conversation with us.
          </p>

          <div className="contact-details">
            <p>
              <FaPhoneAlt /> +91 73311 59645
            </p>
            <p>
              <FaEnvelope /> vertexsolutions06@gmail.com
            </p>
          </div>

          {/* SOCIAL MEDIA ICONS */}
          <div className="social-links">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://t.me" target="_blank" rel="noreferrer">
              <FaTelegramPlane />
            </a>
            <a
              href="https://wa.me/917331159645"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send an Enquiry</h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Your WhatsApp Number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            <FaWhatsapp /> Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

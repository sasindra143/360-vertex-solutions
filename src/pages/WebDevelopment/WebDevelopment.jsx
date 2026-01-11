import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./WebDevelopment.css";

/* PAGE SECTIONS */
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Features from "./Features/Features";
import ClientWork from "./ClientWork/ClientWork";
import FinalCTA from "./FinalCTA/FinalCTA";

export default function WebDevelopment() {
  const navigate = useNavigate();

  // ✅ FORCE PAGE TO START AT TOP
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="webdev-page">
      {/* 🔙 BACK BUTTON */}
      <button
        className="webdev-back-btn"
        onClick={() => navigate("/services")}
        aria-label="Back to services"
      >
        ← Back to Services
      </button>

      {/* HERO */}
      <Hero />

      {/* WEB DEV SERVICES */}
      <Services />

      {/* FEATURES */}
      <Features />

      {/* CLIENT WORK */}
      <ClientWork />

      {/* CTA */}
      <FinalCTA />
    </main>
  );
}

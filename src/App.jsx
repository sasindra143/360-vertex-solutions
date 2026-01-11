import { Routes, Route } from "react-router-dom";

/* LAYOUT */
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FloatingButtons from "./components/FloatingButtons/FloatingButtons";

/* MAIN SECTIONS */
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";

/* AUTH */
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Profile from "./components/Profile/Profile";

/* SERVICE PAGES */
import WebDevelopment from "./pages/WebDevelopment/WebDevelopment";
import Consultation from "./pages/WebDevelopment/Consultation";

/* ADMIN (WEB DEVELOPMENT ONLY) */
import WebDevAdmin from "./pages/Admin/WebDevAdmin";

/* HOME PAGE (COMPOSED) */
function HomePage() {
  return (
    <>
      <Header />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
      <FloatingButtons />
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* MAIN WEBSITE */}
      <Route path="/" element={<HomePage />} />

      {/* AUTH */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* PROFILE */}
      <Route
        path="/profile"
        element={
          <>
            <Header />
            <Profile />
            <FloatingButtons />
          </>
        }
      />

      {/* SERVICE: WEB DEVELOPMENT */}
      <Route
        path="/web-development"
        element={
          <>
            <Header />
            <WebDevelopment />
            <Footer />
            <FloatingButtons />
          </>
        }
      />

      {/* SERVICE: WEB DEVELOPMENT → CONSULTATION */}
      <Route
        path="/web-development/consultation"
        element={
          <>
            <Header />
            <Consultation />
            <Footer />
            <FloatingButtons />
          </>
        }
      />

      {/* ADMIN: WEB DEVELOPMENT PROJECTS */}
      <Route
        path="/admin/web-development"
        element={
          <>
            <Header />
            <WebDevAdmin />
          </>
        }
      />
    </Routes>
  );
}

export default App;

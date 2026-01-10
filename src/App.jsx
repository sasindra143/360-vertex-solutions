import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Profile from "./components/Profile/Profile";

function App() {
  const getPage = () =>
    window.location.hash.replace("#", "") || "home";

  const [page, setPage] = useState(getPage());

  useEffect(() => {
    const onHashChange = () => setPage(getPage());
    window.addEventListener("hashchange", onHashChange);
    return () =>
      window.removeEventListener("hashchange", onHashChange);
  }, []);

  /* 🔐 AUTH (FULL SCREEN) */
  if (page === "login") return <Login />;
  if (page === "signup") return <Signup />;

  /* 👤 PROFILE (FULL PAGE) */
  if (page === "profile") {
    return (
      <>
        <Header />
        <Profile />
      </>
    );
  }

  /* 🌐 MAIN WEBSITE (STACKED FLOW) */
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
    </>
  );
}

export default App;

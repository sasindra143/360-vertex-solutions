import { Routes, Route, Outlet, Navigate } from "react-router-dom";

/* GLOBAL */
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FloatingButtons from "./components/FloatingButtons/FloatingButtons";

/* HOME */
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";

/* AUTH */
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ResetPassword from "./components/Auth/ResetPassword";
import Profile from "./components/Profile/Profile";

/* WEB DEV */
import WebDevelopment from "./pages/WebDevelopment/WebDevelopment";
import Consultation from "./pages/WebDevelopment/Consultation";
import ClientWork from "./pages/WebDevelopment/ClientWork/ClientWork";

/* PORTFOLIO */
import PortfolioMainPage from "./pages/Portfolio/PortfolioMainPage";
import StudentsPage from "./pages/Portfolio/students/StudentsPage";
import ProfileSection from "./pages/Portfolio/students/sections/ProfileSection/ProfileSection";

/* ADMIN */
import WebDevAdmin from "./pages/Admin/WebDevAdmin";

/* ================= LAYOUTS ================= */

function HomeLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <FloatingButtons />
    </>
  );
}

function WebDevLayout() {
  return (
    <>
      <Outlet />
      <Footer />
      <FloatingButtons />
    </>
  );
}

function StudentsLayout() {
  return <Outlet />;
}

function AuthLayout() {
  return <Outlet />;
}

function AdminLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

/* ================= PAGES ================= */

function HomePage() {
  return (
    <>
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}

function NotFound() {
  return (
    <div style={{ padding: "120px", textAlign: "center" }}>
      <h1>404</h1>
      <p>Page not found</p>
    </div>
  );
}

/* ================= ROUTES ================= */

export default function App() {
  return (
    <Routes>

      {/* MAIN WEBSITE */}
      <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/portfolio-creation" element={<PortfolioMainPage />} />
      </Route>

      {/* STUDENTS PORTFOLIO */}
      <Route element={<StudentsLayout />}>
        <Route path="/portfolio/students" element={<StudentsPage />} />
        <Route
          path="/portfolio/students/profile"
          element={<ProfileSection />}
        />
      </Route>

      {/* WEB DEVELOPMENT */}
      <Route element={<WebDevLayout />}>
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/client-work" element={<ClientWork />} />
      </Route>

      {/* AUTH */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Route>

      {/* ADMIN */}
      <Route element={<AdminLayout />}>
        <Route path="/admin/web-development" element={<WebDevAdmin />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

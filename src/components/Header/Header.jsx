import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(null);
  const [openProfile, setOpenProfile] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const profileRef = useRef(null);

  /* ===============================
     SYNC USER FROM LOCALSTORAGE
  =============================== */
  useEffect(() => {
    const sync = () => {
      const u = localStorage.getItem("vertexLoggedInUser");
      setUser(u ? JSON.parse(u) : null);
    };
    sync();
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  /* ===============================
     CLOSE PROFILE DROPDOWN
  =============================== */
  useEffect(() => {
    const close = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setOpenProfile(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  /* ===============================
     SCROLL TO SECTION (HOME PAGE ONLY)
  =============================== */
  const scrollTo = (id) => {
    // If not on home page, go home first
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }

    setOpenMenu(false);
    setOpenProfile(false);
  };

  /* ===============================
     ROUTE NAVIGATION
  =============================== */
  const goPage = (path) => {
    navigate(path);
    setOpenMenu(false);
    setOpenProfile(false);
  };

  /* ===============================
     LOGOUT
  =============================== */
  const logout = () => {
    localStorage.removeItem("vertexLoggedInUser");
    window.dispatchEvent(new Event("storage"));
    navigate("/");
  };

  return (
    <header className="header">
      <div className="nav">
        {/* LOGO */}
        <div className="logo" onClick={() => scrollTo("home")}>
          <img
            src="https://res.cloudinary.com/dvknx0hpm/image/upload/v1764815507/ChatGPT_Image_Dec_4__2025__07_59_58_AM-removebg-preview_bj32m0.png"
            alt="360 Vertex Solutions"
          />
          <div>
            <h3>360 Vertex Solutions</h3>
            <span>Your Career Starts Here</span>
          </div>
        </div>

        {/* DESKTOP LINKS */}
        <div className="links">
          <button onClick={() => scrollTo("home")}>Home</button>
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("services")}>Services</button>
          <button onClick={() => scrollTo("testimonials")}>Testimonials</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </div>

        {/* AUTH / PROFILE */}
        {!user ? (
          <div className="auth">
            <button className="auth-btn" onClick={() => goPage("/login")}>
              Login
            </button>
            <button className="auth-btn" onClick={() => goPage("/signup")}>
              Sign Up
            </button>
          </div>
        ) : (
          <div className="profile" ref={profileRef}>
            <img
              src={user.avatar}
              className="avatar"
              alt="avatar"
              onClick={() => setOpenProfile(!openProfile)}
            />
            {openProfile && (
              <div className="dropdown">
                <div className="user">
                  <img src={user.avatar} alt="avatar" />
                  <div>
                    <strong>{user.name}</strong>
                    <span>{user.email}</span>
                  </div>
                </div>
                <button onClick={() => goPage("/profile")}>View Profile</button>
                <button className="logout" onClick={logout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        )}

        {/* HAMBURGER */}
        <button
          className={`hamburger ${openMenu ? "active" : ""}`}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${openMenu ? "show" : ""}`}>
        <button onClick={() => scrollTo("home")}>Home</button>
        <button onClick={() => scrollTo("about")}>About</button>
        <button onClick={() => scrollTo("services")}>Services</button>
        <button onClick={() => scrollTo("testimonials")}>Testimonials</button>
        <button onClick={() => scrollTo("contact")}>Contact</button>

        {!user ? (
          <>
            <button className="auth-btn" onClick={() => goPage("/login")}>
              Login
            </button>
            <button className="auth-btn" onClick={() => goPage("/signup")}>
              Sign Up
            </button>
          </>
        ) : (
          <>
            <button onClick={() => goPage("/profile")}>View Profile</button>
            <button className="logout" onClick={logout}>
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;

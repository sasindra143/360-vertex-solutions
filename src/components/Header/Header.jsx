import { useEffect, useState, useRef } from "react";
import "./Header.css";

function Header() {
  const [user, setUser] = useState(null);
  const [openProfile, setOpenProfile] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const profileRef = useRef(null);

  /* ===============================
     SYNC USER
  ================================ */
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
  ================================ */
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
     NAVIGATION (NO HEADER DISAPPEAR)
  ================================ */
  const go = (id) => {
    window.location.hash = id;

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setOpenMenu(false);
    setOpenProfile(false);
  };

  const logout = () => {
    localStorage.removeItem("vertexLoggedInUser");
    window.dispatchEvent(new Event("storage"));
    go("home");
  };

  return (
    <header className="header">
      <div className="nav">

        {/* LOGO */}
        <div className="logo" onClick={() => go("home")}>
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
          <button onClick={() => go("home")}>Home</button>
          <button onClick={() => go("about")}>About</button>
          <button onClick={() => go("services")}>Services</button>
          <button onClick={() => go("testimonials")}>Testimonials</button>
          <button onClick={() => go("contact")}>Contact</button>
        </div>

        {/* DESKTOP AUTH / PROFILE */}
        {!user ? (
          <div className="auth">
            <button className="auth-btn" onClick={() => go("login")}>Login</button>
            <button className="auth-btn" onClick={() => go("signup")}>Sign Up</button>
          </div>
        ) : (
          <div className="profile" ref={profileRef}>
            <img
              src={user.avatar}
              className="avatar"
              onClick={() => setOpenProfile(!openProfile)}
            />
            {openProfile && (
              <div className="dropdown">
                <div className="user">
                  <img src={user.avatar} />
                  <div>
                    <strong>{user.name}</strong>
                    <span>{user.email}</span>
                  </div>
                </div>
                <button onClick={() => go("profile")}>View Profile</button>
                <button className="logout" onClick={logout}>Logout</button>
              </div>
            )}
          </div>
        )}

        {/* HAMBURGER (MOBILE ONLY) */}
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
        <button onClick={() => go("home")}>Home</button>
        <button onClick={() => go("about")}>About</button>
        <button onClick={() => go("services")}>Services</button>
        <button onClick={() => go("testimonials")}>Testimonials</button>
        <button onClick={() => go("contact")}>Contact</button>

        {!user ? (
          <>
            <button className="auth-btn" onClick={() => go("login")}>Login</button>
            <button className="auth-btn" onClick={() => go("signup")}>Sign Up</button>
          </>
        ) : (
          <>
            <button onClick={() => go("profile")}>View Profile</button>
            <button className="logout" onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getGravatarUrl } from "../../utils/gravatar";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setError("");

    const user = JSON.parse(localStorage.getItem("vertexUser"));

    if (!user || user.email !== email) {
      setError("No account found with this email ❌");
      return;
    }

    if (user.password !== password) {
      setError("Incorrect password ❌");
      return;
    }

    const loggedUser = {
      ...user,
      avatar: getGravatarUrl(user.email),
    };

    localStorage.setItem(
      "vertexLoggedInUser",
      JSON.stringify(loggedUser)
    );

    window.dispatchEvent(new Event("storage"));
    navigate("/"); // HOME
  };

  return (
    <div className="login-wrapper">
      {/* CLOSE → HOME */}
      <button className="close-btn" onClick={() => navigate("/")}>
        ❌
      </button>

      <form className="login-card" onSubmit={submit}>
        <h2>Login to 360 Vertex Solutions</h2>

        {error && <p className="error-msg">{error}</p>}

        <input
          type="email"
          placeholder="Email Address"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="password-box">
          <input
            type={showPwd ? "text" : "password"}
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <span onClick={() => setShowPwd(!showPwd)}>
            {showPwd ? "🙈" : "👁️"}
          </span>
        </div>

        <button type="submit">Login</button>

        {/* ✅ FIXED */}
        <p className="auth-links">
          <span onClick={() => navigate("/forgot-password")}>
            Forgot password?
          </span>
        </p>

        <p className="auth-links">
          Don’t have an account?
          <span onClick={() => navigate("/signup")}> Sign Up</span>
        </p>
      </form>
    </div>
  );
}

export default Login;

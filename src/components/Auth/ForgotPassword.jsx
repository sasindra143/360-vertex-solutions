import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("vertexUser"));

    if (!user || user.email !== email) {
      setMsg("❌ No account found with this email");
      return;
    }

    // Demo token (in real apps this comes from backend)
    const demoToken = "reset-123-token";

    setMsg("✅ Reset link sent. Redirecting...");

    setTimeout(() => {
      navigate(`/reset-password/${demoToken}`);
    }, 1200);
  };

  return (
    <div className="login-wrapper">
      {/* CLOSE → LOGIN */}
      <button className="close-btn" onClick={() => navigate("/login")}>
        ❌
      </button>

      <form className="login-card" onSubmit={submit}>
        <h2>Forgot Password</h2>

        <input
          type="email"
          placeholder="Registered Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Send Reset Link</button>

        {msg && <p className="success-msg">{msg}</p>}
      </form>
    </div>
  );
}

export default ForgotPassword;

import { useState } from "react";
import "./ForgotPassword.css";

function ForgotPassword({ goToLogin }) {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setMsg("Reset link sent to your email ✅");

    setTimeout(() => {
      window.location.hash = "#reset-password/demo-token";
    }, 1500);
  };

  return (
    <div className="login-wrapper">
      <button className="close-btn" onClick={goToLogin}>
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

        <button>Send Reset Link</button>

        {msg && <p className="success-msg">{msg}</p>}
      </form>
    </div>
  );
}

export default ForgotPassword;

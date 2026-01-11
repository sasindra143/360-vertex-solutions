import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ResetPassword.css";

function ResetPassword() {
  const { token } = useParams(); // comes from URL
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setError("");

    if (!token) {
      setError("Invalid or expired reset link ❌");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters ❌");
      return;
    }

    if (password !== confirm) {
      setError("Passwords do not match ❌");
      return;
    }

    const user = JSON.parse(localStorage.getItem("vertexUser"));

    if (!user) {
      setError("User not found ❌");
      return;
    }

    user.password = password;
    localStorage.setItem("vertexUser", JSON.stringify(user));

    setSuccess("✅ Password reset successful! Redirecting to login...");

    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="login-wrapper">
      <form className="login-card" onSubmit={submit}>
        <h2>Reset Password</h2>

        {error && <p className="error-msg">{error}</p>}
        {success && <p className="success-msg">{success}</p>}

        <input
          type="password"
          placeholder="New Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          required
          onChange={(e) => setConfirm(e.target.value)}
        />

        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ResetPassword;

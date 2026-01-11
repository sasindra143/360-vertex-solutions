import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

  const handleChange = (e) => {
    setError("");
    setSuccess("");
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ===============================
     IMAGE UPLOAD + PREVIEW
  =============================== */
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  /* ===============================
     SIGNUP LOGIC
  =============================== */
  const handleSignup = (e) => {
    e.preventDefault();

    if (!passwordRegex.test(form.password)) {
      setError(
        "Password must be 8+ chars, include 1 uppercase, 1 number & 1 symbol"
      );
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const existingUser = JSON.parse(
      localStorage.getItem("vertexUser")
    );

    if (existingUser?.email === form.email) {
      setError("Account already exists with this email");
      return;
    }

    const userData = {
      name: form.name,
      email: form.email,
      password: form.password,
      avatar: image || "https://i.pravatar.cc/150?img=32",
    };

    localStorage.setItem(
      "vertexUser",
      JSON.stringify(userData)
    );

    setSuccess("Signup successful! Redirecting to login…");

    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setPreview(null);

    // Redirect to login after short delay
    setTimeout(() => {
      navigate("/login");
    }, 1200);
  };

  return (
    <div className="signup-wrapper">
      {/* CLOSE → HOME */}
      <button className="close-btn" onClick={() => navigate("/")}>
        ❌
      </button>

      <form className="signup-card" onSubmit={handleSignup}>
        <h2>Create Account</h2>

        {error && <p className="error-msg">❌ {error}</p>}
        {success && <p className="success-msg">✅ {success}</p>}

        {/* IMAGE PREVIEW */}
        <div className="avatar-upload">
          <label htmlFor="avatar">
            <img
              src={
                preview ||
                "https://i.pravatar.cc/150?img=32"
              }
              alt="Preview"
            />
            <span>Upload Photo</span>
          </label>
          <input
            type="file"
            id="avatar"
            accept="image/*"
            onChange={handleImageUpload}
            hidden
          />
        </div>

        <input
          name="name"
          placeholder="Full Name"
          required
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          value={form.email}
          onChange={handleChange}
        />

        <div className="password-field">
          <input
            type={showPwd ? "text" : "password"}
            name="password"
            placeholder="Password"
            required
            value={form.password}
            onChange={handleChange}
          />
          <span onClick={() => setShowPwd(!showPwd)}>
            {showPwd ? "🙈" : "👁️"}
          </span>
        </div>

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          required
          value={form.confirmPassword}
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>

        <p className="switch-auth">
          Already have an account?
          <span onClick={() => navigate("/login")}>
            {" "}Login
          </span>
        </p>
      </form>
    </div>
  );
}

export default Signup;

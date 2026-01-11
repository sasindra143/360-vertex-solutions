import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("vertexLoggedInUser"));
    setUser(u);
  }, []);

  const updateAvatar = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      const updated = { ...user, avatar: reader.result };
      localStorage.setItem("vertexLoggedInUser", JSON.stringify(updated));
      window.dispatchEvent(new Event("storage"));
      setUser(updated);
    };

    reader.readAsDataURL(file);
  };

  if (!user) return null;

  return (
    <div className="profile-page">
      {/* ❌ CLOSE BUTTON */}
      <button
        className="profile-close"
        onClick={() => navigate("/")}
        aria-label="Close profile"
      >
        ✕
      </button>

      <h1>My Profile</h1>

      <img src={user.avatar} alt="Profile Avatar" className="profile-big" />

      <label className="upload-btn">
        Change Photo
        <input type="file" hidden onChange={updateAvatar} />
      </label>

      <p>
        <strong>Name:</strong> {user.name}
      </p>

      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
}

export default Profile;

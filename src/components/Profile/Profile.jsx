import { useEffect, useState } from "react";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("vertexLoggedInUser"));
    setUser(u);
  }, []);

  const updateAvatar = (e) => {
    const file = e.target.files[0];
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
      <h1>My Profile</h1>

      <img src={user.avatar} className="profile-big" />

      <label className="upload-btn">
        Change Photo
        <input type="file" hidden onChange={updateAvatar} />
      </label>

      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

export default Profile;

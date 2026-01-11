import { useState, useEffect } from "react";
import "./WebDevAdmin.css";

const WebDevAdmin = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: "",
    type: "",
    goal: "",
    solution: "",
    result: "",
    liveLink: "",
    instaLink: "",
    images: "",
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("webDevProjects")) || [];
    setProjects(saved);
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      id: Date.now(),
      title: form.title,
      type: form.type,
      goal: form.goal,
      solution: form.solution,
      result: form.result,
      liveLink: form.liveLink,
      instaLink: form.instaLink,
      images: form.images.split(",").map((img) => img.trim()),
    };

    const updated = [newProject, ...projects];
    setProjects(updated);
    localStorage.setItem("webDevProjects", JSON.stringify(updated));

    setForm({
      title: "",
      type: "",
      goal: "",
      solution: "",
      result: "",
      liveLink: "",
      instaLink: "",
      images: "",
    });
  };

  const deleteProject = (id) => {
    const updated = projects.filter((p) => p.id !== id);
    setProjects(updated);
    localStorage.setItem("webDevProjects", JSON.stringify(updated));
  };

  return (
    <section className="webdev-admin">
      <h1>Web Development – Admin Projects</h1>

      {/* ADMIN FORM */}
      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Project Title"
          required
          value={form.title}
          onChange={handleChange}
        />

        <input
          name="type"
          placeholder="Project Type"
          required
          value={form.type}
          onChange={handleChange}
        />

        <textarea
          name="goal"
          placeholder="Goal"
          required
          value={form.goal}
          onChange={handleChange}
        />

        <textarea
          name="solution"
          placeholder="Solution"
          required
          value={form.solution}
          onChange={handleChange}
        />

        <textarea
          name="result"
          placeholder="Result"
          required
          value={form.result}
          onChange={handleChange}
        />

        <input
          name="liveLink"
          placeholder="Live Website Link"
          value={form.liveLink}
          onChange={handleChange}
        />

        <input
          name="instaLink"
          placeholder="Instagram Video Link"
          value={form.instaLink}
          onChange={handleChange}
        />

        <textarea
          name="images"
          placeholder="Image URLs (comma separated)"
          required
          value={form.images}
          onChange={handleChange}
        />

        <button type="submit">Add Web Dev Project</button>
      </form>

      {/* PROJECT LIST */}
      <div className="admin-list">
        {projects.length === 0 && (
          <p style={{ textAlign: "center", color: "#8f96b3" }}>
            No projects added yet.
          </p>
        )}

        {projects.map((p) => (
          <div key={p.id} className="admin-card">
            <strong>{p.title}</strong>
            <button onClick={() => deleteProject(p.id)}>Delete</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WebDevAdmin;

import { useState } from "react";
import API from "../services/api";

function IssueForm({ onIssueAdded }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Lab",
    priority: "Medium"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("/issues", formData);

      alert(response.data.message);

      setFormData({
        title: "",
        description: "",
        category: "Lab",
        priority: "Medium"
      });

      onIssueAdded();
    } catch (error) {
      console.error(error);
      alert("Failed to report issue");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Issue Title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Describe the issue"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
      >
        <option>Lab</option>
        <option>Classroom</option>
        <option>Wi-Fi</option>
        <option>Electrical</option>
        <option>Cleanliness</option>
        <option>Other</option>
      </select>

      <select
        name="priority"
        value={formData.priority}
        onChange={handleChange}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button type="submit">
        Report Issue
      </button>
    </form>
  );
}

export default IssueForm;
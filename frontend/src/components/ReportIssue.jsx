import { useState } from "react";
import {
  Send,
  X,
  AlertCircle
} from "lucide-react";

import API from "../services/api";

function ReportIssue({ onIssueAdded, onCancel }) {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Lab",
    priority: "Medium"
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await API.post(
        "/issues",
        formData
      );

      console.log(
        "Backend response:",
        response.data
      );

      alert("Issue reported successfully!");

      setFormData({
        title: "",
        description: "",
        category: "Lab",
        priority: "Medium"
      });

      onIssueAdded();

    } catch (error) {

      console.error(
        "Error submitting issue:",
        error
      );

      alert("Unable to submit issue.");

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="report-page">

      <div className="page-heading">

        <div>
          <span className="eyebrow">
            CAMPUS SUPPORT
          </span>

          <h1>Report an Issue</h1>

          <p>
            Help us improve your campus experience
            by reporting a problem.
          </p>
        </div>

        <button
          className="close-page-btn"
          onClick={onCancel}
        >
          <X size={19} />
        </button>

      </div>

      <div className="report-layout">

        <div className="report-form-card">

          <form onSubmit={handleSubmit}>

            <div className="form-section">

              <h3>Issue Details</h3>

              <p>
                Provide clear information so the issue
                can be handled efficiently.
              </p>

            </div>

            <div className="form-group">

              <label>
                Issue Title
              </label>

              <input
                type="text"
                name="title"
                placeholder="e.g. Wi-Fi not working in Lab 2"
                value={formData.title}
                onChange={handleChange}
                required
              />

            </div>

            <div className="form-group">

              <label>
                Description
              </label>

              <textarea
                name="description"
                placeholder="Describe the problem in detail..."
                value={formData.description}
                onChange={handleChange}
                required
              />

            </div>

            <div className="form-row">

              <div className="form-group">

                <label>
                  Category
                </label>

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

              </div>

              <div className="form-group">

                <label>
                  Priority
                </label>

                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>

              </div>

            </div>

            <div className="form-actions">

              <button
                type="button"
                className="secondary-btn"
                onClick={onCancel}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="primary-btn"
                disabled={loading}
              >

                <Send size={17} />

                {loading
                  ? "Submitting..."
                  : "Submit Issue"}

              </button>

            </div>

          </form>

        </div>

        <div className="report-info">

          <div className="info-icon">
            <AlertCircle size={24} />
          </div>

          <h3>Before submitting</h3>

          <ul>
            <li>Give a clear issue title.</li>
            <li>Describe the problem accurately.</li>
            <li>Select the correct category.</li>
            <li>Use High priority only for urgent issues.</li>
          </ul>

        </div>

      </div>

    </div>
  );
}

export default ReportIssue;
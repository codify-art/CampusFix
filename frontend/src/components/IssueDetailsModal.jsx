import {
  X,
  MapPin,
  CalendarDays,
  Tag,
  AlertTriangle
} from "lucide-react";

function IssueDetailsModal({ issue, onClose }) {

  if (!issue) {
    return null;
  }

  const getStatusClass = (status) => {
    if (status === "Resolved") return "resolved";
    if (status === "In Progress") return "progress";
    return "pending";
  };

  const getPriorityClass = (priority) => {
    if (priority === "High") return "high";
    if (priority === "Low") return "low";
    return "medium";
  };

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >

      <div
        className="issue-modal"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="modal-header">

          <div>
            <span className="eyebrow">
              ISSUE DETAILS
            </span>

            <h2>{issue.title}</h2>
          </div>

          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={19} />
          </button>

        </div>

        <div className="modal-status-row">

          <span
            className={`status-badge ${getStatusClass(
              issue.status
            )}`}
          >
            {issue.status}
          </span>

          <span
            className={`priority-badge ${getPriorityClass(
              issue.priority
            )}`}
          >
            {issue.priority} Priority
          </span>

        </div>

        <div className="modal-description">

          <h4>Description</h4>

          <p>
            {issue.description}
          </p>

        </div>

        <div className="modal-info-grid">

          <div className="modal-info-item">
            <MapPin size={17} />

            <div>
              <span>Location</span>
              <strong>Campus</strong>
            </div>
          </div>

          <div className="modal-info-item">
            <Tag size={17} />

            <div>
              <span>Category</span>
              <strong>{issue.category}</strong>
            </div>
          </div>

          <div className="modal-info-item">
            <CalendarDays size={17} />

            <div>
              <span>Reported On</span>

              <strong>
                {issue.createdAt
                  ? new Date(
                      issue.createdAt
                    ).toLocaleDateString()
                  : "Not available"}
              </strong>
            </div>
          </div>

          <div className="modal-info-item">
            <AlertTriangle size={17} />

            <div>
              <span>Priority</span>
              <strong>{issue.priority}</strong>
            </div>
          </div>

        </div>

        <div className="modal-footer">

          <p>
            Issue ID: {issue._id}
          </p>

          <button
            className="secondary-btn"
            onClick={onClose}
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}

export default IssueDetailsModal;
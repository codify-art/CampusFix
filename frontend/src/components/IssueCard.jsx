import {
  Clock3,
  MapPin,
  ChevronRight
} from "lucide-react";

function IssueCard({ issue, onViewDetails }) {

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
    <div className="issue-card">

      <div className="issue-main">

        <div className="issue-category">
          {issue.category}
        </div>

        <h3>{issue.title}</h3>

        <p className="issue-description">
          {issue.description}
        </p>

        <div className="issue-meta">

          <span>
            <MapPin size={15} />
            Campus
          </span>

          <span>
            <Clock3 size={15} />

            {issue.createdAt
              ? new Date(
                  issue.createdAt
                ).toLocaleDateString()
              : "Recently"}
          </span>

        </div>

      </div>

      <div className="issue-side">

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

        <button
          className="issue-arrow"
          onClick={() => onViewDetails(issue)}
          aria-label="View issue details"
        >
          <ChevronRight size={19} />
        </button>

      </div>

    </div>
  );
}

export default IssueCard;
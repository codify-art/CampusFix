import {
  ClipboardList,
  Clock3,
  CheckCircle2,
  Plus,
  ArrowUpRight
} from "lucide-react";

import StatCard from "../components/StatCard";
import IssueCard from "../components/IssueCard";

function Dashboard({
  issues,
  onReportIssue,
  onViewIssues,
  onViewDetails,
  searchTerm
}) {

  const total = issues.length;

  const pending = issues.filter(
    issue => issue.status === "Pending"
  ).length;

  const progress = issues.filter(
    issue => issue.status === "In Progress"
  ).length;

  const resolved = issues.filter(
    issue => issue.status === "Resolved"
  ).length;

  const filteredIssues = issues.filter((issue) => {

    const search = searchTerm
      .toLowerCase()
      .trim();

    if (!search) {
      return true;
    }

    return (
      issue.title?.toLowerCase().includes(search) ||
      issue.description?.toLowerCase().includes(search) ||
      issue.category?.toLowerCase().includes(search) ||
      issue.priority?.toLowerCase().includes(search) ||
      issue.status?.toLowerCase().includes(search)
    );

  });

  const recentIssues = filteredIssues.slice(0, 4);

  return (
    <div className="dashboard">

      <section className="hero">

        <div>
          <span className="eyebrow">
            STUDENT DASHBOARD
          </span>

          <h1>
            Good evening, Student 👋
          </h1>

          <p>
            Track your campus issues and help make
            your college experience better.
          </p>
        </div>

        <button
          className="primary-btn hero-btn"
          onClick={onReportIssue}
        >
          <Plus size={18} />
          Report an Issue
        </button>

      </section>

      <section className="stats-grid">

        <StatCard
          title="Total Issues"
          value={total}
          description="Issues reported by you"
          type="blue"
          icon={<ClipboardList size={21} />}
        />

        <StatCard
          title="Pending"
          value={pending}
          description="Waiting for attention"
          type="orange"
          icon={<Clock3 size={21} />}
        />

        <StatCard
          title="In Progress"
          value={progress}
          description="Currently being handled"
          type="purple"
          icon={<ArrowUpRight size={21} />}
        />

        <StatCard
          title="Resolved"
          value={resolved}
          description="Successfully completed"
          type="green"
          icon={<CheckCircle2 size={21} />}
        />

      </section>

      <section className="issues-section">

        <div className="section-header">

          <div>
            <h2>
              {searchTerm
                ? "Search Results"
                : "Recent Issues"}
            </h2>

            <p>
              {searchTerm
                ? `${recentIssues.length} matching issue(s)`
                : "Your latest reported campus issues"}
            </p>
          </div>

          {!searchTerm && (
            <button
              className="view-all-btn"
              onClick={onViewIssues}
            >
              View all
              <ArrowUpRight size={16} />
            </button>
          )}

        </div>

        <div className="issues-list">

          {recentIssues.length === 0 ? (

            <div className="empty-state">

              <ClipboardList size={35} />

              <h3>
                {searchTerm
                  ? "No matching issues"
                  : "No issues reported yet"}
              </h3>

              <p>
                {searchTerm
                  ? "Try a different search term."
                  : "Report your first campus issue to get started."}
              </p>

              {!searchTerm && (
                <button
                  className="primary-btn"
                  onClick={onReportIssue}
                >
                  <Plus size={17} />
                  Report Issue
                </button>
              )}

            </div>

          ) : (

            recentIssues.map(issue => (

              <IssueCard
                key={issue._id}
                issue={issue}
                onViewDetails={onViewDetails}
              />

            ))

          )}

        </div>

      </section>

    </div>
  );
}

export default Dashboard;
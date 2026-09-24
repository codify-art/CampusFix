import {
  ClipboardList,
  Search
} from "lucide-react";

import IssueCard from "../components/IssueCard";

function MyIssues({
  issues,
  searchTerm,
  onViewDetails
}) {

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

  return (
    <div className="all-issues-page">

      <div className="page-heading">

        <div>

          <span className="eyebrow">
            ISSUE HISTORY
          </span>

          <h1>My Issues</h1>

          <p>
            View and track all the issues you have
            reported on campus.
          </p>

        </div>

      </div>

      <div className="issues-page-summary">

        <div>
          <strong>
            {filteredIssues.length}
          </strong>

          <span>
            {searchTerm
              ? "Matching Issues"
              : "Total Reported"}
          </span>
        </div>

        <div>
          <strong>
            {
              filteredIssues.filter(
                issue =>
                  issue.status === "Pending"
              ).length
            }
          </strong>

          <span>Pending</span>
        </div>

        <div>
          <strong>
            {
              filteredIssues.filter(
                issue =>
                  issue.status === "Resolved"
              ).length
            }
          </strong>

          <span>Resolved</span>
        </div>

      </div>

      <div className="my-issues-title">

        <div>
          <h2>
            {searchTerm
              ? "Search Results"
              : "All Reported Issues"}
          </h2>

          <p>
            {searchTerm
              ? `Showing results for "${searchTerm}"`
              : "Your complete issue history"}
          </p>
        </div>

      </div>

      <div className="issues-list">

        {filteredIssues.length === 0 ? (

          <div className="empty-state">

            {searchTerm ? (
              <>
                <Search size={35} />

                <h3>
                  No matching issues
                </h3>

                <p>
                  Try searching with another keyword.
                </p>
              </>
            ) : (
              <>
                <ClipboardList size={35} />

                <h3>
                  No issues reported yet
                </h3>

                <p>
                  Your reported issues will appear here.
                </p>
              </>
            )}

          </div>

        ) : (

          filteredIssues.map(issue => (

            <IssueCard
              key={issue._id}
              issue={issue}
              onViewDetails={onViewDetails}
            />

          ))

        )}

      </div>

    </div>
  );
}

export default MyIssues;
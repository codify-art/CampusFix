import { useEffect, useState } from "react";
import API from "../services/api";

function IssueList() {
  const [issues, setIssues] = useState([]);

  const fetchIssues = async () => {
    try {
      const response = await API.get("/issues");

      setIssues(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <div>
      <h2>Reported Issues</h2>

      {issues.map((issue) => (
        <div key={issue._id}>
          <h3>{issue.title}</h3>

          <p>{issue.description}</p>

          <p>
            Category: {issue.category}
          </p>

          <p>
            Priority: {issue.priority}
          </p>

          <p>
            Status: {issue.status}
          </p>
        </div>
      ))}
    </div>
  );
}

export default IssueList;
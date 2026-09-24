import { useEffect, useState } from "react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ReportIssue from "./components/ReportIssue";
import IssueDetailsModal from "./components/IssueDetailsModal";

import Dashboard from "./pages/Dashboard";
import MyIssues from "./pages/MyIssues";

import API from "./services/api";

import "./App.css";

function App() {

  const [activePage, setActivePage] =
    useState("dashboard");

  const [issues, setIssues] =
    useState([]);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [selectedIssue, setSelectedIssue] =
    useState(null);

  const fetchIssues = async () => {

    try {

      const response =
        await API.get("/issues");

      setIssues(
        response.data.data || []
      );

    } catch (error) {

      console.error(
        "Failed to fetch issues:",
        error
      );

    }
  };

  useEffect(() => {

    fetchIssues();

  }, []);

  const handleIssueAdded = async () => {

    await fetchIssues();

    setActivePage("dashboard");

    setSearchTerm("");

  };

  const handlePageChange = (page) => {

    setActivePage(page);

    setSearchTerm("");

  };

  return (

    <div className="app">

      <Sidebar
        activePage={activePage}
        setActivePage={handlePageChange}
      />

      <div className="main-wrapper">

        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <main className="main-content">

          {activePage === "dashboard" && (

            <Dashboard
              issues={issues}
              searchTerm={searchTerm}
              onReportIssue={() =>
                handlePageChange("report")
              }
              onViewIssues={() =>
                handlePageChange("issues")
              }
              onViewDetails={setSelectedIssue}
            />

          )}

          {activePage === "report" && (

            <ReportIssue
              onIssueAdded={handleIssueAdded}
              onCancel={() =>
                handlePageChange("dashboard")
              }
            />

          )}

          {activePage === "issues" && (

            <MyIssues
              issues={issues}
              searchTerm={searchTerm}
              onViewDetails={setSelectedIssue}
            />

          )}

        </main>

      </div>

      {selectedIssue && (

        <IssueDetailsModal
          issue={selectedIssue}
          onClose={() =>
            setSelectedIssue(null)
          }
        />

      )}

    </div>

  );
}

export default App;
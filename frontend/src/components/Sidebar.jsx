import {
  LayoutDashboard,
  PlusCircle,
  ClipboardList,
  HelpCircle
} from "lucide-react";

function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">

      <div className="brand">
        <div className="brand-icon">
          C
        </div>

        <div>
          <h2>CampusFix</h2>
          <span>Campus Support</span>
        </div>
      </div>

      <div className="sidebar-section">
        <p className="section-title">MENU</p>

        <button
          className={`side-link ${
            activePage === "dashboard" ? "active" : ""
          }`}
          onClick={() => setActivePage("dashboard")}
        >
          <LayoutDashboard size={19} />
          <span>Dashboard</span>
        </button>

        <button
          className={`side-link ${
            activePage === "report" ? "active" : ""
          }`}
          onClick={() => setActivePage("report")}
        >
          <PlusCircle size={19} />
          <span>Report Issue</span>
        </button>

        <button
          className={`side-link ${
            activePage === "issues" ? "active" : ""
          }`}
          onClick={() => setActivePage("issues")}
        >
          <ClipboardList size={19} />
          <span>My Issues</span>
        </button>
      </div>

      <div className="sidebar-bottom">
        <div className="help-card">
          <div className="help-icon">
            <HelpCircle size={20} />
          </div>

          <div>
            <strong>Need help?</strong>
            <p>Report an issue and we'll take care of it.</p>
          </div>
        </div>
      </div>

    </aside>
  );
}

export default Sidebar;
import { Bell, Search } from "lucide-react";

function Navbar({ searchTerm, setSearchTerm }) {
  return (
    <header className="navbar">

      <div className="mobile-brand">
        <div className="brand-icon">
          C
        </div>

        <strong>CampusFix</strong>
      </div>

      <div className="navbar-search">
        <Search size={18} />

        <input
          type="text"
          placeholder="Search issues..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="navbar-right">

        <button className="notification-btn" aria-label="Notifications">
          <Bell size={20} />
        </button>

        <div className="user-profile">

          <div className="avatar">
            S
          </div>

          <div className="user-info">
            <strong>Student</strong>
            <span>Campus User</span>
          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;
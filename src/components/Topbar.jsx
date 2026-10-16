import { Link } from "react-router";

export default function Topbar() {
  return (
    <header className="topbar">
      <div>
        <strong>Admin Dashboard</strong>
      </div>

      <div className="topbar-actions">
        <button type="button" aria-label="Notifications">
          Notifications
        </button>

        <Link to="/dashboard/settings"> Profile/Settings</Link>
      </div>
    </header>
  );
}

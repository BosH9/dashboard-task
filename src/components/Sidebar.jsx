import { NavLink } from "react-router";

const links = [
  { label: "Overview", to: "/dashboard" },
  { label: "Users", to: "/dashboard/users" },
  { label: "Reports", to: "/dashboard/reports" },
  { label: "Settings", to: "/dashboard/settings" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-brand">Admin Panel</h2>

      <nav aria-label="Main navigation">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/dashboard"}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
// import ErrorBoundary from "../components/ErrorBoundary";

export default function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-main">
        <Topbar />

        <main className="dashboard-content">
          {/* <ErrorBoundary> */}
          <Outlet />
          {/* </ErrorBoundary> */}
        </main>
      </div>
    </div>
  );
}

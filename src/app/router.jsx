/* eslint-disable react-refresh/only-export-components */
import DashboardLayout from "../layouts/DashboardLayout";
// import ErrorBoundary from "../components/ErrorBoundary";
import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router";

const DashboardPage = lazy(
  () => import("../features/dashboard/pages/DashboardPage"),
);

const UsersPage = lazy(() => import("../features/users/pages/UsersPage"));

const ReportsPage = lazy(() => import("../features/reports/ReportsPage"));

const SettingsPage = lazy(() => import("../features/settings/SettingsPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorBoundaryFallback />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<p>Loading preview...</p>}>
            <DashboardPage />
          </Suspense>
        ),
      },
      {
        path: "users",
        element: (
          <Suspense fallback={<p>Loading users...</p>}>
            <UsersPage />
          </Suspense>
        ),
      },
      {
        path: "reports",
        element: (
          <Suspense fallback={<p>Loading reports...</p>}>
            <ReportsPage />
          </Suspense>
        ),
      },
      {
        path: "settings",
        element: (
          <Suspense fallback={<p>Loading settings...</p>}>
            <SettingsPage />
          </Suspense>
        ),
      },
    ],
  },
]);

function ErrorBoundaryFallback() {
  return (
    <div role="alert">
      <h2>Unable to display this page.</h2>
      <p>Please try again later.</p>
    </div>
  );
}

import App from "@/App";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import Home from "@/pages/Home/Home";
import Dashboard from "@/pages/dashboard/Dashboard";
import EventItems from "@/pages/dashboard/EventItems/EventItems";

import RecentEvents from "@/pages/dashboard/RecentEvents/RecentEvents";
import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard/dashboard-home" />,
      },
      {
        path: "dashboard-home",
        element: <Dashboard />,
      },
      {
        path: "event-items",
        element: <EventItems />,
      },
      {
        path: "recent-events",
        element: <RecentEvents />,
      },
    ],
  },
]);

export default router;

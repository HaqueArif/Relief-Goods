import App from "@/App";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import ProtectedRoute from "@/components/layouts/ProtectedRoute";
import AllRelief from "@/pages/AllRelief";
import GratitudeWall from "@/pages/GratitudeWall";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import ReliefDetails from "@/pages/ReliefDetails";
import AllSupply from "@/pages/dashboard/AllSupply/AllSupply";
import CreateSupply from "@/pages/dashboard/AllSupply/CreateSupply";
import Dashboard from "@/pages/dashboard/Dashboard";

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
      {
        path: "/relief-goods",
        element: <AllRelief />,
      },
      {
        path: "/relief-goods/:_id",
        element: <ReliefDetails />,
      },
      {
        path: "/community",
        element: <GratitudeWall />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/login/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
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
        path: "supplies",
        element: <AllSupply />,
      },
      {
        path: "create-supply",
        element: <CreateSupply />,
      },
    ],
  },
]);

export default router;

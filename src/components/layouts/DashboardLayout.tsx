import { useState } from "react";
import { Outlet } from "react-router-dom";
import "@/styles/Dashboard.css";
import SidebarComponent from "./SidebarComponent";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dashboard-layout background-style">
      <SidebarComponent
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div
        className="overflow-x-auto "
        style={{
          marginLeft: sidebarOpen ? "0px" : "10px",
          transition: "margin-left 0.3s ease-in-out",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;

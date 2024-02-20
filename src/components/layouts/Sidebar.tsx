import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";
import EventItemsSidebar from "./EventItems.Sidebar";
import RecentEventSidebar from "./RecentEvent.Sidebar";

const Sidebar = () => {
  // const [];
  return (
    <aside className="col-span-2 h-screen  sticky top-0 left-0 overflow-auto px-1">
      <nav className="flex flex-col">
        <NavLink
          to="/dashboard/dashboard-home"
          className={({ isActive }) =>
            cn(
              "p-3 flex items-center gap-1 bg-gray-900 text-white rounded-md hover:bg-sky-950",
              {
                "bg-sky-950": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Dashboard</span>
        </NavLink>
        <EventItemsSidebar />
        <RecentEventSidebar />
      </nav>
    </aside>
  );
};

export default Sidebar;

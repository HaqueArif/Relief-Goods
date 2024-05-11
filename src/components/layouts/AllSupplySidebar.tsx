import "@/styles/Sidebar.css";
import { SidebarLink } from "../Sidebar.Link";

const AllSupplySidebar = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-1">
        <SidebarLink to="/dashboard/supplies" label="All Supply" />
      </div>
    </div>
  );
};

export default AllSupplySidebar;

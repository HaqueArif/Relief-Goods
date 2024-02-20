import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LibraryBig } from "lucide-react";
import "@/styles/Sidebar.css";

const RecentEventSidebar = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Recent Event</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-1">
            <NavLink
              to="/dashboard/recent-events"
              className={({ isActive }) =>
                cn("dropdown-style", {
                  "dropdown-active": isActive,
                })
              }
            >
              <LibraryBig className="shrink-0" />
              <span className="truncate">Event List</span>
            </NavLink>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default RecentEventSidebar;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import "@/styles/Sidebar.css";
import { SidebarLink } from "../Sidebar.Link";

const EventItemsSidebar = () => {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Event Items</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-1">
              <SidebarLink to="/dashboard/event-items" label="Event Items" />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default EventItemsSidebar;

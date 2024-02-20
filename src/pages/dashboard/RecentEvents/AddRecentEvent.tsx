import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";

import EventForm from "@/components/Form/EventForm";
import usePostHandler from "@/components/recentEventsHandler/usePostHandler";

const AddRecentEvent = () => {
  const [eventItem, setEventItem] = useState("");
  const handleSubmit = usePostHandler();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(eventItem);
    setEventItem("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEventItem(e.target.value);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger className="flex hover:text-primary">
          Add Recent event Item <Plus />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              <EventForm
                label="Add Event url"
                onSubmit={handleFormSubmit}
                onInputChange={handleInputChange}
              />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddRecentEvent;

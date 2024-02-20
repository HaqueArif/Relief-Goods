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

import usePostHandler from "@/components/eventItemsHandler/usePostHandler";
import EventForm from "@/components/Form/EventForm";

const AddEvent = () => {
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
        <DialogTrigger className="flex">
          Add event Item <Plus />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              <EventForm
                label="Add Event Item url"
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

export default AddEvent;

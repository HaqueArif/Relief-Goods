import EventForm from "@/components/Form/EventForm";
import { IdProps } from "@/components/Types";
import useUpdateEventHandler from "@/components/recentEventsHandler/useUpdateHandler";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit } from "lucide-react";
import { FormEvent } from "react";

const UpdateRecentEvent = ({ itemId }: IdProps) => {
  const { handleSubmit, setSelectedItemId, handleInputChange, eventItem } =
    useUpdateEventHandler();

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSubmit({ item: eventItem });
  };

  const handleInputChangeWrapper: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    handleInputChange(e.target.value);
  };

  return (
    <Dialog>
      <DialogTrigger
        className="bg-red-600 p-4 rounded-xl text-white"
        onClick={() => setSelectedItemId(itemId)}
      >
        <Edit />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            <EventForm
              label="Add update event url"
              onSubmit={handleFormSubmit}
              onInputChange={handleInputChangeWrapper}
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateRecentEvent;

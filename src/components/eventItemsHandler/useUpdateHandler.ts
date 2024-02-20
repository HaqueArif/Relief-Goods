import { useState } from "react";
import { useUpdateEventItem } from "@/api/dashboard/eventItems/event.hook";
import Swal from "sweetalert2";

const useUpdateEventHandler = () => {
  const { updateEventItem, setSelectedItemId } = useUpdateEventItem();
  const [eventItem, setEventItem] = useState("");

  const handleSubmit = async (eventData) => {
    try {
      await updateEventItem(eventData);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Event item has been Updated successfully!",
        showConfirmButton: false,
      });
      setEventItem("");
    } catch (error) {
      // Handle error if needed
      console.error("Error updating event item:", error);
      Swal.fire("Error", "Failed to update event item", "error");
    }
  };

  const handleInputChange = (value: string) => {
    setEventItem(value);
  };

  return { handleSubmit, setSelectedItemId, handleInputChange, eventItem };
};

export default useUpdateEventHandler;

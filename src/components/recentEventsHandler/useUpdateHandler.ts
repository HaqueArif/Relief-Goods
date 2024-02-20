import { useState } from "react";

import Swal from "sweetalert2";
import { useUpdateRecentEvent } from "@/api/dashboard/recentEvents/recent.event.hook";

const useUpdateEventHandler = () => {
  const { updateRecentEvent, setSelectedItemId } = useUpdateRecentEvent();
  const [eventItem, setEventItem] = useState("");

  const handleSubmit = async (eventData) => {
    try {
      await updateRecentEvent(eventData);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Event item has been added successfully!",
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

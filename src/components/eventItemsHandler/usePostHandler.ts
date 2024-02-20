import { useCreateEventItem } from "@/api/dashboard/eventItems/event.hook";
import Swal from "sweetalert2";

const usePostHandler = () => {
  const { createEventItem: mutateAsync } = useCreateEventItem();

  const handleSubmit = async (eventItem: string) => {
    const eventData = {
      item: eventItem,
    };
    try {
      await mutateAsync(eventData);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Event item has been added successfully!",
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to add event item!",
        showConfirmButton: false,
      });
    }
  };

  return handleSubmit;
};

export default usePostHandler;

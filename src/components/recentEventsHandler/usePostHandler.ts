import { useCreateRecentEvent } from "@/api/dashboard/recentEvents/recent.event.hook";
import Swal from "sweetalert2";

type TEventData = {
  item: string;
};

const usePostHandler = () => {
  const { createRecentEvent: mutateAsync } = useCreateRecentEvent();

  const handleSubmit = async (eventItem: string) => {
    const eventData: TEventData = {
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

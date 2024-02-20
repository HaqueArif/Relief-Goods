import { useDeleteRecentEvent } from "@/api/dashboard/recentEvents/recent.event.hook";
import Swal from "sweetalert2";

const useDeleteHandler = () => {
  const { deleteRecentEvent: mutateAsync } = useDeleteRecentEvent();

  const handleDelete = async (id: string) => {
    const { isConfirmed } = await Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this event!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (isConfirmed) {
      await mutateAsync(id);
      Swal.fire("Deleted!", "Your event has been deleted.", "success");
    }
  };

  return handleDelete;
};

export default useDeleteHandler;

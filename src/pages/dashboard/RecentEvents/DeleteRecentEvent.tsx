import { IdProps } from "@/components/Types";
import useDeleteHandler from "@/components/recentEventsHandler/useDeleteHandler";
import { Trash2 } from "lucide-react";

const DeleteRecentEvent = ({ itemId }: IdProps) => {
  const handleDelete = useDeleteHandler();
  return (
    <button
      onClick={() => handleDelete(itemId as string)}
      className="bg-red-600 p-4 rounded-xl text-white"
    >
      <Trash2 />
    </button>
  );
};

export default DeleteRecentEvent;

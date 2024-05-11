import { useDeleteSupplyMutation } from "@/redux/fetures/supply/supplyApi";
import { Trash2 } from "lucide-react";

const DeleteSupply = ({ _id }) => {
  // const handleDelete = useDeleteHandler();
  const [deleteSupply] = useDeleteSupplyMutation();
  return (
    <button
      onClick={() => deleteSupply(_id)}
      className="bg-red-600 p-4 rounded-xl text-white"
    >
      <Trash2 />
    </button>
  );
};

export default DeleteSupply;

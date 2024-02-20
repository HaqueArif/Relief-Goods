import { useQuery } from "@tanstack/react-query";
import {
  createEventItem,
  getEventItems,
  updateEventItem,
} from "./eventItems.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteEventItem } from "./eventItems.api";
import { useState } from "react";

export const useGetEventItems = () => {
  const data = useQuery({
    queryKey: ["event-items"],
    queryFn: getEventItems,
  });

  return data;
};

// post
export const useCreateEventItem = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isError, isSuccess } = useMutation({
    mutationFn: createEventItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["event-items"] });
    },
  });

  return { createEventItem: mutateAsync, isError, isSuccess };
};

// update
export const useUpdateEventItem = () => {
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const { mutateAsync, isSuccess } = useMutation<Response, Error>({
    mutationFn: async (data) => {
      if (selectedItemId !== null) {
        const response = await updateEventItem(
          selectedItemId,
          data as unknown as string
        );
        return response;
      }
      throw new Error("Selected item ID is null.");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["event-items"] });
    },
  });

  return { updateEventItem: mutateAsync, setSelectedItemId, isSuccess };
};

// delete
export const useDeleteEventItem = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isError, isSuccess } = useMutation({
    mutationFn: deleteEventItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["event-items"] });
    },
  });

  return { deleteEventItem: mutateAsync, isError, isSuccess };
};

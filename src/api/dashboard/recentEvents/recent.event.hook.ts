import { useQuery } from "@tanstack/react-query";
import {
  createRecentEvent,
  deleteRecentEvent,
  getRecentEvents,
  updateRecentEvent,
} from "./recentEvents.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export const useGetRecentEvents = () => {
  const data = useQuery({
    queryKey: ["recent-events"],
    queryFn: getRecentEvents,
  });

  return data;
};

// post
export const useCreateRecentEvent = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isError, isSuccess } = useMutation({
    mutationFn: createRecentEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recent-events"] });
    },
  });

  return { createRecentEvent: mutateAsync, isError, isSuccess };
};

// update
export const useUpdateRecentEvent = () => {
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const { mutateAsync, isSuccess } = useMutation<Response, Error>({
    mutationFn: (data) => {
      if (selectedItemId !== null) {
        const response = updateRecentEvent(
          selectedItemId,
          data as unknown as string
        );
        return response;
      }
      throw new Error("Selected item ID is null.");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recent-events"] });
    },
  });

  return { updateRecentEvent: mutateAsync, setSelectedItemId, isSuccess };
};

// delete
export const useDeleteRecentEvent = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isError, isSuccess } = useMutation({
    mutationFn: deleteRecentEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recent-events"] });
    },
  });

  return { deleteRecentEvent: mutateAsync, isError, isSuccess };
};

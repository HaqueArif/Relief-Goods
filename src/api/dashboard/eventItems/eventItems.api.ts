import { TEventData } from "@/components/Types";
import axios from "axios";

export const getEventItems = async () => {
  return await axios.get("https://event-360-server-ten.vercel.app/event-items");
};

export const createEventItem = async (data: TEventData) => {
  const response = await axios.post(
    "https://event-360-server-ten.vercel.app/event-items",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const updateEventItem = async (selectedItemId: string, data: string) => {
  const response = await fetch(
    `https://event-360-server-ten.vercel.app/event-items/${selectedItemId}`,
    {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};

export const deleteEventItem = async (id: string) => {
  const response = await axios.delete(
    `https://event-360-server-ten.vercel.app/event-items/${id}`
  );
  return response.data;
};

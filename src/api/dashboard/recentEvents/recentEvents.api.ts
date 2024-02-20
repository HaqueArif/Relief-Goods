import { TEventData } from "@/components/Types";
import axios from "axios";

export const getRecentEvents = async () => {
  return await axios.get(
    "https://event-360-server-ten.vercel.app/recent-events"
  );
};

export const createRecentEvent = async (data: TEventData) => {
  const response = await axios.post(
    "https://event-360-server-ten.vercel.app/recent-events",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const updateRecentEvent = async (
  selectedItemId: string,
  data: string
) => {
  const response = await fetch(
    `https://event-360-server-ten.vercel.app/recent-events/${selectedItemId}`,
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

export const deleteRecentEvent = async (id: string) => {
  const response = await axios.delete(
    `https://event-360-server-ten.vercel.app/recent-events/${id}`
  );
  return response.data;
};

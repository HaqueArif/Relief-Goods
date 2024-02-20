import Container from "@/components/Container";
import "@/styles/RecentEvents.css";
import { useGetRecentEvents } from "@/api/dashboard/recentEvents/recent.event.hook";
import RecentEventsGallery from "./RecentEventsGallery";
import RecentEventsDetails from "./RecentEventsDetails";

const RecentEvents = () => {
  const { data, isLoading, isError } = useGetRecentEvents();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Something went wrong...</p>;
  }
  const recentEvents = data?.data.slice(0, 6);

  return (
    <div className="recent-E-Parent">
      <Container className="recent-E-Container">
        <RecentEventsGallery recentEvents={recentEvents} />

        <RecentEventsDetails />
      </Container>
    </div>
  );
};

export default RecentEvents;

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

  // getting the first six index data
  const firstSixIndex = data?.data.slice(0, 6);
  const recentEvents = firstSixIndex;

  return (
    <div className="recent-E-Parent">
      <Container className="recent-E-Container">
        {/* left section || thumbnails */}
        <RecentEventsGallery recentEvents={recentEvents} />
        {/* Headings and details */}
        <RecentEventsDetails />
      </Container>
    </div>
  );
};

export default RecentEvents;

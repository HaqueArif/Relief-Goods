import EventItemsSection from "./EventItemsSection";
import HeroSection from "./HeroSection";
import OurClient from "./OurClient";
import OurServices from "./OurServices";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <OurClient />
      <OurServices />
      <EventItemsSection />
    </div>
  );
};

export default Home;

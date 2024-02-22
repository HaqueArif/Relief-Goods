import EventItemsSection from "./EventSection/EventItemsSection";
import EventLifecycle from "./EventLifecycle/EventLifecycle";
import EventRegistration from "./EventRegistration/EventRegistration";
import GallerySection from "./Gallery/GallerySection";
import HeroSection from "./HeroSection/HeroSection";
import OurClient from "./OurClient/OurClient";
import OurServices from "./OurServiceSection/OurServices";
import PricingPlanSection from "./PricingPlan/PricingPlanSection";
import RecentEvents from "./RecentEvents/RecentEvents";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <OurClient />
      <OurServices />
      <EventItemsSection />
      <PricingPlanSection />
      <GallerySection />
      <Testimonial />
      <RecentEvents />
      <EventLifecycle />
      <EventRegistration />
    </div>
  );
};

export default Home;

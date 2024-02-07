import EventItemsSection from "./EventItemsSection";
import EventLifecycle from "./EventLifecycle";
import EventRegistration from "./EventRegistration";
import GallerySection from "./GallerySection";
import HeroSection from "./HeroSection/HeroSection";
import OurClient from "./OurClient";
import OurServices from "./OurServiceSection/OurServices";
import PricingPlanSection from "./PricingPlanSection";
import RecentEvents from "./RecentEvents";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
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

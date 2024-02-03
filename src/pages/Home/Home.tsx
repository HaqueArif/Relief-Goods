import EventItemsSection from "./EventItemsSection";
import GallerySection from "./GallerySection";
import HeroSection from "./HeroSection";
import OurClient from "./OurClient";
import OurServices from "./OurServices";
import PricingPlanSection from "./PricingPlanSection";
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
    </div>
  );
};

export default Home;

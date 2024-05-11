import GallerySection from "./GallerySection";
import HeroSection from "./HeroSection";
import OurWork from "./OurWork";
import GiftCard from "./GiftCard";
import Testimonial from "./Testimonial";
import OurCorporatePartners from "./OurCorporatePartners";
import AboutUs from "./AboutUs";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <OurCorporatePartners />
      <OurWork />
      <GallerySection />
      <GiftCard />
      <AboutUs />
      <Testimonial />
    </div>
  );
};

export default Home;

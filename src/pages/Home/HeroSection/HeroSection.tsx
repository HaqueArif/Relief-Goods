import Container from "@/components/Container";
import "@/styles/Hero.css";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import BottomSection from "./BottomSection";

const HeroSection = () => {
  return (
    <header className=" pt-36 background-style">
      <Container>
        <div className="hero-section-divider">
          <LeftSection />
          <RightSection />
          <BottomSection />
        </div>
      </Container>
    </header>
  );
};

export default HeroSection;

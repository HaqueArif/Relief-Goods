import Container from "@/components/Container";

import "./Hero.css";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import BottomSection from "./BottomSection";

const HeroSection = () => {
  return (
    <header className="min-h-screen pt-36 background-style">
      <Container>
        <div className="hero-section-divide">
          <LeftSection />
          <RightSection />
          <BottomSection />
        </div>
      </Container>
    </header>
  );
};

export default HeroSection;

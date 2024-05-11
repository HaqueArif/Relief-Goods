import Container from "@/components/Container";
import "@/styles/Hero.css";
import HeroDetails from "../../components/HeroDetails";
import { motion } from "framer-motion";
import { intro } from "@/Animation/Hero.animation";

const HeroSection = () => {
  return (
    <motion.header
      variants={intro}
      initial="hidden"
      animate="visible"
      className="hero-section"
    >
      <Container>
        <HeroDetails />
      </Container>
    </motion.header>
  );
};

export default HeroSection;

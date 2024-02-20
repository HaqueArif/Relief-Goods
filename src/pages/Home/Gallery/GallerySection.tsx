import Container from "@/components/Container";
import "@/styles/Gallery.css";

import img1 from "@/assets/Gallery/Picture (9).png";
import img2 from "@/assets/Gallery/Picture (6).png";
import img3 from "@/assets/Gallery/Picture.png";
import img4 from "@/assets/Gallery/Picture (7).png";
import img5 from "@/assets/Gallery/Picture (5).png";
import img6 from "@/assets/Gallery/Picture (1).png";
import img7 from "@/assets/Gallery/Picture (8).png";
import img8 from "@/assets/Gallery/Picture (4).png";
import img9 from "@/assets/Gallery/Picture (2).png";
import img10 from "@/assets/Gallery/Picture (3).png";
import star from "@/assets/Gallery/Star.svg";
import Frame from "./Frame";
import GalleryDetails from "./GalleryDetails";

const GallerySection = () => {
  return (
    <Container className="gallery-measurement">
      <div className="gallery-section-divider">
        <GalleryDetails />

        <Frame
          star={star}
          img1={img1}
          img2={img2}
          img3={img3}
          img4={img4}
          img5={img5}
          img6={img6}
          img7={img7}
          img8={img8}
          img9={img9}
          img10={img10}
        />
      </div>
    </Container>
  );
};

export default GallerySection;

import { Button } from "@/components/ui/button";
import React from "react";

const LeftSection = () => {
  return (
    <div className="left-section">
      <div>
        <h1 className="uppercase">
          <span>Brand New</span>
          <br />
          <span> event Packages</span>
        </h1>
        <h2 className="gradient-text">For Winter</h2>
        <p className="hero-paragraph ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
          imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus
          nec gravida ipsum pulvinar vel non.
        </p>
        <Button>Explore</Button>
      </div>
    </div>
  );
};

export default LeftSection;

import Container from "@/components/Container";

const AboutUs = () => {
  return (
    <Container className="my-[250px]">
      <div className="grid grid-cols-2 gap-20 mt-5 place-items-start">
        <div>
          <h2 className="font-bold text-4xl mb-10 about-heading">
            ABOUT Relief-Goods
          </h2>
          <p className="font-semibold mb-5">
            Relief-Goods exists to ensure no one is without shelter after
            disaster. We often work in places that others don’t, making sure
            that we reach families who need support to take the next step in
            resuming their livelihoods.
          </p>
          <p className="font-light mb-5">
            From Cameroon to Syria, all the way to the Philippines and the
            Caribbean, ShelterBox has provided shelter to over 2.5 million
            people so far.
          </p>
          <p className="font-light mb-5">
            We won’t stop until we see a world where no family goes without
            shelter after disaster.
          </p>
          <button className="btn-hover">Learn More</button>
        </div>
        <div>
          <img src="https://i.postimg.cc/2SSrGfTy/Solar-Lanterns.webp" alt="" />
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;

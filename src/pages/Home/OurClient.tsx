import soptify from "@/assets/Company/Spotify.svg";
import google from "@/assets/Company/google.svg";
import uber from "@/assets/Company/uber.svg";
import microsoft from "@/assets/Company/microsoft.svg";
import shopify from "@/assets/Company/shopify.svg";
import evernote from "@/assets/Company/evernote.svg";
import adobe from "@/assets/Company/adobe.svg";
import paypal from "@/assets/Company/paypal.svg";
import amazon from "@/assets/Company/amazon.svg";
import asana from "@/assets/Company/asana.svg";
import Container from "@/components/Container";

const OurClient = () => {
  const logos = [
    soptify,
    google,
    uber,
    microsoft,
    shopify,
    evernote,
    adobe,
    paypal,
    amazon,
    asana,
  ];
  return (
    <Container>
      <div className="mt-[68px] mb-14">
        <h1 className="text-center mb-[84px]">Our Valuable Client</h1>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-x-2 place-items-center">
          {logos.map((logo, i) => (
            <img className="mb-10 sm:mb-24 " key={i} src={logo} alt="" />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default OurClient;

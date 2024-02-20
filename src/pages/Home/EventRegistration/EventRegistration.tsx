import Container from "@/components/Container";
import "@/styles/EventRegistration.css";
import RegistrationDetails from "./RegistrationDetails";
import RegistrationForm from "./RegistrationForm";

const EventRegistration = () => {
  return (
    <div className=" py-40  ">
      <Container>
        <div className="e-Reg-Divider">
          <RegistrationDetails />
          <RegistrationForm />
        </div>
      </Container>
    </div>
  );
};

export default EventRegistration;

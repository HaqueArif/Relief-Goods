import { NavLink } from "react-router-dom";
import Container from "../Container";

const Navbar = () => {
  return (
    <header className="h-fit fixed py-6 w-full z-[999]">
      <Container>
        <nav className="w-full h-full max-w-[1240px] flex justify-between items-center ">
          <div className="space-x-2 text-[24px] sm:text-[32px]">
            <span className=" font-bold dark-gray">Event</span>
            <span className=" font-[900] text-primary">360</span>
          </div>
          <ul className="space-x-2 sm:space-x-8 font-[500] text-[14px] sm:text-[16px]">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;

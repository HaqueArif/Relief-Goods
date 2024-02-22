import { NavLink } from "react-router-dom";
import Container from "../Container";
import { useState } from "react";
import { MobileNavRoutes, WebNavRoutes } from "./NavRoutes";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="h-fit fixed py-6  w-full z-[999]">
      <Container>
        <nav className="w-full h-full backdrop-blur-sm max-w-[1240px] flex justify-between items-center ">
          {/* logo section */}
          <NavLink to="/" className="space-x-2 text-[24px] sm:text-[32px]">
            <span className=" font-bold dark-gray">Event</span>
            <span className=" font-[900] text-primary">360</span>
          </NavLink>
          {/* web routes */}
          <div className="hidden sm:block">
            <WebNavRoutes />
          </div>

          {/* Mobile Menu */}
          <div className="sm:hidden flex items-center">
            {mobileMenuOpen ? (
              <X
                className="text-primary cursor-pointer"
                size={32}
                onClick={toggleMobileMenu}
              />
            ) : (
              <Menu
                className="text-primary cursor-pointer"
                size={32}
                onClick={toggleMobileMenu}
              />
            )}
          </div>
        </nav>
        {/* web routes */}
        {mobileMenuOpen && (
          <div className="sm:hidden flex justify-end">
            <MobileNavRoutes />
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;

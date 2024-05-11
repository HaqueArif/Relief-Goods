import { NavLink } from "react-router-dom";
import Container from "../Container";
import "@/styles/Nav.css";
import { useState } from "react";
import { MobileNavRoutes, WebNavRoutes } from "./NavRoutes";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInTop } from "@/Animation/useAnimation";
import { useAppDispatch, useAppSelector } from "@/redux/fetures/hooks";
import { logout, selectCurrentUser } from "@/redux/fetures/auth/authSlice";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <motion.header
      variants={fadeInTop}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="h-fit fixed py-6  w-full z-[999]"
    >
      <Container>
        <nav className="nav-styles">
          {/* logo section */}
          <NavLink to="/" className="w-40 md:w-52">
            <img src="https://i.postimg.cc/8cK5TPzF/logo-1.png" alt="" />
          </NavLink>
          {/* web routes */}
          <div className="hidden sm:block">
            <WebNavRoutes handleLogout={handleLogout} user={user} />
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
          <div className="sm:hidden flex justify-end ">
            <MobileNavRoutes handleLogout={handleLogout} user={user} />
          </div>
        )}
      </Container>
    </motion.header>
  );
};

export default Navbar;

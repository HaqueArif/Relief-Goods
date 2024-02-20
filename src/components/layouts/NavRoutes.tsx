import { NavLink } from "react-router-dom";

export const WebNavRoutes = () => {
  return (
    <ul className="space-x-4  text-[14px] sm:text-[16px]">
      <NavLink className="navHover p-2 rounded-md" to="/">
        Home
      </NavLink>
      <NavLink className="navHover p-2 rounded-md" to="/">
        About
      </NavLink>
      <NavLink className="navHover p-2 rounded-md" to="/">
        Contact
      </NavLink>
      <NavLink className="navHover p-2 rounded-md" to="/dashboard">
        Dashboard
      </NavLink>
    </ul>
  );
};

export const MobileNavRoutes = () => {
  return (
    <ul className="mt-5 glass-gradient pt-5 pb-20 px-10  flex flex-col items-end space-y-2 font-bold text-xl">
      <NavLink className="navHover p-2 rounded-md" to="/">
        Home
      </NavLink>
      <NavLink className="navHover p-2 rounded-md" to="/">
        About
      </NavLink>
      <NavLink className="navHover p-2 rounded-md" to="/">
        Contact
      </NavLink>
      <NavLink className="navHover p-2 rounded-md" to="/dashboard">
        Dashboard
      </NavLink>
    </ul>
  );
};

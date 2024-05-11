import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

export const WebNavRoutes = ({ handleLogout, user }) => {
  return (
    <ul className="space-x-4  text-[14px] sm:text-[16px]">
      <NavLink className="navHover p-2 rounded-md" to="/relief-goods">
        All Relief Goods
      </NavLink>
      {user !== null && (
        <NavLink className="navHover p-2 rounded-md" to="/dashboard">
          Dashboard
        </NavLink>
      )}
      {user === null ? (
        <NavLink className="navHover p-2 rounded-md" to="/login">
          Login
        </NavLink>
      ) : (
        <Button onClick={handleLogout} className="navHover p-2 rounded-md">
          Logout
        </Button>
      )}
    </ul>
  );
};

export const MobileNavRoutes = ({ handleLogout, user }) => {
  return (
    <ul className="mt-5 nav-styles pt-5 pb-20 px-10 text-[#085492] flex flex-col items-center space-y-2 font-bold text-xl w-full ">
      <NavLink className="navHover p-2 rounded-md" to="/">
        All Relief Goods
      </NavLink>
      {user !== null && (
        <NavLink className="navHover p-2 rounded-md" to="/dashboard">
          Dashboard
        </NavLink>
      )}

      {user === null ? (
        <NavLink className="navHover p-2 rounded-md" to="/login">
          Login
        </NavLink>
      ) : (
        <Button onClick={handleLogout} className="navHover p-2 rounded-md">
          Logout
        </Button>
      )}
    </ul>
  );
};

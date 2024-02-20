import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="glass-gradient p-5">
        <h1 className="gradient-text capitalize">welcome to the Dashboard</h1>
      </div>
      <p className="text-center mt-10  text-xl">
        Use Left Sidebar to navigate Event-Items or Recent-Events <br /> or{" "}
        <br />
        simply go{" "}
        <NavLink className="text-primary hover:underline" to="/">
          Home
        </NavLink>
      </p>
    </div>
  );
};

export default Dashboard;

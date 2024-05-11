import PieChart from "./PieChart";
import Statistics from "./Statistics";

const Dashboard = () => {
  return (
    <div className="min-h-screen w-full ">
      <h1 className="text-center font-light my-10 ">Dashboard</h1>
      <div className="flex justify-center items-center my-20">
        <div className=" w-full px-20 grid xl:grid-cols-2 gap-20 overflow-x-auto">
          <div className="w-full min-w-[658px]">
            <Statistics />
          </div>
          <div className="w-full min-w-[658px]">
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

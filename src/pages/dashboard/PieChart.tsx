import { useGetDonationQuery } from "@/redux/fetures/donation/donationApi";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const { data, isLoading } = useGetDonationQuery({});
  if (isLoading) {
    return <p>loading</p>;
  }
  // console.log(data);

  const labels = Object.keys(data.monthlyData);
  const amounts = Object.values(data.monthlyData);

  const info = {
    labels: labels,

    datasets: [
      {
        label: "USD$",
        data: amounts,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 30,
      },
    ],
  };

  const options = {};

  return (
    <div className="w-full ">
      <div className="w-[400px] mx-auto">
        <h2 className="text-center font-semibold">
          Donated amount of last three months.
        </h2>
        <Pie data={info} options={options}></Pie>
      </div>
    </div>
  );
};

export default PieChart;

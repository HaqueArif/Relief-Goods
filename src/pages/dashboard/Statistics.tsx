import { useGetDonationQuery } from "@/redux/fetures/donation/donationApi";
import { HeartHandshake, Loader, PackageCheck, User } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import CountUp from "react-countup";

const Statistics = () => {
  const { data, isLoading } = useGetDonationQuery({});
  const controls = useAnimation();

  useEffect(() => {
    if (!isLoading) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.1,
        },
      }));
    }
  }, [isLoading, controls]);

  if (isLoading) {
    return <p>loading</p>;
  }

  const uniqueEmails = new Set();
  data.data.forEach((donation) => {
    uniqueEmails.add(donation.donationInfo.donator.email);
  });
  const totalDonators = uniqueEmails.size;

  // Calculate total donation amount
  const totalAmount = data?.data?.reduce((total, donation) => {
    return total + parseFloat(donation.donationInfo.donatedField.amount);
  }, 0);

  const totalDonations = data.data.length;

  // Filter delivered donations
  const pendingDonations = data.data.filter(
    (donation) => donation.status === "Pending"
  );

  // Filter delivered donations
  const deliveredDonations = data.data.filter((donation) => !donation.status);

  // Calculate total donation amount for each category
  const categoryTotals = {};
  data.data.forEach((donation) => {
    const category = donation.donationInfo.donatedField.category;
    categoryTotals[category] =
      (categoryTotals[category] || 0) +
      parseFloat(donation.donationInfo.donatedField.amount);
  });

  // Find the most donated category
  let mostDonatedCategory = "";
  let highestTotalAmount = 0;
  for (const category in categoryTotals) {
    if (categoryTotals[category] > highestTotalAmount) {
      mostDonatedCategory = category;
      highestTotalAmount = categoryTotals[category];
    }
  }

  return (
    <div className=" grid grid-cols-3 place-items-center gap-10  min-w-[658px] w-full">
      <motion.div
        className="glass-gradient p-7 w-[200px] text-right"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        custom={0}
      >
        <p className="font-bold text-xl ">Total Donation Amount</p>
        {/* Display the total donation amount */}
        <p className="text-primary text-3xl font-extrabold">
          <CountUp end={totalAmount} delay={1} /> $
        </p>
      </motion.div>

      <motion.div
        className="glass-gradient p-7 w-[200px] text-end"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        custom={1}
      >
        <p className="font-bold text-xl">Most Donated Category</p>
        {/* Display the most donated category */}
        <p>
          <span className="text-md"> {mostDonatedCategory}</span>
        </p>
        <p className="text-primary text-3xl font-extrabold">
          <CountUp end={highestTotalAmount} delay={1} /> $
        </p>
      </motion.div>
      <motion.div
        className="glass-gradient p-7 w-[200px] text-right"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        custom={2}
      >
        <p className="font-bold text-xl">Total Donators</p>

        {/* Display the total donation amount */}
        <div className="flex justify-end items-center gap-3">
          <p className="text-primary text-3xl font-extrabold">
            <CountUp end={totalDonators} delay={1} />
          </p>
          <User className="size-8 text-red-400" />
        </div>
      </motion.div>
      <motion.div
        className="glass-gradient p-7 w-[200px] text-right"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        custom={3}
      >
        <p className="font-bold text-xl">Total Donation</p>
        <div className="flex justify-end items-center gap-3">
          {/* Display the total donation amount */}
          <p className="text-primary text-3xl font-extrabold">
            <CountUp end={totalDonations} delay={1} />
          </p>
          <HeartHandshake className="size-8 text-red-400" />
        </div>
      </motion.div>
      <motion.div
        className="glass-gradient p-7 w-[200px] text-right"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        custom={4}
      >
        <p className="font-bold text-xl">Delivered</p>
        {/* Display the total donation amount */}
        <div className="flex justify-end items-center gap-3">
          <p className="text-primary text-3xl font-extrabold">
            <CountUp end={deliveredDonations.length} delay={1} />
          </p>
          <PackageCheck className="size-8 text-red-400" />
        </div>
      </motion.div>
      <motion.div
        className="glass-gradient p-7 w-[200px] text-right"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        custom={5}
      >
        <p className="font-bold text-xl">Pending</p>

        {/* Display the total donation amount */}
        <div className="flex justify-end items-center gap-3">
          <p className="text-primary text-3xl font-extrabold">
            <CountUp end={pendingDonations.length} delay={1} />
          </p>
          <Loader className="size-8 text-red-400" />
        </div>
      </motion.div>
    </div>
  );
};

export default Statistics;

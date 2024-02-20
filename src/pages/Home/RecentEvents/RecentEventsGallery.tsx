import { rotateLeft } from "@/Animation/useAnimation";
import { RecentEventsGalleryProps } from "@/components/Types";
import { motion } from "framer-motion";

const RecentEventsGallery: React.FC<RecentEventsGalleryProps> = ({
  recentEvents,
}) => {
  return (
    <div className="recent-E-Divider">
      {recentEvents.map((item, i) => (
        <motion.img
          variants={rotateLeft}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          key={i}
          className={i === 2 || i === 3 ? "rounded-full" : "rounded-3xl"}
          src={item.item}
          alt="Event"
        />
      ))}
    </div>
  );
};

export default RecentEventsGallery;

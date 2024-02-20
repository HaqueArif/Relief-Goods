import { TImageProps } from "@/components/Types";
import useScrollGrow from "@/hooks/ScrollGrowHook";
import { motion } from "framer-motion";

export const EventItem01 = (props: TImageProps): JSX.Element => {
  const { style, componentRef } = useScrollGrow();
  return (
    <motion.div ref={componentRef} style={style} className="event-item-1">
      <div className="glass-gradient-service w-full h-full p-2 md:p-5">
        <img className="w-full" src={props.thumbnail} alt="event-instrument" />
        <h4 className="mt-3 md:text-2xl font-[500]">Event Item - 1</h4>
      </div>
    </motion.div>
  );
};

export const EventItem02 = (props: TImageProps): JSX.Element => {
  const { style, componentRef } = useScrollGrow();
  return (
    <motion.div ref={componentRef} style={style} className="event-item-2">
      <div className="glass-gradient-service w-full h-full p-2 md:p-5">
        <img className="w-full" src={props.thumbnail} alt="event-instrument" />
        <h4 className="mt-3 md:text-2xl font-[500]">Event Item - 2</h4>
      </div>
    </motion.div>
  );
};
export const EventItem03 = (props: TImageProps): JSX.Element => {
  const { style, componentRef } = useScrollGrow();
  return (
    <motion.div ref={componentRef} style={style} className="event-item-3">
      <div className="glass-gradient-service w-full h-full p-2 md:p-5">
        <img className="w-full" src={props.thumbnail} alt="event-instrument" />
        <h4 className="mt-3 md:text-2xl font-[500]">Event Item - 3</h4>
      </div>
    </motion.div>
  );
};
export const EventItem04 = (props: TImageProps): JSX.Element => {
  const { style, componentRef } = useScrollGrow();
  return (
    <motion.div ref={componentRef} style={style} className="event-item-4">
      <div className="glass-gradient-service w-full h-full p-2 md:p-5">
        <img className="w-full" src={props.thumbnail} alt="event-instrument" />
        <h4 className="mt-3 md:text-2xl font-[500]">Event Item - 4</h4>
      </div>
    </motion.div>
  );
};
export const EventItem05 = (props: TImageProps): JSX.Element => {
  const { style, componentRef } = useScrollGrow();
  return (
    <motion.div ref={componentRef} style={style} className="event-item-5">
      <div className="glass-gradient-service w-full h-full p-2 md:p-5">
        <img className="w-full" src={props.thumbnail} alt="event-instrument" />
        <h4 className="mt-3 md:text-2xl font-[500]">Event Item - 5</h4>
      </div>
    </motion.div>
  );
};
export const EventItem06 = (props: TImageProps): JSX.Element => {
  const { style, componentRef } = useScrollGrow();
  return (
    <motion.div ref={componentRef} style={style} className="event-item-6">
      <div className="glass-gradient-service w-full h-full p-2 md:p-5">
        <img className="w-full" src={props.thumbnail} alt="event-instrument" />
        <h4 className="mt-3 md:text-2xl font-[500]">Event Item - 6</h4>
      </div>
    </motion.div>
  );
};

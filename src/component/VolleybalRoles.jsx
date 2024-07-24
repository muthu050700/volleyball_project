import { playerPositions } from "../Utils/constant";
import PlayerPosition from "./PlayerPosition";
import { delay, motion } from "framer-motion";

const VolleybalRoles = () => {
  return (
    <div className=" text-white flex flex-col bg-slate-800 p-4 py-20">
      <motion.h1
        className=" text-center font-bold text-3xl mb-16"
        initial={{
          y: -30,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.3,
            duration: 2,
            type: "spring",
            stiffness: 400,
          },
        }}
        viewport={{
          once: true,
        }}
      >
        Key Player Positions in Volleyball
      </motion.h1>
      <motion.div className="grid md:grid-row-2 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-2 place-items-center gap-10">
        {playerPositions.map((value, index) => {
          return <PlayerPosition key={value.id} value={value} index={index} />;
        })}
      </motion.div>
    </div>
  );
};

export default VolleybalRoles;

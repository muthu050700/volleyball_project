import { totalGames } from "../Utils/constant";
import { delay, motion } from "framer-motion";
import Games from "./Games";
// const gridContainer = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { staggerChildren: 0.6, ease: "easeOut" } },
// };

const parentContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      ease: "easeOut",
    },
  },
};

const GamesWePlay = () => {
  return (
    <div className=" flex flex-col  justify-center items-center bg-slate-900 gap-20 py-20">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 2,
          ease: "easeIn",
          delay: 0.3,
          type: "spring",
          stiffness: 60,
        }}
        className="font-bold text-4xl text-center"
      >
        Total games we play
      </motion.h1>
      <motion.div
        variants={parentContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-center gap-10 flex-wrap"
      >
        {totalGames.map((value) => {
          return (
            <Games
              key={value.id}
              name={value.gameName}
              image={value.image}
              content={value.content}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default GamesWePlay;

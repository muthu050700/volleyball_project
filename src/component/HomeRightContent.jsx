import { motion } from "framer-motion";
const circle = {
  hidden: {
    y: "-300vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    rotate: 360,
  },
};
const HomeRightContent = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:flex-col md:w-[700px] text-lg lg:text-2xl text-white">
      <motion.div
        className="flex justify-center"
        variants={circle}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 2.3,
          duration: 3,
          ease: "easeInOut",
          type: "spring",
          stiffness: 30,
        }}
      >
        <motion.p
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className=" xl:w-[150px] xl:h-[150px] lg:w-[130px] lg:h-[130px] w-[100px] h-[100px] justify-center flex text-center items-center backdrop-blur-sm bg-black/30 hover:bg-black/50 cursor-pointer  rounded-full"
        >
          Play for Fun
        </motion.p>
      </motion.div>
      <motion.div
        whileTap={{ scale: 0.9 }}
        variants={circle}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 1.8,
          duration: 3,
          ease: "easeInOut",
          type: "spring",
          stiffness: 30,
        }}
        className="flex justify-end "
      >
        <motion.p
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className=" xl:w-[150px] xl:h-[150px] lg:w-[130px] lg:h-[130px]  w-[100px] h-[100px] justify-center flex text-center items-center backdrop-blur-sm bg-black/30 hover:bg-black/50 cursor-pointer rounded-full"
        >
          Play for Fitness
        </motion.p>
      </motion.div>
      <motion.div
        whileTap={{ scale: 0.9 }}
        variants={circle}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 1.3,
          duration: 3,
          ease: "easeInOut",
          type: "spring",
          stiffness: 30,
        }}
        className="flex justify-center"
      >
        <motion.p
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className=" xl:w-[150px] xl:h-[150px] lg:w-[130px] lg:h-[130px]  w-[100px] h-[100px] justify-center flex text-center items-center backdrop-blur-sm bg-black/30 hover:bg-black/50 cursor-pointer rounded-full"
        >
          Play for Friendship
        </motion.p>
      </motion.div>
    </div>
  );
};

export default HomeRightContent;
// flex flex-wrap justify-center gap-4 md:flex-col md:w-[700px] text-lg lg:text-2xl text-white
// flex flex-wrap justify-center gap-4 md:gap-14  md:flex-row text-lg lg:text-2xl text-white

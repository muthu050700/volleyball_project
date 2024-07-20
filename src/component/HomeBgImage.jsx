import { GiDuration } from "react-icons/gi";
import { bg_Image } from "../Utils/constant";
import { delay, motion } from "framer-motion";
const HomeBgImage = () => {
  const welcome = {
    hidden: {
      y: "5vw",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const heading = {
    hidden: {
      x: "-300vh",
    },
    visible: {
      x: 0,
    },
  };
  const circle = {
    hidden: {
      x: "100vh",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <div
        className="bg-cover md:bg-top bg-bottom w-full h-screlg"
        style={{ backgroundImage: `url(${bg_Image})` }}
        // className={`h-screen w-full  bg-center bg-gradient-to-t from-zinc-600 to-zinc-900 relative `}
      >
        {/* <img
          src={bg_Image}
          className=" w-full h-full object-cover absolute mix-blend-overlay"
        /> */}
        <div className="absolute bg-black opacity-60 w-full h-screen"></div>
        <div className="flex flex-col  text-white justify-center items-center md:flex-row md:justify-between md:items-center h-screen md:gap-14 gap-10 px-4">
          <div className="flex flex-col justify-center">
            <div className=" text-4xl md:text-7xl xl:text-9xl font-bold">
              <motion.p
                variants={welcome}
                initial="hidden"
                whileInView="visible"
                transition={{
                  duration: 2,
                  ease: "easeOut",
                  delay: 0.3,
                  type: "spring",
                }}
              >
                Welcome to
              </motion.p>
              <motion.p
                variants={welcome}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 2,
                  ease: "easeOut",
                  delay: 0.7,
                  type: "spring",
                }}
                className=" bg-gradient-to-tr from-[#e9e9e9] to-[#0D202E] text-transparent bg-clip-text"
              >
                PVR Volleyball
              </motion.p>{" "}
              <motion.p
                variants={welcome}
                initial="hidden"
                animate="visible"
                type="spring"
                transition={{
                  duration: 2,
                  ease: "easeOut",
                  delay: 1.1,
                  type: "spring",
                }}
              >
                Team.
              </motion.p>
            </div>
            <motion.h2
              variants={heading}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 2,
                ease: "easeOut",
                delay: 1.1,
                type: "spring",
              }}
              className="flex text-xl gap-4 md:text-3xl font-bold pt-5 md:px-4"
            >
              Volleyball: a sport for all, a sport for life.
            </motion.h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:flex-col md:flex-1 text-lg lg:text-2xl text-white">
            <motion.div
              className="flex justify-center"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              variants={circle}
              initial="hidden"
              animate="visible"
              transition={{
                delay: 1.5,
                duration: 2,
                ease: "easeInOut",
                type: "spring",
              }}
            >
              <p className=" lg:w-[150px] lg:h-[150px] w-[100px] h-[100px] justify-center flex text-center items-center backdrop-blur-sm bg-black/30 hover:bg-black/50 cursor-pointer  rounded-full">
                Play for Fun
              </p>
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.9 }}
              variants={circle}
              initial="hidden"
              animate="visible"
              transition={{
                delay: 1.9,
                duration: 2,
                ease: "easeInOut",
                type: "spring",
              }}
              className="flex justify-end "
            >
              <p className=" lg:w-[150px] lg:h-[150px] w-[100px] h-[100px] justify-center flex text-center items-center backdrop-blur-sm bg-black/30 hover:bg-black/50 cursor-pointer rounded-full">
                Play for Fitness
              </p>
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.9 }}
              variants={circle}
              initial="hidden"
              animate="visible"
              transition={{
                delay: 2.5,
                duration: 2,
                ease: "easeInOut",
                type: "spring",
              }}
              className="flex justify-center"
            >
              <p className=" lg:w-[150px] lg:h-[150px] w-[100px] h-[100px] justify-center flex text-center items-center backdrop-blur-sm bg-black/30 hover:bg-black/50 cursor-pointer rounded-full">
                Play for Friendship
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBgImage;

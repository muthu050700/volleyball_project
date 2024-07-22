import { motion } from "framer-motion";

const HomeLeftContent = () => {
  const mainContent = {
    hidden: {
      y: "5vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      once: true,
    },
  };
  const SubContent = {
    hidden: {
      y: "5vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <div className="flex flex-col justify-center  mt-10 lg:mt-0">
        <div className=" text-4xl  md:text-7xl xl:text-8xl font-bold ">
          <motion.p
            variants={mainContent}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 2,
              ease: "easeIn",
              delay: 0.3,
              type: "spring",
              stiffness: 60,
            }}
            className=" inline-block"
          >
            Welcome to
          </motion.p>{" "}
          <motion.p
            variants={mainContent}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 2,
              ease: "easeIn",
              delay: 0.7,
              type: "spring",
              stiffness: 60,
            }}
            className=" inline-block bg-gradient-to-tr from-[#e9e9e9] to-[#0D202E] text-transparent bg-clip-text"
          >
            PVR Volleyball
          </motion.p>{" "}
          <motion.p
            variants={mainContent}
            initial="hidden"
            animate="visible"
            type="spring"
            transition={{
              duration: 2,
              ease: "easeIn",
              delay: 1.1,
              type: "spring",
              stiffness: 60,
            }}
            className="inline-block lg:block"
          >
            Team.
          </motion.p>
          {/* <motion.p
            variants={mainContent}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 2,
              ease: "easeOut",
              delay: 0.3,
              type: "spring",
            }}
          >
            Welcome to PVR Volleyball Team
          </motion.p> */}
        </div>
        <motion.p
          variants={SubContent}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 2,
            ease: "easeIn",
            delay: 0.8,
            type: "spring",
            stiffness: 60,
          }}
          className="flex text-xl gap-4 md:text-2xl lg:text-4xl font-bold pt-4 md:pt-12 md:px-4 "
        >
          Volleyball: a sport for all, a sport for life.
        </motion.p>
      </div>
    </>
  );
};

export default HomeLeftContent;

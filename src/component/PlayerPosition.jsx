import { delay, motion } from "framer-motion";
import { Link } from "react-router-dom";
const PlayerPosition = ({ value, index }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          delay: 0.2 * index,
          duration: 1,
          type: "spring",
          damping: 10,
          bounce: 2,
          stiffness: 300,
        },
      }}
      viewport={{
        once: true,
      }}
      key={value.id}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{
          type: "spring",
          damping: 10,
          bounce: 2,
          stiffness: 300,
        }}
        className="p-3 flex flex-col items-center gap-5 w-[300px] lg:w-[360px] lg:h-[430px] cursor-pointer bg-slate-600 shadow-xl rounded-lg overflow-hidden "
      >
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.5,
            },
          }}
        >
          <div className=" bg-black absolute w-[276px] h-[200px] lg:w-[336px] lg:h-[200px] opacity-35 hover:opacity-0 transition duration-200 rounded-md cursor-pointer"></div>
          <motion.img
            src={value.image}
            className=" w-[340px] h-[200px] object-cover cursor-pointer shadow-md rounded-md"
          />
        </motion.div>

        <h2 className=" font-bold text-xl">{value.positionName}</h2>
        <p className=" text-justify">{value.description}</p>
        <div className="w-full flex justify-end">
          <Link to={"/positioninfo/" + value.id}>
            {" "}
            <motion.button
              whileTap={{
                scale: 0.8,
                transition: {
                  duration: 0.3,
                },
              }}
              className="bg-orange-500 px-3 py-2 text-lg font-medium rounded-md"
            >
              view in detail
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PlayerPosition;

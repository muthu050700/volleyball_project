import { motion } from "framer-motion";

const Games = ({ name, image, content }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ bounce: 2 }}
      className=" w-[300px] p-3 flex flex-col items-center text-justify gap-3 shadow-xl"
    >
      <img className=" w-[300px] h-[200px]" src={`${image}`} alt="img" />
      <h1 className="text-xl font-medium">{name}</h1>
      <p>{content}</p>
    </motion.div>
  );
};

export default Games;

import { delay, motion } from "framer-motion";
const squareContainer = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    delay: 1,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", damping: 10, bounce: 2 },
  },
};
const Games = ({ name, image, content }) => {
  return (
    <motion.div
      variants={squareContainer}
      whileHover={{ scale: 1.1 }}
      className=" w-[300px] p-3 flex flex-col items-center text-justify gap-3 shadow-xl cursor-pointer"
    >
      <img className=" w-[300px] h-[200px]" src={`${image}`} alt="img" />
      <h1 className="text-xl font-medium">{name}</h1>
      <p>{content}</p>
    </motion.div>
  );
};

export default Games;

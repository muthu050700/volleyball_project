import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
const DrillComponent = ({ data }) => {
  const title = data.title;
  const drillData = data.drills;
  console.log(drillData);
  return (
    <div className="py-20">
      <h1 className="font-bold text-4xl pb-10 text-center mb-10">{title}</h1>
      <div className="flex justify-center items-center ">
        {/* {model && (
          <div
            className={`${
              model
                ? "absolute top-0 left-0 h-full w-full text-black transition duration-500 ease-in-out"
                : " absolute top-0 left-[-100vh] h-full w-full text-black transition duration-500 ease-in-out"
            }`}
          >
            <div className="w-8/12 h-full bg-white flex justify-center ">
              <div
                onClick={() => {
                  setModel(!model);
                }}
              >
                <IoMdClose />
              </div>
            </div>
          </div>
        )}   */}
        <div className="drillcontainer relative h-80vh">
          <div className="flex flex-wrap gap-10 justify-center">
            {drillData.map((value) => {
              return (
                <div
                  className="drills w-[300px] h-[400px] md:w-[350px] md:h-[450px]  bg-slate-700 flex flex-col items-center justify-evenly py-10  px-3"
                  key={value.id}
                >
                  <h1 className="font-bold text-xl md:text-3xl text-center">
                    {value.name}
                  </h1>
                  <p className=" text-md font-medium md:text-lg text-justify">
                    {value.description}
                  </p>
                  <motion.div className="p-3 border-2 cursor-pointer">
                    <motion.p className="">
                      <MdArrowOutward size={30} />
                    </motion.p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrillComponent;

import { volleyballRulesJson } from "../../Utils/volleyballRulesData";
import RulesDescription from "./RulesDescription";
import { motion } from "framer-motion";
const VolleyballRules = () => {
  const data = volleyballRulesJson[0].rules;
  const title = volleyballRulesJson[0].title;
  const describtion = volleyballRulesJson[0].description;
  return (
    <div className=" bg-slate-800 text-white py-20 px-4">
      <div className="flex flex-col items-center pb-20 gap-5">
        <motion.h1 className="text-3xl font-bold ">{title}</motion.h1>
        <p className="font-medium text-lg  md:w-[650px] text-justify md:mx-3 ">
          {describtion}
        </p>
      </div>
      <div className=" flex flex-wrap justify-center items-center">
        {data.map((value, index) => {
          return (
            <>
              <div
                key={value.index}
                className={` w-[400px] md:w-[350px]     ${
                  index % 2 === 0
                    ? "md:border-b-2 md:border-l-0 md:h-[500px]  "
                    : "  md:border-l-2 md:h-[500px]  "
                } 
             ${
               index % 3 === 0
                 ? "lg:border-b-2 lg:border-l-0 xl:w-[400px] 2xl:w-[550px] lg:w-[330px] xl:h-[450px]"
                 : "lg:border-b-2 lg:border-l-2  xl:w-[400px]  2xl:w-[550px]  lg:w-[330px] xl:h-[450px]"
             }
                 
                flex flex-col items-center p-3 gap-4 border-l-2 border-b-2 `}
              >
                <div className="border rounded-full p-2 mr-2 bg-white w-12 h-12 md:w-20 md:h-20 flex items-center justify-center">
                  <motion.img
                    whileHover={{
                      scale: 1.1,
                    }}
                    src={value.icon}
                    className="w-12 h-14 flex items-center cursor-pointer"
                  />
                </div>
                <motion.h1
                  whileHover={{
                    borderBottom: "3px solid white",
                    duration: 10,
                  }}
                  transition={{
                    duration: 10,
                  }}
                  className="text-2xl font-bold cursor-pointer"
                >
                  {value.category}
                </motion.h1>
                <RulesDescription value={value.rules} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default VolleyballRules;

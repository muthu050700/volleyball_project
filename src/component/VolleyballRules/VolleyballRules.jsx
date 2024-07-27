import { volleyballRulesJson } from "../../Utils/volleyballRulesData";
import RulesDescription from "./RulesDescription";

const VolleyballRules = () => {
  const data = volleyballRulesJson[0].rules;
  const title = volleyballRulesJson[0].title;
  const describtion = volleyballRulesJson[0].description;
  return (
    <div className=" bg-slate-800 text-white py-20 px-4">
      <div className="flex flex-col items-center pb-20 gap-5">
        <h1 className="text-3xl font-bold ">{title}</h1>
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
                  <img
                    src={value.icon}
                    className="w-12 h-14 flex items-center"
                  />
                </div>
                <h1 className="text-2xl font-bold">{value.category}</h1>
                <RulesDescription value={value.rules} />
              </div>
            </>
          );
        })}

        {/* <div className="w-[400px]  border-b-2 border-r-2 flex flex-col items-center p-3 gap-4 ">
          <div className="border rounded-full p-2 mr-2 bg-white w-12 h-12  md:w-20 md:h-20 flex items-center justify-center">
            <img src={icon} className="w-12" />
          </div>
          <h1 className="text-2xl font-bold">Heading</h1>
          <p className="text-lg font-medium text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            quaerat itaque ducimus minus! Veritatis odit excepturi, ad numquam
            quod ipsam, dolorum in ratione, est porro voluptatum labore quisquam
            nisi repudiandae.
          </p>
        </div>
        <div className="w-[400px]  border-b-2 border-r-2 flex flex-col items-center p-3 gap-4 ">
          <div className="border rounded-full p-2 mr-2 bg-white w-12 h-12  md:w-20 md:h-20 flex items-center justify-center">
            <img src={icon} className="w-12" />
          </div>
          <h1 className="text-2xl font-bold">Heading</h1>
          <p className="text-lg font-medium text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            quaerat itaque ducimus minus! Veritatis odit excepturi, ad numquam
            quod ipsam, dolorum in ratione, est porro voluptatum labore quisquam
            nisi repudiandae.
          </p>
        </div>
        <div className="w-[400px]  border-b-2 border-r-2 flex flex-col items-center p-3 gap-4 ">
          <div className="border rounded-full p-2 mr-2 bg-white w-12 h-12  md:w-20 md:h-20 flex items-center justify-center">
            <img src={icon} className="w-12" />
          </div>
          <h1 className="text-2xl font-bold">Heading</h1>
          <p className="text-lg font-medium text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            quaerat itaque ducimus minus! Veritatis odit excepturi, ad numquam
            quod ipsam, dolorum in ratione, est porro voluptatum labore quisquam
            nisi repudiandae.
          </p>
        </div>
        <div className="w-[400px]  border-b-2 border-r-2 flex flex-col items-center p-3 gap-4 ">
          <div className="border rounded-full p-2 mr-2 bg-white w-12 h-12  md:w-20 md:h-20 flex items-center justify-center">
            <img src={icon} className="w-12" />
          </div>
          <h1 className="text-2xl font-bold">Heading</h1>
          <p className="text-lg font-medium text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            quaerat itaque ducimus minus! Veritatis odit excepturi, ad numquam
            quod ipsam, dolorum in ratione, est porro voluptatum labore quisquam
            nisi repudiandae.
          </p>
        </div>
        <div className="w-[400px]  border-b-2 border-r-2 flex flex-col items-center p-3 gap-4 ">
          <div className="border rounded-full p-2 mr-2 bg-white w-12 h-12  md:w-20 md:h-20 flex items-center justify-center">
            <img src={icon} className="w-12" />
          </div>
          <h1 className="text-2xl font-bold">Heading</h1>
          <p className="text-lg font-medium text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            quaerat itaque ducimus minus! Veritatis odit excepturi, ad numquam
            quod ipsam, dolorum in ratione, est porro voluptatum labore quisquam
            nisi repudiandae.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default VolleyballRules;

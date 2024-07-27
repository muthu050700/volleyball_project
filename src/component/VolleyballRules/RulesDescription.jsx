import React from "react";

const RulesDescription = ({ value }) => {
  return (
    <>
      {value.map((val, index) => {
        return (
          <div key={index} className="flex w-full items-start text-justify ">
            <li className=" text-lg md:text-xl">{val.rule}</li>
          </div>
        );
      })}
    </>
  );
};

export default RulesDescription;

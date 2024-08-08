import { aboutTeamData } from "../../Utils/ConstantForAbout";
import { useState } from "react";
import PVRTeam from "./PVRTeam";
const KnowAboutPVRTeam = () => {
  const [showIndex, setShowIndex] = useState(0);
  return (
    <div className=" bg-gray-900 w-full py-20">
      <div className="flex text-white justify-center font-bold text-3xl pb-10">
        <h1>PVR Volleyball Team: Our Community and Passion for the Game</h1>
      </div>
      <div className="flex flex-col items-center">
        <div className="px-3 md:px-0 xl:w-9/12 md:w-10/12 ">
          {aboutTeamData.map((value, index) => {
            return (
              <PVRTeam
                key={value.id}
                value={value}
                showContent={showIndex === index && true}
                setShowIndex={() => {
                  showIndex === index
                    ? setShowIndex(null)
                    : setShowIndex(index);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default KnowAboutPVRTeam;

// <div className=" bg-gray-900 w-full h-screen">
//   <div className=" relative  h-screen flex justify-center items-center">
//     <div className="absolute">
//       <motion.img
//         initial="initial"
//         animate={["animate", "initialHide"]}
//         variants={{
//           initial: {
//             opacity: 0,
//           },
//           initialHide: {
//             opacity: 1,
//           },
//           animate: {
//             rotate: 360,

//             transition: {
//               duration: 5,
//               repeat: Infinity,
//               delay: 1,
//               ease: "linear",
//             },
//           },
//         }}
//         className="w-[250px] lg:w-[350px]"
//         src="https://socradar.io/wp-content/themes/socradar/assets/image/static/circle-1.png"
//       ></motion.img>
//     </div>
//     <div className=" absolute">
//       <motion.img
//         initial="initial"
//         animate={["animate", "initialHide"]}
//         variants={{
//           initial: {
//             opacity: 0,
//           },
//           initialHide: {
//             opacity: 1,
//           },
//           animate: {
//             rotate: -360,
//             transition: {
//               duration: 5,
//               repeat: Infinity,
//               delay: 1,
//               ease: "linear",
//             },
//           },
//         }}
//         className="w-[250px] lg:w-[350px]"
//         src="https://socradar.io/wp-content/themes/socradar/assets/image/static/circle-2.png"
//       ></motion.img>
//     </div>
//   </div>
// </div>

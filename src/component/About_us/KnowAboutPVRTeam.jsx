import { IoIosArrowUp } from "react-icons/io";
import { ground_img } from "../../Utils/ConstantForAbout";
import { useState } from "react";
const KnowAboutPVRTeam = () => {
  const [showContent, setShowContent] = useState(true);
  return (
    <div className=" bg-gray-900 w-full lg:h-screen">
      <div className="flex text-white justify-center font-bold text-3xl">
        <h1>PVR Volleyball Team: Our Community and Passion for the Game</h1>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-slate-800 w-9/12 ">
          <div
            className="flex justify-between cursor-pointer"
            onClick={() => {
              setShowContent(!showContent);
            }}
          >
            <h2 className="font-medium text-white text-2xl py-5 px-3">
              About us
            </h2>
            <div className="flex items-center px-4">
              <IoIosArrowUp size={30} />
            </div>
          </div>
          {showContent && (
            <div className="flex items-center lg:items-start flex-col lg:flex-row gap-10 px-3 py-5 lg:py-3">
              <div className="lg:w-3/12">
                <img
                  src={ground_img}
                  alt=""
                  className="w-[400px] h-[250px] object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-4 lg:w-9/12">
                <h2 className="text-white font-bold text-2xl">
                  About PVR Volleyball Team
                </h2>
                <p className="text-white font-medium text-lg text-justify">
                  We are the PVR Volleyball Team, proudly representing this
                  spiritually significant and peaceful village. With around 30
                  to 35 enthusiastic players, our team comes together to enjoy
                  the game, stay fit, and foster a strong sense of community.
                </p>
              </div>
            </div>
          )}
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

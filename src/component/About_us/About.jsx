import { about_bg_img } from "../../Utils/ConstantForAbout";

import HeroBgForRouters from "../HeroBgForRouters";
import AboutPutlurVillage from "./AboutPutlurVillage";
import KnowAboutPVRTeam from "./KnowAboutPVRTeam";
const About = () => {
  return (
    <div>
      <div
        className="bg-cover md:bg-left bg-center w-full h-[60vh] relative"
        style={{ backgroundImage: `url(${about_bg_img})` }}
      >
        <div className="absolute bg-gradient-to-r from-gray-900 to-zinc-950 opacity-50   w-full h-[60vh]"></div>
        <div>
          <HeroBgForRouters title={" About Us: Our Team and Heritage"} />
        </div>
        <div className="bg-black  w-full flex justify-center items-center py-20 ">
          <AboutPutlurVillage />
        </div>
        <div>
          <KnowAboutPVRTeam />
        </div>
      </div>
    </div>
  );
};

export default About;

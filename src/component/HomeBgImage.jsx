import { bg_Image } from "../Utils/constant";
import HomeLeftContent from "./HomeLeftContent";
import HomeRightContent from "./HomeRightContent";
const HomeBgImage = () => {
  return (
    <>
      <div
        className="bg-cover md:bg-top bg-bottom w-full h-screlg"
        style={{ backgroundImage: `url(${bg_Image})` }}
      >
        <div className="absolute bg-black opacity-60 w-full h-screen"></div>
        <div className="flex flex-col  text-white justify-center items-center md:flex-row md:justify-between md:items-center h-screen md:gap-14 gap-10 px-4">
          <HomeLeftContent />
          <HomeRightContent />
        </div>
      </div>
    </>
  );
};

export default HomeBgImage;
// "flex flex-col  text-white justify-center items-center md:flex-row md:justify-between md:items-center h-screen md:gap-14 gap-10 px-4";

// "flex flex-col  text-white justify-center items-center  md:items-center h-screen md:gap-14 gap-10 px-4"

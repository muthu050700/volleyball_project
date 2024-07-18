import { bg_Image } from "../Utils/constant";

const HomeBgImage = () => {
  return (
    <>
      <div
        className="bg-cover md:bg-top bg-bottom w-full h-screen "
        style={{ backgroundImage: `url(${bg_Image}) ` }}
        // className={`h-screen w-full  bg-center bg-gradient-to-t from-zinc-600 to-zinc-900 relative `}
      >
        {/* <img
          src={bg_Image}
          className=" w-full h-full object-cover absolute mix-blend-overlay"
        /> */}
        <div className="absolute bg-black opacity-50 w-full h-screen"></div>
        <div className="flex flex-col  text-white justify-center items-center md:flex-row md:justify-between md:items-center h-screen md:gap-14 gap-10 px-4">
          <div className="flex flex-col md:flex-1 justify-center">
            <h1 className=" text-4xl md:text-7xl xl:text-8xl font-bold">
              Welcome to<br></br>{" "}
              <span className=" bg-gradient-to-tr from-[#e9e9e9] to-[#0D202E] text-transparent bg-clip-text">
                PVR Volleyball
              </span>{" "}
              Team.
            </h1>
            <h2 className="flex text-xl gap-4 md:text-3xl font-bold pt-5 md:px-4">
              Volleyball: a sport for all, a sport for life.
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:flex-col md:flex-1 text-lg xl:text-2xl text-white">
            <div className="flex justify-center ">
              <p className=" xl:w-[150px] xl:h-[150px] w-[100px] h-[100px] justify-center flex text-center items-center backdrop-blur-sm bg-black/30 hover:bg-black/50 cursor-pointer  rounded-full">
                Play for Fun
              </p>
            </div>
            <div className="flex justify-end ">
              <p className=" xl:w-[150px] xl:h-[150px] w-[100px] h-[100px] justify-center flex text-center items-center backdrop-blur-sm bg-black/30 hover:bg-black/50 cursor-pointer rounded-full">
                Play for Fitness
              </p>
            </div>
            <div className="flex justify-center">
              <p className=" xl:w-[150px] xl:h-[150px] w-[100px] h-[100px] justify-center flex text-center items-center backdrop-blur-sm bg-black/30 hover:bg-black/50 cursor-pointer rounded-full">
                Play for Friendship
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBgImage;

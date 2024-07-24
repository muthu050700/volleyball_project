const HeroForPositionInfo = ({ value }) => {
  return (
    <>
      <div className=" flex md:flex-row flex-col  mt-[150px] mx-3 md:mx-0  md:w-10/12 border gap-4 border-white p-4 rounded-3xl shadow-slate-600">
        <div className="lg:w-5/12 ">
          <img src={`${value.image}`} className=" w-full h-full rounded-md" />
        </div>
        <div className="flex flex-col lg:w-7/12 gap-3 ">
          <div className="flex items-center">
            <div className="border rounded-full p-2 mr-2 bg-white w-12 h-12  md:w-20 md:h-20 flex items-center justify-center">
              <img src={`${value.icon}`} className="w-12 " />
            </div>

            <h1 className="lg:font-bold md:font-bold text-xl lg:text-3xl flex items-center">
              {value.name}
            </h1>
          </div>

          <p className="font-medium text-lg text-justify">
            {value.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroForPositionInfo;

const PlayersResponsibility = (props) => {
  const title = props.data.title;
  const purpose = props.data.purpose;
  const playerData = props.data.responsibilities;

  return (
    <div className="w-full pt-[100px] flex flex-col gap-16 py-32  ">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-4xl pb-10">{title}</h1>
        <p className="font-medium text-lg md:w-[650px] text-justify mx-3 md:mx-0">
          {purpose}
        </p>
      </div>
      <div className="flex md:justify-center md:items-center">
        <div className=" flex flex-wrap md:justify-center md:w-9/12 mx-3 md:mx-0  gap-10 ">
          {playerData.map((value, index) => {
            return (
              <div
                key={value.id}
                className={`xl:w-[500px]  lg:w-[350px]  flex flex-col flex-shrink gap-5 bg-slate-700 ${
                  index % 2 !== 0 && "lg:relative md:top-10"
                } `}
              >
                <div>
                  <img
                    src={value.image}
                    className="h-[300px] w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-5 px-3 py-2">
                  <div className="flex gap-2">
                    <div className="border rounded-full p-1 mr-1 bg-white w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                      <img src={`${value.icon}`} className="w-12 " />
                    </div>

                    <h1 className="font-bold xl:text-3xl text-xl flex items-center">
                      {value.name}
                    </h1>
                  </div>
                  <p className=" font-medium text-lg text-justify ">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PlayersResponsibility;

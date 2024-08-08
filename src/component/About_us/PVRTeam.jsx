import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
const PVRTeam = ({ value, setShowIndex, showContent }) => {
  return (
    <>
      <div className="  border-b-2 border-gray-300 my-3 bg-gray-800 shadow-xl">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => {
            setShowIndex();
          }}
        >
          <h2 className="font-medium text-white text-2xl py-5 px-3">
            {value.title}
          </h2>
          <div className="flex items-center px-4">
            {showContent ? (
              <IoIosArrowUp size={30} />
            ) : (
              <IoIosArrowDown size={30} />
            )}
          </div>
        </div>
        {showContent && (
          <div className="flex items-center lg:items-start flex-col lg:flex-row gap-10 px-3 py-5 lg:py-3">
            <div className="lg:w-3/12">
              <img
                src={value.image}
                alt=""
                className="w-[400px] h-[250px] object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-4 lg:w-9/12">
              <h2 className="text-white font-bold text-2xl">
                {value.sub_title}
              </h2>
              <p className="text-white font-medium text-lg text-justify">
                {value.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PVRTeam;

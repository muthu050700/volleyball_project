import {
  putlur_img_1,
  putlur_img_2,
  putlurData,
} from "../../Utils/ConstantForAbout";

const OverViewOfPutlur = ({ value }) => {
  const { description, icon, heading } = value;
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="border rounded-full p-1 mr-1 bg-white w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
          <img src={`${icon}`} className="w-12 " />
        </div>
        <div className="flex items-center md:w-[600px]">
          <p className=" font-medium md:text-lg text-justify">
            <span className="font-bold md:text-xl">{heading}</span> :{" "}
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default OverViewOfPutlur;

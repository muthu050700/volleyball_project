import {
  putlur_img_1,
  putlur_img_2,
  putlurData,
} from "../../Utils/ConstantForAbout";
import OverViewOfPutlur from "./OverViewOfPutlur";

const AboutPutlurVillage = () => {
  return (
    <div className="flex flex-col w-full xl:flex-row gap-10 xl:max-w-[1400px] xl:h-[600px] px-3">
      <div className="flex flex-col md:w-full xl:w-[600px] md:h-[600px] xl:h-0 items-start relative">
        <div className="md:absolute xl:top-2 md:left-20 xl:left-0">
          <img
            src={putlur_img_1}
            className=" w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover "
          />
        </div>

        <div className=" md:absolute xl:top-36 xl:left-36 xl:block md:top-52 flex items-end w-full justify-end md:right-20 xl:right-0">
          <img
            src={putlur_img_2}
            className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover "
          />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="text-white md:xl:w-[600px] xl:w-[700px] md:h-[600px] ">
          <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl pb-5 text-center">
            Putlur: From Obscurity to a Revered Pilgrimage Site
          </h1>
          <div className="flex flex-col gap-6">
            {putlurData.map((value) => {
              return <OverViewOfPutlur key={value.id} value={value} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPutlurVillage;

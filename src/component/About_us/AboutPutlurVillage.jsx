import {
  putlur_img_1,
  putlur_img_2,
  putlurData,
} from "../../Utils/ConstantForAbout";
import OverViewOfPutlur from "./OverViewOfPutlur";

const AboutPutlurVillage = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-10 xl:max-w-[1400px] xl:h-[600px] px-3">
      <div className="flex items-center justify-center xl:block">
        <div className="flex flex-col md:w-[600px] relative">
          <div className="f xl:absolute top-2">
            <img
              src={putlur_img_1}
              className=" w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover "
            />
          </div>
          <div className="flex justify-center md:justify-end xl:absolute top-36 left-36">
            <img
              src={putlur_img_2}
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover "
            />
          </div>
        </div>
      </div>

      <div className="text-white md:w-[700px] md:h-[600px] ">
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
  );
};

export default AboutPutlurVillage;

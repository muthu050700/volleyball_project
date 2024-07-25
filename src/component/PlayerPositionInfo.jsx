import { positionDetails } from "../Utils/constant";
import HeroForPositionInfo from "./HeroForPositionInfo";
import { useParams } from "react-router-dom";
import PlayersResponsibility from "./PlayersResponsibility";
import DrillComponent from "./DrillComponent/DrillComponent";
import drillsData from "../Utils/Drills Data";

const PlayerPositionInfo = () => {
  const { positionid } = useParams();
  // const data = positionDetails.map((value) => {
  //   return value.id === positionid && value;
  // });
  // console.log(data);
  return (
    <>
      <div className="bg-slate-900 text-white relative h-full">
        <div className=" flex flex-col justify-center lg:pt-0 ">
          <div className=" flex justify-center ">
            {positionDetails.map((value, index) => {
              return (
                value.id === positionid && (
                  <HeroForPositionInfo key={value.id} value={value} />
                )
              );
            })}
          </div>
        </div>
        {positionDetails.map((value, index) => {
          return (
            value.id === positionid && (
              <PlayersResponsibility key={value.id} data={value} />
            )
          );
        })}
        <div>
          {drillsData.map((value, index) => {
            return (
              value.id === positionid && (
                <DrillComponent key={value.id} data={value} />
              )
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PlayerPositionInfo;

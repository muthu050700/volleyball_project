import { totalGames } from "../Utils/constant";
import Games from "./Games";

const GamesWePlay = () => {
  return (
    <div className=" flex flex-col justify-center items-center bg-slate-900 gap-20 p-10">
      <h1 className="font-bold text-4xl">Total games we play</h1>
      <div className="flex flex-col md:flex-row justify-center gap-10">
        {totalGames.map((value) => {
          return (
            <Games
              key={value.id}
              name={value.gameName}
              image={value.image}
              content={value.content}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GamesWePlay;

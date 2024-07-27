import GamesWePlay from "./GamesWePlay";
import HomeBgImage from "./HomeBgImage";
import VolleyballRules from "./VolleyballRules/VolleyballRules";
import VolleybalRoles from "./VolleybalRoles";

const Home = () => {
  return (
    <div>
      <HomeBgImage />
      <VolleybalRoles />
      <VolleyballRules />
      {/* <GamesWePlay /> */}
    </div>
  );
};

export default Home;

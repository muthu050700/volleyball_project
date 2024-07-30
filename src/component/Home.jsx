import GamesWePlay from "./GamesWePlay";
import HomeBgImage from "./HomeBgImage";
import VolleyballRules from "./VolleyballRules/VolleyballRules";
import VolleybalRoles from "./VolleybalRoles";

const Home = () => {
  return (
    <div>
      <HomeBgImage />
      <VolleyballRules />
      <VolleybalRoles />
      {/* <GamesWePlay /> */}
    </div>
  );
};

export default Home;

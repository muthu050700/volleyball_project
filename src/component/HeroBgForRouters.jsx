import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { navlink } from "../Utils/constant";
const HeroBgForRouters = ({ title }) => {
  const { pathname } = useLocation();
  return (
    <div>
      <div className="text-white flex items-center h-[60vh] justify-end">
        <h1 className="font-bold text-6xl main-title z-10 lg:mr-32">{title}</h1>
      </div>
      <div className="absolute bg-red-700 px-3 py-2 left-[50%] bottom-[-30px] right-[50%] w-fit btn-shape">
        {navlink.map((value) => {
          return (
            <div key={value.id} className="flex">
              {value.name === "About" && (
                <ul
                  className={`${
                    pathname === value.route && " text-white"
                  } text-lg font-bold p-2 flex gap-3`}
                >
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>~</li>
                  <li>
                    <Link to={value.route}>{value.name}</Link>
                  </li>
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroBgForRouters;

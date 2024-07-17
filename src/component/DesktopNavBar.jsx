import { Link } from "react-router-dom";
import { navlink } from "../Utils/constant";
const DesktopNavBar = ({ pathname }) => {
  return (
    <div>
      <div className="md:flex gap-4 mx-4 hidden">
        {navlink.map((value) => {
          return (
            <ul key={value.id}>
              <li
                className={`${
                  pathname === value.route && " bg-red-700"
                } text-lg font-bold p-2`}
              >
                <Link to={value.route}>{value.name}</Link>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default DesktopNavBar;

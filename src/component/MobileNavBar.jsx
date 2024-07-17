import { Link } from "react-router-dom";
import { bars, navlink, times } from "../Utils/constant";

const MobileNavBar = ({ pathname, nav, handleNav }) => {
  return (
    <>
      <div
        className="flex md:hidden text-orange-700 z-10 m-3"
        onClick={handleNav}
      >
        {nav ? bars : times}
      </div>
      <div
        className={`${
          nav
            ? "absolute left-[-100%] top-0 flex flex-col justify-center items-center  h-full dark:bg-neutral-900  ease-in-out duration-300 md:hidden"
            : " absolute left-0 top-0 sm:w-[50%] w-[100%] flex flex-col justify-center items-center  h-full dark:bg-neutral-900 ease-in-out duration-300 md:hidden pt-3 "
        }`}
      >
        {navlink.map((value) => {
          return (
            <ul key={value.id}>
              <li
                onClick={handleNav}
                className={`${
                  pathname === value.route && " bg-red-700"
                } text-lg font-bold p-2 ${navlink.length !== 0 && "mt-8"}`}
              >
                <Link to={value.route}>{value.name}</Link>
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default MobileNavBar;

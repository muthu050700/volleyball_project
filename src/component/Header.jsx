import { useLocation } from "react-router-dom";
import { useState } from "react";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";
import { logo } from "../Utils/constant";
const Header = () => {
  const [nav, setNav] = useState(true);

  //  handling navbar
  const handleNav = () => {
    setNav(!nav);
  };

  // for active link
  const { pathname } = useLocation();

  return (
    <div className="fixed bg-opacity-10 bg-black w-full md:h-[80px] flex justify-between items-center z-20">
      {/* logo */}
      <div className=" w-20 md:w-24 m-3 md:m-4">
        <img src={logo} />
      </div>
      {/* Desktop Nav */}
      <DesktopNavBar pathname={pathname} />
      {/* Mobile Nav */}
      <MobileNavBar pathname={pathname} nav={nav} handleNav={handleNav} />
    </div>
  );
};

export default Header;

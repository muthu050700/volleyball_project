import { FaBars, FaTimes } from "react-icons/fa";
import logo1 from "../public/logo1.png";

//logo- image
export const logo = logo1;

//Home Image
export const bg_Image =
  "https://images3.alphacoders.com/134/thumb-1920-1349293.jpeg";

//nav links
export const navlink = [
  {
    route: "/",
    name: "Home",
    id: "home",
  },
  {
    route: "/about",
    name: "About",
    id: "about",
  },
  {
    route: "/teams",
    name: "Teams",
    id: "teams",
  },
  {
    route: "/tournaments",
    name: "Tournament",
    id: "tournament",
  },
];

//icons for nav links

export const bars = <FaBars size={30} />;
export const times = <FaTimes size={30} />;

export const hello = true;

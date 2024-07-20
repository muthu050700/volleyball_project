import { FaBars, FaTimes } from "react-icons/fa";
import logo1 from "../public/logo1.png";
import image from "../public/bg-image-mobile.jpg";
//logo- image
export const logo = logo1;

//Home Image

export const bg_Image = image;

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

export const totalGames = [
  {
    id: "1",
    gameName: "Volleyball",
    image: "https://images.pexels.com/photos/5477835/pexels-photo-5477835.jpeg",
    content:
      "Usually, we play volleyball on Saturdays and Sundays, but we also play on other days when we have time off.",
  },
  {
    id: "2",
    gameName: "Cricket",
    image:
      "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_lg_2x/f_auto/primary/frj6ok3gmklq8rc2a5ql",
    content: "Usually, we play cricket only on Sundays.",
  },
];

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
  {
    id: "2",
    gameName: "Cricket",
    image:
      "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_lg_2x/f_auto/primary/frj6ok3gmklq8rc2a5ql",
    content: "Usually, we play cricket only on Sundays.",
  },
  {
    id: "2",
    gameName: "Cricket",
    image:
      "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_lg_2x/f_auto/primary/frj6ok3gmklq8rc2a5ql",
    content: "Usually, we play cricket only on Sundays.",
  },
];

//positions

export const playerPositions = [
  {
    positionName: "Left Wing Spiker",
    id: "Left Wing Spiker",
    description:
      "The **Left Wing Spiker** (Outside Hitter) plays on the left side, attacking to score points and aiding in defense.",
    image:
      "https://i.ytimg.com/vi/Mdjfb_yoKkE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBgpr3f57oNek2FWmLLijfBopK3Iw",
  },
  {
    positionName: "Right Wing Spiker",
    id: "Right Wing Spiker",
    description:
      "The **Right Wing Spiker** (Opposite Hitter) plays on the right side, focusing on attacking, blocking, and occasionally setting up plays.",
    image: "https://i.ytimg.com/vi/P7C5Qor9yHE/maxresdefault.jpg",
  },
  {
    positionName: "Setter",
    id: "Setter",
    description:
      "The **Setter** positions the ball for attackers, directing the team's offensive plays and making quick, strategic decisions.",
    image:
      "https://i.pinimg.com/736x/66/2b/2b/662b2bd2ce5d11dc6862b544ee3a6549.jpg",
  },
  {
    positionName: "Libero",
    id: "Libero",
    description:
      "The **Libero** is a defensive specialist who plays in the back row, focusing on receiving serves and digging up attacks.",
    image:
      "https://i.pinimg.com/564x/c3/48/72/c34872ae2cd10709c03daf971be22f63.jpg",
  },
  {
    positionName: "Defensive Specialist",
    id: "Defensive Specialist",
    description:
      "The **Defensive Specialist** focuses on defense and receiving serves, playing mainly in the back row to strengthen the team's defense.",
    image: "https://i.ytimg.com/vi/tTQs3SayT50/maxresdefault.jpg",
  },
  {
    positionName: "Serving Specialist",
    id: "Serving Specialist",
    description:
      "The **Serving Specialist** is brought in specifically to deliver strong and accurate serves to challenge the opposing team.",
    image:
      "https://discover.sportsengineplay.com/sites/default/files/styles/content_1024_w/public/images/shutterstock_198896267.jpg?itok=L3xuRpq4",
  },
];

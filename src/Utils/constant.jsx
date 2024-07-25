import { FaBars, FaTimes } from "react-icons/fa";
//logo
import logo1 from "../public/logo1.png";
//background image
import image from "../public/bg-image-mobile.jpg";
//player position
import leftwingspiker from "../public/position-img/wing-spiker.jpg";
import rightwingspiker from "../public/position-img/right-wing-spiker.jpg";
import setter from "../public/position-img/setter.jpg";
import libero from "../public/position-img/libero.jpg";
import serving from "../public/position-img/serving.jpg";
import defense from "../public/position-img/defensive-specialist.jpg";
//Icons
import spikerIcon from "../public/Icons/spike.png";
import blockIcon from "../public/Icons/player.png";
import defenceIcon from "../public/Icons/defence.png";
import serveIcon from "../public/Icons/serve.png";
import communicationIcon from "../public/Icons/communication.png";
import teamworkIcon from "../public/Icons/teamwork.png";
import setterIcon from "../public/Icons/setter.png";
import receiveIcon from "../public/Icons/receive.png";
import leadershipIcon from "../public/Icons/leadership.png";
import flexibilityIcon from "../public/Icons/flexibility.png";
import consistencyIcon from "../public/Icons/consistency.png";
import pressureIcon from "../public/Icons/pressure.png";
import defensivetransition from "../public/position-info-img/defensivetransition.jpg";
export const icon = spikerIcon;
//position info image
import attacking from "../public/position-info-img/position-img-spike.webp";
import blocking from "../public/position-info-img/blocking.jpg";
import defencePosition from "../public/position-info-img/defence.jpg";
import setterPosition from "../public/position-info-img/setter.jpg";
import servePosition from "../public/position-info-img/serve.jpg";
import communication from "../public/position-info-img/communication.jpeg";
import teamWork from "../public/position-info-img/teamwork.jpeg";
import ballDistribution from "../public/position-info-img/balldistribution.avif";
import playMaking from "../public/position-info-img/playmaking.jpg";
import serveReception from "../public/position-info-img/servereception.jpg";
import leaderShip from "../public/position-info-img/leadership.jpg";
import digging from "../public/position-info-img/digging.jpg";
import passing from "../public/position-info-img/passing.jpg";
import flexibility from "../public/position-info-img/flexibility.jpg";
import strategyImage from "../public/position-info-img/strategy.jpg";
import consistency from "../public/position-info-img/consistency.jpg";
import pressuresituation from "../public/position-info-img/pressuresituation.jpg";
// export const img =
//   "https://img.freepik.com/free-photo/team-adult-men-playing-competitive-volleyball-indoors-generated-by-ai_188544-14006.jpg?t=st=1721664555~exp=1721668155~hmac=70dc5bcf9f61f20295c735c46e1884a2e236d61977a518e7b1c693087a927631&w=1060";
export const spike = spikerIcon;
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
    id: "3",

    gameName: "Cricket",
    image:
      "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_lg_2x/f_auto/primary/frj6ok3gmklq8rc2a5ql",
    content: "Usually, we play cricket only on Sundays.",
  },
  {
    id: "4",

    gameName: "Cricket",
    image:
      "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_lg_2x/f_auto/primary/frj6ok3gmklq8rc2a5ql",
    content: "Usually, we play cricket only on Sundays.",
  },
];

//Player positions data

export const playerPositions = [
  {
    positionName: "Left Wing Spiker",
    id: "left-wing-spiker",
    description:
      "The **Left Wing Spiker** (Outside Hitter) plays on the left side, attacking to score points and aiding in defense.",
    image: leftwingspiker,
  },
  {
    positionName: "Right Wing Spiker",
    id: "right-wing-spiker",
    description:
      "The **Right Wing Spiker** (Opposite Hitter) plays on the right side, focusing on attacking, blocking, and occasionally setting up plays.",
    image: rightwingspiker,
  },
  {
    positionName: "Setter",
    id: "setter",
    description:
      "The **Setter** positions the ball for attackers, directing the team's offensive plays and making quick, strategic decisions.",
    image: setter,
  },
  {
    positionName: "Libero",
    id: "libero",
    description:
      "The **Libero** is a defensive specialist who plays in the back row, focusing on receiving serves and digging up attacks.",
    image: libero,
  },
  {
    positionName: "Defensive Specialist",
    id: "defensive-specialist",
    description:
      "The **Defensive Specialist** focuses on defense and receiving serves, playing mainly in the back row to strengthen the team's defense.",
    image: defense,
  },
  {
    positionName: "Serving Specialist",
    id: "serving-specialist",
    description:
      "The **Serving Specialist** is brought in specifically to deliver strong and accurate serves to challenge the opposing team.",
    image: serving,
  },
];

export const positionDetails = [
  {
    title: "Responsibilities",
    name: "Right Wing Spiker (Opposite Hitter)",
    id: "right-wing-spiker",
    description:
      "The Right Wing Spiker, also known as the Opposite Hitter, plays on the right side of the court and has responsibilities in attacking, blocking, setting, and defense. They are crucial attackers, primarily blocking the opposing team's left-side hitters, sometimes serving as a backup setter, and participating in back-row defense.",
    purpose:
      "To balance the offense and defense on the right side, providing powerful attacks and supporting the setter when needed.",
    responsibilities: [
      {
        id: "Attacking",
        icon: spikerIcon,
        name: "Attacking",
        image: attacking,
        description:
          "The primary role involves receiving sets and delivering powerful spikes from the right side to score points.",
      },
      {
        id: "Blocking",
        icon: blockIcon,
        name: "Blocking",
        image: blocking,
        description:
          "They are key in blocking the opposing team's left-side hitters, using their positioning to intercept and deflect attacks.",
      },
      {
        id: "Setting",
        icon: setterIcon,
        name: "Setting",
        image: setterPosition,
        description:
          "Occasionally, the Opposite Hitter may act as a backup setter, especially when the main setter is unavailable (e.g., after a dig).",
      },
      {
        id: "Defense",
        icon: defenceIcon,
        name: "Defense",
        image: defencePosition,
        description:
          "They participate in back-row defense, including digging and serve reception, to keep the ball in play and transition to offense.",
      },
    ],
    icon: spike,
    image: rightwingspiker,
  },
  {
    title: "Responsibilities",
    name: "Left Wing Spiker (Outside Hitter)",
    id: "left-wing-spiker",
    description:
      "The Left Wing Spiker, also known as the Outside Hitter, is a crucial player who operates from the left side of the court. This position requires the player to be versatile, contributing significantly to both offensive and defensive plays. The Outside Hitter is responsible for attacking, blocking, and playing a key role in serve reception.",
    purpose:
      "To provide powerful attacks from the left side, contribute to blocking, and assist in serve reception to stabilize the team's defense and offense.",
    responsibilities: [
      {
        id: "Attacking",
        icon: spikerIcon,
        name: "Attacking",
        image: attacking,
        description:
          "The primary role involves receiving sets and delivering powerful spikes from the left side to score points.",
      },
      {
        id: "Blocking",
        icon: blockIcon,
        name: "Blocking",
        image: blocking,
        description:
          "They are key in blocking the opposing team's right-side hitters, using their positioning to intercept and deflect attacks.",
      },
      {
        icon: serveIcon,
        id: "Serve Reception",
        name: "Serve Reception",
        image: servePosition,
        description:
          "Responsible for receiving serves and making accurate passes to the setter to initiate the team's attack.",
      },
      {
        id: "Defense",
        icon: defenceIcon,
        name: "Defense",
        image: defencePosition,
        description:
          "Participates in back-row defense, including digging and serve reception, to keep the ball in play and transition to offense.",
      },
      {
        name: "Communication",
        id: "Communication",
        icon: communicationIcon,
        image: communication,
        description:
          "Actively communicates with teammates to coordinate plays and strategies.",
      },
      {
        name: "Teamwork",
        id: "Teamwork",
        icon: teamworkIcon,
        image: teamWork,
        description:
          "Collaborates with all team members to ensure cohesive and strategic gameplay.",
      },
    ],
    icon: spike,
    image: leftwingspiker,

    importance:
      "The Left Wing Spiker is crucial for maintaining a strong attack and solid defense. Their ability to perform multiple roles, including attacking, blocking, and serve reception, makes them indispensable, ensuring the team can handle a variety of situations effectively. Their contributions often make the difference in tight matches.",
  },
  {
    title: "Responsibilities",
    name: "Setter",
    id: "setter",
    icon: setterIcon,
    image: setter,
    description:
      "The Setter is a pivotal player who orchestrates the team's offense by setting up plays and distributing the ball to attackers. This position requires excellent ball-handling skills, quick decision-making, and strategic thinking.",
    purpose:
      "To control the flow of the game by delivering accurate sets to attackers, creating scoring opportunities, and facilitating smooth transitions from defense to offense.",
    responsibilities: [
      {
        name: "Playmaking",
        id: "Playmaking",
        icon: setterIcon,
        image: playMaking,
        description:
          "The primary role involves setting the ball for attackers, choosing the best options to outsmart the opponent's defense.",
      },
      {
        name: "Ball Distribution",
        id: "Ball Distribution",
        icon: setterIcon,
        image: ballDistribution,
        description:
          "Distributes the ball to various attackers to keep the opposing team off-balance and create diverse offensive plays.",
      },
      {
        name: "Communication",
        id: "Communication",
        icon: communicationIcon,
        image: communication,
        description:
          "Communicates constantly with teammates to coordinate plays, adjust strategies, and provide on-court leadership.",
      },
      {
        name: "Defense",
        id: "Defense",
        icon: defenceIcon,
        image: defencePosition,
        description:
          "Participates in front-row blocking and back-row digging to contribute to the team's overall defense.",
      },
      {
        name: "Serve Reception",
        id: "Serve Reception",
        image: serveReception,
        icon: receiveIcon,
        description:
          "Works closely with other players to handle serve reception, ensuring accurate passes for the setup.",
      },
      {
        name: "Leadership",
        id: "Leadership",
        icon: leadershipIcon,
        image: leaderShip,
        description:
          "Acts as the on-court leader, directing teammates and making strategic decisions during the game.",
      },
    ],

    importance:
      "The Setter is crucial for orchestrating the team's offense and creating scoring opportunities. Their ability to make quick, strategic decisions and deliver precise sets determines the effectiveness of the team's attack. As the on-court leader, the Setter's contributions are vital to the team's overall performance and success.",
  },
  {
    title: "Responsibilities",
    icon: defenceIcon,
    name: "Libero",
    image: libero,
    id: "libero",
    description:
      "The Libero is a specialized defensive player focused on receiving serves, digging attacks, and ensuring consistent passing to maintain ball control. This position requires exceptional defensive skills and quick reflexes.",
    purpose:
      "To enhance the team's defensive capabilities, ensure precise passing, and maintain ball control during serve receptions and defensive plays.",
    responsibilities: [
      {
        name: "Serve Reception",
        id: "Serve Reception",
        image: serveReception,
        icon: receiveIcon,
        description:
          "Primarily responsible for receiving serves and making accurate passes to the setter to initiate the team's offense.",
      },
      {
        name: "Digging",
        id: "Digging",
        icon: receiveIcon,
        image: digging,
        description:
          "Digs attacks from the opposing team, keeping the ball in play and preventing it from hitting the floor.",
      },
      {
        name: "Passing",
        id: "Passing",
        icon: setterIcon,
        image: passing,
        description:
          "Delivers accurate passes to the setter to facilitate smooth offensive transitions.",
      },
      {
        name: "Defense",
        id: "Defense",
        icon: defenceIcon,
        image: defencePosition,
        description:
          "Covers the back row, ensuring strong defensive coverage and quick reactions to opponents' attacks.",
      },
      {
        name: "Communication",
        id: "Communication",
        icon: communicationIcon,
        image: communication,
        description:
          "Communicates with teammates to organize defensive strategies and positioning.",
      },
      {
        name: "Leadership",
        id: "Leadership",
        icon: leadershipIcon,
        image: leaderShip,
        description:
          "Leads the defense by example, encouraging and guiding teammates during defensive plays.",
      },
    ],

    importance:
      "The Libero is crucial for strengthening the team's defense and maintaining ball control. Their ability to receive serves accurately, dig opponents' attacks, and deliver precise passes significantly impacts the team's performance. As a defensive leader, the Libero's contributions are vital to the team's overall success and resilience.",
  },
  {
    title: "Responsibilities",
    image: defense,
    icon: defenceIcon,
    name: "Defensive Specialist",
    id: "defensive-specialist",
    description:
      "The Defensive Specialist is a player who focuses on back-row defense, excelling in digging, serve reception, and maintaining overall defensive stability. This position requires quick reflexes, consistent passing, and excellent court awareness.",
    purpose:
      "To enhance the team's defensive stability, provide consistent and accurate passing, and cover the court effectively during defensive plays.",
    responsibilities: [
      {
        name: "Serve Reception",
        id: "Serve Reception",
        image: serveReception,
        icon: receiveIcon,
        description:
          "Responsible for receiving serves and making accurate passes to the setter to start the team's offense.",
      },
      {
        name: "Digging",
        id: "Digging",
        icon: receiveIcon,
        image: digging,
        description:
          "Digs attacks from the opposing team, keeping the ball in play and preventing it from hitting the floor.",
      },
      {
        name: "Passing",
        id: "Passing",
        icon: setterIcon,
        image: passing,
        description:
          "Delivers accurate passes to the setter to facilitate smooth offensive transitions.",
      },
      {
        name: "Defense",
        id: "Defense",
        icon: defenceIcon,
        image: defencePosition,
        description:
          "Covers the back row, ensuring strong defensive coverage and quick reactions to opponents' attacks.",
      },
      {
        name: "Communication",
        id: "Communication",
        icon: communicationIcon,
        image: communication,
        description:
          "Communicates with teammates to organize defensive strategies and positioning.",
      },
      {
        name: "Flexibility",
        image: flexibility,
        id: "Flexibility",
        icon: flexibilityIcon,
        description:
          "Can substitute for any back-row player, providing the team with defensive depth and versatility.",
      },
    ],

    importance:
      "The Defensive Specialist is crucial for bolstering the team's defense and ensuring consistent ball control. Their ability to receive serves accurately, dig opponents' attacks, and deliver precise passes significantly impacts the team's performance. As a flexible defensive player, the Defensive Specialist's contributions are vital to the team's overall defensive resilience and success.",
  },
  {
    title: "Responsibilities",
    name: "Serving Specialist",
    image: serving,
    icon: serveIcon,
    id: "serving-specialist",
    description:
      "The Serving Specialist is a player whose primary role is to serve the ball effectively and strategically. This position requires exceptional serving skills, consistency, and the ability to place serves accurately to disrupt the opponent's offense.",
    purpose:
      "To deliver powerful and strategic serves that challenge the opponent's serve reception, creating opportunities for the team to score points directly or set up strong defensive plays.",
    responsibilities: [
      {
        name: "Serving",
        id: "Serving",
        image: servePosition,
        icon: serveIcon,
        description:
          "Delivers powerful and accurate serves to target weaknesses in the opponent's serve reception.",
      },
      {
        name: "Strategic Placement",
        id: "Strategic Placement",
        image: strategyImage,
        icon: serveIcon,
        description:
          "Aims serves at specific areas of the opponent's court to disrupt their offensive setup.",
      },
      {
        name: "Consistency",
        id: "Consistency",
        image: consistency,
        icon: consistencyIcon,
        description:
          "Maintains a high level of consistency in serving to avoid errors and maximize scoring opportunities.",
      },
      {
        name: "Pressure Situations",
        id: "Pressure Situations",
        image: pressuresituation,
        icon: pressureIcon,
        description:
          "Handles serving in high-pressure situations, such as match points or crucial moments in the game.",
      },
      {
        name: "Communication",
        id: "Communication",
        icon: communicationIcon,
        image: communication,
        description:
          "Communicates with the team to adjust serving strategies based on the opponent's weaknesses and game dynamics.",
      },
      {
        name: "Defensive Transition",
        id: "Defensive Transition",
        image: defensivetransition,
        icon: blockIcon,
        description:
          "Transitions to a defensive role after serving, contributing to the team's overall defense.",
      },
    ],

    importance:
      "The Serving Specialist plays a crucial role in setting the tone for each rally with powerful and strategic serves. Their ability to deliver consistent and challenging serves can create scoring opportunities and put pressure on the opponent's serve reception. As a key contributor to the team's offense and defense, the Serving Specialist's performance is vital to the team's overall success.",
  },
];

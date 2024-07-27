import rulesIcon from "../public/rulesicon/rules_icon.png";
import scoreIcon from "../public/rulesicon/score-icon.png";
import serveIcon from "../public/rulesicon/serve-icon.png";
import playerRotationIcon from "../public/rulesicon/player-rotation-icon.png";
import contact from "../public/rulesicon/contact.png";
import net from "../public/rulesicon/net.png";
export const volleyballRulesJson = [
  {
    title: "Volleyball Rules",
    description:
      "Volleyball has numerous rules that players and teams must follow to ensure fair play and proper conduct during a match. Here are some key categories of rules:",
    rules: [
      {
        category: "Basic Rules of Play",
        icon: rulesIcon,
        rules: [
          {
            rule: "Each team has six players on the court.",
          },
          {
            rule: "The game starts with a serve from behind the end line.",
          },
          {
            rule: "Teams can touch the ball up to three times before returning it over the net.",
          },
          {
            rule: "The ball must not touch the ground on the team's side or go out of bounds.",
          },
        ],
      },
      {
        category: "Scoring and Sets",
        icon: scoreIcon,
        rules: [
          {
            rule: "Matches are typically played in a best-of-five sets format.",
          },
          {
            rule: "A set is won by the first team to reach 25 points, with a two-point lead required.",
          },
          {
            rule: "The fifth set, if necessary, is played to 15 points.",
          },
          {
            rule: "Points are scored on every rally (rally scoring system).",
          },
        ],
      },
      {
        category: "Rotations and Positions",
        icon: playerRotationIcon,
        rules: [
          {
            rule: "Teams rotate positions in a clockwise direction each time they win the serve.",
          },
          {
            rule: "Players must be in their designated positions at the time of the serve.",
          },
        ],
      },
      {
        category: "Serving Rules",
        icon: serveIcon,
        rules: [
          {
            rule: "The server must serve from behind the end line.",
          },
          {
            rule: "The ball must go over the net and into the opponent’s court.",
          },
          {
            rule: "A player cannot serve twice in a row if their team wins the rally.",
          },
        ],
      },
      {
        category: "Contact Rules",
        icon: contact,
        rules: [
          {
            rule: "Players cannot catch, hold, or throw the ball.",
          },
          {
            rule: "The ball must be hit cleanly with no prolonged contact.",
          },
          {
            rule: "Blocking and attacking the ball from the back row are subject to specific rules.",
          },
        ],
      },
      {
        category: "Net and Boundary Rules",
        icon: net,
        rules: [
          {
            rule: "Players cannot touch the net or cross the centerline during play.",
          },
          {
            rule: "The ball must pass over the net within the boundary lines.",
          },
          {
            rule: "If the ball touches the net during a serve and still goes over, it is considered in play.",
          },
        ],
      },
    ],
    conclusion:
      "These rules collectively ensure that the game is played fairly and consistently, maintaining the integrity and excitement of volleyball.",
  },
];

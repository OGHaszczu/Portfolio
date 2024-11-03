import { FaReact, FaNode, FaCss3Alt } from "react-icons//fa";
import { SiJavascript } from "react-icons/si";

import Bizkar from "../assests/bizkar.png";
export const Skills = [
  {
    id: 1,
    icon: <FaReact />,
    title: "React JS",
  },
  {
    id: 2,
    icon: <SiJavascript />,
    title: "Javascript",
  },
  {
    id: 3,
    icon: <FaCss3Alt />,
    title: "CSS",
  },
  {
    id: 4,
    icon: <FaNode />,
    title: "Node.js",
  },
];

export const projectDetails = [
  {
    id: 1,
    title: "Bizkar.pl",
    description:
      "Responyswny sklep Internetowy, zapewniający użytkownikom szybkie i biezpieczne zakupy, całość z panelem Administratora i Mail-ingiem, Zapis danych klientów do Bazy Danych, powiadomienia o płatnościach ",
    tech_stack: ["React", "Node.js", "Express", "MySQL"],
    project_img: Bizkar,
    project_url: "https://bizkar.pl",
    reverse: false,
  },
];

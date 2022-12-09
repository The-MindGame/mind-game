import React, { useState } from "react";
import "../../src/styles/Rules.scss";
import Play from "../assets/icons/rules/Play";
import Puzzle from "../assets/icons/rules/Puzzle";
import Settings from "../assets/icons/rules/Settings";
import Brain from "../assets/icons/rules/Brain";
import FAQ from "../assets/icons/rules/FAQ";
import "../../src/styles/Rules.scss";

// json object for the rules
// const rules = {
//   play: {
//     icon: <Play />,
//     title: "How to play",
//     description:
//       "The game consists of 12 questions. Each question has 4 possible answers. Select one answer. If you select the correct answer, you earn points depending on the time left. You have 15 seconds to answer each question. If you select the wrong answer, you lose points. You can also use a lifeline (50/50 or phone a friend).",
//   },
//   components: {
//     icon: <Puzzle />,
//     title: "Components",
//     description:
//       "The game consists of 12 questions. Each question has 4 possible answers. Select one answer. If you select the correct answer, you earn points depending on the time left. You have 15 seconds to answer each question. If you select the wrong answer, you lose points. You can also use a lifeline (50/50 or phone a friend).",
//   },
//   setup: {
//     icon: <Settings />,
//     title: "Setup",
//     description:
//       "The game consists of 12 questions. Each question has 4 possible answers. Select one answer. If you select the correct answer, you earn points depending on the time left. You have 15 seconds to answer each question. If you select the wrong answer, you lose points. You can also use a lifeline (50/50 or phone a friend).",
//   },
//   object: {
//     icon: <Brain />,
//     title: "Object of the game",
//     description:
//       "The game consists of 12 questions. Each question has 4 possible answers. Select one answer. If you select the correct answer, you earn points depending on the time left. You have 15 seconds to answer each question. If you select the wrong answer, you lose points. You can also use a lifeline (50/50 or phone a friend).",
//   },
//   faq: {
//     icon: <FAQ />,
//     title: "FAQ",
//     description:
//       "The game consists of 12 questions. Each question has 4 possible answers. Select one answer. If you select the correct answer, you earn points depending on the time left. You have 15 seconds to answer each question. If you select the wrong answer, you lose points. You can also use a lifeline (50/50 or phone a friend).",
//   },
// };

const rulesData = [
  {
    icon: <Play />,
    title: "How to play",
    description:
      "HOW TO PLAY Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    icon: <Puzzle />,
    title: "Components",
    description:
      "COMPONENTS Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    icon: <Settings />,
    title: "Setup",
    description:
      "SETUP Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    icon: <Brain />,
    title: "Object of the game",
    description:
      "OBJECT OF THE GAME Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    icon: <FAQ />,
    title: "FAQ",
    description:
      "FAQ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
];

const Rules = () => {
  const [text, setText] = useState(rulesData[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setSelected] = useState(0);
  const openSidebar = () => {
    setIsOpen((current) => !current);
  };
  const handleElementClick = (index) => {
    setSelected(index);
    setText(rulesData[index]);
  };

  return (
    <div className="rulesPage">
      <div className={isOpen ? "rulesSidebar active" : "rulesSidebar"}>
        <div
          className={isOpen ? "navIcon open" : "navIcon"}
          onClick={openSidebar}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="rulesSidebarItems">
          {rulesData.map((item, index) => (
            <div
              className={
                isSelected === index
                  ? "rulesSidebarItem selected"
                  : "rulesSidebarItem"
              }
              onClick={() => handleElementClick(index)}
            >
              <div className="rulesSidebarItemIcon">{item.icon}</div>
              <div className="rulesSidebarItemRole">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
      <Content title={text.title} mainText={text.description} />
    </div>
  );
};

const Content = ({ title, mainText }) => {
  return (
    <div className="rulesMain">
      <div className="rulesMainTitle">{title}</div>
      <div className="rulesMainText">
        <p>{mainText}</p>
      </div>
    </div>
  );
};

export default Rules;

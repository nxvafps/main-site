import React, { useState } from "react";
import { LayoutGroup } from "framer-motion";

import { techIcons } from "../../assets";

import {
  IconList,
  Icons,
  Details,
  DetailsTitle,
  DetailsDescription,
  CloseButton,
} from "./styles";

import { IconObj } from "../../types";

import { CircularIcon, CloseIcon } from "../";

const techIconInfo: IconObj[] = [
  {
    name: "HTML",
    src: techIcons.html,
    description: "Here I talk about what I know about HTML.",
  },
  {
    name: "CSS",
    src: techIcons.css,
    description: "Here I talk about what I know about CSS.",
  },
  {
    name: "SASS",
    src: techIcons.sass,
    description: "Here I talk about what I know about SASS.",
  },
  {
    name: "Bootstrap",
    src: techIcons.bootstrap,
    description: "Here I talk about what I know about Bootstrap.",
  },
  {
    name: "Tailwind",
    src: techIcons.tailwind,
    description: "Here I talk about what I know about Tailwind.",
  },
  {
    name: "Javascript",
    src: techIcons.javascript,
    description: "Here I talk about what I know about Javascript.",
  },
  {
    name: "Node.js",
    src: techIcons.node,
    description: "Here I talk about what I know about Node.js.",
  },
  {
    name: "React.js",
    src: techIcons.react,
    description: "Here I talk about what I know about React.js.",
  },
  {
    name: "Redux",
    src: techIcons.redux,
    description: "Here I talk about what I know about Redux.",
  },
  {
    name: "Express.js",
    src: techIcons.express,
    description: "Here I talk about what I know about Express.js.",
  },
  {
    name: "PostgreSQL",
    src: techIcons.postgresql,
    description: "Here I talk about what I know about PostgreSQL.",
  },
  {
    name: "Git",
    src: techIcons.git,
    description: "Here I talk about what I know about Git.",
  },
  {
    name: "Copilot",
    src: techIcons.copilot,
    description: "Here I talk about what I know about Copilot.",
  },
];

const TechnologyList = () => {
  const [selectedIcon, setSelectedIcon] = useState<IconObj | null>(null);

  const handleIconClick = (icon: IconObj) => {
    if (selectedIcon && selectedIcon.name === icon.name) {
      handleCloseClick();
    } else {
      setSelectedIcon(icon);
    }
  };

  const handleCloseClick = () => setSelectedIcon(null);

  return (
    <>
      <IconList
        initial={{ gridTemplateColumns: "1fr 0" }}
        animate={{ gridTemplateColumns: selectedIcon ? "1fr 1fr" : "1fr 0fr" }}
        transition={{ duration: 0.5 }}
        layout
      >
        <Icons
          $isSelected={!!selectedIcon}
          layout
          transition={{ duration: 0.5 }}
        >
          <LayoutGroup>
            {techIconInfo.map((icon, index) => (
              <CircularIcon
                key={index}
                src={icon.src}
                alt={icon.name}
                onClick={() => handleIconClick(icon)}
              />
            ))}
          </LayoutGroup>
        </Icons>

        <Details
          initial={{ padding: 0 }}
          animate={{
            padding: selectedIcon ? 20 : 0,
          }}
          transition={{ duration: 0.5 }}
          layout
        >
          <CloseButton>
            <CloseIcon />
          </CloseButton>
          <DetailsTitle>{selectedIcon?.name}</DetailsTitle>
          <DetailsDescription>{selectedIcon?.description}</DetailsDescription>
        </Details>
      </IconList>
    </>
  );
};

export default TechnologyList;

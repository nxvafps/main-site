import React, { useState } from "react";
import { LayoutGroup } from "framer-motion";

import {
  bootstrap,
  css,
  express,
  git,
  html,
  node,
  react,
  sass,
  tailwind,
  javascript,
  postgresql,
  redux,
  copilot,
} from "../../assets";

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

export interface IconListProps {
  $isSelected: boolean;
}

const techIcons: IconObj[] = [
  {
    name: "HTML",
    src: html,
    description: "Here I talk about what I know about HTML.",
  },
  {
    name: "CSS",
    src: css,
    description: "Here I talk about what I know about CSS.",
  },
  {
    name: "SASS",
    src: sass,
    description: "Here I talk about what I know about SASS.",
  },
  {
    name: "Bootstrap",
    src: bootstrap,
    description: "Here I talk about what I know about Bootstrap.",
  },
  {
    name: "Tailwind",
    src: tailwind,
    description: "Here I talk about what I know about Tailwind.",
  },
  {
    name: "Javascript",
    src: javascript,
    description: "Here I talk about what I know about Javascript.",
  },
  {
    name: "Node.js",
    src: node,
    description: "Here I talk about what I know about Node.js.",
  },
  {
    name: "React.js",
    src: react,
    description: "Here I talk about what I know about React.js.",
  },
  {
    name: "Redux",
    src: redux,
    description: "Here I talk about what I know about Redux.",
  },
  {
    name: "Express.js",
    src: express,
    description: "Here I talk about what I know about Express.js.",
  },
  {
    name: "PostgreSQL",
    src: postgresql,
    description: "Here I talk about what I know about PostgreSQL.",
  },
  {
    name: "Git",
    src: git,
    description: "Here I talk about what I know about Git.",
  },
  {
    name: "Copilot",
    src: copilot,
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
            {techIcons.map((icon, index) => (
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

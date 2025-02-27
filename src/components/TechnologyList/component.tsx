import React from "react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import * as animations from "./animations";

import { techIcons } from "../../assets";

import * as styles from "./styles";

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
      <styles.IconList layout>
        <styles.Icons layout>
          {techIconInfo.map((icon, index) => (
            <CircularIcon
              key={index}
              src={icon.src}
              alt={icon.name}
              onClick={() => handleIconClick(icon)}
            />
          ))}
        </styles.Icons>
        <AnimatePresence>
          {!!selectedIcon && (
            <styles.Details
              initial="closed"
              animate="open"
              exit="closed"
              variants={animations.modalVariants}
              layout
            >
              <styles.CloseButton onClick={handleCloseClick}>
                <CloseIcon />
              </styles.CloseButton>
              <styles.DetailsTitle>{selectedIcon?.name}</styles.DetailsTitle>
              <styles.DetailsDescription>
                {selectedIcon?.description}
              </styles.DetailsDescription>
            </styles.Details>
          )}
        </AnimatePresence>
      </styles.IconList>
    </>
  );
};

export default TechnologyList;

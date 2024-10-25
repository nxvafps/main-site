import React, { FC } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

interface SideMenuProps {
  item: {
    icon: string;
    text: string;
    href: string;
  };
}

const sideMenuVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const StyledMotionSideMenu = styled(motion.div)`
  position: absolute;
  top: 100px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledMotionSideMenuItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 0 45px;
`;

const StyledIconPlaceholder = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  flex: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const StyledTextPlaceholder = styled.div`
  border-radius: 5px;
  width: 150px;
  height: 20px;
  color: #ffffff;
  text-align: center;
`;

const MenuItem: FC<SideMenuProps> = ({ item }) => (
  <StyledMotionSideMenuItem
    variants={menuItemVariants}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <StyledIconPlaceholder>{item.icon}</StyledIconPlaceholder>
    <StyledTextPlaceholder>{item.text}</StyledTextPlaceholder>
  </StyledMotionSideMenuItem>
);

const Sidemenu: FC = () => (
  <StyledMotionSideMenu variants={sideMenuVariants}>
    {items.map((item, i) => (
      <MenuItem key={i} item={item} />
    ))}
  </StyledMotionSideMenu>
);

const items = [
  {
    icon: "icon",
    text: "Home",
    href: "/",
  },
  {
    icon: "icon",
    text: "About",
    href: "/about",
  },
  {
    icon: "icon",
    text: "Portfolio",
    href: "/portfolio",
  },
  {
    icon: "icon",
    text: "Contact",
    href: "/contact",
  },
];

export default Sidemenu;

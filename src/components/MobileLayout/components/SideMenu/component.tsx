import React from "react";

//Animations
import { sideMenuVariants } from "./animations";
//Components
import { SidemenuItem } from "../MenuItem";

//Styles
import { StyledSideMenu } from "./styles";

const Sidemenu: React.FC = () => (
  <StyledSideMenu variants={sideMenuVariants}>
    {items.map((item, i) => (
      <SidemenuItem key={i} item={item} />
    ))}
  </StyledSideMenu>
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

import React from "react";

//Animations
import { sideMenuVariants } from "./animations";

//Assets
import { aboutIcon, contactIcon, homeIcon, portfolioIcon } from "../../assets";
//Components
import { SidemenuItem } from "../MenuItem";

//Styles
import { StyledSideMenu } from "./styles";

const Sidemenu: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <StyledSideMenu variants={sideMenuVariants}>
    {items.map((item, i) => (
      <SidemenuItem key={i} item={item} onClick={onClose} />
    ))}
  </StyledSideMenu>
);

const items = [
  {
    icon: homeIcon,
    text: "Home",
    href: "/",
  },
  {
    icon: aboutIcon,
    text: "About",
    href: "/about",
  },
  {
    icon: portfolioIcon,
    text: "Portfolio",
    href: "/portfolio",
  },
  {
    icon: contactIcon,
    text: "Contact",
    href: "/contact",
  },
];

export default Sidemenu;

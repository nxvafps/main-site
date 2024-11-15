import React from "react";

//Animations
import { sideMenuVariants } from "./animations";

//Assets
import { generalIcons } from "../../assets";
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
    icon: generalIcons.homeIcon,
    text: "Home",
    href: "/",
  },
  {
    icon: generalIcons.aboutIcon,
    text: "About",
    href: "/about",
  },
  {
    icon: generalIcons.portfolioIcon,
    text: "Portfolio",
    href: "/portfolio",
  },
  {
    icon: generalIcons.contactIcon,
    text: "Contact",
    href: "/contact",
  },
];

export default Sidemenu;

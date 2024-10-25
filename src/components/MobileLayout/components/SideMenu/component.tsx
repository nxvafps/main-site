import React, { FC } from "react";
import { NavButton } from "../../..";
import { StyledSideMenu } from "./styles";

interface SideMenuProps {
  $isOpen: boolean;
  onClick: () => void;
}

const SideMenu: FC<SideMenuProps> = ({ $isOpen, onClick }) => {
  return (
    <StyledSideMenu $isOpen={$isOpen}>
      <NavButton href="/" text="Home" onClick={onClick} />
      <NavButton href="/about" text="About" onClick={onClick} />
      <NavButton href="/portfolio" text="Portfolio" onClick={onClick} />
      <NavButton href="/contact" text="Contact" onClick={onClick} />
    </StyledSideMenu>
  );
};

export default SideMenu;

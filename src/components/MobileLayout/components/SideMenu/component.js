import React from "react";
import { NavButton } from "../../..";
import { StyledSideMenu } from "./styles";

const SideMenu = ({ $isOpen, onClick }) => {
  return (
    <StyledSideMenu $isOpen={$isOpen}>
      <NavButton href="/" text="Home" onClick={onClick} />
      <NavButton href="/portfolio" text="Portfolio" onClick={onClick} />
      <NavButton href="/contact" text="Contact" onClick={onClick} />
    </StyledSideMenu>
  );
};

export default SideMenu;

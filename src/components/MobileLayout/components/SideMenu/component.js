import React from "react";
import { NavButton } from "../../..";
import { StyledSideMenu } from "./styles";

const SideMenu = ({ $isOpen }) => {
  return (
    <StyledSideMenu $isOpen={$isOpen}>
      <NavButton to="/" text="Home" />
      <NavButton to="/portfolio" text="Portfolio" />
      <NavButton to="/contact" text="Contact" />
    </StyledSideMenu>
  );
};

export default SideMenu;

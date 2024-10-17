import React from "react";

//Styles
import StyledNavButton from "./styles";

const NavButton = ({ text, href, onClick }) => {
  return (
    <StyledNavButton to={href} onClick={onClick}>
      {text}
    </StyledNavButton>
  );
};

export default NavButton;

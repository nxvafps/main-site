import React from "react";

//Styles
import StyledNavButton from "./styles";

export interface NavButtonProps {
  text: string;
  href: string;
  onClick?: () => void;
}

const NavButton = ({ text, href, onClick, ...props }: NavButtonProps) => (
  <StyledNavButton to={href} onClick={onClick} {...props}>
    {text}
  </StyledNavButton>
);

export default NavButton;

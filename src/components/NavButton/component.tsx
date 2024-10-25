import React, { FC } from "react";

//Styles
import StyledNavButton from "./styles";

interface NavButtonProps {
  text: string;
  href: string;
  onClick?: () => void;
}

const NavButton: FC<NavButtonProps> = ({ text, href, onClick }) => {
  return (
    <StyledNavButton to={href} onClick={onClick}>
      {text}
    </StyledNavButton>
  );
};

export default NavButton;

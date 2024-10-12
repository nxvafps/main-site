import React from "react";
import { StyledButton, Svg, Top, Middle, Bottom } from "./styles";

const Hamburger = ({ isOpen, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <Svg viewBox="0 0 80 80">
        <Top $open={isOpen} x="25" y="30" width="30" height="3"></Top>
        <Middle $open={isOpen} x="25" y="40" width="30" height="3"></Middle>
        <Bottom $open={isOpen} x="25" y="50" width="30" height="3"></Bottom>
      </Svg>
    </StyledButton>
  );
};

export default Hamburger;

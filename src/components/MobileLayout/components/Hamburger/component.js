import React, { useState } from "react";
import { StyledButton, Svg, Top, Middle, Bottom } from "./styles";

const Hamburger = ({ onClick }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    onClick();
  };

  return (
    <StyledButton onClick={handleClick}>
      <Svg viewBox="0 0 80 80">
        <Top $open={open} x="25" y="30" width="30" height="3"></Top>
        <Middle $open={open} x="25" y="40" width="30" height="3"></Middle>
        <Bottom $open={open} x="25" y="50" width="30" height="3"></Bottom>
      </Svg>
    </StyledButton>
  );
};

export default Hamburger;

import React from "react";
import { StyledSubtitle } from "./style";

const Subtitle = ({ text, textAlign = "center", underline = false }) => {
  return (
    <StyledSubtitle $textAlign={textAlign} $underline={underline}>
      {text}
    </StyledSubtitle>
  );
};

export default Subtitle;

import React from "react";
import { StyledTitle } from "./style";

const Title = ({ text, textAlign = "center", underline = false }) => {
  return (
    <StyledTitle $textAlign={textAlign} $underline={underline}>
      {text}
    </StyledTitle>
  );
};

export default Title;

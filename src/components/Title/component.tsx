import React from "react";
import { StyledTitle } from "./style";

interface TitleProps {
  text: string;
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  textAlign?: "center" | "left" | "right";
  underline?: boolean;
}

const Title = ({
  text,
  textAlign = "center",
  type = "h1",
  underline = false,
  ...props
}: TitleProps) => {
  return (
    <StyledTitle
      as={type}
      $textAlign={textAlign}
      $underline={underline}
      {...props}
    >
      {text}
    </StyledTitle>
  );
};

export default Title;

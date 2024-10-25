import React, { FC } from "react";
import { StyledTitle } from "./style";

interface TitleProps {
  text: string;
  textAlign?: "center" | "left" | "right";
  underline?: boolean;
}

const Title: FC<TitleProps> = ({
  text,
  textAlign = "center",
  underline = false,
}) => {
  return (
    <StyledTitle $textAlign={textAlign} $underline={underline}>
      {text}
    </StyledTitle>
  );
};

export default Title;

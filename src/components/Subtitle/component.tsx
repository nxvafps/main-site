import React, { FC } from "react";
import { StyledSubtitle } from "./style";

interface SubtitleProps {
  text: string;
  textAlign?: "left" | "center" | "right";
  underline?: boolean;
}
const Subtitle: FC<SubtitleProps> = ({
  text,
  textAlign = "center",
  underline = false,
}) => {
  return (
    <StyledSubtitle $textAlign={textAlign} $underline={underline}>
      {text}
    </StyledSubtitle>
  );
};

export default Subtitle;

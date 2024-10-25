import styled, { css } from "styled-components";

interface StyledSubtitleProps {
  $textAlign?: "left" | "center" | "right";
  $underline?: boolean;
}
export const StyledSubtitle = styled.h2<StyledSubtitleProps>`
  margin: 20px 0 10px 0;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  color: #ffffff;
  text-align: ${(props) => props.$textAlign || "center"};
  ${(props) =>
    props.$underline &&
    css`
      text-decoration: underline;
    `}
`;

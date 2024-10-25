import styled, { css } from "styled-components";

interface StyledTitleProps {
  $textAlign?: "left" | "center" | "right";
  $underline?: boolean;
}

export const StyledTitle = styled.h1<StyledTitleProps>`
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

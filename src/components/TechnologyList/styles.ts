import styled from "styled-components";
import { motion } from "framer-motion";

import { IconListProps } from "../../types";

export const Icons = styled(motion.div)<IconListProps>`
  grid-area: icons;
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 3.1vw;
  ${({ $isSelected }) =>
    $isSelected
      ? `
        grid-template-columns: repeat(3, 1fr);
      `
      : `
        grid-template-columns: repeat(4, 1fr);
      `}
`;

export const Details = styled(motion.div)`
  grid-area: details;
  position: relative;
  background-color: #333333;
  color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  overflow: hidden;
`;

export const DetailsTitle = styled(motion.h3)`
  margin: 0;
  font-size: 2vw;
`;

export const DetailsDescription = styled(motion.p)`
  margin-top: 10px;
  font-size: 1vw;
`;

export const CloseButton = styled(motion.button)`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  color: #ffffff;
`;

export const IconList = styled(motion.div)`
  display: grid;
  grid-template-areas: "icons details";
  gap: 40px;
  margin: 20px;
  min-height: 80vh;
  max-height: 80vh;
  width: 90vw;
  max-width: 1000px;
`;

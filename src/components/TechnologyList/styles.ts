import styled from "styled-components";
import { motion } from "framer-motion";

export const Icons = styled(motion.div)`
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 3.1vw;
  grid-template-columns: repeat(4, 1fr);
`;

export const Details = styled(motion.div)`
  position: absolute;
  width: 80%;
  height: 80%;
  top: 10%;
  left: 10%;
  background-color: #333333;
  color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  overflow: hidden;
  z-index: 2000;
`;

export const DetailsTitle = styled(motion.h3)`
  margin: 0;
  font-size: 3vw;
`;

export const DetailsDescription = styled(motion.p)`
  margin-top: 10px;
  font-size: 2vw;
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
  position: relative;
  margin: 20px;
  width: 90vw;
  max-height: 1000px;
  max-width: 1000px;
`;
//TODO: fix animations for opening and closing details

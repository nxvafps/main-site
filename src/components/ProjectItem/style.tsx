import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectIcon = styled.img`
  grid-column: 1;
  grid-row: 1/4;
  align-self: start;
  padding: 10px;
  max-width: 100%;
  box-sizing: border-box;
  border-radius: 20px;
`;

export const ProjectName = styled.h3`
  grid-column: 2;
  grid-row: 1;
  color: #ffffff;
  text-align: center;
  align-self: start;
  margin: 0;
  padding: 10px;
  font-size: clamp(1rem, 1.5vw, 2rem);

  @media (max-width: 800px) {
    font-size: clamp(1rem, 3.3vw, 3rem);
  }
`;

export const HorizontalRuleContainer = styled.div`
  grid-column: 2;
  grid-row: 2;
  width: 80%;
  margin: 0 auto;
  position: relative;
  text-align: center;
`;

export const HorizontalRule = styled.hr`
  border: none;
  border-top: 1px solid #ffffff;
  margin: 0;
`;

export const ProjectStatus = styled.span`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: #333333;
  padding: 0 10px;
  color: #ffffff;
  //border: 1px solid #ffffff;
`;

export const ProjectDetails = styled.p`
  grid-column: 2;
  grid-row: 3;
  align-self: start;
  margin: 0;
  color: #ffffff;
  text-align: center;
  padding: 10px;
`;

export const LinkContainer = styled.div`
  grid-column: 1/-1;
  border-radius: 0 0 20px 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #ffffff;
`;

export const Link = styled.a`
  text-decoration: none;
  padding: 10px;
  background-color: #333333;
  color: #ffffff;
  width: 100%;
  text-align: center;
  &:hover {
    background-color: #ffffff;
    color: #333333;
  }
`;

export const StyledProjectItem = styled(motion.div)`
  min-width: 300px;
  background-color: #333333;
  border-radius: 20px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-template-rows: auto auto 1fr;
  align-items: start;
  position: relative;
  border: 1px solid transparent;
  transform-origin: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  &:hover {
    border: 1px solid #ff4c29;
    box-shadow: 0 0 10px #ff4c29, 0 0 20px #ff4c29, 0 0 30px #ff4c29;
  }
`;

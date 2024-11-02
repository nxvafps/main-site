import styled, { keyframes } from "styled-components";

const blink = keyframes`
	0% { opacity: 1; }
	50% { opacity: 0; }
	100% { opacity: 1; }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StaticText = styled.p`
  color: #ffffff;
  font-size: 25px;
  margin-right: 10px;
`;

export const DynamicText = styled.p`
  z-index: 1;
  color: #ff4c29;
  font-size: 25px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    right: -2px;
    width: 2px;
    height: 100%;
    background-color: #ff4c29;
    animation: ${blink} 0.7s step-end infinite;
  }
`;

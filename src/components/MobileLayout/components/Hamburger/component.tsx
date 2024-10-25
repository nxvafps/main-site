import React, { FC } from "react";
import { motion, SVGMotionProps } from "framer-motion";
import styled from "styled-components";

interface HamburgerProps {
  onClick: () => void;
}

interface PathProps extends SVGMotionProps<SVGPathElement> {}

const Path: FC<PathProps> = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#ffffff"
    strokeLinecap="round"
    {...props}
  />
);

const StyledButton = styled.button`
  outline: none;
  border: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: transparent;
`;

const Hamburger: FC<HamburgerProps> = ({ onClick }) => (
  <StyledButton onClick={onClick}>
    <svg width="80" height="80" viewBox="0 0 80 80">
      <Path
        d="M 25 30 L 55 30"
        variants={{
          closed: {
            y: [10, 10, 10, 10, 0],
            rotate: ["135deg", "90deg", "45deg", "0deg", "0deg"],
          },
          open: {
            y: [0, 10, 10, 10, 10],
            rotate: ["0deg", "0deg", "45deg", "90deg", "135deg"],
          },
        }}
        transition={{
          duration: 0.5,
          times: [0.2, 0.4, 0.6, 0.8, 1],
        }}
      />
      <Path
        d="M 25 40 L 55 40"
        variants={{
          closed: {
            opacity: [0, 0, 0, 0, 1],
          },
          open: {
            opacity: [1, 0, 0, 0, 0],
          },
        }}
        transition={{
          duration: 0.5,
          times: [0.2, 0.4, 0.6, 0.8, 1],
        }}
      />
      <Path
        d="M 25 50 L 55 50"
        variants={{
          closed: {
            y: [-10, -10, -10, -10, 0],
            rotate: ["45deg", "45deg", "45deg", "0deg", "0deg"],
          },
          open: {
            y: [0, -10, -10, -10, -10],
            rotate: ["0deg", "0deg", "45deg", "45deg", "45deg"],
          },
        }}
        transition={{
          duration: 0.5,
          times: [0.2, 0.4, 0.6, 0.8, 1],
        }}
      />
    </svg>
  </StyledButton>
);

export default Hamburger;

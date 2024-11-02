import React from "react";
import { motion, SVGMotionProps } from "framer-motion";

//Animations
import {
  topVariants,
  middleVariants,
  bottomVariants,
  transition,
} from "./animations";

//Styles
import { StyledButton } from "./styles";

export interface HamburgerProps {
  onClick: () => void;
}

export interface PathProps extends SVGMotionProps<SVGPathElement> {}

const Path = (props: PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#ffffff"
    strokeLinecap="round"
    {...props}
  />
);

const Hamburger = ({ onClick, ...props }: HamburgerProps) => (
  <StyledButton onClick={onClick} {...props}>
    <svg width="80" height="80" viewBox="0 0 80 80">
      <Path
        d="M 25 30 L 55 30"
        variants={topVariants}
        transition={transition}
      />
      <Path
        d="M 25 40 L 55 40"
        variants={middleVariants}
        transition={transition}
      />
      <Path
        d="M 25 50 L 55 50"
        variants={bottomVariants}
        transition={transition}
      />
    </svg>
  </StyledButton>
);

export default Hamburger;

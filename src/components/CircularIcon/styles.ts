import styled from "styled-components";
import { motion } from "framer-motion";

export const Icon = styled(motion.img)`
  border-radius: 50%;
  transition: height 0.2s ease-in-out, width 0.2s ease-in-out;
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  &:hover {
    border: 1px solid #ff4c29;
    box-shadow: 0 0 10px #ff4c29, 0 0 20px #ff4c29, 0 0 30px #ff4c29;
  }
`;

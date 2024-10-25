import styled from "styled-components";
import { motion } from "framer-motion";

export const MenuItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 0 45px;
`;

export const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  flex: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
export const Text = styled.div`
  border-radius: 5px;
  width: 150px;
  height: 20px;
  color: #ffffff;
  text-align: center;
`;

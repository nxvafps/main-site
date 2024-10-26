import styled from "styled-components";
import { motion } from "framer-motion";

interface OverlayProps {
  $isOpen: boolean;
}

export const Header = styled.div`
  z-index: 1000;
  height: 80px;
  background-color: #121212;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  top: 0;
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 80px;
  background-color: #121212;
`;

export const Icon = styled.img`
  max-height: 50px;
  margin: 0 10px;
  padding: 0 10px 0 0;
`;

export const Text = styled.p`
  font-size: clamp(0.5rem, 2vw + 1rem, 1.5rem);
  color: #ffffff;
`;

export const Nav = styled(motion.nav)<OverlayProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  z-index: 1000;
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
`;

export const NavBackground = styled(motion.div)<OverlayProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background: linear-gradient(135deg, #121212, #323232);
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
`;

export const MainContent = styled.div``;

export const Overlay = styled.div<OverlayProps>`
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: calc(100% - 80px);
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
`;

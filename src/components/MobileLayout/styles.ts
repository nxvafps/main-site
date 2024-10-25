import styled from "styled-components";

interface OverlayProps {
  $isOpen: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  z-index: 1000;
  height: 80px;
  background-color: #121212;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: -webkit-sticky; // For Safari
  position: sticky;
  top: 0;
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 80px;
  background-color: #121212;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
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

export const HeaderRight = styled.div``;

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

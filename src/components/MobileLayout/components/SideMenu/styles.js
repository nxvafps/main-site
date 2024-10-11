import styled from "styled-components";

export const StyledSideMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 80px;
  right: 0;
  height: calc(100% - 80px);
  width: 200px;
  background-color: #434343;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.5s ease-in-out;
  z-index: 1000;
`;

import styled from "styled-components";

export const Header = styled.div`
  height: 80px;
  background-color: #121212;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: -webkit-sticky; // For Safari
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
`;

export const Icon = styled.img`
  max-height: 50px;
  margin: 0 0 0 10px;
`;

export const Text = styled.p`
  font-size: clamp(0.5rem, 2vw + 1rem, 1.5rem);
  color: #ffffff;
`;

export const Divider = styled.hr`
  height: 40px;
  color: #ffffff;
  margin: 0 0 0 20px;
`;

export const Nav = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const ButtonContainer = styled.div`
  width: 100px;
  text-align: center;
`;

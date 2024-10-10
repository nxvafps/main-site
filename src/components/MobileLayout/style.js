import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  height: 80px;
  background-color: #434343;
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

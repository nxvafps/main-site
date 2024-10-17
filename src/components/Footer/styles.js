import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100px;
  width: 80%;
  margin: 40px auto 0 auto;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 10px;
    max-width: 500px;
    max-height: 200px;
  }
`;

export const Image = styled.img`
  width: 80%;
  max-height: 100px;
  min-height: 80px;
`;

export const LinkStyled = styled.a`
  &:hover {
    background-color: none;
  }
`;

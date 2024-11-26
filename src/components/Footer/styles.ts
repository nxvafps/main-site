import styled from "styled-components";

export const FooterContainer = styled.footer`
  margin: 40px auto 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  max-height: 150px;
  width: 80vw;
`;

export const LinkStyled = styled.a`
  display: flex;
  justify-content: center;
  width: calc((80vw - 60px) / 3);
  max-width: 100px;
  max-height: 100px;
  &:hover {
    background-color: none;
  }
`;

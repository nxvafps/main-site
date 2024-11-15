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
  width: var(--image-size);
  height: var(--image-size);
  max-width: 150px;
  max-height: 150px;
  &:hover {
    background-color: none;
  }
`;

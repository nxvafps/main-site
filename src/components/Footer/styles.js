import styled from "styled-components";

export const FooterContainer = styled.footer`
  margin: 40px auto 20px auto;

  @media (min-width: 768px) {
    --image-gap: calc((80vw / 8) / 6);
    --image-size: calc((80vw - (var(--image-gap) * 7)) / 8);

    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: var(--image-gap);
    height: calc(2 * var(--image-size) + var(--image-gap));
    width: 80vw;
  }

  @media (max-width: 768px) {
    --image-gap: calc((80vw / 4) / 8);
    --image-size: calc((80vw - (var(--image-gap) * 3)) / 8);

    display: grid;
    grid-template-columns: repeat(4, var(--image-size));
    grid-template-rows: repeat(2, var(--image-size));
    gap: var(--image-gap);
    width: 80vw;
    justify-content: center;
    max-height: calc(2 * var(--image-size) + var(--image-gap));
    justify-items: center;
  }
`;

export const Image = styled.img`
  width: var(--image-size);
  height: var(--image-size);
  border-radius: 50%;
  &:hover {
    border: 1px solid #ff4c29; /* Futuristic border color */
    box-shadow: 0 0 10px #ff4c29, 0 0 20px #ff4c29, 0 0 30px #ff4c29; /* Glowing effect */
  }
`;

export const LinkStyled = styled.a`
  display: flex;
  justify-content: center;
  width: var(--image-size);
  height: var(--image-size);
  &:hover {
    background-color: none;
  }
`;

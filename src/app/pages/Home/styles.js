import styled from "styled-components";

const variables = `
  --icon-gap: calc((80vw / 5) / 6);
  --icon-size: calc(80vw - var(--icon-gap) * 4) / 5;
  --screen-width: 768px;
`;

export const Intro = styled.div`
  ${variables}

  display: grid;
  width: 90vw;
  gap: 10px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    justify-items: start;
    margin: 20px auto;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
    margin: 5px auto 10px;
  }
`;

export const IntroLeft = styled.div`
  ${variables}

  display: grid;
  grid-template-rows: auto auto auto;
  gap: 10px;

  @media (min-width: 768px) {
    width: 45vw;
    justify-items: start;
  }

  @media (max-width: 768px) {
    width: 90vw;
    margin: 5%;
    justify-items: center;
  }
`;

export const IntroText1 = styled.p`
  ${variables}
  font-size: clamp(2rem, 4vw, 3rem);
  color: #ffffff;

  @media (min-width: 768px) {
    text-align: left;
    max-width: 45vw;
  }

  @media (max-width: 768px) {
    text-align: center;
    justify-self: center;
    width: 90vw;
  }
`;

export const Placeholder = styled.div`
  ${variables}

  @media (min-width: 768px) {
    justify-content: flex-start;
    max-width: 45vw;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 90vw;
  }
`;

export const IntroText2 = styled.p`
  ${variables}
  color: #ffffff;
  margin: 15px auto;
  font-size: clamp(1rem, 2vw, 2rem);

  @media (min-width: 768px) {
    text-align: left;
    max-width: 45vw;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const IntroRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (min-width: 768px) {
    width: 45vw;
  }

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const Image = styled.img`
  max-width: 300px;
  object-fit: cover;
  border-radius: 50%;
  box-sizing: border-box;
  transition: border 0.3s, box-shadow 0.3s;
  border: 5px solid transparent;

  &:hover {
    border: 5px solid #ff4c29;
    box-shadow: 0 0 15px #ff4c29, 0 0 30px #ff4c29, 0 0 45px #ff4c29;
  }

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 50%;
  }
`;

export const SkillShowcase = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin: 20px auto;
`;

export const Technologies = styled.div`
  display: flex;
  margin: 20px auto;

  @media (min-width: 768px) {
    gap: ${({ $isSelected }) => ($isSelected ? "20px" : "0px")};
    flex-direction: row;
  }

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    gap: ${({ $isSelected }) => ($isSelected ? "10px" : "0px")};
    flex-direction: ${({ $isSelected }) => ($isSelected ? "column" : "row")};
  }
`;

export const IconContainer = styled.div`
  ${variables}
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  gap: var(--icon-gap);
  transition: width 0.2s ease-in-out, display 0.5s ease-in-out;

  @media (min-width: 768px) {
    width: ${({ $isSelected }) => ($isSelected ? "40vw" : "80vw")};
    transition: width 0.2s ease-in-out;
    display: ${({ $isSelected }) => ($isSelected ? "grid" : "flex")};
    justify-content: ${({ $isSelected }) =>
      $isSelected ? "flex-start" : "center"};
    grid-template-columns: ${({ $isSelected }) =>
      $isSelected ? "repeat(3, 1fr)" : ""};
  }

  @media (max-width: 768px) {
    padding: 30px 0;
    width: 80vw;
    justify-content: center;
  }
`;

export const Icon = styled.img`
  ${variables}
  --desktop-selected-icon-size: calc((40vw - (2 * var(--icon-gap) + 10px))/3);
  --mobile-icon-size: calc((80vw - (2 * var(--icon-gap))) / 3);
  height: var(--icon-size);
  max-height: 100px;
  width: var(--icon-size);
  max-width: 100px;
  border-radius: 50%;
  transition: height 0.5s ease-in-out, width 0.5s ease-in-out;

  &:hover {
    border: 1px solid #ff4c29;
    box-shadow: 0 0 10px #ff4c29, 0 0 20px #ff4c29, 0 0 30px #ff4c29;
  }

  @media (min-width: 768px) {
    //desktop display
    height: ${({ $isSelected }) =>
      $isSelected ? "var(--desktop-selected-icon-size)" : "var(--icon-size)"};
  }

  @media (max-width: 768px) {
    //mobile display
    height: ${({ $isSelected }) =>
      $isSelected ? "var(--mobile-icon-size)" : "var(--mobile-icon-size)"};
  }
`;

export const DetailsBox = styled.div`
  position: relative;
  width: 40vw;
  padding: 20px;
  background-color: #333333;
  color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  @media (min-width: 768px) {
    width: 40vw;
  }

  @media (max-width: 768px) {
    width: 90vw;
    margin: auto;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: #ffffff;
`;

export const DetailsTitle = styled.h3`
  margin: 0;
  font-size: 2rem;
`;

export const DetailsDescription = styled.p`
  margin-top: 10px;
  font-size: 1rem;
`;

import styled from "styled-components";

const variables = `
  --desktop-gap: 2.5vw;
  --desktop-size: calc((80vw - (var(--desktop-gap) * 3)) / 4);
  --selected-desktop-size: calc((40vw - (var(--desktop-gap) * 2)) / 3);
  --mobile-gap: 2vw;
  --mobile-size: calc((80vw - (var(--mobile-gap) * 2)) / 3);
  --selected-mobile-size: calc((80vw - (var(--mobile-gap) * 2)) / 3);
`;
//desktop icon size - 2.5vw gap between icons

export const Intro = styled.div`
  display: grid;
  width: 80vw;
  gap: 10px;

  @media (min-width: 768px) {
    //desktop display
    grid-template-columns: 1fr 1fr;
    justify-items: start;
    margin: 20px auto;
  }

  @media (max-width: 768px) {
    //mobile display
    grid-template-columns: 1fr;
    justify-items: center;
    margin: 5px auto 10px;
  }
`;

export const IntroLeft = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 10px;

  @media (min-width: 768px) {
    //desktop display
    width: 40vw;
    justify-items: start;
  }

  @media (max-width: 768px) {
    //mobile display
    width: 80vw;
    margin: 5%;
    justify-items: center;
  }
`;

export const IntroText1 = styled.p`
  font-size: clamp(2rem, 4vw, 3rem);
  color: #ffffff;

  @media (min-width: 768px) {
    //desktop display
    text-align: left;
    max-width: 40vw;
  }

  @media (max-width: 768px) {
    //mobile display
    text-align: center;
    justify-self: center;
    width: 80vw;
  }
`;

export const Placeholder = styled.div`
  @media (min-width: 768px) {
    //desktop display
    justify-content: flex-start;
    max-width: 40vw;
  }

  @media (max-width: 768px) {
    //mobile display
    display: flex;
    justify-content: center;
    width: 80vw;
  }
`;

export const IntroText2 = styled.p`
  color: #ffffff;
  margin: 15px auto;
  font-size: clamp(1rem, 2vw, 2rem);

  @media (min-width: 768px) {
    //desktop display
    text-align: left;
    max-width: 40vw;
  }

  @media (max-width: 768px) {
    //mobile display
    text-align: center;
  }
`;

export const IntroRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (min-width: 768px) {
    //desktop display
    width: 40vw;
  }

  @media (max-width: 768px) {
    //mobile display
    width: 80vw;
  }
`;

export const Image = styled.img`
  max-width: 300px;
  object-fit: cover;
  border-radius: 50%;
  box-sizing: border-box;
  transition: border 0.2s, box-shadow 0.2s;
  border: 5px solid transparent;

  &:hover {
    border: 5px solid #ff4c29;
    box-shadow: 0 0 15px #ff4c29, 0 0 30px #ff4c29, 0 0 45px #ff4c29;
  }

  @media (min-width: 768px) {
    //desktop display
    width: 70%;
  }

  @media (max-width: 768px) {
    //mobile display
    width: 50%;
  }
`;

export const SkillShowcase = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  margin: 20px auto;
`;

export const Technologies = styled.div`
  display: flex;
  margin: 20px auto;

  @media (min-width: 768px) {
    //desktop display
    flex-direction: row;

    ${({ $isSelected }) =>
      $isSelected &&
      `
        gap: 20px;
      `}
  }

  @media (max-width: 768px) {
    //mobile display
    align-items: center;
    justify-content: center;
    width: 80vw;

    ${({ $isSelected }) =>
      $isSelected
        ? `
        gap: 10px;
        flex-direction: column;
      `
        : `
        flex-direction: row;
      `}
  }
`;

export const IconContainer = styled.div`
  ${variables}
  display: grid;
  align-items: center;
  transition: width 0.2s ease-in-out, grid-template-columns 0.2s ease-in-out;
  justify-items: center;

  @media (min-width: 768px) {
    //desktop display
    gap: var(--desktop-gap);

    ${({ $isSelected }) =>
      $isSelected
        ? `
        width: 40vw;
        grid-template-columns: repeat(3, 1fr); 
      `
        : `
        width: 80vw;
        grid-template-columns: repeat(4, 1fr);
      `}
  }

  @media (max-width: 768px) {
    //mobile display
    gap: var(--mobile-gap);
    width: 80vw;

    ${({ $isSelected }) =>
      $isSelected
        ? `
        width:calc(100vw - 10px);
        display: block;
        padding: 15px 0;
        overflow-x: scroll;
        white-space: nowrap;
        scroll-behaviour: smooth;
      `
        : `
        display: grid;
        grid-template-columns: repeat(3, 1fr);
      `}
  }
`;

export const Icon = styled.img`
  ${variables}
  border-radius: 50%;
  transition: height 0.2s ease-in-out, width 0.2s ease-in-out;

  &:hover {
    border: 1px solid #ff4c29;
    box-shadow: 0 0 10px #ff4c29, 0 0 20px #ff4c29, 0 0 30px #ff4c29;
  }

  @media (min-width: 768px) {
    //desktop display
    ${({ $isSelected }) =>
      $isSelected
        ? `
        height: var(--selected-desktop-size);
        max-height: 150px;
      `
        : `
        height: var(--desktop-size);
        max-height: 200px;
      `}
  }

  @media (max-width: 768px) {
    //mobile display
    ${({ $isSelected }) =>
      $isSelected
        ? `
        margin: 10px;
        height: var(--selected-mobile-size);
        max-height: 100px;
      `
        : `
        margin: 0;
        height: var(--mobile-size);
        max-height: 150px;
      `}
  }
`;

export const DetailsBox = styled.div`
  position: relative;
  padding: 20px;
  background-color: #333333;
  color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  @media (min-width: 768px) {
    //desktop display
    width: 40vw;
  }

  @media (max-width: 768px) {
    //mobile display
    width: 80vw;
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

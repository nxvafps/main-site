import styled from "styled-components";

export const Intro = styled.div`
  display: grid;
  width: 80vw;

  @media (min-width: 768px) {
    //desktop display
    grid-template-columns: 1fr 1fr;
    justify-items: start;
    margin: 20px auto;
    gap: 100px;
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
  max-width: 600px;

  @media (min-width: 768px) {
    //desktop display
    max-width: 40vw;
  }

  @media (max-width: 768px) {
    //mobile display
    max-width: 40vw;
  }
`;

export const SkillShowcase = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  margin: 20px auto;
  @media (min-width: 768px) {
    margin-top: 40px;
  }
`;

export const TechnologyListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProjectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

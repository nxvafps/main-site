import styled from "styled-components";

export const Intro = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 90%;
  margin: 20px auto;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const IntroLeft = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 10px;

  @media (max-width: 768px) {
    width: 100%;
    margin: 5%;
  }
`;

export const IntroText1 = styled.p`
  font-size: clamp(2rem, 4vw, 3rem);
  color: #ffffff;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Placeholder = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const IntroText2 = styled.p`
  color: #ffffff;
  margin: 15px auto;
  font-size: clamp(1rem, 2vw, 2rem);

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const IntroRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 60%;
  max-width: 300px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid #ff4c29; /* Futuristic border color */
  box-shadow: 0 0 15px #ff4c29, 0 0 30px #ff4c29, 0 0 45px #ff4c29; /* Glowing effect */

  @media (max-width: 768px) {
    width: 50%;
  }
`;

export const SkillShowcase = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 20px auto;
`;

export const Technologies = styled.div`
  margin: 20px auto;
  max-width: 580px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  gap: 20px;
`;

export const Icon = styled.img`
  height: 18%;
  max-height: 100px;
  width: 18%;
  max-width: 100px;
`;

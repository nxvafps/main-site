import styled from "styled-components";

export const ProjectList = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;

  @media (min-width: 1175px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

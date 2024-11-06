import styled from "styled-components";

export const ProjectIcon = styled.img`
  grid-column: 1;
  grid-row: 1/4;
  border-radius: 20px;
  align-self: start;
  padding: 20px;
  max-width: 100%;
  box-sizing: border-box;
  border-radius: 30px;
`;

export const ProjectName = styled.h3`
  grid-column: 2;
  grid-row: 1;
  color: #ffffff;
  text-align: center;
  align-self: start;
  margin: 0;
  padding: 10px;
`;

export const HorizontalRule = styled.hr`
  grid-column: 2;
  grid-row: 2;
  width: 80%;
  border: 0;
  border-top: 1px solid #ffffff;
  margin: 0 auto 0 auto;
`;

export const ProjectDetails = styled.p`
  grid-column: 2;
  grid-row: 3;
  align-self: start;
  margin: 0;
  color: #ffffff;
  text-align: center;
  padding: 10px;
`;

export const LinkContainer = styled.div`
  grid-column: 1/-1;
  border-radius: 0 0 20px 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #ffffff;
`;

export const Link = styled.a`
  text-decoration: none;
  padding: 10px;
  background-color: #333333;
  color: #ffffff;
  width: 100%;
  text-align: center;
  &:hover {
    background-color: #ffffff;
    color: #333333;
  }
`;

export const StyledProjectItem = styled.div`
  background-color: #333333;
  border-radius: 20px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 40% 1fr;
  grid-template-rows: auto auto 1fr;
  align-items: start;
`;

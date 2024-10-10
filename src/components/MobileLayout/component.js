import React from "react";
import { Outlet } from "react-router-dom";

//Assets
import { siteIcon } from "../../assets";

//Components
import { Footer } from "../";

//Styles
import {
  Container,
  Header,
  HeaderLeft,
  Icon,
  Text,
  HeaderRight,
  MainContent,
} from "./style";

const MobileLayout = () => {
  return (
    <Container>
      <Header>
        <HeaderLeft>
          <Icon src={siteIcon} alt="logo"></Icon>
          <Text>novaFPS</Text>
        </HeaderLeft>
        <HeaderRight></HeaderRight>
      </Header>

      <MainContent>
        <Outlet />
        <Footer />
      </MainContent>
    </Container>
  );
};

export default MobileLayout;

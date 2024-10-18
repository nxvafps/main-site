import React from "react";
import { Outlet } from "react-router-dom";

//Assets
import { siteIcon } from "../../assets";

//Components
import { Footer, NavButton } from "../";

//Styles
import {
  Header,
  HeaderLeft,
  Icon,
  Text,
  Divider,
  Nav,
  ButtonContainer,
} from "./style";

const DesktopLayout = () => {
  return (
    <>
      <Header>
        <HeaderLeft>
          <Icon src={siteIcon} alt="logo"></Icon>
          <Text>novaFPS</Text>
          <Divider />
          <Nav>
            <ButtonContainer>
              <NavButton text="Home" href="/" />
            </ButtonContainer>
            <ButtonContainer>
              <NavButton text="About" href="/about" />
            </ButtonContainer>
            <ButtonContainer>
              <NavButton text="Portfolio" href="/portfolio" />
            </ButtonContainer>
            <ButtonContainer>
              <NavButton text="Contact" href="/contact" />
            </ButtonContainer>
          </Nav>
        </HeaderLeft>
      </Header>
      <div>
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default DesktopLayout;

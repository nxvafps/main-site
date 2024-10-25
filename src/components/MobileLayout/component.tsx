import React, { useState } from "react";
import { Outlet } from "react-router-dom";

//Assets
import { siteIcon } from "../../assets";

//Components
import { Footer } from "..";
import { SideMenu, Hamburger } from "./components";
//Styles
import {
  Container,
  Header,
  HeaderLeft,
  Icon,
  Text,
  HeaderRight,
  MainContent,
  Overlay,
} from "./styles";

const MobileLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Container>
      <Header>
        <HeaderLeft>
          <Icon src={siteIcon} alt="logo"></Icon>
          <Text>novaFPS</Text>
        </HeaderLeft>
        <HeaderRight>
          <Hamburger isOpen={isMenuOpen} onClick={toggleMenu} />
        </HeaderRight>
      </Header>

      <MainContent>
        <Outlet />
        <Footer />
      </MainContent>

      <SideMenu $isOpen={isMenuOpen} onClick={closeMenu} />
      <Overlay $isOpen={isMenuOpen} onClick={closeMenu} />
    </Container>
  );
};

export default MobileLayout;

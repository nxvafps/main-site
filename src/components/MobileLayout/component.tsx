import React, { useRef } from "react";
import { useCycle } from "framer-motion";
import { useDimensions } from "./hooks";
import { Outlet } from "react-router-dom";

//Animations
import { sidebar } from "./animations";

//Assets
import { siteIcon } from "../../assets";

//Components
import { Footer } from "..";
import { Sidemenu, Hamburger } from "./components";

//Styles
import {
  Header,
  HeaderLeft,
  Icon,
  Text,
  Nav,
  NavBackground,
  MainContent,
  Overlay,
} from "./styles";

const MobileLayout: React.FC = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const height = useDimensions(containerRef);

  return (
    <>
      <Header>
        <HeaderLeft>
          <Icon src={siteIcon} alt="logo"></Icon>
          <Text>novaFPS</Text>
        </HeaderLeft>
        <Nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
        >
          <NavBackground variants={sidebar} />
          <Sidemenu onClose={() => toggleOpen()} />
          <Hamburger onClick={() => toggleOpen()} />
        </Nav>
      </Header>

      <MainContent>
        <Outlet />
        <Footer />
      </MainContent>

      <Overlay $isOpen={isOpen} onClick={() => toggleOpen()} />
    </>
  );
};

export default MobileLayout;

import React, { FC, useRef } from "react";
import { motion, useCycle } from "framer-motion";
import styled from "styled-components";
import { useDimensions } from "./hooks";
import { Outlet } from "react-router-dom";

//Assets
import { siteIcon } from "../../assets";

//Components
import { Footer } from "..";
import { Sidemenu, Hamburger } from "./components";
//Styles
import { Icon, Text, MainContent, Overlay } from "./styles";

//Animations
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 160px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 160px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

//styles

const StyledHeader = styled.div`
  z-index: 1000;
  height: 80px;
  background-color: #121212;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  top: 0;
`;

const StyledHeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 80px;
  background-color: #121212;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;

const StyledMotionNav = styled(motion.nav)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  z-index: 1000;
`;

const StyledMotionBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background: #121212;
`;

const MobileLayout: FC = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const height = useDimensions(containerRef);

  return (
    <>
      <StyledHeader>
        <StyledHeaderLeft>
          <Icon src={siteIcon} alt="logo"></Icon>
          <Text>novaFPS</Text>
        </StyledHeaderLeft>
        <StyledMotionNav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
        >
          <StyledMotionBackground variants={sidebar} />
          <Sidemenu />
          <Hamburger onClick={() => toggleOpen()} />
        </StyledMotionNav>
      </StyledHeader>

      <MainContent>
        <Outlet />
        <Footer />
      </MainContent>

      <Overlay $isOpen={isOpen} onClick={() => toggleOpen()} />
    </>
  );
};

export default MobileLayout;

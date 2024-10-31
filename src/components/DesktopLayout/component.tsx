import React, { FC } from "react";
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

const NavItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Portfolio",
    href: "/portfolio",
  },
  {
    text: "Contact",
    href: "/contact",
  },
];

const NavMenu: React.FC = () => (
  <Nav>
    {NavItems.map((item, index) => (
      <ButtonContainer key={index}>
        <NavButton text={item.text} href={item.href} />
      </ButtonContainer>
    ))}
  </Nav>
);

const HeaderInfo: React.FC = () => (
  <>
    <Icon src={siteIcon} alt="Site Icon" />
    <Text>novaFPS</Text>
    <Divider />
  </>
);

const HeaderContent: React.FC = () => (
  <HeaderLeft>
    <HeaderInfo />
    <NavMenu />
  </HeaderLeft>
);

const PageContent: React.FC = () => (
  <>
    <Outlet />
    <Footer />
  </>
);

const DesktopLayout: FC = () => (
  <>
    <Header>
      <HeaderContent />
    </Header>
    <PageContent />
  </>
);

export default DesktopLayout;

import React from "react";

//Assets
import { socialIcons } from "../../assets";

//Components
import { CircularIcon } from "../CircularIcon";

//Styles
import { FooterContainer, LinkStyled } from "./styles";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/oliver-quirk-1350b416b/",
    alt: "Linkedin Icon",
    src: socialIcons.linkedin,
  },
  {
    href: "https://github.com/nxvafps",
    alt: "Github Icon",
    src: socialIcons.github,
  },
  {
    href: "https://www.youtube.com/@nxvafps",
    alt: "Bluesky Icon",
    src: socialIcons.bluesky,
  },
];
const Footer: React.FC = () => (
  <>
    <FooterContainer>
      {socialLinks.map((link, index) => (
        <LinkStyled
          key={index}
          href={link.href}
          target="_blank"
          rel="noreferrer"
        >
          <CircularIcon alt={link.alt} src={link.src} />
        </LinkStyled>
      ))}
    </FooterContainer>
  </>
);

export default Footer;
// TODO: fix footer overlapping with techicons on home page.

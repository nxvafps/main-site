import React from "react";

//Assets
import {
  discord,
  github,
  linkedin,
  steam,
  tiktok,
  twitch,
  twitter,
  youtube,
} from "../../assets";

//Styles
import { FooterContainer, Image, LinkStyled } from "./styles";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/oliver-quirk-1350b416b/",
    alt: "Linkedin Icon",
    src: linkedin,
  },
  {
    href: "https://github.com/nxvafps",
    alt: "Github Icon",
    src: github,
  },
  {
    href: "https://www.youtube.com/@nxvafps",
    alt: "Youtube Icon",
    src: youtube,
  },
  {
    href: "https://www.x.com/nxvafps",
    alt: "Twitter Icon",
    src: twitter,
  },
  {
    href: "https://www.tiktok.com/@nxvafps",
    alt: "Tiktik Icon",
    src: tiktok,
  },
  {
    href: "https://www.twitch.com/nxvafps",
    alt: "Twitch Icon",
    src: twitch,
  },
  {
    href: "https://www.discord.gg/tSNujPdzAu",
    alt: "Discord Icon",
    src: discord,
  },
  {
    href: "https://steamcommunity.com/id/nxvaFPS/",
    alt: "Steam Icon",
    src: steam,
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
          <Image alt={link.alt} src={link.src} />
        </LinkStyled>
      ))}
    </FooterContainer>
  </>
);

export default Footer;

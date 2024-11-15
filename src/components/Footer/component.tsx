import React from "react";

//Assets
import { socialIcons } from "../../assets";

//Styles
import { FooterContainer, Image, LinkStyled } from "./styles";

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
    alt: "Youtube Icon",
    src: socialIcons.youtube,
  },
  {
    href: "https://www.x.com/nxvafps",
    alt: "Twitter Icon",
    src: socialIcons.twitter,
  },
  {
    href: "https://www.tiktok.com/@nxvafps",
    alt: "Tiktik Icon",
    src: socialIcons.tiktok,
  },
  {
    href: "https://www.twitch.com/nxvafps",
    alt: "Twitch Icon",
    src: socialIcons.twitch,
  },
  {
    href: "https://www.discord.gg/tSNujPdzAu",
    alt: "Discord Icon",
    src: socialIcons.discord,
  },
  {
    href: "https://steamcommunity.com/id/nxvaFPS/",
    alt: "Steam Icon",
    src: socialIcons.steam,
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

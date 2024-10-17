import React from "react";

//Assets
import {
  discord,
  githubIcon,
  linkedin,
  steam,
  tiktok,
  twitch,
  twitter,
  youtube,
} from "../../assets";

//Styles
import { FooterContainer, Image, LinkStyled } from "./styles";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <LinkStyled
          href="https://www.linkedin.com/in/oliver-quirk-1350b416b/"
          target="_blank"
          rel="noreferrer"
        >
          <Image alt="Linkedin Icon" src={linkedin} />
        </LinkStyled>

        <LinkStyled
          href="https://github.com/nxvafps"
          target="_blank"
          rel="noreferrer"
        >
          <Image alt="Github Icon" src={githubIcon} />
        </LinkStyled>

        <LinkStyled
          href="https://www.youtube.com/@nxvafps"
          target="_blank"
          rel="noreferrer"
        >
          <Image alt="Youtube Icon" src={youtube} />
        </LinkStyled>

        <LinkStyled
          href="https://www.x.com/nxvafps"
          target="_blank"
          rel="noreferrer"
        >
          <Image alt="Twitter Icon" src={twitter} />
        </LinkStyled>

        <LinkStyled
          href="https://www.tiktok.com/@nxvafps"
          target="_blank"
          rel="noreferrer"
        >
          <Image alt="Tiktik Icon" src={tiktok} />
        </LinkStyled>

        <LinkStyled
          href="https://www.twitch.com/nxvafps"
          target="_blank"
          rel="noreferrer"
        >
          <Image alt="Twitch Icon" src={twitch} />
        </LinkStyled>

        <LinkStyled
          href="https://www.discord.gg/tSNujPdzAu"
          target="_blank"
          rel="noreferrer"
        >
          <Image alt="Discord Icon" src={discord} />
        </LinkStyled>

        <LinkStyled
          href="https://steamcommunity.com/id/nxvaFPS/"
          target="_blank"
          rel="noreferrer"
        >
          <Image alt="Steam Icon" src={steam} />
        </LinkStyled>
      </FooterContainer>
    </>
  );
};

export default Footer;

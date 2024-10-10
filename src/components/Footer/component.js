import React from "react";

//Assets
import { twitter, youtube, tiktok, twitch, discord } from "../../assets";

//Styles
import { FooterContainer, Image, LinkStyled } from "./styles";

const Footer = () => {
  return (
    <>
      <FooterContainer>
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
      </FooterContainer>
    </>
  );
};

export default Footer;

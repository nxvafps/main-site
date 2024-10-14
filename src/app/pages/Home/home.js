import React from "react";

//Assets
import {
  me,
  bootstrap,
  css,
  express,
  git,
  github,
  html,
  node,
  react,
  sass,
  tailwind,
} from "../../../assets";

//Components
import { Title, Typewriter } from "../../../components";

//Hooks

//Styles
import {
  Intro,
  IntroLeft,
  IntroText1,
  Placeholder,
  IntroText2,
  IntroRight,
  Image,
  SkillShowcase,
  Technologies,
  Icon,
} from "./styles";

const Home = () => {
  return (
    <>
      <Intro>
        <IntroLeft>
          <IntroText1>Hi, I'm Ollie</IntroText1>
          <Placeholder>
            <Typewriter />
          </Placeholder>
          <IntroText2>
            Here you'll find my web development portfolio showcasing the
            projects I have completed, along with the ones I'm currently working
            on! But that's not all! I am also using this space to celebrate my
            love of gaming. Explore my content from youtube, twitter, and tiktok
            and join me on my adventures! Stay a while, explore, and let’s
            create something amazing together!
          </IntroText2>
        </IntroLeft>
        <IntroRight>
          <Image src={me}></Image>
        </IntroRight>
      </Intro>
      <SkillShowcase>
        <Title text="Technologies" underline />
        <Technologies>
          <Icon src={html} alt="HTML" />
          <Icon src={css} alt="CSS" />
          <Icon src={sass} alt="SASS" />
          <Icon src={bootstrap} alt="Bootstrap" />
          <Icon src={tailwind} alt="Tailwind" />
          <Icon src={node} alt="Nodejs" />
          <Icon src={react} alt="React" />
          <Icon src={express} alt="Express" />
          <Icon src={git} alt="Git" />
          <Icon src={github} alt="Github" />
        </Technologies>
      </SkillShowcase>
    </>
  );
};

export default Home;

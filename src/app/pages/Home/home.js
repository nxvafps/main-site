import React from "react";

//Assets
import { banner } from "../../../assets";

//Components
import { Title, Subtitle } from "../../../components";

//Hooks

//Styles
import { Banner, Intro, SkillShowcase } from "./styles";

const Home = () => {
  return (
    <>
      <Banner src={banner} alt="nova banner" />
      <Title text="Welcome" />
      <Intro>
        Here you'll find my web development portfolio showcasing the projects I
        have completed, along with the ones I'm currently working on! But that's
        not all! I am also using this space to celebrate my love of gaming.
        Explore my content from youtube, twitter, and tiktok and join me on my
        adventures! Stay a while, explore, and let’s create something amazing
        together!
      </Intro>
      <SkillShowcase>
        <Subtitle textAlign="left" text="Current Projects" underline />
        <p> projects go here </p>
        <Subtitle textAlign="left" text="Latest Upload" underline />
        <p> youtube embed goes here </p>
      </SkillShowcase>
    </>
  );
};

export default Home;

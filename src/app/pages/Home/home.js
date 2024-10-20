import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedIcon, clearSelectedIcon } from "../../../stores";
import { useNavigate } from "react-router-dom";

//Assets
import {
  me,
  bootstrap,
  css,
  express,
  git,
  html,
  node,
  react,
  sass,
  tailwind,
  javascript,
} from "../../../assets";

//Components
import { CloseIcon, Title, Typewriter } from "../../../components";

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
  IconContainer,
  Icon,
  DetailsBox,
  DetailsTitle,
  DetailsDescription,
  CloseButton,
} from "./styles";

const Home = () => {
  const navigate = useNavigate();
  const selectedIcon = useSelector((state) => state.selectedIcon);
  const dispatch = useDispatch();

  const handleIconClick = (icon) => dispatch(setSelectedIcon(icon));

  const handleCloseClick = () => dispatch(clearSelectedIcon());

  const descriptions = {
    HTML: "Here I talk about what I know about HTML.",
    CSS: "Here I talk about what I know about CSS.",
    SASS: "Here I talk about what I know about SASS.",
    Bootstrap: "Here I talk about what I know about Bootstrap.",
    Tailwind: "Here I talk about what I know about Tailwind.",
    Javascript: "Here I talk about what I know about Javascript.",
    "Node.js": "Here I talk about what I know about Node.js.",
    "React.js": "Here I talk about what I know about React.js.",
    "Express.js": "Here I talk about what I know about Express.js.",
    Git: "Here I talk about what I know about Git.",
  };

  const description = descriptions[selectedIcon] || "You broke it!";

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
          <Image src={me} onClick={() => navigate("/about")}></Image>
        </IntroRight>
      </Intro>
      <SkillShowcase>
        <Title text="Technologies" underline />
        <Technologies $isSelected={!!selectedIcon}>
          <IconContainer $isSelected={!!selectedIcon}>
            <Icon
              src={html}
              alt="HTML"
              onClick={() => handleIconClick("HTML")}
              $isSelected={!!selectedIcon}
            />
            <Icon
              src={css}
              alt="CSS"
              onClick={() => handleIconClick("CSS")}
              $isSelected={!!selectedIcon}
            />
            <Icon
              src={sass}
              alt="SASS"
              onClick={() => handleIconClick("SASS")}
              $isSelected={!!selectedIcon}
            />
            <Icon
              src={bootstrap}
              alt="Bootstrap"
              onClick={() => handleIconClick("Bootstrap")}
              $isSelected={!!selectedIcon}
            />
            <Icon
              src={tailwind}
              alt="Tailwind"
              onClick={() => handleIconClick("Tailwind")}
              $isSelected={!!selectedIcon}
            />
            <Icon
              src={javascript}
              alt="Javascript"
              onClick={() => handleIconClick("Javascript")}
              $isSelected={!!selectedIcon}
            />
            <Icon
              src={node}
              alt="Nodejs"
              onClick={() => handleIconClick("Node.js")}
              $isSelected={!!selectedIcon}
            />
            <Icon
              src={react}
              alt="Reactjs"
              onClick={() => handleIconClick("React.js")}
              $isSelected={!!selectedIcon}
            />
            <Icon
              src={express}
              alt="Expressjs"
              onClick={() => handleIconClick("Express.js")}
              $isSelected={!!selectedIcon}
            />
            <Icon
              src={git}
              alt="Git"
              onClick={() => handleIconClick("Git")}
              $isSelected={!!selectedIcon}
            />
          </IconContainer>
          {selectedIcon && (
            <DetailsBox>
              <CloseButton onClick={handleCloseClick}>
                <CloseIcon />
              </CloseButton>
              <DetailsTitle>{selectedIcon}</DetailsTitle>
              <DetailsDescription>{description}</DetailsDescription>
            </DetailsBox>
          )}
        </Technologies>
      </SkillShowcase>
    </>
  );
};

export default Home;

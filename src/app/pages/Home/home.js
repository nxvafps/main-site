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
  postgresql,
  redux,
  copilot,
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

  const techIcons = [
    {
      name: "HTML",
      src: html,
      description: "Here I talk about what I know about HTML.",
    },
    {
      name: "CSS",
      src: css,
      description: "Here I talk about what I know about CSS.",
    },
    {
      name: "SASS",
      src: sass,
      description: "Here I talk about what I know about SASS.",
    },
    {
      name: "Bootstrap",
      src: bootstrap,
      description: "Here I talk about what I know about Bootstrap.",
    },
    {
      name: "Tailwind",
      src: tailwind,
      description: "Here I talk about what I know about Tailwind.",
    },
    {
      name: "Javascript",
      src: javascript,
      description: "Here I talk about what I know about Javascript.",
    },
    {
      name: "Node.js",
      src: node,
      description: "Here I talk about what I know about Node.js.",
    },
    {
      name: "React.js",
      src: react,
      description: "Here I talk about what I know about React.js.",
    },
    {
      name: "Redux",
      src: redux,
      description: "Here I talk about what I know about Redux.",
    },
    {
      name: "Express.js",
      src: express,
      description: "Here I talk about what I know about Express.js.",
    },
    {
      name: "PostgreSQL",
      src: postgresql,
      description: "Here I talk about what I know about PostgreSQL.",
    },
    {
      name: "Git",
      src: git,
      description: "Here I talk about what I know about Git.",
    },
    {
      name: "Copilot",
      src: copilot,
      description: "Here I talk about what I know about Copilot.",
    },
  ];

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
            {techIcons.map((icon, index) => (
              <Icon
                key={index}
                src={icon.src}
                alt={icon.name}
                onClick={() => handleIconClick(icon)}
                $isSelected={!!selectedIcon}
              />
            ))}
          </IconContainer>
          {selectedIcon && (
            <DetailsBox>
              <CloseButton onClick={handleCloseClick}>
                <CloseIcon />
              </CloseButton>
              <DetailsTitle>{selectedIcon.name}</DetailsTitle>
              <DetailsDescription>
                {selectedIcon.description}
              </DetailsDescription>
            </DetailsBox>
          )}
        </Technologies>
      </SkillShowcase>
    </>
  );
};

export default Home;

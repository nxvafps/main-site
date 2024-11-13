import { useNavigate } from "react-router-dom";

//Assets
import { me } from "../../../assets";

//Components
import { Title, Typewriter, TechnologyList } from "../../../components";

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
  TechnologyListWrapper,
} from "./styles";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const typeWriterDynamicText = [
    "Problem Solver",
    "Web Developer",
    "Software Developer",
    "Youtuber",
    "Designer",
    "Streamer",
  ];

  return (
    <>
      <Intro>
        <IntroLeft>
          <IntroText1>Hi, I'm Ollie</IntroText1>
          <Placeholder>
            <Typewriter
              mainText="I am a "
              dynamicText={typeWriterDynamicText}
            />
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
        <Title text="Technologies" type="h2" underline />
        <TechnologyListWrapper>
          <TechnologyList />
        </TechnologyListWrapper>
      </SkillShowcase>
    </>
  );
};

export default Home;

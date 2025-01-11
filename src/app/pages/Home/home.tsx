import { useNavigate } from "react-router-dom";

//Assets
import { me } from "../../../assets";

//Components
import {
  Title,
  Typewriter,
  TechnologyList,
  ProjectList,
  CircularIcon,
} from "../../../components";

import { useFetchCurrentProjects } from "./hooks";

//Styles
import {
  Intro,
  IntroLeft,
  IntroText1,
  Placeholder,
  IntroText2,
  IntroRight,
  SkillShowcase,
  TechnologyListWrapper,
  ProjectWrapper,
} from "./styles";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const { status, projects } = useFetchCurrentProjects();

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
          <CircularIcon
            alt="image of me"
            src={me}
            maxSize={200}
            onClick={() => navigate("/about")}
          />
        </IntroRight>
      </Intro>
      <SkillShowcase>
        <Title text="Technologies" type="h2" underline />
        <TechnologyListWrapper>
          <TechnologyList />
        </TechnologyListWrapper>
        <Title text="Current Projects" type="h2" underline />
        <ProjectWrapper>
          <ProjectList status={status} projects={projects} />
        </ProjectWrapper>
      </SkillShowcase>
    </>
  );
};

export default Home;

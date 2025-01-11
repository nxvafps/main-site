import React from "react";

import { Title, ProjectList } from "../../../components";

//Hooks
import { useFetchProjects } from "./hooks";

import * as styles from "./styles";

const PortfolioHome: React.FC = () => {
  const { status, projects } = useFetchProjects();

  return (
    <>
      <styles.titleWrapper>
        <Title text="Portfolio" />
      </styles.titleWrapper>
      <styles.projectListWrapper>
        <ProjectList status={status} projects={projects} />
      </styles.projectListWrapper>
    </>
  );
};

export default PortfolioHome;

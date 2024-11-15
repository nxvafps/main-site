import React from "react";

import { Title, ProjectList } from "../../../components";

//Hooks
import { useFetchProjects } from "./hooks";

const PortfolioHome: React.FC = () => {
  const { status, projects } = useFetchProjects();

  return (
    <>
      <Title text="Portfolio" />
      <ProjectList status={status} projects={projects} />
    </>
  );
};

export default PortfolioHome;

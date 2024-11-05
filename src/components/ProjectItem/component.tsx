import React from "react";

import {
  StyledProjectItem,
  ProjectIcon,
  ProjectName,
  HorizontalRule,
  ProjectDetails,
  ProjectRepo,
} from "./style";

export interface ProjectItemProps {
  project_code: string;
  project_name: string;
  project_details: string;
  project_icon: string;
  project_status: string;
  project_repo: string;
}

const ProjectItem = ({
  project_code,
  project_name,
  project_details,
  project_icon,
  project_status,
  project_repo,
  ...props
}: ProjectItemProps) => {
  return (
    <StyledProjectItem {...props}>
      <ProjectIcon src={project_icon} alt={`${project_name} icon`} />
      <ProjectName>{project_name}</ProjectName>
      <HorizontalRule />
      <ProjectDetails>{project_details}</ProjectDetails>
      <ProjectRepo href={project_repo} target="_blank">
        View on Github
      </ProjectRepo>
    </StyledProjectItem>
  );
};

export default ProjectItem;

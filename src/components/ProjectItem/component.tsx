import React from "react";

import {
  StyledProjectItem,
  ProjectIcon,
  ProjectName,
  HorizontalRule,
  ProjectDetails,
  LinkContainer,
  Link,
} from "./style";

export interface ProjectItemProps {
  project_code: string;
  project_name: string;
  project_details: string;
  project_icon: string;
  project_status: string;
  project_link?: string;
  project_page?: string;
  project_repo?: string;
}

const ProjectItem = ({
  project_code,
  project_name,
  project_details,
  project_icon,
  project_status,
  project_link,
  project_page,
  project_repo,
  ...props
}: ProjectItemProps) => {
  const allLinksUndefined = !project_link && !project_page && !project_repo;

  return (
    <StyledProjectItem {...props}>
      <ProjectIcon src={project_icon} alt={`${project_name} icon`} />
      <ProjectName> {`${project_code} - ${project_name}`}</ProjectName>
      <HorizontalRule />
      <ProjectDetails>{project_details}</ProjectDetails>
      <LinkContainer>
        {allLinksUndefined ? (
          <p>Project page is under construction</p>
        ) : (
          <>
            {project_link && (
              <Link href={project_link} target="_blank">
                View Project
              </Link>
            )}
            {project_page && (
              <Link href={project_page} target="_blank">
                View Page
              </Link>
            )}
            {project_repo && (
              <Link href={project_repo} target="_blank">
                View on Github
              </Link>
            )}
          </>
        )}
      </LinkContainer>
    </StyledProjectItem>
  );
};

export default ProjectItem;

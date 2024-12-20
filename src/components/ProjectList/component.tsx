import { ProjectItem } from "../ProjectItem";

import { StyledProjectList } from "./styles";

import type { Project } from "../../stores/redux/asyncActions";

interface ProjectListProps {
  status: string;
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ status, projects }) => {
  const LoadingRow = <div>Loading</div>;

  if (status === "loading") {
    return (
      <div>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (status === "error") {
    return <div>Error</div>;
  }

  return (
    <StyledProjectList>
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          project_code={project.project_code}
          project_name={project.project_name}
          project_details={project.project_details}
          project_icon={project.project_icon}
          project_status={project.project_status}
          project_repo={project.project_repo}
          project_link={project.project_url}
          project_page={project.project_page}
        />
      ))}
    </StyledProjectList>
  );
};

export default ProjectList;
// TODO: ADD MORE STORIES FOR THIS COMPONENT
// TODO: UPDATE THE FORMAT OF THE LOADING STATE

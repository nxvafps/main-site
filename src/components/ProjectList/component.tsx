import React, { useState, useEffect } from "react";

import { ProjectItem } from "../ProjectItem";

//import { useSelector } from "react-redux";

//import type { RootState } from "../../stores";

import type { Project } from "../../stores/redux/asyncActions";

import { ProjectList } from "./styles";
import axios from "axios";

const useFetchProjects = () => {
  const [status, setStatus] = useState<string>("idle");
  const [projects, setProjects] = useState<Project[]>([]);
  useEffect(() => {
    setStatus("loading");
    axios
      .get("https://api.novafps.com/projects/all")
      .then((response) => {
        setStatus("success");
        setProjects(response.data);
      })
      .catch(() => {
        setStatus("error");
      });
  }, []);

  return { status, projects };
};

const ProjectDisplay: React.FC = () => {
  /*
  const projects: Project[] = useSelector(
    (state: RootState) => state.projects.projects
  );
  const { status } = useSelector((state: RootState) => state.project);
*/

  const { status, projects } = useFetchProjects();

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
    <ProjectList>
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
    </ProjectList>
  );
};

export default ProjectDisplay;
// TODO: ADD MORE STORIES FOR THIS COMPONENT
// TODO: UPDATE THE FORMAT OF THE LOADING STATE

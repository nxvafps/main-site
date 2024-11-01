import React, { useEffect, useState } from "react";
import axios from "axios";

import { Title } from "../../../components";

const Portfolio: React.FC = () => {
  interface Project {
    id: number;
    project_code: string;
    project_name: string;
    project_details: string;
    project_icon: string;
    current_project: string;
    project_repo: string;
  }

  const [data, setData] = useState<Project[] | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/projects")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(`Error fetching data: ${error}`);
      });
  }, []);
  return (
    <>
      <Title text="Portfolio" />

      {data &&
        data.map((project) => (
          <div key={project.id}>
            <h2>{project.project_name}</h2>
            <p>{project.project_details}</p>
            <img src={project.project_icon} alt={project.project_name} />
            <a href={project.project_repo}>Project Repo</a>
          </div>
        ))}
    </>
  );
};

export default Portfolio;

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Project {
  id: number;
  project_code: string;
  project_name: string;
  project_details: string;
  project_icon: string;
  project_status: string;
  project_repo?: string;
  project_url?: string;
  project_page?: string;
}

export const fetchProjects = createAsyncThunk<Project[]>(
  "projects/fetchProjects",
  async () => {
    const response = await axios.get("http://api.novafps.com/api/projects/all");
    const data: Project[] = response.data;
    const result: Project[] = data.map((project) => ({
      id: project.id,
      project_code: project.project_code,
      project_name: project.project_name,
      project_details: project.project_details,
      project_icon: project.project_icon,
      project_status: project.project_status,
      project_repo: project.project_repo,
      project_url: project.project_url,
      project_page: project.project_page,
    }));
    return result;
  }
);

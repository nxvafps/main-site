import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchProjects } from "../asyncActions";

import { siteIcon } from "../../../assets";

import type { Project } from "../asyncActions";

const defaultProjects = [
  {
    id: 1,
    project_code: "nv1",
    project_name: "project1",
    project_details: "details1",
    project_icon: siteIcon,
    project_status: "current",
    project_repo: "#",
    project_url: "#",
    project_page: "#",
  },
  {
    id: 2,
    project_code: "nv2",
    project_name: "project2",
    project_details: "details2",
    project_icon: siteIcon,
    project_status: "current",
    project_repo: "#",
    project_url: "#",
    project_page: "#",
  },
  {
    id: 3,
    project_code: "nv3",
    project_name: "project3",
    project_details: "details3",
    project_icon: siteIcon,
    project_status: "current",
    project_repo: "#",
    project_url: "#",
    project_page: "#",
  },
  {
    id: 4,
    project_code: "nv4",
    project_name: "project4",
    project_details: "details4",
    project_icon: siteIcon,
    project_status: "current",
    project_repo: "#",
    project_url: "#",
    project_page: "#",
  },
];

interface ProjectState {
  projects: Project[];
  status: string;
  error: string | null;
}

const initialState: ProjectState = {
  projects: defaultProjects,
  status: "idle",
  error: null,
};

const handlePending = (state: ProjectState) => {
  state.status = "loading";
  state.error = null;
  state.projects = [];
};

const handleFulfilled = (
  state: ProjectState,
  action: PayloadAction<Project[]>
) => {
  state.status = "succeeded";
  state.error = null;
  state.projects = action.payload;
};

const handleRejected = (state: ProjectState) => {
  state.status = "failed";
  state.error = "Something went wrong";
  state.projects = [];
};

const projectSlice = createSlice({
  name: "projects",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, handlePending)
      .addCase(fetchProjects.fulfilled, handleFulfilled)
      .addCase(fetchProjects.rejected, handleRejected);
  },
});

export default projectSlice.reducer;

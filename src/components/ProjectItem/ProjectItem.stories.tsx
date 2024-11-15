import type { Meta, StoryObj } from "@storybook/react";

import { generalIcons } from "../../assets";

import ProjectItem from "./component";

const meta = {
  title: "ProjectItem",
  component: ProjectItem,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
} satisfies Meta<typeof ProjectItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const defaultData = {
  project_code: "nvX",
  project_name: "Project Name",
  project_details: "Project Details",
  project_icon: generalIcons.siteIcon,
  project_status: "project status",
  project_link: "#",
  project_page: "#",
  project_repo: "#",
};

export const Default: Story = {
  args: {
    ...defaultData,
  },
};

export const NoProjectLink: Story = {
  args: {
    ...defaultData,
    project_link: undefined,
  },
};

export const NoProjectPage: Story = {
  args: {
    ...defaultData,
    project_page: undefined,
  },
};

export const NoProjectRepo: Story = {
  args: {
    ...defaultData,
    project_repo: undefined,
  },
};

export const NoLinks: Story = {
  args: {
    ...defaultData,
    project_link: undefined,
    project_page: undefined,
    project_repo: undefined,
  },
};

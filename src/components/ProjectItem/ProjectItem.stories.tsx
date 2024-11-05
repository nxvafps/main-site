import type { Meta, StoryObj } from "@storybook/react";

import { siteIcon } from "../../assets";

import ProjectItem from "./component";

const meta = {
  title: "ProjectItem",
  component: ProjectItem,
  tags: ["autodocs"],
} satisfies Meta<typeof ProjectItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    project_code: "project_code",
    project_name: "Project Name",
    project_details: "Project Details",
    project_icon: siteIcon,
    project_status: "project status",
    project_repo: "project repo",
  },
};

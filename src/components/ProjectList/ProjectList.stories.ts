import type { Meta, StoryObj } from "@storybook/react";

import { http, HttpResponse, delay } from "msw";

import { siteIcon } from "../../assets";

import ProjectDisplay from "./component";

const meta = {
  component: ProjectDisplay,
  title: "ProjectDisplay",
} satisfies Meta<typeof ProjectDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

const TestData = [
  {
    id: 1,
    project_code: "nv1",
    project_name: "Project1",
    project_details: "Project1 Details",
    project_icon: siteIcon,
    project_status: "current",
    project_link: "#",
    project_page: "#",
    project_repo: "#",
  },
  {
    id: 2,
    project_code: "nv2",
    project_name: "Project2",
    project_details: "Project2 Details",
    project_icon: siteIcon,
    project_status: "current",
    project_link: "#",
    project_page: "#",
    project_repo: "#",
  },
  {
    id: 3,
    project_code: "nv3",
    project_name: "Project3",
    project_details: "Project3 Details",
    project_icon: siteIcon,
    project_status: "current",
    project_link: "#",
    project_page: "#",
    project_repo: "#",
  },
  {
    id: 4,
    project_code: "nv4",
    project_name: "Project4",
    project_details: "Project4 Details",
    project_icon: siteIcon,
    project_status: "current",
    project_link: "#",
    project_page: "#",
    project_repo: "#",
  },
];

export const MockedSuccess: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("https://api.novafps.com/api/projects/all", () => {
          return HttpResponse.json(TestData);
        }),
      ],
    },
  },
};

export const MockedError: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get("https://api.novafps.com/api/projects/all", async () => {
          await delay(800);
          return new HttpResponse(null, {
            status: 403,
          });
        }),
      ],
    },
  },
};

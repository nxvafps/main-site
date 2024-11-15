import type { Meta, StoryObj } from "@storybook/react";

import { generalIcons } from "../../assets";

import CircularIcon from "./component";

const meta = {
  component: CircularIcon,
  title: "CircularIcon",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CircularIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: generalIcons.siteIcon,
    alt: "site icon",
  },
};

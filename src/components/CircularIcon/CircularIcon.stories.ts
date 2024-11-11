import type { Meta, StoryObj } from "@storybook/react";

import { siteIcon } from "../../assets";

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
    src: siteIcon,
    alt: "site icon",
  },
};

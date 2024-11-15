import type { Meta, StoryObj } from "@storybook/react";

import Footer from "./component";

const meta = {
  component: Footer,
  title: "Footer",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

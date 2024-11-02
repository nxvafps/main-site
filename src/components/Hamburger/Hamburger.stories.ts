import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Hamburger from "./component";

const meta = {
  title: "Hamburger",
  component: Hamburger,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Hamburger>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import CloseIcon from "./component";

const meta = {
  title: "Close Icon",
  component: CloseIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof CloseIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

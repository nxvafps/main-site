import type { Meta, StoryObj } from "@storybook/react";

import Typewriter from "./component";

const meta = {
  title: "Typewriter",
  component: Typewriter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Typewriter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mainText: "Static Text",
    dynamicText: ["Option 1", "Option 2", "Option 3"],
  },
};

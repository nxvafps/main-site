import type { Meta, StoryObj } from "@storybook/react";

import TechnologyList from "./component";

const meta = {
  component: TechnologyList,
  title: "TechnologyList",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TechnologyList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

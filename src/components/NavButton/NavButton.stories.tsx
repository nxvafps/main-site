import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { BrowserRouter } from "react-router-dom";

import NavButton from "./component";

const meta = {
  title: "NavButton",
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  component: NavButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof NavButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Button",
    href: "",
  },
};

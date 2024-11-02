import type { Meta, StoryObj } from "@storybook/react";

import Title from "./component";

const meta = {
  title: "Title",
  component: Title,
  tags: ["autodocs"],
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    text: "H1 Title (default)",
  },
};

export const H2: Story = {
  args: {
    text: "H2 Title",
    type: "h2",
  },
};

export const H3: Story = {
  args: {
    text: "H3 Title",
    type: "h3",
  },
};

export const H4: Story = {
  args: {
    text: "H4 Title",
    type: "h4",
  },
};

export const H5: Story = {
  args: {
    text: "H5 Title",
    type: "h5",
  },
};

export const H6: Story = {
  args: {
    text: "H6 Title",
    type: "h6",
  },
};

export const Left: Story = {
  args: {
    text: "Left-aligned Title",
    textAlign: "left",
  },
};

export const Right: Story = {
  args: {
    text: "Right-aligned Title",
    textAlign: "right",
  },
};

export const Underline: Story = {
  args: {
    text: "Underlined Title",
    underline: true,
  },
};

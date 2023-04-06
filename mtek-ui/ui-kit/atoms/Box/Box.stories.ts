import type { Meta, StoryObj } from "@storybook/react";

import Box from "./index";

const meta: Meta<typeof Box> = {
  title: "atoms/Box",
  component: Box,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Div: Story = {
  args: {
    component: "div",
    children: "Box",
    style: { padding: "10px", borderRadius: "10px" },
  },
};

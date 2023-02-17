import type { Meta, StoryObj } from "@storybook/react";

import Typography from "./index";

const meta: Meta<typeof Typography> = {
  title: "atoms/Typography",
  component: Typography,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Paragraph: Story = {
  args: {
    component: "p",
  },
};

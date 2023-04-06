import type { Meta, StoryObj } from "@storybook/react";

import { iconOptions } from "@/ui-kit/atoms/Icon/iconOptions";

import Button from "./index";

const meta: Meta<typeof Button> = {
  title: "molecules/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    shadow: {
      control: { type: "select" },
    },
    icon: {
      control: "select",
      options: iconOptions,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Contained: Story = {
  args: {
    variant: "contained",
    children: "Button",
    size: "medium",
    color: "primary_dark",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "Button",
    size: "small",
  },
};

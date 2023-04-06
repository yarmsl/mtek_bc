import type { Meta, StoryObj } from "@storybook/react";

import { iconOptions } from "@/ui-kit/atoms/Icon/iconOptions";

import Input from "./index";

const meta: Meta<typeof Input> = {
  title: "molecules/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "select",
      options: iconOptions,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Common: Story = {
  args: {
    color: "primary",
    placeholder: "Выбрать транспорт",
  },
};

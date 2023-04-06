/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { iconOptions } from "@/ui-kit/atoms/Icon/iconOptions";
import MenuItem from "@/ui-kit/atoms/MenuItem";

import Select from "./index";

const meta: Meta<typeof Select> = {
  title: "molecules/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "select",
      options: iconOptions,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Common: Story = {
  args: {
    placeholder: "Выберите...",
  },
  render: (args) => {
    const [value, setValue] = React.useState("");
    const handleChange = React.useCallback(
      (value: string) => setValue(value),
      []
    );
    return (
      <Select {...args} value={value}>
        <MenuItem value={"1"} onClick={handleChange}>
          пункут 1
        </MenuItem>
        <MenuItem value={"2"} onClick={handleChange}>
          пункут 2
        </MenuItem>
        <MenuItem value={"3"} onClick={handleChange}>
          пункут 3
        </MenuItem>
      </Select>
    );
  },
};

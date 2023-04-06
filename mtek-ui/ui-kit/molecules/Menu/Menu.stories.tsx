import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import Box from "@/ui-kit/atoms/Box";

import Menu from "./index";
import Button from "../Button";

const meta: Meta<typeof Menu> = {
  title: "molecules/Menu",
  component: Menu,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Right: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setOpen] = React.useState(false);

    return (
      <Box>
        <Button onClick={() => setOpen(true)}>Открыть Меню</Button>
        <Menu isOpen={isOpen} onBackdropClick={() => setOpen(false)}>
          <div>12</div>
          <div>12</div>
          <div>12</div>
        </Menu>
      </Box>
    );
  },
};

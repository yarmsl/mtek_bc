import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import Box from "@/ui-kit/atoms/Box";

import Drawer from "./index";
import Button from "../Button";

const meta: Meta<typeof Drawer> = {
  title: "molecules/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Right: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setOpen] = React.useState(false);
    return (
      <Box>
        <Button onClick={() => setOpen(true)}>Открыть</Button>
        <Drawer onBackdropClick={() => setOpen(false)} isOpen={isOpen} />
      </Box>
    );
  },
};

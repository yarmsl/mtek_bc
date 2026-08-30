import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import Box from "@/ui-kit/atoms/Box";

import Modal from "./index";
import Button from "../Button";

const meta: Meta<typeof Modal> = {
  title: "molecules/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setOpen] = React.useState(false);

    return (
      <Box>
        <Button onClick={() => setOpen(true)}>Открыть</Button>
        <Modal onBackdropClick={() => setOpen(false)} isOpen={isOpen}>
          Default modal
        </Modal>
      </Box>
    );
  },
};

export const Bottom: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setOpen] = React.useState(false);

    return (
      <Box>
        <Button onClick={() => setOpen(true)}>Открыть</Button>
        <Modal
          onBackdropClick={() => setOpen(false)}
          position="bottom"
          isOpen={isOpen}
        >
          Bottom modal
        </Modal>
      </Box>
    );
  },
};

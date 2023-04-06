import type { Meta, StoryObj } from "@storybook/react";

import Link from "./index";

const meta: Meta<typeof Link> = {
  title: "atoms/Link",
  component: Link,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Common: Story = {
  args: {
    children: "Link",
  },
};

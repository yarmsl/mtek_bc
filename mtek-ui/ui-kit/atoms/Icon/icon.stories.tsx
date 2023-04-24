import type { Meta, StoryObj } from "@storybook/react";

import {
  AwardsIcon,
  BoxIcon,
  CargoIcon,
  ChevronIcon,
  ClockIcon,
  DashboardIcon,
  DefenseIcon,
  DocFlowIcon,
  FlagIcon,
  HeadsetIcon,
  InfoIcon,
  LogoIcon,
  LorryIcon,
  LoyalityIcon,
  MapIcon,
  MouseIcon,
  NotificationsIcon,
  PageIcon,
  PersonalManagerIcon,
  PersonalSupportIcon,
  PersonIcon,
  PersonRoundedIcon,
  PresIcon,
  ShieldIcon,
  SupportIcon,
  WarrantyIcon,
  Box2Icon,
  Lorry2Icon,
  HexIcon,
  CheckIcon,
  ControlsIcon,
  Controls2Icon,
  BagIcon,
  PocketIcon,
  CheckRoundedIcon,
  DownloadIcon,
  Lorry4Icon,
  Lorry3Icon,
  EntranceIcon,
  CrossIcon,
  BurgerIcon,
} from "@/ui-kit/icons";

import { iconOptions } from "./iconOptions";
import Icon from "./index";

const meta: Meta<typeof Icon> = {
  title: "atoms/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "range",
        min: 1,
        max: 220,
        step: 1,
      },
    },
    children: {
      control: "select",
      options: iconOptions,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Logo: Story = {
  args: {
    color: "primary",
    children: <LogoIcon />,
    size: 80,
  },
};

export const Info: Story = {
  args: {
    color: "primary",
    children: <InfoIcon />,
  },
};

export const Mouse: Story = {
  args: {
    color: "primary",
    children: <MouseIcon />,
  },
};

export const Chevron: Story = {
  args: {
    color: "primary",
    children: <ChevronIcon />,
  },
};

export const Check: Story = {
  args: {
    color: "primary",
    children: <CheckIcon />,
  },
};

export const CheckRounded: Story = {
  args: {
    color: "primary",
    children: <CheckRoundedIcon />,
  },
};

export const Download: Story = {
  args: {
    color: "primary",
    children: <DownloadIcon />,
  },
};

export const Entrance: Story = {
  args: {
    color: "primary",
    children: <EntranceIcon />,
  },
};

export const Cross: Story = {
  args: {
    color: "text_common",
    children: <CrossIcon />,
  },
};

export const Burger: Story = {
  args: {
    color: "text_common",
    children: <BurgerIcon />,
  },
};

export const Page: Story = {
  args: {
    color: "primary",
    children: <PageIcon />,
  },
};

export const Dashboard: Story = {
  args: {
    color: "primary",
    children: <DashboardIcon />,
  },
};

export const Pres: Story = {
  args: {
    color: "primary",
    children: <PresIcon />,
  },
};

export const Person: Story = {
  args: {
    color: "primary",
    children: <PersonIcon />,
  },
};

export const PersonRounded: Story = {
  args: {
    color: "primary",
    children: <PersonRoundedIcon />,
  },
};

export const Headset: Story = {
  args: {
    color: "primary",
    children: <HeadsetIcon />,
  },
};

export const DocFlow: Story = {
  args: {
    color: "primary",
    children: <DocFlowIcon />,
    size: 100,
  },
};

export const Support: Story = {
  args: {
    color: "primary",
    children: <SupportIcon />,
    size: 100,
  },
};

export const Controls: Story = {
  args: {
    color: "primary",
    children: <ControlsIcon />,
    size: 100,
  },
};

export const PersonalManager: Story = {
  args: {
    color: "primary",
    children: <PersonalManagerIcon />,
    size: 100,
  },
};

export const Loyality: Story = {
  args: {
    color: "primary",
    children: <LoyalityIcon />,
    size: 100,
  },
};

export const Cargo: Story = {
  args: {
    color: "primary",
    children: <CargoIcon />,
    size: 100,
  },
};

export const Shield: Story = {
  args: {
    color: "primary",
    children: <ShieldIcon />,
    size: 100,
  },
};

export const Bag: Story = {
  args: {
    color: "primary",
    children: <BagIcon />,
    size: 100,
  },
};

export const Pocket: Story = {
  args: {
    color: "primary",
    children: <PocketIcon />,
    size: 100,
  },
};

export const Clock: Story = {
  args: {
    color: "primary",
    children: <ClockIcon />,
    size: 100,
  },
};

export const Awards: Story = {
  args: {
    color: "primary",
    children: <AwardsIcon />,
    size: 100,
  },
};

export const Warranty: Story = {
  args: {
    color: "primary",
    children: <WarrantyIcon />,
    size: 100,
  },
};

export const Controls2: Story = {
  args: {
    color: "primary",
    children: <Controls2Icon />,
    size: 100,
  },
};

export const Map: Story = {
  args: {
    color: "primary",
    children: <MapIcon />,
    size: 100,
  },
};

export const Box: Story = {
  args: {
    color: "primary",
    children: <BoxIcon />,
    size: 100,
  },
};

export const Notifications: Story = {
  args: {
    color: "primary",
    children: <NotificationsIcon />,
    size: 100,
  },
};

export const Flag: Story = {
  args: {
    color: "primary",
    children: <FlagIcon />,
    size: 100,
  },
};

export const PersonalSupport: Story = {
  args: {
    color: "primary",
    children: <PersonalSupportIcon />,
    size: 100,
  },
};

export const Defense: Story = {
  args: {
    color: "primary",
    children: <DefenseIcon />,
    size: 100,
  },
};

export const Lorry: Story = {
  args: {
    color: "primary",
    children: <LorryIcon />,
    size: 100,
  },
};

export const Lorry2: Story = {
  args: {
    color: "primary",
    children: <Lorry2Icon />,
    size: 100,
  },
};

export const Lorry3: Story = {
  args: {
    color: "primary",
    children: <Lorry3Icon />,
    size: 100,
  },
};

export const Lorry4: Story = {
  args: {
    color: "primary",
    children: <Lorry4Icon />,
    size: 100,
  },
};

export const Box2: Story = {
  args: {
    color: "primary",
    children: <Box2Icon />,
    size: 100,
  },
};

export const Hex: Story = {
  args: {
    color: "primary",
    children: <HexIcon />,
    size: 100,
  },
};

import { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../ui/**/*.mdx", "../ui/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: [{ from: "../app/fonts", to: "/assets/fonts" }],
};
export default config;

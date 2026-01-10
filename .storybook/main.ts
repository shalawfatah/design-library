import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../components/**/*.stories.@(tsx|mdx)"],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  viteFinal: (config) => {
    return config;
  },
};

export default config;

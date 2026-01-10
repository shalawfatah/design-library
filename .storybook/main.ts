import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    "../components/**/*.stories.@(ts|tsx)", // <-- THIS should match your Button.stories.tsx
  ],
  addons: [],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
};

export default config;

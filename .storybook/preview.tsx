import "../styles/global.css";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  decorators: [
    (Story, context) => (
      <div className={context.globals?.theme === "dark" ? "dark" : ""}>
        <Story />
      </div>
    ),
  ],
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: ["light", "dark"],
      },
    },
  },
};

export default preview;

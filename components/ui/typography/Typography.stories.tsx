import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "UI/Typography",
  component: Typography,
  args: {
    children: "The quick brown fox jumps over the lazy dog",
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const H1: Story = {
  args: { variant: "h1" },
};

export const H2: Story = {
  args: { variant: "h2" },
};

export const H3: Story = {
  args: { variant: "h3" },
};

export const Body: Story = {
  args: { variant: "body" },
};

export const SmallBody: Story = {
  args: { variant: "body-sm" },
};

export const Caption: Story = {
  args: { variant: "caption" },
};

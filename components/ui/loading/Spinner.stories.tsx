import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "UI/Loading/Spinner",
  component: Spinner,
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  render: () => <Spinner />,
};

export const Large: Story = {
  render: () => <Spinner size="lg" />,
};

export const InlineText: Story = {
  render: () => (
    <p className="flex items-center gap-2">
      Loading <Spinner size="sm" />
      ...
    </p>
  ),
};

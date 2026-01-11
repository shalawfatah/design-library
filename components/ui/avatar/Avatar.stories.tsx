import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "UI/Avatar",
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: () => <Avatar name="John Doe" />,
};

export const WithImage: Story = {
  render: () => (
    <Avatar name="Jane Smith" src="https://i.pravatar.cc/150?img=32" />
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4">
      <Avatar name="Anna Lee" size="sm" />
      <Avatar name="Bob Kim" size="md" />
      <Avatar name="Chris Park" size="lg" />
    </div>
  ),
};

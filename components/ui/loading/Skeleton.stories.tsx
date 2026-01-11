import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "UI/Loading/Skeleton",
  component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Text: Story = {
  render: () => <Skeleton width="200px" height="1rem" />,
};

export const Block: Story = {
  render: () => <Skeleton width="100%" height="4rem" />,
};

export const MultipleLines: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Skeleton width="80%" height="1rem" />
      <Skeleton width="90%" height="1rem" />
      <Skeleton width="70%" height="1rem" />
    </div>
  ),
};

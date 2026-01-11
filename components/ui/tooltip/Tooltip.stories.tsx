import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "UI/Tooltip",
  component: Tooltip,
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <div className="flex justify-center items-center h-32">
      <Tooltip content="I am a tooltip" side="top">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded">
          Hover me
        </button>
      </Tooltip>
    </div>
  ),
};

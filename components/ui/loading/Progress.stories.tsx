import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./Progress";
import { useState } from "react";

const meta: Meta<typeof Progress> = {
  title: "UI/Loading/Progress",
  component: Progress,
};

export default meta;
type Story = StoryObj<typeof Progress>;

// ✅ Interactive Progress story
export const Default: Story = {
  render: () => {
    const ProgressWrapper = () => {
      const [value, setValue] = useState(30);

      return (
        <div className="flex flex-col gap-4">
          <Progress value={value} />
          <input
            type="range"
            min={0}
            max={100}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="w-full"
          />
        </div>
      );
    };
    return <ProgressWrapper />;
  },
};

export const Large: Story = {
  render: () => <Progress value={70} size="lg" />,
};

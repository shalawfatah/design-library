import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";

const meta: Meta<typeof Slider> = {
  title: "UI/Forms/Slider",
  component: Slider,
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: () => <Slider label="Volume" min={0} max={100} step={1} />,
};

export const CustomRange: Story = {
  render: () => <Slider label="Brightness" min={0} max={10} step={0.1} />,
};

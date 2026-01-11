import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox"; // <- must match the named export

const meta: Meta<typeof Checkbox> = {
  title: "UI/Forms/Checkbox",
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => <Checkbox label="Accept terms and conditions" />,
};

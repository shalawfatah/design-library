import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "UI/Forms/Radio",
  component: Radio,
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  render: () => (
    <div className="space-y-2">
      <Radio name="example" label="Option 1" />
      <Radio name="example" label="Option 2" />
      <Radio name="example" label="Option 3" />
    </div>
  ),
};

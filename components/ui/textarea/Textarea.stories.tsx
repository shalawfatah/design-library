import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "UI/Textarea",
  component: Textarea,
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: "Message",
    placeholder: "Type your message here...",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Bio",
    helperText: "Tell us a bit about yourself",
  },
};

export const ErrorState: Story = {
  args: {
    label: "Feedback",
    error: "Feedback is required",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    disabled: true,
  },
};

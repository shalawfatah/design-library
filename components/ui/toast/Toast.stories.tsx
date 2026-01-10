import type { Meta, StoryObj } from "@storybook/react";
import { Toast, ToastViewport } from "./Toast";
import { Button } from "../button/Button";

const meta: Meta<typeof Toast> = {
  title: "UI/Toast",
  component: Toast,
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: () => (
    <ToastViewport>
      <Toast title="Default notification" description="This is a toast" />
    </ToastViewport>
  ),
};

export const Success: Story = {
  render: () => (
    <ToastViewport>
      <Toast
        variant="success"
        title="Success!"
        description="Your action was successful."
      />
    </ToastViewport>
  ),
};

export const Destructive: Story = {
  render: () => (
    <ToastViewport>
      <Toast
        variant="destructive"
        title="Error!"
        description="Something went wrong."
        action={<Button size="sm">Retry</Button>}
      />
    </ToastViewport>
  ),
};

export const Warning: Story = {
  render: () => (
    <ToastViewport>
      <Toast
        variant="warning"
        title="Warning!"
        description="Be careful with this action."
      />
    </ToastViewport>
  ),
};

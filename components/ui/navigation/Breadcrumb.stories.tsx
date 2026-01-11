import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "UI/Navigation/Breadcrumb",
  component: Breadcrumb,
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  render: () => (
    <Breadcrumb
      items={[
        { label: "Home", href: "/" },
        { label: "Library", href: "/library" },
        { label: "Data" },
      ]}
    />
  ),
};

export const SingleItem: Story = {
  render: () => <Breadcrumb items={[{ label: "Home" }]} />,
};

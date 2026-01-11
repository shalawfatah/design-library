import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from "./Menu";

const meta: Meta<typeof Menu> = {
  title: "UI/Navigation/Menu",
  component: Menu,
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  render: () => (
    <Menu
      buttonLabel="Options"
      items={[
        { label: "Profile", onClick: () => alert("Profile clicked") },
        { label: "Settings", onClick: () => alert("Settings clicked") },
        { label: "Logout", onClick: () => alert("Logout clicked") },
      ]}
    />
  ),
};

export const WithLinks: Story = {
  render: () => (
    <Menu
      buttonLabel="Navigate"
      items={[
        { label: "Home", href: "/" },
        { label: "Library", href: "/library" },
        { label: "Data", href: "/data" },
      ]}
    />
  ),
};

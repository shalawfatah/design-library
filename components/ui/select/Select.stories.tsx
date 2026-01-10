import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "UI/Select",
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: "Country",
    children: (
      <>
        <option value="">Select a country</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="de">Germany</option>
      </>
    ),
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Language",
    helperText: "Used for localization",
    children: (
      <>
        <option value="">Select language</option>
        <option value="en">English</option>
        <option value="fr">French</option>
      </>
    ),
  },
};

export const ErrorState: Story = {
  args: {
    label: "Role",
    error: "Role is required",
    children: (
      <>
        <option value="">Select role</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    disabled: true,
    children: (
      <>
        <option value="">Disabled option</option>
      </>
    ),
  },
};

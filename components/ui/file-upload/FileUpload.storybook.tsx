import type { Meta, StoryObj } from "@storybook/react";
import { FileUpload } from "./FileUpload"; // correct relative path!

const meta: Meta<typeof FileUpload> = {
  title: "UI/FileUpload",
  component: FileUpload,
};

export default meta;

type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  render: () => <FileUpload label="Upload your files" multiple preview />,
};

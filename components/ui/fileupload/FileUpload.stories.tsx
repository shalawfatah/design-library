import type { Meta, StoryObj } from "@storybook/react";
import { FileUpload } from "./FileUpload";

const meta: Meta<typeof FileUpload> = {
  title: "UI/FileUpload",
  component: FileUpload,
  argTypes: {
    onFilesChange: { action: "files changed" },
  },
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  args: {
    label: "Upload Files",
  },
};

export const Multiple: Story = {
  args: {
    label: "Upload Multiple Files",
    multiple: true,
  },
};

export const ImagesOnly: Story = {
  args: {
    label: "Upload Images",
    accept: "image/*",
    multiple: true,
  },
};

export const WithoutPreview: Story = {
  args: {
    label: "Upload Documents",
    preview: false,
    multiple: true,
  },
};

export const PDFOnly: Story = {
  args: {
    label: "Upload PDF",
    accept: "application/pdf",
  },
};

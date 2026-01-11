import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./Pagination";
import { useState } from "react";

const meta: Meta<typeof Pagination> = {
  title: "UI/Navigation/Pagination",
  component: Pagination,
};

export default meta;
type Story = StoryObj<typeof Pagination>;

// ✅ Use a wrapper component so hooks work
export const Default: Story = {
  render: () => {
    const PaginationWrapper = () => {
      const [page, setPage] = useState(1);
      return (
        <Pagination currentPage={page} totalPages={5} onPageChange={setPage} />
      );
    };
    return <PaginationWrapper />;
  },
};

export const ManyPages: Story = {
  render: () => {
    const PaginationWrapper = () => {
      const [page, setPage] = useState(1);
      return (
        <Pagination currentPage={page} totalPages={12} onPageChange={setPage} />
      );
    };
    return <PaginationWrapper />;
  },
};

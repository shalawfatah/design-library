import type { Meta, StoryObj } from "@storybook/react";
import { Datepicker } from "./Datepicker";
import { useState } from "react";

const meta: Meta<typeof Datepicker> = {
  title: "UI/Forms/Datepicker",
  component: Datepicker,
};

export default meta;
type Story = StoryObj<typeof Datepicker>;

export const Default: Story = {
  render: () => {
    const Wrapper = () => {
      const [date, setDate] = useState<Date | undefined>();
      return <Datepicker selected={date} onSelect={setDate} />;
    };
    return <Wrapper />;
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";
import { AccordionItem } from "./AccordionItem";

const meta: Meta<typeof Accordion> = {
  title: "UI/Accordion",
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion>
      <AccordionItem title="Section 1">
        <p>This is the content of section 1.</p>
      </AccordionItem>
      <AccordionItem title="Section 2">
        <p>This is the content of section 2.</p>
      </AccordionItem>
      <AccordionItem title="Section 3">
        <p>This is the content of section 3.</p>
      </AccordionItem>
    </Accordion>
  ),
};

export const MultipleOpen: Story = {
  render: () => (
    <Accordion multiple>
      <AccordionItem title="Section 1">
        <p>Multiple open allowed.</p>
      </AccordionItem>
      <AccordionItem title="Section 2">
        <p>Another section.</p>
      </AccordionItem>
    </Accordion>
  ),
};

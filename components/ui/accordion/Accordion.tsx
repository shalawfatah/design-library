import * as React from "react";
import { AccordionItemProps } from "./AccordionItem";

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  multiple?: boolean;
  children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({
  multiple = false,
  children,
  ...props
}) => {
  const [openIndexes, setOpenIndexes] = React.useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (multiple) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index],
      );
    } else {
      setOpenIndexes((prev) => (prev[0] === index ? [] : [index]));
    }
  };

  const items = React.Children.map(children, (child, index) => {
    if (!React.isValidElement<AccordionItemProps>(child)) return null;

    return React.cloneElement<AccordionItemProps>(child, {
      isOpen: openIndexes.includes(index),
      onToggle: () => toggleItem(index),
    });
  });

  return <div {...props}>{items}</div>;
};

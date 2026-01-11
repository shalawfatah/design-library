import * as React from "react";
import { cn } from "@/lib/cn";

export interface AccordionItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  children: React.ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  isOpen = false,
  onToggle,
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn("border-b border-gray-200", className)} {...props}>
      <button
        className="w-full flex justify-between items-center py-3 text-left font-medium focus:outline-none"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {title}
        <span
          className={cn(
            "transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        >
          ▼
        </span>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-[max-height] duration-300",
          isOpen ? "max-h-[2000px] py-2" : "max-h-0",
        )}
      >
        {children}
      </div>
    </div>
  );
};

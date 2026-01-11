import * as React from "react";
import { cn } from "@/lib/cn";

export interface TooltipProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "content"> {
  content: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  className?: string;
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ content, children, side = "top", className, ...props }, ref) => {
    return (
      <div
        className={cn("relative inline-block group", className)}
        ref={ref}
        {...props}
      >
        {/* Trigger */}
        <div className="cursor-pointer">{children}</div>

        {/* Tooltip */}
        <div
          className={cn(
            "absolute z-50 px-2 py-1 text-sm text-white bg-gray-900 rounded-md opacity-0 invisible transition-all duration-200 pointer-events-none",
            {
              "bottom-full left-1/2 -translate-x-1/2 mb-2": side === "top",
              "top-full left-1/2 -translate-x-1/2 mt-2": side === "bottom",
              "right-full top-1/2 -translate-y-1/2 mr-2": side === "left",
              "left-full top-1/2 -translate-y-1/2 ml-2": side === "right",
            },
            "group-hover:opacity-100 group-hover:visible",
          )}
        >
          {content}
        </div>
      </div>
    );
  },
);

Tooltip.displayName = "Tooltip";

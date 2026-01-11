import * as React from "react";
import { cn } from "@/lib/cn";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <label className="inline-flex items-center space-x-2 cursor-pointer">
        <input
          type="checkbox"
          className={cn(
            "w-4 h-4 border border-muted rounded-sm text-primary focus:ring-2 focus:ring-primary/50",
            className,
          )}
          ref={ref}
          {...props}
        />
        <span>{label}</span>
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";

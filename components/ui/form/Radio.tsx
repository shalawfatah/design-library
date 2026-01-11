import * as React from "react";
import { cn } from "@/lib/cn";

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ label, className, name, ...props }, ref) => {
    return (
      <label className="inline-flex items-center space-x-2 cursor-pointer">
        <input
          type="radio"
          name={name}
          className={cn(
            "w-4 h-4 border border-muted text-primary focus:ring-2 focus:ring-primary/50",
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

Radio.displayName = "Radio";

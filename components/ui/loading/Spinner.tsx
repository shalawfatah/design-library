import * as React from "react";
import { cn } from "@/lib/cn";

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "w-4 h-4 border-2",
  md: "w-6 h-6 border-4",
  lg: "w-10 h-10 border-4",
};

export const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "inline-block border-t-transparent border-solid rounded-full animate-spin border-indigo-600",
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  );
};

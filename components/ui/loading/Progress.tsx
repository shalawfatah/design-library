import * as React from "react";
import { cn } from "@/lib/cn";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number; // 0-100
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "h-2",
  md: "h-3",
  lg: "h-4",
};

export const Progress: React.FC<ProgressProps> = ({
  value,
  size = "md",
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "w-full bg-gray-200 rounded overflow-hidden",
        sizeClasses[size],
        className,
      )}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      {...props}
    >
      <div
        className="bg-indigo-600 h-full transition-all duration-300"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

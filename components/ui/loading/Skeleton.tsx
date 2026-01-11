import * as React from "react";
import { cn } from "@/lib/cn";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  className?: string;
  rounded?: boolean;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = "1rem",
  rounded = true,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "bg-gray-200 animate-pulse",
        rounded && "rounded",
        className,
      )}
      style={{ width, height }}
      {...props}
    />
  );
};

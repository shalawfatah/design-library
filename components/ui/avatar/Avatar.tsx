import * as React from "react";
import { cn } from "@/lib/cn";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string; // for initials fallback
  src?: string; // image URL
  size?: "sm" | "md" | "lg"; // size variants
  className?: string;
}

const sizeClasses = {
  sm: "w-6 h-6 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-16 h-16 text-base",
};

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ name, src, size = "md", className, ...props }, ref) => {
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full bg-gray-200 text-gray-800 overflow-hidden",
          sizeClasses[size],
          className,
        )}
        {...props}
      >
        {src ? (
          <img src={src} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span>{initials}</span>
        )}
      </div>
    );
  },
);

Avatar.displayName = "Avatar";

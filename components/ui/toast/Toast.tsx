import * as React from "react";
import { cn } from "@/lib/cn";

export type ToastVariant = "default" | "success" | "destructive" | "warning";

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ToastVariant;
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
}

const variantStyles: Record<ToastVariant, string> = {
  default: "bg-background text-foreground border",
  success: "bg-green-500 text-white",
  destructive: "bg-red-500 text-white",
  warning: "bg-yellow-500 text-black",
};

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  (
    { variant = "default", title, description, action, className, ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex w-full max-w-sm flex-col rounded-md border shadow-lg p-4 space-y-1",
          variantStyles[variant],
          className,
        )}
        role="status"
        {...props}
      >
        <div className="flex justify-between items-start">
          <div className="flex flex-col space-y-1">
            <p className="font-semibold">{title}</p>
            {description && <p className="text-sm opacity-90">{description}</p>}
          </div>
          {action && <div>{action}</div>}
        </div>
      </div>
    );
  },
);

Toast.displayName = "Toast";

export const ToastViewport = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("fixed bottom-4 right-4 flex flex-col gap-2", className)}
      {...props}
    />
  );
});

ToastViewport.displayName = "ToastViewport";

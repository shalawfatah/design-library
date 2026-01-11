import * as React from "react";
import { cn } from "@/lib/cn";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  className,
  ...props
}) => {
  return (
    <nav
      className={cn("flex text-gray-600 text-sm", className)}
      {...props}
      aria-label="breadcrumb"
    >
      {items.map((item, idx) => (
        <span key={idx} className="flex items-center">
          {item.href ? (
            <a href={item.href} className="hover:underline">
              {item.label}
            </a>
          ) : (
            <span>{item.label}</span>
          )}
          {idx < items.length - 1 && <span className="mx-2">/</span>}
        </span>
      ))}
    </nav>
  );
};

import React from "react";
import { cn } from "@/lib/cn";

type Variant = "h1" | "h2" | "h3" | "h4" | "body" | "body-sm" | "caption";

const variantStyles: Record<Variant, string> = {
  h1: "text-4xl font-bold tracking-tight",
  h2: "text-3xl font-semibold tracking-tight",
  h3: "text-2xl font-semibold",
  h4: "text-xl font-medium",
  body: "text-base",
  "body-sm": "text-sm",
  caption: "text-xs text-muted-foreground",
};

const variantElement: Record<Variant, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body: "p",
  "body-sm": "p",
  caption: "span",
};

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: Variant;
  as?: React.ElementType;
}

export function Typography({
  variant = "body",
  as,
  className,
  ...props
}: TypographyProps) {
  const Component = as || variantElement[variant];

  return (
    <Component className={cn(variantStyles[variant], className)} {...props} />
  );
}

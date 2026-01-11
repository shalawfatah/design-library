import * as React from "react";
import { cn } from "@/lib/cn";

interface TabsContextValue {
  value: string;
  setValue: (val: string) => void;
}

const TabsContext = React.createContext<TabsContextValue | null>(null);

function useTabs() {
  const context = React.useContext(TabsContext);
  if (!context) throw new Error("Tabs components must be used within <Tabs>");
  return context;
}

export interface TabsProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}

export function Tabs({
  value: controlledValue,
  defaultValue,
  onValueChange,
  children,
}: TabsProps) {
  const [uncontrolledValue, setUncontrolledValue] = React.useState(
    defaultValue ?? "",
  );
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolledValue;

  const setValue = (val: string) => {
    if (!isControlled) setUncontrolledValue(val);
    onValueChange?.(val);
  };

  return (
    <TabsContext.Provider value={{ value, setValue }}>
      {children}
    </TabsContext.Provider>
  );
}

// ---------------------- TabsList ----------------------
export const TabsList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="tablist"
      className={cn("flex border-b border-muted", className)}
      {...props}
    />
  );
});

// ---------------------- TabsTrigger ----------------------
interface TabsTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

export const TabsTrigger = React.forwardRef<
  HTMLButtonElement,
  TabsTriggerProps
>(({ value, className, ...props }, ref) => {
  const { value: current, setValue } = useTabs();
  const isActive = current === value;

  return (
    <button
      ref={ref}
      role="tab"
      aria-selected={isActive}
      aria-controls={`tab-${value}`}
      id={`tab-trigger-${value}`}
      tabIndex={isActive ? 0 : -1}
      className={cn(
        "px-4 py-2 text-sm font-medium transition-colors",
        isActive
          ? "border-b-2 border-primary text-primary"
          : "text-muted-foreground hover:text-foreground",
        className,
      )}
      onClick={() => setValue(value)}
      {...props}
    />
  );
});

TabsTrigger.displayName = "TabsTrigger";

// ---------------------- TabsContent ----------------------
interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ value, className, children, ...props }, ref) => {
    const { value: current } = useTabs();
    const isActive = current === value;

    return (
      <div
        ref={ref}
        role="tabpanel"
        id={`tab-${value}`}
        aria-labelledby={`tab-trigger-${value}`}
        hidden={!isActive}
        className={cn("py-4", className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

TabsContent.displayName = "TabsContent";

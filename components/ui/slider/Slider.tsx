import * as React from "react";
import { cn } from "@/lib/cn";

export interface SliderProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  min?: number;
  max?: number;
  step?: number;
}

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ label, min = 0, max = 100, step = 1, className, ...props }, ref) => {
    const [value, setValue] = React.useState<number>(
      props.value ? Number(props.value) : min,
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(Number(e.target.value));
      if (props.onChange) props.onChange(e);
    };

    return (
      <div className={cn("flex flex-col space-y-2", className)}>
        <label className="font-medium">{label}</label>
        <div className="flex items-center space-x-4">
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={handleChange}
            ref={ref}
            className="w-full h-2 rounded-lg accent-primary cursor-pointer"
            {...props}
          />
          <span className="w-12 text-right text-sm">{value}</span>
        </div>
      </div>
    );
  },
);

Slider.displayName = "Slider";

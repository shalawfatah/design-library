import * as React from "react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/lib/cn";

export interface DatepickerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
  className?: string;
  placeholder?: string;
}

export const Datepicker: React.FC<DatepickerProps> = ({
  selected,
  onSelect,
  className,
  placeholder = "Select a date",
  ...props
}) => {
  const [open, setOpen] = React.useState(false);
  const [internalDate, setInternalDate] = React.useState<Date | undefined>(
    selected,
  );

  const handleSelect = (date: Date | undefined) => {
    setInternalDate(date);
    onSelect?.(date);
    setOpen(false);
  };

  return (
    <div className={cn("relative inline-block", className)} {...props}>
      <input
        type="text"
        readOnly
        value={internalDate ? internalDate.toLocaleDateString() : ""}
        placeholder={placeholder}
        onClick={() => setOpen((prev) => !prev)}
        className="px-3 py-2 border rounded-md w-40 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {open && (
        <div className="absolute z-50 mt-2 bg-white border rounded shadow-lg">
          <DayPicker
            mode="single"
            selected={internalDate}
            onSelect={handleSelect}
          />
        </div>
      )}
    </div>
  );
};

import * as React from "react";
import { cn } from "@/lib/cn";

export interface MenuItem {
  label: string;
  onClick?: () => void;
  href?: string;
}

export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  items: MenuItem[];
  buttonLabel: string;
}

export const Menu: React.FC<MenuProps> = ({
  items,
  buttonLabel,
  className,
  ...props
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div
      className={cn("relative inline-block text-left", className)}
      {...props}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        {buttonLabel}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-50">
          {items.map((item, idx) =>
            item.href ? (
              <a
                key={idx}
                href={item.href}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                {item.label}
              </a>
            ) : (
              <button
                key={idx}
                onClick={item.onClick}
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                {item.label}
              </button>
            ),
          )}
        </div>
      )}
    </div>
  );
};

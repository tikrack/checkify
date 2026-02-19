import { forwardRef } from "react";
import clsx from "clsx";

const Button = forwardRef(
  (
    {
      children,
      className,
      type = "button",
      variant = "primary",
      size = "md",
      disabled = false,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-100 cursor-pointer active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary: "bg-primary text-white hover:opacity-90",
      secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
      danger: "bg-red-600 text-white hover:bg-red-700",
    };

    const sizes = {
      sm: "text-xs px-3 py-1.5",
      md: "text-sm px-5 py-3",
      lg: "text-base px-6 py-3.5",
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={clsx(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;

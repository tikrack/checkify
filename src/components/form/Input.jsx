import { useFormContext } from "react-hook-form";
import clsx from "clsx";
import { useState } from "react";

const Input = ({
  name = "",
  label,
  type = "text",
  placeholder,
  className,
  dir,
  autofocus = false,
  onChange,
  required = false,
  value: propValue,
  useForm = true,
  size = "md",
  ...props
}) => {
  let register = () => ({});
  let errors = {};

  try {
    if (useForm) {
      const ctx = useFormContext();
      if (ctx) {
        register = ctx.register;
        errors = ctx.formState?.errors || {};
      }
    }
  } catch { /* empty */ }

  const error = errors?.[name];
  const [localValue, setLocalValue] = useState(propValue || "");

  const sizes = {
    md: "px-2.5 h-12 rounded-xl border-2 border-gray-200 transition-all duration-100 text-sm",
    sm: "px-2.5 h-11 rounded-[12px] border-2 border-gray-200 transition-all duration-100 text-[12px]",
  };

  const baseClass = clsx(
    `${sizes[size]}`,
    error
      ? "focus:outline-none focus-visible:border-red-500"
      : "focus-visible:outline-none focus-visible:border-primary",
    className,
  );

  const handleChange = (e) => {
    if (!useForm) setLocalValue(e.target.value);

    onChange?.(e);
  };

  const commonProps = {
    id: name,
    name,
    dir,
    placeholder,
    autoFocus: autofocus,
    onChange: handleChange,
    className: baseClass,
    ...props,
    ...(useForm ? register(name) : {}),
    value: !useForm && type !== "file" ? localValue : undefined,
    defaultValue: useForm ? undefined : propValue,
  };

  return (
    <div className={clsx("flex flex-col", className?.wrapper)}>
      {label && (
        <label htmlFor={name} className="mb-1 text-[15px] text-gray-600">
          {label}
          {required && <span className="text-red-500 font-bold"> *</span>}
        </label>
      )}
      <input type={type} {...commonProps} />
      {error && (
        <span className="mt-1 text-sm text-red-500">{error.message}</span>
      )}
    </div>
  );
};

export default Input;

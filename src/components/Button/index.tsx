import React from "react";

const shapes = { round: "rounded-lg" } as const;
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-blue_gray-900",
    gray_700: "bg-gray-700 shadow-bs text-white-A700",
    blue_gray_900: "bg-blue_gray-900 text-white-A700",
  },
  outline: {
    blue_gray_300:
      "outline outline-[1px] outline-blue_gray-300 text-blue_gray-900",
  },
} as const;
const sizes = { xs: "p-2", sm: "p-[11px]" } as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };

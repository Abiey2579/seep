import React from "react";

const sizeClasses = {
  txtCatamaranRomanSemiBold16Bluegray300: "font-catamaran font-semibold",
  txtCatamaranRomanSemiBold16Bluegray900: "font-catamaran font-semibold",
  txtCatamaranRomanRegular16: "font-catamaran font-normal",
  txtQuicksandBold32: "font-bold font-quicksand",
  txtCatamaranRomanBold40: "font-bold font-catamaran",
  txtCatamaranRomanRegular14: "font-catamaran font-normal",
  txtCatamaranRomanRegular20: "font-catamaran font-normal",
  txtCatamaranRomanSemiBold16: "font-catamaran font-semibold",
  txtCatamaranRomanBold20: "font-bold font-catamaran",
  txtCatamaranRomanMedium16Bluegray5090: "font-catamaran font-medium",
  txtCatamaranRomanBold24: "font-bold font-catamaran",
  txtCatamaranRomanExtraBold20: "font-catamaran font-extrabold",
  txtCatamaranRomanRegular16Bluegray900: "font-catamaran font-normal",
  txtCatamaranRomanMedium16: "font-catamaran font-medium",
  txtCatamaranRomanExtraBold48: "font-catamaran font-extrabold",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

import { colorClasses, fontWeightClasses, sizeClasses } from "../constants";

type TypographyProps = {
  className?: string;
  variant?: "xs" | "sm" | "base" | "lg" | "xl";
  color?: "primary" | "secondary" | "tertiary" | "white";
  fontWeight?: "normal" | "medium" | "semibold" | "bold";
  children: React.ReactNode;
  as?: React.ElementType;
};

export default function Typography({
  children,
  as = "div",
  className = "",
  variant = "base",
  color = "primary",
  fontWeight = "normal",
  ...props
}: TypographyProps) {
  const colorClass = colorClasses[color];
  const variantClass = sizeClasses[variant];
  const fontWeightClass = fontWeightClasses[fontWeight];

  const Comp = as || "div";

  return (
    <Comp
      className={`${variantClass} ${colorClass} ${fontWeightClass} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}

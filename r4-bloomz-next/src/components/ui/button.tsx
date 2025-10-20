import * as React from "react";
import clsx from "clsx";

type Variant = "default"|"outline"|"secondary"|"link"|"ghost";
type Size = "sm"|"md"|"icon";

export function Button({
  variant="default",
  size="md",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size }) {
  const base = "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition";
  const variants: Record<Variant, string> = {
    default: "bg-black text-white hover:opacity-90",
    outline: "border border-gray-300 hover:bg-gray-50",
    secondary: "bg-gray-100 hover:bg-gray-200",
    link: "text-blue-600 underline-offset-2 hover:underline bg-transparent px-0",
    ghost: "bg-transparent hover:bg-gray-100",
  };
  const sizes: Record<Size, string> = {
    sm: "h-9 px-3",
    md: "h-10 px-4",
    icon: "h-10 w-10 p-0",
  };
  return <button className={clsx(base, variants[variant], sizes[size], className)} {...props} />;
}

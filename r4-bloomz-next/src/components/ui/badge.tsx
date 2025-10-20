import * as React from "react";
import clsx from "clsx";
export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={clsx("inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-xs", className)} {...props}/>;
}

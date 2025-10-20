import * as React from "react";
import clsx from "clsx";
export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={clsx("w-full rounded-md border border-gray-300 px-3 py-2 text-sm", props.className)} {...props}/>;
}

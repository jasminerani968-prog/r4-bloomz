import * as React from "react";
type Props = { value?: string; onValueChange?: (v:string)=>void; children?: React.ReactNode; className?: string };
export function Select(props: Props) { return <div className={props.className}>{props.children}</div> }
export function SelectTrigger({ children, className }: { children?: React.ReactNode; className?: string }) { return <div className={className}>{children}</div> }
export function SelectValue({ placeholder }: { placeholder?: string }) { return <span>{placeholder}</span> }
export function SelectContent({ children }: { children?: React.ReactNode }) { return <div>{children}</div> }
export function SelectItem({ value, children, onClick }: { value: string; children?: React.ReactNode; onClick?: ()=>void }) { return <div onClick={onClick} data-value={value} className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">{children}</div> }

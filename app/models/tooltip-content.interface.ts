import { ReactNode } from "react";

export interface ToolTipsProps {
    tooltipContent: string;
    tooltipPosition?: "default" | "top" | "bottom" | "right" | "left";
    children: ReactNode
}
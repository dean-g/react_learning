import { useId } from "react";
import { ToolTipsProps } from "../../models/tooltip-content.interface";

const positionClasses: Record<NonNullable<ToolTipsProps["tooltipPosition"]>, string> = {
    default: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

export default function ButtonTooltip({
    tooltipContent,
    tooltipPosition = "default",
    children
}: ToolTipsProps) {

    const toolTipId = useId();

    return (
        <span className="relative inline-block group">
            
            {children}

            <div id={toolTipId} role="tooltip"
                className={`absolute z-10 invisible inline-block whitespace-nowrap px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-md shadow-sm opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 ${positionClasses[tooltipPosition]}`}>
                {tooltipContent}
            </div>
        </span>
    )
}
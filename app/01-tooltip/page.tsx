import ButtonTooltip from "../components/tooltips/tooltip-button";

export default function ToolTips() {


    return (
        <>
          <h1>Tooltip Example</h1>

            <div className="flex gap-2">
                <ButtonTooltip tooltipContent="Default">
                    <button
                        type="button"
                        className="text-white bg-blue-600 box-border border border-transparent hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 shadow-sm font-medium leading-5 rounded-md text-sm px-4 py-2.5 focus:outline-none">
                        Default ✏️
                    </button>
                </ButtonTooltip>
                <ButtonTooltip tooltipContent="Save changes - Top" tooltipPosition="top">
                    <button
                        type="button"
                        className="text-white bg-blue-600 box-border border border-transparent hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 shadow-sm font-medium leading-5 rounded-md text-sm px-4 py-2.5 focus:outline-none">
                        Top - 💾
                    </button>
                </ButtonTooltip>
                <ButtonTooltip tooltipContent="Delete item" tooltipPosition="right">
                    <button
                        type="button"
                        className="text-white bg-blue-600 box-border border border-transparent hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 shadow-sm font-medium leading-5 rounded-md text-sm px-4 py-2.5 focus:outline-none">
                        Right 🗑️
                    </button>
                </ButtonTooltip>
                <ButtonTooltip tooltipContent="Edit item" tooltipPosition="bottom">
                    <button
                        type="button"
                        className="text-white bg-blue-600 box-border border border-transparent hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 shadow-sm font-medium leading-5 rounded-md text-sm px-4 py-2.5 focus:outline-none">
                        Bottom ✏️
                    </button>
                </ButtonTooltip>
                <ButtonTooltip tooltipContent="Edit item" tooltipPosition="left">
                    <button
                        type="button"
                        className="text-white bg-blue-600 box-border border border-transparent hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 shadow-sm font-medium leading-5 rounded-md text-sm px-4 py-2.5 focus:outline-none">
                        Left ✏️
                    </button>
                </ButtonTooltip>
            </div>
          

        </>
    )
}
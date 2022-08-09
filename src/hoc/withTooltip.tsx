import React, { useEffect, useState } from "react";
import Tooltip from "../components/Tooltip";

interface WithTooltipProps {
  tooltipText: string;
  activateEvent?: "click" | "hover";
  className?: string
}

export const withTooltip =
  <P extends object>(
    Component: React.ComponentType<P>
  ): React.FC<P & WithTooltipProps> =>
  ({ tooltipText, activateEvent = "hover", className, ...props }: WithTooltipProps) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      if (activateEvent === "click") {
        const timeout = setTimeout(() => {
          setVisible(false);
        }, 5000);

        return () => {
            clearTimeout(timeout);
        };
      }
    }, [visible]);

    return (
      <div
        className={`relative ${
          activateEvent === "click" ? "cursor-pointer" : ""
        }`}
        onMouseEnter={() => activateEvent === "hover" && setVisible(true)}
        onMouseLeave={() => activateEvent === "hover" && setVisible(false)}
        onClick={() => activateEvent === "click" && setVisible(!visible)}
      >
        <Tooltip visible={visible} className={className}>
          <p className="py-1 px-3 text-black text-base select-none bg-gray-300 lg:text-sm lg:px-2">
            {tooltipText}
          </p>
        </Tooltip>
        <Component {...(props as P)} />
      </div>
    );
  };

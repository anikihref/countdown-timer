import React from "react";
import { Transition } from "react-transition-group";

interface TooltipProps {
  children: React.ReactNode;
  visible: boolean;
  className?: string
}

const setTransitionStyles = (state: string) => {
  switch (state) {
    case "entered" || "entering": {
      return "opacity-100";
    }

    case "exiting": {
      return "opacity-0";
    }
    case "exited": {
      return "-z-10 opacity-0";
    }

    default: {
      return "";
    }
  }
};

const Tooltip: React.FC<TooltipProps> = ({ children, visible, className }) => {
  return (
    <Transition in={visible} timeout={300}>
      {(state) => (
        <div
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
          className={
            `${setTransitionStyles(state)} 
            duration-300 -translate-x-1/2 translate-y-[100%]  absolute left-[50%] -bottom-[10px] 
            cursor-default w-[400px] max-w-[max-content] break-all z-[1000]
            before:content-[''] before:absolute before:left-[50%] before:top-[2px] before:-translate-y-[100%] before:-translate-x-1/2 before:w-0 before:h-0 before:border-x-[7px] before:border-b-[7px] before:border-x-transparent before:border-b-gray-300
            lg:w-[250px] 
            ${className ? className : ''}
            `}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};

export default Tooltip;

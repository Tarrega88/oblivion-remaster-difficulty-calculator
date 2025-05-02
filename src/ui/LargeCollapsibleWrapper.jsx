import { useState } from "react";
import SectionHeader from "./SectionHeader";

function LargeCollapsibleWrapper({ text, children, lightHover = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const arrow = isOpen ? "▼" : "▲";

  const bgColor = lightHover ? "bg-ironshade-600" : "bg-ironshade-700";
  const hoverColor = lightHover
    ? "hover:bg-ironshade-500"
    : "hover:bg-ironshade-600";

  const contentStyles = isOpen
    ? "h-full sm:h-264 md:h-224 lg:h-192 xl:h-148 opacity-100 pointer-events-auto"
    : "h-0 opacity-0 pointer-events-none select-none";

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`px-12 py-4 sm:overflow-hidden ${bgColor} relative`}>
      <div
        className={`${hoverColor} flex cursor-pointer items-center justify-center rounded-md transition-all duration-300`}
        onClick={handleClick}
      >
        <SectionHeader text={text} />
        <div className="text-xl">{arrow}</div>
      </div>
      <div className={`${contentStyles} transition-all duration-300`}>
        {children}
      </div>
    </div>
  );
}

export default LargeCollapsibleWrapper;

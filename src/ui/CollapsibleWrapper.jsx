import { useState } from "react";
import SectionHeader from "./SectionHeader";

function CollapsibleWrapper({ text, children, lightHover = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const arrow = isOpen ? "▼" : "▲";

  const hoverColor = lightHover
    ? "hover:bg-ironshade-500"
    : "hover:bg-ironshade-600";

  const bgColor = lightHover ? "bg-ironshade-600" : "bg-ironshade-700";

  const contentStyles = isOpen
    ? "h-96 opacity-100 pointer-events-auto"
    : "h-0 opacity-0 pointer-events-none select-none";

  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div className={`px-12 py-4 ${bgColor}`}>
      <div
        className={`${hoverColor} flex cursor-pointer items-center justify-center rounded-md transition-all duration-300`}
        onClick={handleClick}
      >
        <SectionHeader text={text} />
        <div className="text-xl">{arrow}</div>
      </div>
      <div className={`${contentStyles} pt-2 transition-all duration-300`}>
        {children}
      </div>
    </div>
  );
}

export default CollapsibleWrapper;

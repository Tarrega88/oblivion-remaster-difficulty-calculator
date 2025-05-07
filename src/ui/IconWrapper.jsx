function IconWrapper({ isSelected, onClick, children }) {
  const style = isSelected
    ? "bg-emeraldshade-700 hover:bg-emeraldshade-600"
    : "bg-ironshade-700 opacity-75";

  return (
    <div
      onClick={onClick}
      className={`${style} flex size-18 cursor-pointer items-center justify-center rounded-sm p-1 transition-all duration-200`}
    >
      {children}
    </div>
  );
}

export default IconWrapper;

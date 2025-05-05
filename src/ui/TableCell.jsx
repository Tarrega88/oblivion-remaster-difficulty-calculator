function TableCell({
  text,
  isOdd,
  isLast,
  isBottom,
  isVanilla,
  isSelected,
  onClick,
}) {
  // const bgColor = {
  //   vanilla: "bg-parchment-500",

  // };

  const bgColor = isVanilla
    ? "bg-parchment-800"
    : isSelected
      ? "bg-emeraldshade-600"
      : isOdd
        ? "bg-ironshade-600"
        : "bg-ironshade-800";
  const borderLast = isLast ? "border-r border-r-ironshade-200" : "";
  const bottomBorder = isBottom ? "border-b border-b-ironshade-200" : "";

  return (
    <div
      className={`${bgColor} ${borderLast} ${bottomBorder} text-ironshade-50 border-t-ironshade-200 border-l-ironshade-200 cursor-pointer border-t border-l py-1 text-center text-xs transition-all duration-200 sm:px-1 sm:text-base`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}

export default TableCell;

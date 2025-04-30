function TableCell({ text, isOdd, isLast }) {
  const bgColor = isOdd ? "bg-ironshade-600" : "bg-ironshade-800";
  const borderLast = isLast ? "border-r border-r-ironshade-200" : "";

  return (
    <div
      className={`${bgColor} ${borderLast} text-ironshade-50 border-t-ironshade-200 border-l-ironshade-200 border-t border-l px-1 py-1 text-center`}
    >
      {text}
    </div>
  );
}

export default TableCell;

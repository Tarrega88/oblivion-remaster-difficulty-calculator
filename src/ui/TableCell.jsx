function TableCell({ text, isOdd }) {
  const bgColor = isOdd ? "bg-ironshade-600" : "bg-ironshade-800";

  return (
    <div
      className={`${bgColor} text-ironshade-50 px-1 py-1 text-center border-l border-t border-t-ironshade-200 border-l-ironshade-200`}
    >
      {text}
    </div>
  );
}

export default TableCell;

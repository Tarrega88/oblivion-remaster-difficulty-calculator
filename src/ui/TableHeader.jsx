function TableHeader({ data, onClick, isAscending, sortMethod }) {
  const { text, key } = data;
  const isSortKey = sortMethod === key;
  const arrow = isAscending ? "▲" : "▼";
  const arrowColor = isSortKey ? "text-ironshade-50" : "text-transparent";

  return (
    <div
      onClick={() => onClick(key)}
      className="bg-ironshade-800 text-ironshade-50 hover:bg-ironshade-500 sticky top-0 flex cursor-pointer items-center justify-center transition-all duration-200 select-none"
    >
      <div className="flex items-center gap-2 px-1 text-center">
        <div className="py-2 font-medium">{text}</div>
        <div className={`text-sm ${arrowColor}`}>{arrow}</div>
      </div>
    </div>
  );
}

export default TableHeader;

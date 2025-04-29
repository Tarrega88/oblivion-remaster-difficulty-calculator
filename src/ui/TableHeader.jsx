function TableHeader({ data, onClick, isAscending, sortMethod }) {
  const { text, key } = data;
  const isSortKey = sortMethod === key;
  const arrow = isAscending ? "▲" : "▼";

  return (
    <div
      onClick={() => onClick(key)}
      className="bg-ironshade-800 text-ironshade-50 flex items-center justify-center hover:bg-ironshade-500 duration-200 transition-all cursor-pointer select-none sticky top-0"
    >
      <div className="flex justify-center items-center gap-2 px-1">
        <div className="py-2 text-center font-medium">{text}</div>
        {isSortKey && <div className="text-sm">{arrow}</div>}
      </div>
    </div>
  );
}

export default TableHeader;

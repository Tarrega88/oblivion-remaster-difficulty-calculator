function TableHeader({
  data,
  canClick = true,
  onClick,
  isAscending,
  sortMethod = false,
}) {
  const { text, key } = data;
  const isSortKey = sortMethod === key;
  const arrow = isAscending ? "▲" : "▼";
  const arrowColor = isSortKey ? "text-ironshade-50" : "text-transparent";

  function handleClick() {
    if (!canClick) return;
    onClick(key);
  }

  const styles = canClick
    ? "text-ironshade-50 hover:bg-ironshade-500 cursor-pointer"
    : "";

  return (
    <div
      onClick={handleClick}
      className={`${styles} bg-ironshade-800 sticky top-0 flex items-center justify-center text-sm transition-all duration-200 select-none sm:text-base`}
    >
      <div className="flex items-center gap-2 px-1 text-center">
        <div className="py-2 font-medium">{text}</div>
        {isSortKey && <div className={`text-sm ${arrowColor}`}>{arrow}</div>}
      </div>
    </div>
  );
}

export default TableHeader;

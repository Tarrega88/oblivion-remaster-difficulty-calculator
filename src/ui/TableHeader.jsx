function TableHeader({
  data,
  canClick = true,
  onClick,
  isAscending,
  sortMethod = false,
}) {
  const { text, shortText, key } = data;
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
      className={`${styles} bg-ironshade-800 sticky top-0 flex h-12 items-center justify-center text-sm transition-all duration-200 select-none md:text-base`}
    >
      <div className="flex items-center gap-2 px-1 text-center">
        <span className="hidden 2xl:inline">{text}</span>
        <span className="inline 2xl:hidden">{shortText}</span>
        {isSortKey && <div className={`text-sm ${arrowColor}`}>{arrow}</div>}
      </div>
    </div>
  );
}

export default TableHeader;

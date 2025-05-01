function FilterCell({ useLeft = false, useRight = false, min = 0, max = 0 }) {
  let text = "";

  const leftText = useLeft ? `${min}%` : "";
  const middleText = useLeft || useRight ? "<=" : "";
  const rightText = useRight ? `${max}%` : "";

  return (
    <div className="bg-ironshade-800 sticky top-12 flex h-12 items-center justify-center gap-2 text-sm transition-all duration-200 select-none lg:text-base">
      <div>{leftText}</div>
      <div>{middleText}</div>
      <div>{rightText}</div>
    </div>
  );
}

export default FilterCell;

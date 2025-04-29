function TableHeader({ text, onClick }) {
  return (
    <div
      onClick={() => onClick(text)}
      className="bg-ironshade-800 text-ironshade-50 flex items-center justify-center hover:bg-ironshade-500 duration-200 transition-all cursor-pointer select-none"
    >
      <div className="py-2 text-center font-medium">{text}</div>
    </div>
  );
}

export default TableHeader;

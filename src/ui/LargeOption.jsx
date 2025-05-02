function LargeOption({ text = "Button", onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-ironshade-400 hover:bg-emeraldshade-800 size-36 cursor-pointer transition-all duration-200"
    >
      {text}
    </button>
  );
}

export default LargeOption;

function SectionHeader({ text, isToggle = false, onClick }) {
  function handleClick() {
    //Todo 4/29/2025 - might use this to turn these into expandable sections later
    if (!isToggle) return;
    onClick();
  }

  return (
    <div
      onClick={handleClick}
      className="px-4 py-6 text-center text-3xl select-none"
    >
      {text}
    </div>
  );
}

export default SectionHeader;

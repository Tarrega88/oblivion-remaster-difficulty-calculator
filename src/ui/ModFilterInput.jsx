function ModFilterInput({ onChange, value }) {
  function handleChange(e) {
    // const num = Number(e.target.value);
    let num = e.target.value;
    if (isNaN(num) || num < 0) num = 0;
    if (num > 10) num = 10;
    onChange(num);
  }

  return (
    <div className="flex items-center">
      <input
        type="number"
        className="bg-ironshade-400 text-ironshade-50 h-8 w-16 px-1 text-center"
        onChange={handleChange}
        value={value}
      ></input>
    </div>
  );
}

export default ModFilterInput;

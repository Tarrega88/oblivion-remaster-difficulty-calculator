function ModFilterInput({ onChange, value }) {
  function handleChange(e) {
    // const num = Number(e.target.value);
    let num = e.target.value;
    if (isNaN(num) || num < 0) num = 0;
    if (num > 10) num = 10;
    onChange(num);
  }

  return (
    <input
      type="number"
      className="bg-ironshade-400 text-ironshade-50 w-24 px-1"
      onChange={handleChange}
      value={value}
    ></input>
  );
}

export default ModFilterInput;

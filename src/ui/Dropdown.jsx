function Dropdown({ options = [] }) {
  return (
    <select className="bg-ironshade-300">
      {options.map((e, i) => (
        <option key={i}>{e}</option>
      ))}
    </select>
  );
}

export default Dropdown;

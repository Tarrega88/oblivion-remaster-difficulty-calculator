function Dropdown({ options = [] }) {
  return (
    <select>
      {options.map((e, i) => (
        <option key={i}>{e}</option>
      ))}
    </select>
  );
}

export default Dropdown;

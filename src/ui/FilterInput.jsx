import { useDispatch, useSelector } from "react-redux";
import { setFilterValue } from "../redux/filterSlice";

function FilterInput({ isOn, type }) {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const backgroundColor = isOn
    ? "bg-stonegray-600 hover:bg-stonegray-500"
    : "bg-stonegray-700 hover-bg-stonegray-600";

  function handleInput(e) {
    const num = Number(e.target.value);
    if (num < 0 || num > Number.MAX_SAFE_INTEGER) return;
    dispatch(setFilterValue({ type, value: num }));
  }

  return (
    <div className="w-14">
      <input
        className="bg-stonegray-600 w-14 text-center"
        onChange={handleInput}
        value={filter[type]}
      ></input>
    </div>
  );
}

export default FilterInput;

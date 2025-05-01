import { useSelector } from "react-redux";
import FilterCell from "./FilterCell";

function FilterRow() {
  const {
    useMinDealtFilter,
    useMaxDealtFilter,
    useMinTakenFilter,
    useMaxTakenFilter,
    useMinRelativeFilter,
    useMaxRelativeFilter,
    minDealt,
    maxDealt,
    minTaken,
    maxTaken,
    minRelative,
    maxRelative,
  } = useSelector((state) => state.filter);

  return (
    <>
      <FilterCell />
      <FilterCell />
      <FilterCell />
      <FilterCell />
      <FilterCell
        useLeft={useMinTakenFilter}
        useRight={useMaxTakenFilter}
        min={minTaken}
        max={maxTaken}
      />
      <FilterCell
        useLeft={useMinDealtFilter}
        useRight={useMaxDealtFilter}
        min={minDealt}
        max={maxDealt}
      />
      <FilterCell
        useLeft={useMinRelativeFilter}
        useRight={useMaxRelativeFilter}
        min={minRelative}
        max={maxRelative}
      />
    </>
  );
}

export default FilterRow;

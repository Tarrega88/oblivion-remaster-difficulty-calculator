import { useState } from "react";
import TableRow from "./ui/TableRow";
import TableHeader from "./ui/TableHeader";
import { allDifficulties } from "./helpers/generateAllDifficulties";
import { useSelector } from "react-redux";
import { filterByUserSettings } from "./helpers/filterLogic/filterByUserSettings";
import { sortDifficulties } from "./helpers/sorting/sortDifficulties";

const headers = [
  { text: "Slider Mod Version", key: "sliderModName" },
  { text: "More Damage Mod Version", key: "damageModName" },
  { text: "Difficulty Setting", key: "difficultyName" },
  { text: "Damage Taken", key: "taken" },
  { text: "Damage Dealt", key: "dealt" },
  { text: "Relative Strength", key: "relativeStrength" },
];

function TableDisplay() {
  const filters = useSelector((state) => state.filter);
  const filteredDifficulties = filterByUserSettings(allDifficulties, filters);

  const [sortMethod, setSortMethod] = useState("relativeStrength");
  const [isAscending, setIsAscending] = useState(false);
  const [tableDisplay, setTableDisplay] = useState(
    filteredDifficulties.toSorted(
      (a, b) => b.relativeStrength - a.relativeStrength,
    ),
  );

  function handleSorting(sortKey) {
    const isSameColumn = sortMethod === sortKey;
    const newIsAscending = isSameColumn ? !isAscending : true;

    setIsAscending(newIsAscending);
    setSortMethod(sortKey);
    setTableDisplay(
      sortDifficulties(filteredDifficulties, sortKey, newIsAscending),
    );
  }

  return (
    <div className="bg-ironshade-800 grid grid-cols-6 px-8">
      {headers.map((e, i) => (
        <TableHeader
          data={e}
          key={i}
          onClick={handleSorting}
          isAscending={isAscending}
          sortMethod={sortMethod}
        />
      ))}
      {tableDisplay.map((e, i) => (
        <TableRow data={e} key={i} isOdd={i % 2} />
      ))}
    </div>
  );
}

export default TableDisplay;

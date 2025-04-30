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

  const [sortMethod, setSortMethod] = useState("relativeStrength");
  const [isAscending, setIsAscending] = useState(false);

  function handleSorting(sortKey) {
    const isSameColumn = sortMethod === sortKey;
    setSortMethod(sortKey);
    setIsAscending(isSameColumn ? !isAscending : true);
  }

  const filteredDifficulties = filterByUserSettings(allDifficulties, filters);
  const sortedDisplay = sortDifficulties(
    filteredDifficulties,
    sortMethod,
    isAscending,
  );

  return (
    <div className="bg-ironshade-800 grid grid-cols-6 px-8 pb-16">
      {headers.map((e, i) => (
        <TableHeader
          data={e}
          key={i}
          onClick={handleSorting}
          isAscending={isAscending}
          sortMethod={sortMethod}
        />
      ))}
      {sortedDisplay.map((e, i) => (
        <TableRow
          data={e}
          key={i}
          isOdd={i % 2}
          isBottom={i === sortedDisplay.length - 1}
        />
      ))}
    </div>
  );
}

export default TableDisplay;

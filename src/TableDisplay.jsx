import { useState } from "react";
import TableRow from "./ui/TableRow";
import TableHeader from "./ui/TableHeader";
import { useSelector } from "react-redux";
import { filterByUserSettings } from "./helpers/filterLogic/filterByUserSettings";
import { sortDifficulties } from "./helpers/sorting/sortDifficulties";
import SectionHeader from "./ui/SectionHeader";
import { generateAllDifficulties } from "./helpers/generateAllDifficulties";
import FilterRow from "./ui/FilterRow";

const headers = [
  { text: "Slider Mod Version", shortText: "Slider Mod", key: "sliderModName" },
  {
    text: "More Damage Version",
    shortText: "Damage Mod",
    key: "damageModName",
  },
  { text: "Difficulty Setting", shortText: "Setting", key: "difficultyName" },
  { text: "Damage Taken", shortText: "Taken", key: "taken" },
  { text: "Damage Dealt", shortText: "Dealt", key: "dealt" },
  { text: "Relative Strength", shortText: "Strength", key: "relativeStrength" },
];

function TableDisplay() {
  const filters = useSelector((state) => state.filter);
  const sliderMods = useSelector((state) => state.mod.sliderMods);
  const damageMods = useSelector((state) => state.mod.damageMods);

  const allDifficulties = generateAllDifficulties(sliderMods, damageMods);
  const filteredDifficulties = filterByUserSettings(allDifficulties, filters);

  const [sortMethod, setSortMethod] = useState("relativeStrength");
  const [isAscending, setIsAscending] = useState(false);

  function handleSorting(sortKey) {
    const isSameColumn = sortMethod === sortKey;
    setSortMethod(sortKey);
    setIsAscending(isSameColumn ? !isAscending : true);
  }

  const sortedDisplay = sortDifficulties(
    filteredDifficulties,
    sortMethod,
    isAscending,
  );

  return (
    <div>
      <SectionHeader text="Difficulty Table" />

      <div>
        <div className="bg-ironshade-800 grid min-w-[800px] grid-cols-[5%_20%_20%_15%_13%_12%_15%] px-8 pb-16">
          <TableHeader data={{ text: "" }} canClick={false} />
          {headers.map((e, i) => (
            <TableHeader
              data={e}
              key={i}
              onClick={handleSorting}
              isAscending={isAscending}
              sortMethod={sortMethod}
            />
          ))}
          <FilterRow />
          {sortedDisplay.map((e, i) => (
            <TableRow
              data={e}
              key={e.sliderModName + e.damageModName + e.difficultyName}
              isOdd={i % 2}
              isBottom={i === sortedDisplay.length - 1}
              i={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TableDisplay;

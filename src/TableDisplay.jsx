import { useState } from "react";
import TableRow from "./ui/TableRow";
import TableHeader from "./ui/TableHeader";
import { useSelector } from "react-redux";
import { filterByUserSettings } from "./helpers/filterLogic/filterByUserSettings";
import { sortDifficulties } from "./helpers/sorting/sortDifficulties";
import SectionHeader from "./ui/SectionHeader";
import { generateAllDifficulties } from "./helpers/generateAllDifficulties";

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

  // return (
  //   <div>
  //     <SectionHeader text="Difficulty Table" />
  //     <div className="bg-ironshade-800 grid grid-cols-[1fr_4fr_4fr_4fr_3fr_3fr_3fr] px-8 pb-16">
  //       <TableHeader data={{ text: "Row" }} canClick={false} />
  //       {headers.map((e, i) => (
  //         <TableHeader
  //           data={e}
  //           key={i}
  //           onClick={handleSorting}
  //           isAscending={isAscending}
  //           sortMethod={sortMethod}
  //         />
  //       ))}
  //       {sortedDisplay.map((e, i) => (
  //         <TableRow
  //           data={e}
  //           key={i}
  //           isOdd={i % 2}
  //           isBottom={i === sortedDisplay.length - 1}
  //           i={i}
  //         />
  //       ))}
  //     </div>
  //   </div>
  // );
  return (
    <div>
      <SectionHeader text="Difficulty Table" />

      <div className="overflow-x-auto">
        <div className="bg-ironshade-800 grid min-w-[800px] grid-cols-[1fr_4fr_4fr_4fr_3fr_3fr_3fr] px-8 pb-16">
          <TableHeader data={{ text: "Row" }} canClick={false} />
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
              i={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TableDisplay;

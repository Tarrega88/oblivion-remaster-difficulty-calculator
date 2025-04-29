import { useState } from "react";
import TableRow from "./ui/TableRow";
import TableHeader from "./ui/TableHeader";
import { allDifficulties } from "./helpers/generateAllDifficulties";
import { decimalToPercentNum } from "./helpers/conversions";

/*
sliderModName
*/

const headers = [
  { text: "Slider Mod Version", key: "sliderModName" },
  { text: "More Damage Mod Version", key: "damageModName" },
  { text: "Difficulty Setting", key: "difficultyName" },
  { text: "Damage Taken", key: "taken" },
  { text: "Damage Dealt", key: "dealt" },
  { text: "Relative Strength", key: "relativeStrength" },
];

function TableDisplay() {
  const [useMinDealtFilter, setUseMinDealtFilter] = useState(false);
  const [useMaxDealtFilter, setUseMaxDealtFilter] = useState(false);
  const [useMinTakenFilter, setUseMinTakenFilter] = useState(false);
  const [useMaxTakenFilter, setUseMaxTakenFilter] = useState(false);
  const [useMinRelativeFilter, setUseMinRelativeFilter] = useState(false);
  const [useMaxRelativeFilter, setUseManRelativeFilter] = useState(false);

  const [minDealt, setMinDealt] = useState(75);
  const [maxDealt, setMaxDealt] = useState(300);
  const [minTaken, setMinTaken] = useState(80);
  const [maxTaken, setMaxTaken] = useState(500);
  const [minRelative, setMinRelative] = useState(16);
  const [maxRelative, setMaxRelative] = useState(156);

  const filteredDifficulties = allDifficulties.filter((e) => {
    if (useMinDealtFilter && decimalToPercentNum(e.dealt) < minDealt)
      return false;
    if (useMaxDealtFilter && decimalToPercentNum(e.dealt) > maxDealt)
      return false;
    if (useMinTakenFilter && decimalToPercentNum(e.taken) < minTaken)
      return false;
    if (useMaxTakenFilter && decimalToPercentNum(e.taken) > maxTaken)
      return false;
    if (
      useMinRelativeFilter &&
      decimalToPercentNum(e.relativeStrength) < minRelative
    )
      return false;
    if (
      useMaxRelativeFilter &&
      decimalToPercentNum(e.relativeStrength) > maxRelative
    )
      return false;
    return true;
  });

  const [sortMethod, setSortMethod] = useState("relativeStrength");
  const [isAscending, setIsAscending] = useState(false);
  const [sorted, setSorted] = useState(
    filteredDifficulties.toSorted(
      (a, b) => b.relativeStrength - a.relativeStrength
    )
  );

  function handleSorting(sortKey) {
    const isNumeric = ["taken", "dealt", "relativeStrength"].includes(sortKey);

    const isSameColumn = sortMethod === sortKey;
    const newIsAscending = isSameColumn ? !isAscending : true;

    setIsAscending(newIsAscending);
    setSortMethod(sortKey);

    setSorted(() =>
      filteredDifficulties.toSorted((a, b) => {
        if (isNumeric) {
          return newIsAscending
            ? a[sortKey] - b[sortKey]
            : b[sortKey] - a[sortKey];
        } else {
          return newIsAscending
            ? a[sortKey].localeCompare(b[sortKey])
            : b[sortKey].localeCompare(a[sortKey]);
        }
      })
    );
  }

  return (
    <div className="grid grid-cols-6 px-8 bg-ironshade-800">
      {headers.map((e, i) => (
        <TableHeader
          data={e}
          key={i}
          onClick={handleSorting}
          isAscending={isAscending}
          sortMethod={sortMethod}
        />
      ))}
      {sorted.map((e, i) => (
        <TableRow data={e} key={i} isOdd={i % 2} />
      ))}
    </div>
  );
}

export default TableDisplay;

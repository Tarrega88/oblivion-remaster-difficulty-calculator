import { useState } from "react";
import TableRow from "./ui/TableRow";
import TableHeader from "./ui/TableHeader";
import { allDifficulties } from "./helpers/generateAllDifficulties";

/*
sliderModName
*/

const headers = {
  sliderMod: "Slider Mod Version",
  damageMod: "More Damage Mod Version",
  difficulty: "Difficulty Setting",
  taken: "Damage Taken",
  dealt: "Damage Dealt",
  relativeStrength: "Relative Strength",
};

function TableDisplay() {
  //TODO: not currently using sortMethod
  const [sortMethod, setSortMethod] = useState({
    sortBy: "",
    ascending: false,
  });

  const [sortedDifficulties, setSortedDifficulties] = useState(allDifficulties);

  function sortToSelection(selection) {
    setSortMethod((prev) => {
      const ascending = prev.sortBy === selection ? !prev.ascending : true;

      const sorted = [...sortedDifficulties].sort((a, b) => {
        switch (selection) {
          case headers.taken:
            return ascending ? a.taken - b.taken : b.taken - a.taken;
          case headers.dealt:
            return ascending ? a.dealt - b.dealt : b.dealt - a.dealt;
          case headers.relativeStrength:
            return ascending
              ? a.relativeStrength - b.relativeStrength
              : b.relativeStrength - a.relativeStrength;
          case headers.sliderMod:
            return ascending
              ? a.sliderModName.localeCompare(b.sliderModName)
              : b.sliderModName.localeCompare(a.sliderModName);
          case headers.damageMod:
            return ascending
              ? a.damageModName.localeCompare(b.damageModName)
              : b.damageModName.localeCompare(a.damageModName);
          case headers.difficulty:
            return ascending
              ? a.difficultyName.localeCompare(b.difficultyName)
              : b.difficultyName.localeCompare(a.difficultyName);
          default:
            return 0;
        }
      });

      setSortedDifficulties(sorted);
      return { sortBy: selection, ascending };
    });
  }

  return (
    <div className="grid grid-cols-6">
      {Object.values(headers).map((e, i) => (
        <TableHeader text={e} key={i} onClick={sortToSelection} />
      ))}
      {sortedDifficulties.map((e, i) => (
        <TableRow data={e} key={i} isOdd={i % 2} />
      ))}
      {/* {difficulties.map((e) => e.sliderModName)} */}
    </div>
  );
}

export default TableDisplay;

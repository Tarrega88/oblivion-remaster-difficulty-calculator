import { decimalToPercentString } from "../helpers/conversions";
import TableCell from "./TableCell";

function TableRow({ data, isOdd, isBottom, i }) {
  const {
    sliderModName,
    damageModName,
    difficultyName,
    taken,
    dealt,
    relativeStrength,
  } = data;

  const takenPercent = decimalToPercentString(taken);
  const dealtPercent = decimalToPercentString(dealt);
  const relativeStrengthPercent = decimalToPercentString(relativeStrength);

  const isVanillaSlider = sliderModName === "Vanilla";
  const isVanillaDamage = damageModName === "Vanilla";
  const isVanilla = isVanillaSlider && isVanillaDamage;

  const modText = isVanilla
    ? "If you play without mods, "
    : isVanillaSlider
      ? `If you play without the Difficulty Slider Fixed mod, with the ${damageModName} version of More Damage, `
      : isVanillaDamage
        ? `If you use the ${sliderModName} version of Difficulty Slider Fixed and you don't use the More Damage mod, `
        : `If you use the ${sliderModName} version of Difficulty Slider Fixed and the ${damageModName} version of the More Damage mod, `;

  const descriptionText = `${modText}you will take ${takenPercent} damage, deal ${dealtPercent} damage, and be ${relativeStrengthPercent} as strong as the enemies.`;

  return (
    <>
      <TableCell
        text={i + 1}
        isOdd={isOdd}
        isBottom={isBottom}
        isVanilla={isVanilla}
      />
      <TableCell
        text={sliderModName}
        isOdd={isOdd}
        isBottom={isBottom}
        isVanilla={isVanilla}
      />
      <TableCell
        text={damageModName}
        isOdd={isOdd}
        isBottom={isBottom}
        isVanilla={isVanilla}
      />
      <TableCell
        text={difficultyName}
        isOdd={isOdd}
        isBottom={isBottom}
        isVanilla={isVanilla}
      />
      <TableCell
        text={takenPercent}
        isOdd={isOdd}
        isBottom={isBottom}
        isVanilla={isVanilla}
      />
      <TableCell
        text={dealtPercent}
        isOdd={isOdd}
        isBottom={isBottom}
        isVanilla={isVanilla}
      />
      <TableCell
        text={relativeStrengthPercent}
        isOdd={isOdd}
        isLast={true}
        isBottom={isBottom}
        isVanilla={isVanilla}
      />
    </>
  );
}

export default TableRow;

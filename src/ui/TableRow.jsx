import { decimalToPercentString } from "../helpers/conversions";
import TableCell from "./TableCell";

function TableRow({ data, isOdd, isBottom }) {
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

  const isVanilla = sliderModName === "Vanilla" && damageModName === "Vanilla";

  return (
    <>
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

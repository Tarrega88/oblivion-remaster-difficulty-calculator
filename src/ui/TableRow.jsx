import { decimalToPercentString } from "../helpers/conversions";
import TableCell from "./TableCell";

function TableRow({ data, isOdd }) {
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

  return (
    <>
      <TableCell text={sliderModName} isOdd={isOdd} />
      <TableCell text={damageModName} isOdd={isOdd} />
      <TableCell text={difficultyName} isOdd={isOdd} />
      <TableCell text={takenPercent} isOdd={isOdd} />
      <TableCell text={dealtPercent} isOdd={isOdd} />
      <TableCell text={relativeStrengthPercent} isOdd={isOdd} />
    </>
  );
}

export default TableRow;

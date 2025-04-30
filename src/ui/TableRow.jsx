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

  return (
    <>
      <TableCell text={sliderModName} isOdd={isOdd} isBottom={isBottom} />
      <TableCell text={damageModName} isOdd={isOdd} isBottom={isBottom} />
      <TableCell text={difficultyName} isOdd={isOdd} isBottom={isBottom} />
      <TableCell text={takenPercent} isOdd={isOdd} isBottom={isBottom} />
      <TableCell text={dealtPercent} isOdd={isOdd} isBottom={isBottom} />
      <TableCell
        text={relativeStrengthPercent}
        isOdd={isOdd}
        isLast={true}
        isBottom={isBottom}
      />
    </>
  );
}

export default TableRow;

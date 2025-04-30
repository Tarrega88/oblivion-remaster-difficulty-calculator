import { decimalToPercentNum } from "../conversions";

export function filterByUserSettings(arr, filters) {
    const {
        useMinDealtFilter,
        useMaxDealtFilter,
        useMinTakenFilter,
        useMaxTakenFilter,
        useMinRelativeFilter,
        useMaxRelativeFilter,
        minDealt,
        maxDealt,
        minTaken,
        maxTaken,
        minRelative,
        maxRelative,
    } = filters;
    return arr.filter((e) => {
        const isVanilla = e.sliderModName === "Vanilla" && e.damageModName === "Vanilla";
        if (isVanilla) return true;
        if (useMinDealtFilter && decimalToPercentNum(e.dealt) < minDealt) return false;
        if (useMaxDealtFilter && decimalToPercentNum(e.dealt) > maxDealt) return false;
        if (useMinTakenFilter && decimalToPercentNum(e.taken) < minTaken) return false;
        if (useMaxTakenFilter && decimalToPercentNum(e.taken) > maxTaken) return false;
        if (useMinRelativeFilter && decimalToPercentNum(e.relativeStrength) < minRelative) return false;
        if (useMaxRelativeFilter && decimalToPercentNum(e.relativeStrength) > maxRelative) return false;
        return true;
    });
}
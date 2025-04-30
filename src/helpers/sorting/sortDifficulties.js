export function sortDifficulties(arr, sortKey, isAscending) {
    const difficultyOrder = {
        Novice: 0,
        Apprentice: 1,
        Adept: 2,
        Expert: 3,
        Master: 4,
    };

    const isNumeric = ["taken", "dealt", "relativeStrength"].includes(sortKey);

    return [...arr].sort((a, b) => {
        if (isNumeric) {
            return isAscending ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey];
        } else if (sortKey === "difficultyName") {
            const aRank = difficultyOrder[a[sortKey]];
            const bRank = difficultyOrder[b[sortKey]];
            return isAscending ? aRank - bRank : bRank - aRank;
        } else {
            return isAscending
                ? a[sortKey].localeCompare(b[sortKey])
                : b[sortKey].localeCompare(a[sortKey]);
        }
    });
}
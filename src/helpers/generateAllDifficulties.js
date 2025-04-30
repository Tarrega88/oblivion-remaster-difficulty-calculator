import { to2Decimals, to3Decimals } from "./conversions";

const difficultyNames = ["Novice", "Apprentice", "Adept", "Expert", "Master"];
const adeptDealt = 1;
const adeptTaken = 1;

export function generateAllDifficulties(sliderMods, damageMods) {
    const allDifficulties = [];

    for (const slider of sliderMods.filter(mod => mod.isShown)) {
        const mult = slider.value;
        const sliderModName = slider.version;

        const noviceDealt = 1 + 2 * mult;
        const noviceTaken = to3Decimals(1 / noviceDealt);
        const apprenticeDealt = noviceDealt - mult;
        const apprenticeTaken = to3Decimals(1 / apprenticeDealt);
        const expertDealt = apprenticeTaken;
        const expertTaken = apprenticeDealt;
        const masterDealt = noviceTaken;
        const masterTaken = noviceDealt;

        const baseValues = [
            [noviceTaken, noviceDealt],
            [apprenticeTaken, apprenticeDealt],
            [adeptTaken, adeptDealt],
            [expertTaken, expertDealt],
            [masterTaken, masterDealt]
        ];

        const difficultiesBeforeDamageMod = difficultyNames.map((difficultyName, i) => {
            const [taken, dealt] = baseValues[i];
            return {
                sliderModName,
                damageModName: "Vanilla",
                difficultyName,
                taken,
                dealt,
                relativeStrength: to2Decimals(dealt / taken)
            };
        });

        allDifficulties.push(...difficultiesBeforeDamageMod);

        for (const damage of damageMods.filter(mod => mod.isShown || mod.version === "Vanilla" && sliderModName === "Vanilla")) {
            const damageModName = damage.version;
            const multiplier = damage.value;

            for (const base of difficultiesBeforeDamageMod) {
                allDifficulties.push({
                    ...base,
                    damageModName,
                    taken: to2Decimals(base.taken * multiplier),
                    dealt: to2Decimals(base.dealt * multiplier),
                    relativeStrength: to2Decimals((base.dealt * multiplier) / (base.taken * multiplier)) // cancels out, but safe for later logic
                });
            }
        }
    }

    return allDifficulties;
}


// import { to2Decimals, to3Decimals } from "./conversions";

// const adeptDealt = 1;
// const adeptTaken = 1;

// const difficultyNames = ["Novice", "Apprentice", "Adept", "Expert", "Master"];
// const damageMult = [1.5, 2, 3]; //The "More Damage" mod options
// const sliderMult = [2.5, 0.25, 0.5, 0.75, 1]; //The "Difficulty Slider Fixed" mod options. Starts with vanilla at index 0. Calculated by the difference between adept and expert on Damage Taken.
// //Alternatively, can calculate by doing this:  (Master Damage Taken -1) / 2;
// //Master Damage Taken is also just the name of the Slider Difficulty mod, so it's easy to track.

// const allDifficulties = [];

// for (const mult of sliderMult) {
//     const noviceDealt = 1 + 2 * mult;
//     const noviceTaken = to3Decimals(1 / noviceDealt);
//     const apprenticeDealt = noviceDealt - mult;
//     const apprenticeTaken = to3Decimals(1 / apprenticeDealt);
//     const expertDealt = apprenticeTaken;
//     const expertTaken = apprenticeDealt;
//     const masterDealt = noviceTaken;
//     const masterTaken = noviceDealt;

//     const sliderModName = noviceDealt === 6 ? "Vanilla" : `x${noviceDealt}`;
//     const baseValues = [
//         [noviceTaken, noviceDealt],
//         [apprenticeTaken, apprenticeDealt],
//         [adeptTaken, adeptDealt],
//         [expertTaken, expertDealt],
//         [masterTaken, masterDealt]
//     ];

//     const difficultiesBeforeDamageMod = difficultyNames.map((difficultyName, i) => {
//         const [taken, dealt] = baseValues[i];
//         return {
//             sliderModName,
//             damageModName: "Vanilla",
//             difficultyName,
//             taken,
//             dealt,
//             relativeStrength: to2Decimals(dealt / taken)
//         };
//     });

//     allDifficulties.push(...difficultiesBeforeDamageMod);

//     for (const damageMultValue of damageMult) {
//         const damageModName = `x${damageMultValue}`;
//         for (const base of difficultiesBeforeDamageMod) {
//             allDifficulties.push({
//                 ...base,
//                 damageModName,
//                 taken: to2Decimals(base.taken * damageMultValue),
//                 dealt: to2Decimals(base.dealt * damageMultValue),
//                 relativeStrength: to2Decimals(base.dealt / base.taken) // same as original, doesn't change with multiplier
//             });
//         }
//     }
// }

// export { allDifficulties };
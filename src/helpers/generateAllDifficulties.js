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
        for (const damage of damageMods.filter(mod => mod.isShown)) {
            const damageModName = damage.version;
            const multiplier = damage.value;

            for (const base of difficultiesBeforeDamageMod) {
                allDifficulties.push({
                    ...base,
                    damageModName,
                    taken: to2Decimals(base.taken * multiplier),
                    dealt: to2Decimals(base.dealt * multiplier),
                    relativeStrength: to2Decimals((base.dealt * multiplier) / (base.taken * multiplier))
                });
            }
        }
    }

    return allDifficulties;
}
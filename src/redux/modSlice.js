import { createSlice } from "@reduxjs/toolkit";

const sliderMods = [
    { version: "Vanilla", value: 2.5, multiple: 6, isShown: true },
    { version: "x1.5", value: 0.25, multiple: 1.5, isShown: true },
    { version: "x2.0", value: 0.5, multiple: 2, isShown: true },
    { version: "x2.5", value: 0.75, multiple: 2.5, isShown: true },
    { version: "x3.0", value: 1.0, multiple: 3, isShown: true },
];

const damageMods = [
    { version: "x1.5", value: 1.5, isShown: true },
    { version: "x2.0", value: 2.0, isShown: true },
    { version: "x3.0", value: 3.0, isShown: true },
];

const initialState = {
    // sliderMult: [2.5, 0.25, 0.5, 0.75, 1],
    // damageMult: [1.5, 2, 3],
    sliderMods,
    damageMods,
};

const modSlice = createSlice({
    name: "mod",
    initialState,
    reducers: {
        setSliderModShown(state, action) {
            const version = action.payload;
            const mod = state.sliderMods.find((e) => e.version === version);
            if (mod) mod.isShown = !mod.isShown;
        },
        setDamageModShown(state, action) {
            const version = action.payload;
            const mod = state.damageMods.find((e) => e.version === version);
            if (mod) mod.isShown = !mod.isShown;
        },
        toggleAllSlider(state) {
            const toggleValue = state.sliderMods.every(e => e.isShown);
            for (const mod of state.sliderMods) {
                mod.isShown = !toggleValue;
            }
        },
        toggleAllDamage(state) {
            const toggleValue = state.damageMods.every(e => e.isShown);
            for (const mod of state.damageMods) {
                mod.isShown = !toggleValue;
            }
        },
    },
});

export const { setSliderModShown, setDamageModShown, toggleAllSlider, toggleAllDamage } = modSlice.actions;
export default modSlice.reducer;
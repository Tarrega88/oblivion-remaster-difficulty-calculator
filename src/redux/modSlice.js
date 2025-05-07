import { createSlice } from "@reduxjs/toolkit";

const sliderMods = [
    { version: "Vanilla", value: 2.5, multiple: 6, isShown: true },
    { version: "x1.5", value: 0.25, multiple: 1.5, isShown: true },
    { version: "x2.0", value: 0.5, multiple: 2, isShown: true },
    { version: "x2.5", value: 0.75, multiple: 2.5, isShown: true },
    { version: "x3.0", value: 1.0, multiple: 3, isShown: true },
    { version: "x3.5 (Custom)", value: 1.25, multiple: 3.5, isShown: false }
];

const damageMods = [
    { version: "Vanilla", value: 1.0, isShown: true },
    { version: "x1.5", value: 1.5, isShown: true },
    { version: "x2.0", value: 2.0, isShown: true },
    { version: "x3.0", value: 3.0, isShown: true },
    { version: "x1.25 (Custom)", value: 1.25, isShown: false }
];

const initialState = {
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
            const sliced = state.sliderMods.slice(0, -1);
            const toggleValue = sliced.every(e => e.isShown);
            for (const mod of sliced) {
                mod.isShown = !toggleValue;
            }
        },
        toggleAllDamage(state) {
            const sliced = state.damageMods.slice(0, -1);
            const toggleValue = sliced.every(e => e.isShown);
            for (const mod of sliced) {
                mod.isShown = !toggleValue;
            }
        },
        setCustomSlider(state, action) {
            const mod = state.sliderMods[state.sliderMods.length - 1];
            const multiple = action.payload;
            mod.value = (multiple - 1) / 2;
            mod.multiple = multiple;
            mod.version = `x${multiple} (Custom)`;
        },
        setCustomDamage(state, action) {
            const mod = state.damageMods[state.damageMods.length - 1];
            const multiple = action.payload;
            mod.value = multiple;
            mod.version = `x${multiple} (Custom)`;
        }
    },
});

export const { setSliderModShown, setDamageModShown, toggleAllSlider, toggleAllDamage, setCustomSlider, setCustomDamage } = modSlice.actions;
export default modSlice.reducer;
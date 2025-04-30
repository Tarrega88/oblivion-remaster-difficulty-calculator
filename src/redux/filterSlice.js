import { createSlice } from "@reduxjs/toolkit";
// import { allDifficulties } from "../helpers/generateAllDifficulties";
const initialState = {
    // difficulties: allDifficulties,
    useMaxDealtFilter: false,
    useMaxDealtFilter: false,
    useMinTakenFilter: false,
    useMaxTakenFilter: false,
    useMinRelativeFilter: false,
    useMaxRelativeFilter: false,

    minDealt: 75,
    maxDealt: 300,
    minTaken: 80,
    maxTaken: 500,
    minRelative: 16,
    maxRelative: 156
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {

        setUseFilter(state, action) {
            const filter = action.payload;
            state[filter] = !state[filter];
        },
        setMinDealt(state, action) {
            state.minDealt = action.payload;
        },
        setMaxDealt(state, action) {
            state.maxDealt = action.payload;
        },
        setMinTaken(state, action) {
            state.minTaken = action.payload;
        },
        setMaxTaken(state, action) {
            state.maxTaken = action.payload;
        },
        setMinRelative(state, action) {
            state.minRelative = action.payload;
        },
        setMaxRelative(state, action) {
            state.maxRelative = action.payload;
        },
    },
});

export const { setUseFilter, setMinDealt, setMaxDealt, setMinTaken, setMinRelative, setMaxRelative } = filterSlice.actions;
export default filterSlice.reducer;
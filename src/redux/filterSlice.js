import { createSlice } from "@reduxjs/toolkit";
// import { allDifficulties } from "../helpers/generateAllDifficulties";
const initialState = {
    // difficulties: allDifficulties,
    useMinDealtFilter: false,
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

        setFilterValue(state, action) {
            const filterType = action.payload.type;
            const value = action.payload.value;
            state[filterType] = value;
        },
        toggleAll(state, action) {
            const allOn = state.useMinDealtFilter &&
                state.useMaxDealtFilter &&
                state.useMinTakenFilter &&
                state.useMaxTakenFilter &&
                state.useMinRelativeFilter &&
                state.useMaxRelativeFilter;

            state.useMinDealtFilter = !allOn;
            state.useMaxDealtFilter = !allOn;
            state.useMinTakenFilter = !allOn;
            state.useMaxTakenFilter = !allOn;
            state.useMinRelativeFilter = !allOn;
            state.useMaxRelativeFilter = !allOn;
        }
    },
});

export const { setUseFilter, setFilterValue, toggleAll } = filterSlice.actions;
export default filterSlice.reducer;
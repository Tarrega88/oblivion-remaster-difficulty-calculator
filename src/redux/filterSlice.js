import { createSlice } from "@reduxjs/toolkit";
const initialState = {
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
        toggleAll(state) {
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
        },
        revertToRecommended(state) {
            state.useMinDealtFilter = true;
            state.useMaxDealtFilter = true;
            state.useMinTakenFilter = true;
            state.useMaxTakenFilter = true;
            state.useMinRelativeFilter = true;
            state.useMaxRelativeFilter = true;

            state.minDealt = 75;
            state.maxDealt = 300;
            state.minTaken = 80;
            state.maxTaken = 500;
            state.minRelative = 16;
            state.maxRelative = 156;
        }
    },
});

export const { setUseFilter, setFilterValue, toggleAll, revertToRecommended } = filterSlice.actions;
export default filterSlice.reducer;
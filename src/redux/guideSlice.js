import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    guideSection: "intro",
    guidePage: 0
};

const guideSlice = createSlice({
    name: "guide",
    initialState,
    reducers: {
        setGuideSection(state, action) {
            state.guideSection = action.payload;
        },
        setGuidePage(state, action) {
            state.guidePage = action.payload;
        }
    },
});

export const { setGuideSection, setGuidePage } = guideSlice.actions;
export default guideSlice.reducer;
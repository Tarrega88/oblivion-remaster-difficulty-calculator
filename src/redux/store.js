import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice";
import modReducer from "./modSlice";
import { loadState, saveState } from "../helpers/localStorage";

const preloadedFilterState = loadState("filter");
const preloadedModState = loadState("mod");

const store = configureStore({
    reducer: {
        filter: filterReducer,
        mod: modReducer,
    },
    preloadedState: {
        filter: preloadedFilterState,
        mod: preloadedModState,
    },
});

store.subscribe(() => {
    saveState("filter", store.getState().filter);
    saveState("mod", store.getState().mod);
});

export default store;


// import { configureStore } from "@reduxjs/toolkit";
// import filterReducer from "./filterSlice";
// import modReducer from "./modSlice";

// const store = configureStore({
//     reducer: { filter: filterReducer, mod: modReducer }
// });

// export default store;
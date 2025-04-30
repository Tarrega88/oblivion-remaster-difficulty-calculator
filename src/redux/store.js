import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice";
import modReducer from "./modSlice";

const store = configureStore({
    reducer: { filter: filterReducer, mod: modReducer }
});

export default store;
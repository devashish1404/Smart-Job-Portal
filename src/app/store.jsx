import { configureStore } from "@reduxjs/toolkit";
import candidateSlice from "../features/candidate/candidateSlice";
import candidateFilterSlice from "../features/filter/candidateFilterSlice";
import filterSlice from "../features/filter/filterSlice";
import jobSlice from "../features/job/jobSlice";

const store = configureStore({
    reducer: {
        candidateFilter: candidateFilterSlice,
        candidate: candidateSlice,
        job : jobSlice,
        filter: filterSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
export default store;
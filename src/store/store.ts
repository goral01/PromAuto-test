import { configureStore } from "@reduxjs/toolkit";
import FilterSlice from "./filterSlice";

export const store = configureStore({
    reducer: {
        FilterSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

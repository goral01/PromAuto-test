import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types/User.interface";

interface FilterState {
    filter: string;
    selectedNames: string[];
    users: User[];
}

const initialState: FilterState = {
    filter: "",
    selectedNames: [],
    users: [],
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setFilter(state, action: PayloadAction<string>) {
            state.filter = action.payload;
        },
        setSelectedNames(state, action: PayloadAction<string>) {
            const index = state.selectedNames.indexOf(action.payload);
            if (index === -1) {
                state.selectedNames.push(action.payload);
            } else if (!state.selectedNames.includes(state.filter)) {
                state.selectedNames.splice(index, 1);
            }
        },
        setUsers(state, action: PayloadAction<User[]>) {
            state.users = action.payload;
        },
        setNamesCleared(state) {
            state.selectedNames = [];
        },
    },
});

export const { setFilter, setSelectedNames, setUsers, setNamesCleared } = filterSlice.actions;

export default filterSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface goalState {
    goal: number;
}

const initialState: goalState = {
    goal : 0,
}

const goalSlice = createSlice({
    name: "goal",
    initialState,
    reducers: {
        setGoal: (state, action: PayloadAction<number>) => {
            state.goal = action.payload;
        }
    },
});

export const {setGoal} = goalSlice.actions;

export const goalReducer = goalSlice.reducer;

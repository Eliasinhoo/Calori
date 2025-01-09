import { configureStore } from "@reduxjs/toolkit";
import { foodReducer } from "./slices/foodSlice";
import { addFood, removeFood, editFood, setFoodList } from "./slices/foodSlice";
import { saveFoodList, saveGoal } from "../utils/asyncStorageHelpers";
import { setGoal } from "./slices/goalSlice";
import { goalReducer } from "./slices/goalSlice";
import { Food } from "./slices/foodSlice";


export const store = configureStore({
    reducer: {
        food: foodReducer,
        goal: goalReducer,
    },
});

let prevFoodlist: Food[] =  [];
let prevGoal = 0;


store.subscribe(() => {

    
    const state = store.getState();

    if (state.food.foodList !== prevFoodlist){
        saveFoodList(state.food.foodList);
        prevFoodlist = state.food.foodList;
    }
    
    if (state.goal.goal !== prevGoal){
        saveGoal(state.goal.goal);
        prevGoal = state.goal.goal;
    }
})


export {addFood, removeFood, editFood, setFoodList};
export {setGoal}

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
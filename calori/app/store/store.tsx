import { configureStore } from "@reduxjs/toolkit";
import { foodReducer } from "./slices/foodSlice";
import { addFood, removeFood, editFood, setFoodList } from "./slices/foodSlice";
import { saveFoodList } from "../utils/asyncStorageHelpers";
import { setGoal } from "./slices/goalSlice";
import { goalReducer } from "./slices/goalSlice";


export const store = configureStore({
    reducer: {
        food: foodReducer,
        goal: goalReducer,
    },
});


store.subscribe(() => {
    const state = store.getState();
    saveFoodList(state.food.foodList);
})


export {addFood, removeFood, editFood, setFoodList};
export {setGoal}

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
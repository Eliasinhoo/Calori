import { configureStore } from "@reduxjs/toolkit";
import { foodReducer } from "./slices/foodSlice";
import { addFood, removeFood, editFood } from "./slices/foodSlice";



export const store = configureStore({
    reducer: {
        food: foodReducer
    },
});

export {addFood, removeFood, editFood};

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
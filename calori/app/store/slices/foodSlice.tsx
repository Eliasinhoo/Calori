import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a single food item type
export type Food = {
  id: number; // Unique identifier
  name: string;
  calories: number;
};

// Define the initial state type
interface FoodState {
  foodList: Food[];
  isHydrated: boolean;
}

// Initial state
const initialState: FoodState = {
  foodList: [
    // { id: 1, name: "Banana", calories: 100 },
    // { id: 2, name: "Apple", calories: 95 },
    // { id: 3, name: "Orange", calories: 62 },
  ],
  isHydrated: false,
};

// Create the food slice
const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    // Add a new food item
    addFood: (state, action: PayloadAction<{ name: string; calories: number }>) => {
      const newFood: Food = {
        id: state.foodList.length ? state.foodList[state.foodList.length - 1].id + 1 : 1,
        name: action.payload.name,
        calories: action.payload.calories,
      };
      state.foodList.push(newFood);
    },

    // Edit an existing food item
    editFood: (state, action: PayloadAction<{ id: number; name: string; calories: number }>) => {
      const index = state.foodList.findIndex((food) => food.id === action.payload.id);
      if (index !== -1) {
        state.foodList[index] = {
          id: action.payload.id,
          name: action.payload.name,
          calories: action.payload.calories,
        };
      }
    },

    // Remove a food item
    removeFood: (state, action: PayloadAction<number>) => {
      state.foodList = state.foodList.filter((food) => food.id !== action.payload);
    },
    setFoodList: (state, action: PayloadAction<Food[]>) => {
      state.foodList = action.payload;
    }
  },
});

// Export actions
export const { addFood, editFood, removeFood, setFoodList } = foodSlice.actions;

// Export reducer
export const foodReducer = foodSlice.reducer;

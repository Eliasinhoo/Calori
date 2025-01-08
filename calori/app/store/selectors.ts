// selectors.ts
import { RootState } from "./store";

// Selector to calculate total calories from foodList
export const selectTotalCalories = (state: RootState): number => {
  return state.food.foodList.reduce((total, food) => total + food.calories, 0);
};
